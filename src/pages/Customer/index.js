import React, { Component } from 'react';
import { Card, Select, Form, Badge, Button,Table,Tag,Divider,Popconfirm,Input } from 'antd';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import InputSearchInput from './InputSearchInput';
const FormItem = Form.Item;
const statusMap = ['pengding', 'paid'];
const { Option } = Select;
import Link from 'umi/link';
import { getCustomers } from '@/services/api';
import styles from './index.less';


@connect(({ customers, loading }) => ({
  customers: customers.customers,
  avaicustomers:customers.availindexdata,
  loading: loading.effects['customers/fetch'],
}))

class Customers extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    selectedRows:[],
    filtervalue:0,
    searchinput:'',
    filtercustomers:[],
    sortvalue:0

  };

  /* --------------------- */
  onSelectChange = (selectedRowKeys,selectedRows) => {

    this.setState({ selectedRowKeys });
    console.log('selectedRowKeys: ', selectedRowKeys);
    this.setState({ selectedRows });
    console.log('selectedRows: ', selectedRows);
  };

 /* ---------------------------- */
handleSearch=(value)=>{
  this.setState({searchinput:value})
  console.log('opt:',this.state.filtervalue,value)
  if(value==''||value==null){
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/getavailindexdata',
      aipayload: 
        this.props.customers,
      /* callback: () => {
        this.setState({
          filtercustomers: [],
        });
      }, */
    });
  }else
  if(this.state.filtervalue==0){
    var temp=this.props.customers;
    var temp1=[];
    for(var i=0;i<temp.length;i++){
      if(temp[i].first_name==value||temp[i].first_name+temp[i].last_name==value
          ||temp[i].orders_count==value||temp[i].total_spent==value
        ){
        temp1.push(temp[i]);
        
      }
    }
    console.log('temp1',temp1);
    this.state.filtercustomers=temp1;
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/getavailindexdata',
      aipayload: 
        temp1,
      /* callback: () => {
        this.setState({
          filtercustomers: [],
        });
      }, */
    });
  }else   if(this.state.filtervalue==1){
    var temp=this.props.customers;
    var temp1=[];
    for(var i=0;i<temp.length;i++){
      if(temp[i].total_spent==value){
        temp1.push(temp[i])
      }
    }
    console.log('temp1',temp1);
    this.state.filtercustomers=temp1;
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/getavailindexdata',
      aipayload: 
        temp1,
      /* callback: () => {
        this.setState({
          filtercustomers: [],
        });
      }, */
    });
  }
  if(this.state.filtervalue==2){
    var temp=this.props.customers;
    var temp1=[];
    for(var i=0;i<temp.length;i++){
      if(temp[i].orders_count==value ){
        temp1.push(temp[i])
      }
    }
    console.log('temp1',temp1);
    this.state.filtercustomers=temp1;
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/getavailindexdata',
      aipayload: 
        temp1,
      /* callback: () => {
        this.setState({
          filtercustomers: [],
        });
      }, */
    });
  }
  
}
handleChangeselect=(value)=>{
  console.log(value);
 this.setState({filtervalue:value})
}
handleChangeSort=(value)=>{
  console.log(value);
  this.setState({sortvalue:value});

  if(value==0){

    var byupdate=[];
    byupdate=this.props.avaicustomers;
    byupdate.sort(function(a,b){
      return a.updated_at<b.updated_at?1:-1;
    });
    console.log('byupdate',byupdate)
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/getavailindexdata',
      aipayload: 
     byupdate,
      /* callback: () => {
        this.setState({
          filtercustomers: [],
        });
      }, */
    });

  }else if(value==1){

    var byupdate=[];
    byupdate=this.props.avaicustomers;
    byupdate.sort(function(a,b){
      return a.updated_at<b.updated_at?1:-1;
    });

    var reversebyu=[];
    for(var m=byupdate.length-1;m>=0;m--){
      reversebyu.push(byupdate[m])
  }
  const { dispatch } = this.props;
  dispatch({
    type: 'customers/getavailindexdata',
    aipayload: 
    reversebyu,
    /* callback: () => {
      this.setState({
        filtercustomers: [],
      });
    }, */
  });



  }else if(value==2){

    var bySpent=[];
    bySpent=this.props.avaicustomers;
    bySpent.sort(function(a,b){
      return a.total_spent-b.total_spent;
    });
    console.log('sort:',bySpent)
    var reversebys=[];
    for(var m=bySpent.length-1;m>=0;m--){
      reversebys.push(bySpent[m])
  }
  const { dispatch } = this.props;
  dispatch({
    type: 'customers/getavailindexdata',
    aipayload: 
    reversebys,
    /* callback: () => {
      this.setState({
        filtercustomers: [],
      });
    }, */
  });
  }else if(value==3){
    
    var byOrders=[];
    byOrders=this.props.avaicustomers;
    byOrders.sort(function(a,b){
      return a.orders_count-b.orders_count;
    });
    console.log('sort:',byOrders)
    var reversebyo=[];
    for(var m=byOrders.length-1;m>=0;m--){
      reversebyo.push(byOrders[m])
  }
  const { dispatch } = this.props;
  dispatch({
    type: 'customers/getavailindexdata',
    aipayload: 
    reversebyo,
    /* callback: () => {
      this.setState({
        filtercustomers: [],
      });
    }, */
  });
  }
}
 /* ------------------------------ */
 handleEdit(selectedrows){
  const { dispatch } = this.props;
  
  console.log(selectedrows);
  dispatch({
    type: 'customers/getedit',
    apayload: 
      [selectedrows]
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
   dispatch({
    type: 'customers/getavail',
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
    var data=this.props.avaicustomers;
    const columns=this.columns;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    
     
    };
    const { Search } = Input;

    return (
 
      <div>
       {console.log('顾客：----------------',this.props.customers)}
       {console.log('赛选顾客：----------------',this.props.avaicustomers)}
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
          <Select onChange={(value)=>this.handleChangeselect(value)} id='search' defaultValue='0' style={{width:'150px'}}>
            <Option value='0'>Select a filter</Option>
          
            <Option value='1'>Money spent</Option>
       
            
            <Option value='2'>Number of orders</Option>
         
          </Select>
          
          <div className={styles.container}>
    <div id="components-input-demo-search-input">
      <div>
        
        <Search
          placeholder="input search text"
        
          onSearch={value =>this.handleSearch(value)}
          style={{
            width: 750,
          }}
        />
        

      </div>
    </div>
  </div>
          <div style={{width:'150px',textAlign:'center'}}>Sort by</div>
          <Select onChange={(value)=>this.handleChangeSort(value)} defaultValue='0' style={{width:'150px'}}>
            <Option value='0'>Newest update</Option>
            <Option value='1'>Oldest update</Option>
            <Option value='2'>Most spent</Option>
            <Option value='3'>Most orders</Option>
       
          
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
