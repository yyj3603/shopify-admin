import React, { Component } from 'react';
import { Card, Select, Form, Badge, Button } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

/* const FormItem = Form.Item; */
const statusMap = ['pengding', 'paid'];
/* const { Option } = Select; */
/* const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(','); */
const status = ['待处理', '已付款'];

@connect(({ orders, loading }) => ({
  orders: orders.orders,
  loading: loading.effects['orders/fetch'],
}))
@Form.create()
class Orders extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    selectedRows: [],
    params: {
      simple: true,
      current: 1,
      pageSize: 2,
      total: this.props.orders.length,
    },
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orders/fetch',
    });
  }

  handleChange = (pagination, filters, sorter, page) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
      params: {
        currentPage: page,
        pageSize: 2,
        simple: true,
        total: this.props.orders.length,
      },
    });
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleDel() {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;

    if (selectedRows.length === 0) return;
    dispatch({
      type: 'orders/remove',
      payload: {
        id: selectedRows.map(row => row.id),
      },
      callback: () => {
        console.log(selectedRows);
        this.setState({
          selectedRows: [],
        });
      },
    });
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '订单号',
        dataIndex: 'order_number',
        key: 'order_number',

        sorter: (a, b) => a.order_number - b.order_number,
        sortOrder: sortedInfo.columnKey === 'order_number' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '日期',
        dataIndex: 'created_at',
        key: 'created_at',
        sorter: (a, b) => a.created_at - b.created_at,
        sortOrder: sortedInfo.columnKey === 'created_at' && sortedInfo.order,
        render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
      },
      {
        title: '客户',

        render: (val, rec) => {
          return rec.customer.first_name + rec.customer.last_name;
        },
      },
      {
        title: '付款状态',
        dataIndex: 'financial_status',
        filters: [
          {
            text: status[0],
            value: 0,
          },
          {
            text: status[1],
            value: 1,
          },
        ],

        render(val, rec) {
          switch (rec.financial_status) {
            case 'pending':
              return status[0];

            case 'paid':
              return status[1];
            default:
              break;
          }
          return <Badge status={statusMap[val]} text={status[val]} />;
        },
        filteredValue: filteredInfo.financial_status || null,
        onFilter: (value, record) => record.financial_status.includes(value),
        /*  filters: [
            {
                text:status[0],
                value: "pending",
            },
            {
                text:status[1],
                value: "paid",
            },

        ], */
      },
      {
        title: '总计',
        dataIndex: 'total_price',
        render: (val, rec) => {
          let sum = 0;
          sum = '$' + rec.total_price;
          return sum;
        },
        key: 'total_price',
        sorter: (a, b) => a.total_price - b.total_price,
        sortOrder: sortedInfo.columnKey === 'total_price' && sortedInfo.order,
      },
    ];
    const { orders, loading } = this.props;
    const { selectedRows } = this.state;
    const { params } = this.state;
    console.log(orders);
    const data = {
      list: orders,
      pagination: params,
    };

    return (
      /* <Card>
            <div>订单数据</div>
            { orders.map((order, index) => {
            return <div key={index}>订单号:{order.order_number} 商品名称：{order.line_items[0].title}顾客邮箱{order.email} 创建时间：{order.created_at}客户姓名：{order.customer.first_name+order.customer.last_name} 支付状态:{order.financial_status==="pending"?"未付款":"已支付"} 收获地址：{order.customer.default_address.city}{order.customer.default_address.address1}  交易金额：{order.customer.total_spent}$</div>
            }) 
            
            }
          
          </Card> */

      <div>
        <PageHeaderWrapper title="订单">
          <br />
          <Card>
            <Button onClick={() => this.handleDel()}>删除</Button>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleChange}
              rowKey="id"
            />
          </Card>
        </PageHeaderWrapper>
      </div>
    );
  }
}

export default Orders;
