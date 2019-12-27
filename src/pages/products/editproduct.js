import React, { Component } from 'react';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Link from 'umi/link';
import { Card, Button, InputNumber, Input, Table, Form, Modal, Icon, Row, Col, Select } from 'antd';
import { router } from 'umi';
import styles from './quantity.less';
import FenYe from '@/components/FenYe';

const FormItem = Form.Item;
const { TextArea } = Input;
const CreateForm = Form.create()(props => {
  const { modalVisible, form, handleAdd, handleModalVisible, selectrec } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(selectrec, fieldsValue);
    });
  };
  let price = 0;
  if (selectrec.variants) {
    if (selectrec.variants.length == 1) {
      price = selectrec.variants[0].price;
    } else if (selectrec.variants.length > 1) {
      price = selectrec.variants[0].price;
    } else {
      price = 0;
    }
  }
  return (
    <Modal
      destroyOnClose
      title="编辑商品"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="商品名称">
        {form.getFieldDecorator('title', {
          rules: [{ required: true, message: '商品名不能为空！', min: 1 }],
          initialValue: selectrec.title,
        })(<Input placeholder="请输入商品名称" allowClear />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
        {form.getFieldDecorator('body_html', {
          rules: [{ required: false }],
          initialValue: selectrec.body_html,
        })(<TextArea rows={10} placeholder="请输入描述" allowClear />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="供应商">
        {form.getFieldDecorator('vendor', {
          rules: [{ required: true, message: '供应商不能为空！', min: 1 }],
          initialValue: selectrec.vendor,
        })(<Input placeholder="请输入供应商名称" allowClear />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="商品类型">
        {form.getFieldDecorator('product_type', {
          rules: [{ required: false }],
          initialValue: selectrec.product_type,
        })(<Input placeholder="请输入商品类型" allowClear />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="tags">
        {form.getFieldDecorator('tags', {
          rules: [{ required: false }],
          initialValue: selectrec.tags,
        })(<Input placeholder="请输入tags(例：Barnes & Noble, John's Fav,)" allowClear />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="价格(单位:$)">
        {form.getFieldDecorator('price', {
          rules: [{ required: true, message: '价格不能为空！' }],
          initialValue: price,
        })(<InputNumber placeholder="请输入价格" min="0.01" step="0.01" allowClear />)}
      </FormItem>
    </Modal>
  );
});
const QuantityForm = Form.create()(props => {
  const { modalVisible, form, handleAdd, handleModalVisible, selectrec } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      console.log(fieldsValue.key);
      handleAdd(selectrec, fieldsValue);
    });
  };
  let quantity = 0;
  if (selectrec.variants) {
    if (selectrec.variants.length == 1) {
      quantity = selectrec.variants[0].inventory_quantity;
    } else if (selectrec.variants.length > 1) {
      quantity = selectrec.variants[0].inventory_quantity;
    } else {
      quantity = 0;
    }
  }
  return (
    <Modal
      destroyOnClose
      title="修改商品库存"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="原库存：">
        <label>{quantity}</label>
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="变化量">
        <InputNumber
          placeholder="请输入变化量"
          step="1"
          allowClear
          onBlur={e => {
            form.setFieldsValue({
              key: Number(quantity) + Number(e.target.value),
            });
          }}
        />
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="更新后的库存:">
        {form.getFieldDecorator('key', {
          rules: [{ required: false, message: '价格不能为空！' }],
          initialValue: quantity,
        })(<InputNumber placeholder="请输入库存" step="1" min="0" allowClear />)}
      </FormItem>
    </Modal>
  );
});
function BuildvendorArray(Arr) {
  var temp = []; //一个新的临时数组
  if (Arr instanceof Array) {
    const list = Arr.map(item => {
      return item.vendor;
    });
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
  loading: loading.effects['products/fetch'] || loading.effects['products/update'],
}))
@Form.create()
class EditProduct extends Component {
  state = {
    selectedRows: [],
    params: {
      simple: true,
      current: 1,
      pageSize: 10,
      total: this.props.products.length,
    },
    modalVisible: false,
    modalVisibleQuan: false,
    editingKey: '',
    selectrec: {},
    res: [],
    vendorlist: '',
  };
  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };
  handleModalVisibleQuan = flag => {
    this.setState({
      modalVisibleQuan: !!flag,
    });
  };
  handleAdd = (rec, fields) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/update',
      payload: {
        productskey: rec.id,
        parpms: {
          id: rec.id,
          title: fields.title,
          body_html: fields.body_html,
          vendor: fields.vendor,
          product_type: fields.product_type,
          tags: fields.tags,
          variants: [
            {
              id: rec.variants[0].id,
              title: fields.title,
              inventory_quantity: rec.variants[0].inventory_quantity,
              price: fields.price,
            },
          ],
        },
      },
    });
    this.handleModalVisible();
  };
  handleAddQuan = (rec, fields) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/update',
      payload: {
        productskey: rec.id,
        parpms: {
          id: rec.id,
          variants: [
            {
              id: rec.variants[0].id,
              inventory_quantity: fields.key,
            },
          ],
        },
      },
    });
    this.handleModalVisibleQuan();
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

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const vendorlist = BuildvendorArray(this.state.res).map(item => {
      return <Option value={item}>{item}</Option>;
    });
    //console.log(this.state.res)
    const typelist = BuildtypeArray(this.state.res).map(item => {
      return <Option value={item}>{item}</Option>;
    });
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={6} sm={8}>
            <Form.Item label="商品名称">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
          <Col md={6} sm={8}>
            <Form.Item label="商品类型">
              {getFieldDecorator('type')(
                <Select placeholder="请选择" style={{ width: '120px' }}>
                  {typelist}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={6} sm={8}>
            <Form.Item label="供应商">
              {getFieldDecorator('vendor')(
                <Select placeholder="请选择" style={{ width: '120px' }}>
                  {vendorlist}
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
  columns = [
    {
      title: '商品名称',
      dataIndex: 'title',
      key: 'title',
      width: '40%',
      // render: text => <Link to={`/profile/basic/${text.replace(/\s+/gi, '-')}`}>{text}</Link>,
    },
    {
      title: '商品类型',
      dataIndex: 'product_type',
      key: 'product_type',
      width: '8%',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      width: '10%',
    },
    {
      title: '库存',
      dataIndex: 'variants[0].inventory_quantity',
      key: 'inventory',
      width: '10%',
      sorter: (a, b) => a.variants[0].inventory_quantity - b.variants[0].inventory_quantity,
      render: (val, rec) => {
        return rec.variants[0].inventory_quantity;
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
      key: 'vendor',
      width: '10%',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      width: '12%',
      render: (val, rec) => {
        return (
          <>
            <a onClick={() => this.upquantity(rec)}>修改库存</a>
            <br></br>
            <a onClick={() => this.edit(rec)}>编辑产品</a>
          </>
        );
      },
    },
  ];
  upquantity(rec) {
    this.handleModalVisibleQuan(true);
    this.setState({
      selectrec: rec,
      editingKey: rec.id,
    });
  }
  edit(key) {
    this.handleModalVisible(true);
    this.setState({
      selectrec: key,
      editingKey: key.id,
    });
  }
  handlechange = value => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/changepage',
      payload: {
        link: value,
      },
    });
  };
  render() {
    const { loading } = this.props;
    const { products, link } = this.props;
    const { selectedRows, params, modalVisible, selectrec, modalVisibleQuan } = this.state;
    const data = {
      list: products,
      pagination: params,
    };
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const parentMethodsQuan = {
      handleAdd: this.handleAddQuan,
      handleModalVisible: this.handleModalVisibleQuan,
    };
    console.log(selectrec);
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
            </div>
            <Table
              //components={components}
              bordered
              dataSource={products}
              columns={this.columns}
              rowClassName="editable-row"
              pagination={false}
              loading={loading}
              rowKey="id"
            />
          </div>
          <FenYe handlechange={this.handlechange} Link={link}></FenYe>
        </Card>
        <CreateForm {...parentMethods} modalVisible={modalVisible} selectrec={selectrec} />
        <QuantityForm
          {...parentMethodsQuan}
          modalVisible={modalVisibleQuan}
          selectrec={selectrec}
        />
      </PageHeaderWrapper>
    );
  }
}
export default EditProduct;
