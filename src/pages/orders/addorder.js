import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Form, Input, Button, Cascader, Select } from 'antd';

function BuildvariantArray(Arr) {
  const list = Arr.map(item => {
    return { id: item.variants[0].id, title: item.title };
  });
  var temp = []; //一个新的临时数组
  for (var i = 0; i < list.length; i++) {
    if (temp.indexOf(list[i]) == -1) {
      temp.push(list[i]);
    }
  }
  return temp;
}
const FormItem = Form.Item;
@connect(({ orders, loading }) => ({
  orders: orders.orders,
  loading: loading.effects['orders/fetch'],
}))
class Addorder extends Component {
  state = {
    res: [],
  };

 

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orders/allproduct',
      callback: val => {
        this.setState({ res: val.data.products });
      },
    });
  }
  
   addorder = () => {
    const { dispatch } = this.props;
    const {
      form: { validateFields },
    } = this.props;

    const order = this.props.form.getFieldsValue();
    console.log(order);
    validateFields(['variant_id', 'quantity', 'first_name', 'last_name'], (err, values) => {
      if (err) return;
      //若无error则继续进行表单提交
      console.log(order.financial_status[0]);
      dispatch({
        type: 'order/add',
        payload: {
          line_items: [
            {
              variant_id: order.variant_id,

              quantity: order.quantity,
            },
          ],
          customer: {
            first_name: order.first_name,

            last_name: order.last_name,
          },
          financial_status: order.financial_status[0],
          email: order.email,
        },
      });
      alert('添加成功');
    });
  };


  render() {
    const list = BuildvariantArray(this.state.res).map(item => {
      return <Option value={item.id}>{item.title}</Option>;
    });
    console.log(list);
    console.log('list-------');
    const options = [
      {
        value: 'pending',
        label: 'pending',
      },
      {
        value: 'paid',
        label: 'paid',
      },
    ];
    const { getFieldDecorator } = this.props.form;
    return (
      <Card title="添加订单">
        <div style={{ margin: '0 auto', width: '50%' }}>
          <Form>
            <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="选择商品">
              {getFieldDecorator('variant_id', {
                rules: [{ required: true,message: '商品不能为空', min: 1 }],
              })(<Select>{list}</Select>)}
            </FormItem>

            <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="数量">
              {getFieldDecorator('quantity', {
                rules: [{ required: true,message:'数量不能为空',min:1 }],
              })(<Input placeholder="请输入数量" />)}
            </FormItem>
            <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="邮箱">
              {getFieldDecorator('email', {
                rules: [{ required: false }],
              })(<Input placeholder="请输入正确格式的邮箱" />)}
            </FormItem>
            <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="顾客姓">
              {getFieldDecorator('first_name', {
                rules: [{ required: true, message: '顾客姓氏不能为空', min: 1 }],
              })(<Input placeholder="请输入顾客姓氏" />)}
            </FormItem>
            <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="顾客名">
              {getFieldDecorator('last_name', {
                rules: [{ required: true, message: '顾客名字不能为空', min: 1 }],
              })(<Input placeholder="请输入顾客名字" />)}
            </FormItem>
            <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="付款状态">
              {getFieldDecorator('financial_status', {
                rules: [{ required: true,message:'请选择付款状态',min:1 }],
              })(<Cascader options={options} placeholder="请选择付款状态" />)}
            </FormItem>

            {/* <div style={{margin:"0 auto",width:"80%"}}> */}
            <FormItem>
              <Button type="primary" block onClick={this.addorder}>
                创建订单
              </Button>
            </FormItem>
            {/*          </div> */}
          </Form>
        </div>
      </Card>
    );
  }
}
export default Form.create()(Addorder);
