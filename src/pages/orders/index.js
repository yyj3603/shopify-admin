import React, { Component } from 'react';
import { Card, Form, Badge, Button, Input, Icon, Row, Col, Select } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import moment from 'moment';
import Highlighter from 'react-highlight-words';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './orders.less';
import FenYe from '@/components/FenYe'

/* const FormItem = Form.Item; */
const statusMap = ['pengding', 'paid'];
/* const { Option } = Select; */
/* const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(','); */
const status = ['待处理', '已付款'];

function BuildtypeArray(Arr) {
  const list = Arr.map(item => {
    switch (item.financial_status) {
      case 'pending':
        return status[0];

      case 'paid':
        return status[1];
      default:
        break;
    }
    return item.financial_status;
  });
  var temp = []; //一个新的临时数组
  for (var i = 0; i < list.length; i++) {
    if (temp.indexOf(list[i]) == -1) {
      temp.push(list[i]);
    }
  }
  return temp;
}
@connect(({ orders, loading }) => ({
  orders: orders.orders,
  loading: loading.effects['orders/fetch'] || loading.effects['orders/search'],
  link:orders.link
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
      pageSize: 4,
      total: this.props.orders.length,
    },
    res: [],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orders/fetch',
    });
    dispatch({
      type: 'orders/allpro',
      callback: value => {
        this.setState({
          res: value.data.orders,
        });
      },
    });
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          搜索
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          重置
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleSearchTwo = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      console.log(fieldsValue.financial_status);
      dispatch({
        type: 'orders/search',
        payload: {
          name: fieldsValue.name,
          type: fieldsValue.type,
          vendor: fieldsValue.vendor,
          financial_status: fieldsValue.status,
          namelike: fieldsValue.namelike,
        },
      });
    });
  };
  
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    dispatch({
      type: 'orders/fetch',
      payload: {},
    });
  };

  handleChange = (pagination, filters, sorter, page) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
      params: {
        currentPage: page,
        pageSize: 4,
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


   handlechange = value => {
    const { dispatch } = this.props;
    dispatch({
      type: 'orders/changepage',
      payload: {
        link: value,
      },
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

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    //const statuslist=BuildtypeArray(this.state.res).map((item)=>{console.log(item);return <Option value={item}>{item}</Option>})
    const statuslist = [
      <Option value="pending">待处理</Option>,
      <Option value="paid">已付款</Option>,
    ];

    return (
      <Form onSubmit={this.handleSearchTwo} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={6} sm={8}>
            <Form.Item label="付款状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '120px' }}>
                  {statuslist}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col md={4} sm={8}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
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
        ...this.getColumnSearchProps('created_at'),
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
        dataIndex: 'total_price',
        render: (val, rec) => {
          let sum = 0;
          sum = '$' + rec.total_price;
          return sum;
        },
        key: 'total_price',
        sorter: (a, b) => a.total_price - b.total_price,
        sortOrder: sortedInfo.columnKey === 'total_price' && sortedInfo.order,
        ...this.getColumnSearchProps('total_price'),
      },
    ];
    const { orders, loading ,link} = this.props;
    const { selectedRows } = this.state;
    const { params } = this.state;
    console.log(this.props.orders);
    console.log('-----------');
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
            <div>{this.renderSimpleForm()}</div>
            <Link to="/orders/addorder">
              <Button icon="plus" type="primary">
                新建
              </Button>
            </Link>
            {selectedRows.length > 0 && (
              <span>
                <Button onClick={() => this.handleDel()} style={{ marginLeft: '10px' }}>
                  删除
                </Button>
              </span>
            )}
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleChange}
              rowKey="id"
              pagination={false}
            />
            <FenYe handlechange={this.handlechange} Link={link} /> 
          </Card>
        </PageHeaderWrapper>
      </div>
    );
  }
}

export default Orders;
