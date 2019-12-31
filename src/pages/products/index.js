import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';


import { getProducts } from '@/services/api';

import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import { Card, Button, InputNumber, Input, Icon, Form, Row, Col, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { router } from 'umi';
import styles from './TableList.less';
import FenYe from '@/components/FenYe';
function BuildvendorArray(Arr) {
  var temp = []; //一个新的临时数组
  if (Arr instanceof Array) {
    const list = Arr.map(item => {
      return item.vendor;
    });
    var temp = []; //一个新的临时数组
    for (var i = 0; i < list.length; i++) {
      if (temp.indexOf(list[i]) == -1) {
        temp.push(list[i]);
      }
    }
    return temp;
  }
  return temp;
}
function BuildtypeArray(Arr) {
  var temp = []; //一个新的临时数组
  if (Arr instanceof Array) {
    const list = Arr.map(item => {
      return item.product_type;
    });
    var temp = []; //一个新的临时数组
    for (var i = 0; i < list.length; i++) {
      if (temp.indexOf(list[i]) == -1) {
        temp.push(list[i]);
      }
    }
    return temp;
  }
  return temp;
}
@connect(({ products, loading, link }) => ({
  products: products.products,
  link: products.link,
  loading:
    loading.effects['products/fetch'] ||
    loading.effects['products/add'] ||
    loading.effects['products/remove'] ||
    loading.effects['products/changepage'] ||
    loading.effects['products/search'],
}))
@Form.create()
class Products extends Component {
  state = {
    selectedRows: [],
    params: {
      simple: true,
      current: 1,
      pageSize: 10,
      total: this.props.products.length,
    },
    expandForm: false,
    res: [],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/fetch',
    });
    dispatch({
      type: 'products/allpro',
      callback: value => {
        this.setState({
          res: value.data.products,
        });
      },
    });
  }

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };


  handlechange = value => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/changepage',
      payload: {
        link: value,
      },
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      dispatch({
        type: 'products/search',
        payload: {
          name: fieldsValue.name,
          type: fieldsValue.type,
          vendor: fieldsValue.vendor,
          namelike: fieldsValue.namelike,
          sort: fieldsValue.sort,
          limit: fieldsValue.limit,
        },
      });
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    dispatch({
      type: 'products/fetch',
      payload: {},
    });
  };

   handleDel() {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;
    if (selectedRows.length === 0) return;
    dispatch({
      type: 'products/remove',
      payload: {
        id: selectedRows.map(row => row.id),
      },
      callback: () => {
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
    const vendorlist = BuildvendorArray(this.state.res).map(item => {
      return (
        <Option value={item} key={item}>
          {item}
        </Option>
      );
    });
    const typelist = BuildtypeArray(this.state.res).map(item => {
      return (
        <Option value={item} key={item}>
          {item}
        </Option>
      );
    });
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={10}>
            <Form.Item label="商品名称">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
          <Col md={8} sm={10}>
            <Form.Item label="商品类型">
              {getFieldDecorator('type')(
                <Select placeholder="请选择" style={{ width: '120px' }}>
                  {typelist}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={10}>
            <Form.Item label="供应商">
              {getFieldDecorator('vendor')(
                <Select placeholder="请选择" style={{ width: '120px' }}>
                  {vendorlist}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={10}>
            <Form.Item label="排序">
              {getFieldDecorator('sort', {
                initialValue: 'updated_at+desc',
              })(
                <Select placeholder="请选择" style={{ width: '150px' }}>
                  <Select.Option value="updated_at+desc" key="updated_at+desc">
                    更新时间降序
                  </Select.Option>
                  <Select.Option value="updated_at+asc" key="updated_at+asc">
                    更新时间升序
                  </Select.Option>
                  <Select.Option value="created_at+desc" key="created_at+desc">
                    创建时间降序
                  </Select.Option>
                  <Select.Option value="created_at+asc" key="created_at+asc">
                    创建时间升序
                  </Select.Option>
                  <Select.Option value="title+desc" key="title+desc">
                    商品名称降序
                  </Select.Option>
                  <Select.Option value="title+asc" key="title+asc">
                    商品名称升序
                  </Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={10}>
            <Form.Item label="排序">
              {getFieldDecorator('limit', {
                initialValue: 10,
              })(
                <Select initialValue="10" style={{ width: '150px' }}>
                  <Select.Option value="10" key="10">
                    10
                  </Select.Option>
                  <Select.Option value="8" key="8">
                    8
                  </Select.Option>
                  <Select.Option value="5" key="5">
                    5
                  </Select.Option>
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
    const columns = [
      {
        title: '商品名称',
        dataIndex: 'title',
        key: 'title',
        width: '70%',
        // render: text => <Link to={`/profile/basic/${text.replace(/\s+/gi, '-')}`}>{text}</Link>,
      },
      {
        title: '库存',
        dataIndex: 'variants[0].inventory_quantity',
        key: 'inventory',
        width: '10%',
        sorter: (a, b) => a.variants[0].inventory_quantity - b.variants[0].inventory_quantity,
        render: (val, rec) => {
          let sum = 0;
          for (let j = 0; j < rec.variants.length; j++) {
            sum += rec.variants[j].inventory_quantity;
          }
          return sum;
        },
      },
      {
        title: '价格',
        dataIndex: 'variants[0].price',
        key: 'price',
        width: '10%',
        sorter: (a, b) => a.variants[0].price - b.variants[0].price,
        render: (val, rec) => {
          let sum = 0;
          sum = `$${rec.variants[0].price}`;
          return sum;
        },
      },
      {
        title: '供应商',
        dataIndex: 'vendor',
        width: '10%',
        key: 'vendor',
      },
    ];
    const { loading } = this.props;
    const { products, link } = this.props;
    const { params } = this.state;
    const { selectedRows } = this.state;
    const data = {
      list: products,
      pagination: params,
    };
    return (
      <PageHeaderWrapper title="商品列表">
        <Card>
          <div className={styles.tableList}>
            <div>{this.renderSimpleForm()}</div>
            <div className={styles.tableListOperator}>
              <Link to="/products/addproduct">
                <Button icon="plus" type="primary">
                  新建
                </Button>
              </Link>
              {selectedRows.length > 0 && (
                <span>
                  <Button onClick={() => this.handleDel()}>删除</Button>
                </span>
              )}
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={columns}
              onSelectRow={this.handleSelectRows}
              //onChange={this.handleStandardTableChange}
              rowKey="id"
              pagination={false}
            />
          </div>
          <FenYe handlechange={this.handlechange} Link={link} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Products;
