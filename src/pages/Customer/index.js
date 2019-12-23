import React, { Component } from 'react';
import { Card, Select, Form, Badge, Button,Table,Tag,Divider,Popconfirm } from 'antd';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import InputSearchInput from './InputSearchInput';
const FormItem = Form.Item;
const statusMap = ['pengding', 'paid'];
const { Option } = Select;
import Link from 'umi/link';
import { getCustomers } from '@/services/api';



@connect(({ customers, loading }) => ({
  customers: customers.customers,

  loading: loading.effects['customers/fetch'],
}))

class Customers extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    selectedRows:[],
    pagination:{ 
     /*  currentPage: page, */
      pageSize: 10,
      simple: false,
      total: this.props.customers.length,
      showQuickJumper:'howQuickJumper',
       defaultCurrent:1
      }
  };

  /* --------------------- */
  onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
    console.log('selectedRowKeysID: ', selectedRowKeys);
    this.setState({ selectedRows });
    console.log('selectedRowKeysID: ', selectedRows);
  };
 /* ---------------------------- */
 handleEdit(selectedrows){
  const { dispatch } = this.props;
  this.props.history.push("/customers/editcustomers");
  console.log(selectedrows);
  dispatch({
    type: 'customers/getedit',
    apayload: 
      selectedrows
 /*    callback: () => {
      this.setState({
        selectedRowKeys: [],
      });
    }, */
  });
 
 }
 /* l-------------------------------- */
  handleEditAll(selectall){
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/getedit',
      apayload: 
        selectall
   /*    callback: () => {
        this.setState({
          selectedRowKeys: [],
        });
      }, */
    });
  }
 /* --------------------------------------- */
 handleDelOne(selectedId,ordnums){
  const { dispatch } = this.props;
  console.log(selectedId)
  if(ordnums==0){
  dispatch({
    type: 'customers/remove',
    payload: {
      id: selectedId
    },
    callback: () => {
      this.setState({
        selectedRowKeys: [],
      });
    },
  });
  alert('已成功删除此用户！！！');
}else {
  alert('不能删除订单数大于0的客户！！！');
  return;
}
 }
/* ------------------------ */
  columns = [

    {
      title:this.props.customers.length+':'+'customers',
      render: (val, rec) => {
        return rec.first_name +' '+ rec.last_name;
      },

 },
 {
  title: '城市和国家',
  render: (val, rec) => {
    return rec.addresses.map(i=>i.city) +' '+ rec.addresses.map(i=>i.country_code);
  },

  
},
  {
    title: '邮箱',
    dataIndex:'email',
  
    key: 'email',
    
  },
  {
    title: '订单数',
    dataIndex: 'orders_count',
    key: 'orders_count',
    
 
  },
  {
    title: '花费',
    dataIndex: 'total_spent',
    key: 'total_spent',
  

  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags =>(
      <span style={{display:tags==""?'none':'block'}}>
        {tags.split(',').map(tag => {
          let color = tag.length > 9 ? 'red' : 'green';
          if (tag.length>=6&&tag.length<=8) {
            color = 'volcano';
          }
          if (tag.length >4&&tag.length<6) {
            color = 'geekblue';
          }
          if (tag.length <=4) {
            color = 'green';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
      
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) =>{
      const id=record.id;
      const orders_count=record.orders_count;
      return(
      <span >
       <Link to='/customers/editcustomers'>
       <a  onClick={()=>this.handleEdit(record)}
            
            >
        
                  编辑
              
          </a> 
          </Link>

        <Divider type="vertical" />
        <Popconfirm title="确定要删除此项?" 
          onConfirm={()=>this.handleDelOne(id,orders_count)}
        >
            <a>删除</a>
        </Popconfirm>
       
     
      </span>
    )}
  },

];
/* ---------------------------------- */
componentDidMount() {
  const { dispatch } = this.props;
  dispatch({
    type: 'customers/fetch',
  });
}
  /* =-------------------------------*/
 
/* ----------------------------------- */
handleSelectRows = rows => {
  this.setState({
    selectedRows: rows,
  });
};

/* ---------------------------------------- */
handleModalVisible = flag => {
  this.setState({
    modalVisible: !!flag,
  });
};
/* ------------------------------------- */

  render() {
    const data=this.props.customers;
    const columns=this.columns;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: 'all-data',
          text: 'Select All Data',
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(this.state.pagination.pageSize).keys()], // 0...45
            });
          },
        },
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };

    return (
 
      <div>
       {console.log('顾客：----------------',this.props.customers)}
     {console.log('分页大小',this.state.pagination.pageSize)}
        <PageHeaderWrapper title="客户">
        
          <Card>
            <div className='card_customer_head' style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',borderBottom:'solid 1px  	#EAEAEA'}}>
                <div style={{width:'32px',height:'35px',borderBottom:'solid 4px #0000ff'}}>
                  所有
                
                </div>
                 <Link to="/customers/addcustomers">
                    <Button icon="plus" type="primary">
                     添加客户
                    </Button>
                  </Link>
                  
             </div>
              <br/>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <Select defaultValue='0' style={{width:'150px'}}>
            <Option value='0'>Select a filter</Option>
            <Option value='1'>Money spent</Option>
            <Option value='2'>Number of orders</Option>
            <Option value='3'>Placed an order</Option>
            <Option value='4'>Date created</Option>
            <Option value='5'>Accepts email marketing</Option>
            <Option value='6'>Abandoned order</Option>
            <Option value='7'>Account status</Option>
            <Option value='8'>Tagged with</Option>
            <Option value='9'>Located in</Option>
          </Select>
          
          <InputSearchInput />
          <div style={{width:'150px',textAlign:'center'}}>Sort by</div>
          <Select defaultValue='0' style={{width:'150px'}}>
            <Option value='0'>Newest update</Option>
            <Option value='1'>Oldest update</Option>
            <Option value='2'>Most spent</Option>
            <Option value='3'>Most orders</Option>
            <Option value='4'>Customer A-Z</Option>
            <Option value='5'>Customer Z-A</Option>
          
          </Select>
          </div >
          <div style={{marginTop:'25px'}} >
          <Link to="/customers/editcustomers">
                    <Button icon="plus" type="primary" onClick={this.handleEditAll(this.state.selectedRows)}>
                     编辑选中客户客户
                    </Button>
                  </Link>

                  </div>
          <div style={{marginTop:'25px'}}>
             <Table 
              rowSelection={rowSelection} 
              columns={columns} 
              dataSource={data} 
              pagination={  
               this.state.pagination
              }
              scroll={{ y: 500 }} 
              />;

          </div>
          </Card>
          <br />
        
        </PageHeaderWrapper>
      </div>
    );
  }
}

export default Customers;
