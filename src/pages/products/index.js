import React, { Component } from 'react';
import { getProducts } from '@/services/api';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Link from 'umi/link';
//import { Card } from 'antd';
import styles from './TableList.less';
import { Card, Button, InputNumber } from 'antd';
import { router } from 'umi';
@connect(({ products, loading, link }) => ({
  products: products.products,
  link: products.link,
  loading: loading.effects['products/fetch'],
}))
class Products extends Component {
  state = {
    selectedRows: [],
    params: {
      simple: true,
      current: 1,
      pageSize: 10,
      total: this.props.products.length,
    },
  };
  columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      //render: text => <Link to={`/profile/basic/${text.replace(/\s+/gi, '-')}`}>{text}</Link>,
    },
    {
      title: '库存',
      dataIndex: 'variants[0].inventory_quantity',
      key: 'inventory',
      sorter: (a, b) => a.variants[0].inventory_quantity - b.variants[0].inventory_quantity,
      render: (val, rec) => {
        var sum = 0;
        for (var j = 0; j < rec.variants.length; j++) {
          sum = sum + rec.variants[j].inventory_quantity;
        }
        return sum;
      },
    },
    {
      title: '价格',
      dataIndex: 'variants[0].price',
      key: 'price',
      sorter: (a, b) => a.variants[0].price - b.variants[0].price,
      render: (val, rec) => {
        var sum = 0;
        sum = '$' + rec.variants[0].price;
        return sum;
      },
    },
    {
      title: '供应商',
      dataIndex: 'vendor',
      key: 'vendor',
    },
  ];
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/fetch',
    });
  }
  handleStandardTableChange = (page, sorter) => {
    console.log(sorter);
    console.log('sorter------');
    this.setState({
      params: {
        currentPage: page,
        pageSize: 10,
        simple: true,
        total: this.props.products.length,
      },
    });
  };
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };
  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
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
  render() {
    const { loading } = this.props;
    const { products, link } = this.props;
    const { params } = this.state;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues } = this.state;
    const data = {
      list: products,
      pagination: params,
    };
    console.log(link);
    console.log('link-----');
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    return (
      <PageHeaderWrapper title="商品列表">
        <Card>
          <div className={styles.tableList}>
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
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
              rowKey="id"
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Products;
