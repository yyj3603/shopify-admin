import React, { Component } from 'react';
import { Card, Select, Form, Badge, Button } from 'antd';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const FormItem = Form.Item;
const statusMap = ['pengding', 'paid'];
const { Option } = Select;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');
const status = ['待处理', '已付款'];

@connect(({ orders, loading }) => ({
  orders: orders.orders,
  loading: loading.effects['orders/fetch'],
}))
@Form.create()
class Orders extends Component {
  state = {
    selectedRows: [],
  };

  columns = [
    {
      title: '订单号',
      dataIndex: 'order_number',
    },
    {
      title: '日期',
      dataIndex: 'created_at',
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

      render: (val, rec) => {
        return `$${rec.customer.total_spent}`;
      },
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orders/fetch',
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'orders/fetch',
      payload: params,
    });
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleChange = value => {
    console.log(`selected ${value}`);
    if (value === 'pending') {
      console.log('未处理');
    } else {
      console.log('已付款');
    }
  };

  render() {
    const { orders, loading } = this.props;
    const { selectedRows } = this.state;
    console.log(orders);
    const data = {
      list: orders,
      pagination: {
        current: 1,
        pageSize: 4,
        total: 17,
      },
    };

    const { getFieldDecorator } = this.props.form;

    return (
      /* <Card>
            <div>订单数据</div>
            { orders.map((order, index) => {
            return <div key={index}>订单号:{order.order_number} 商品名称：{order.line_items[0].title}顾客邮箱{order.email} 创建时间：{order.created_at}客户姓名：{order.customer.first_name+order.customer.last_name} 支付状态:{order.financial_status==="pending"?"未付款":"已支付"} 收获地址：{order.customer.default_address.city}{order.customer.default_address.address1}  交易金额：{order.customer.total_spent}$</div>
            }) 
            
            }
          
          </Card> */

      <div>
        <PageHeaderWrapper title="客户">
          <Card>
            <FormItem label="使用状态">
              {getFieldDecorator('financial_status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">待处理</Option>
                  <Option value="1">已付款</Option>
                </Select>
              )}
            </FormItem>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <br />
            <Select defaultValue="all" style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="all">全部</Option>
              <Option value="paid">已付款</Option>
              <Option value="pending">未付款</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} disabled>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} loading>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Card>
          <br />
          <Card>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
              rowKey="id"
            />
          </Card>
        </PageHeaderWrapper>
      </div>
    );
  }
}

export default Orders;
