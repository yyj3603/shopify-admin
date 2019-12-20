import React, { Component } from 'react';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';

@connect(({ products, loading }) => ({
  products: products.products,
  loading: loading.effects['products/fetch'],
}))
class Products extends Component {
  state = {
    selectedRows: [],
  };

  columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '库存',
      dataIndex: 'variants[0]/inventory_quantity',
    },
    {
      title: '供应商',
      dataIndex: 'vendor',
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/fetch',
    });
  }

  handleSelectRows = () => {
    console.log('handleSelectRows');
  };

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
      type: 'rule/fetch',
      payload: params,
    });
  };

  render() {
    const { products, loading } = this.props;
    const { selectedRows } = this.state;
    console.log('dd');
    console.log(products);
    console.log('ss');
    const data = {
      list: products,
      pagination: {
        current: 1,
        pageSize: 8,
        total: 17,
      },
    };

    return (
      /*  <Card>
            <div>商品数据</div>
            { products.map((product, index) => {
            return <div key={index}>{index+1}号商品: {product.title} 库存：{product.variants[0].inventory_quantity} 供应商：{product.vendor}</div>
            }) }
          </Card>
        */
      <StandardTable
        selectedRows={selectedRows}
        loading={loading}
        data={data}
        columns={this.columns}
        onSelectRow={this.handleSelectRows}
        onChange={this.handleStandardTableChange}
      />
    );
  }
}

export default Products;
