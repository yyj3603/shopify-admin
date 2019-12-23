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


@connect(({ customers, loading }) => ({
  customers: customers.customers,
   availedit:customers.availedit,
  loading: loading.effects['customers/fetch'],
}))

class Editcustomers extends Component {

    render(){
     var ec=this.props.availedit.map(
         c=><Card>
           <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
              
               <div style={{width:'250px'}}>
                   <div style={{fontWeight:'bold'}}>ID: {c.id}</div>
                   <div>firstname</div>
                   <div style={{width:'250px'}}><Input  defaultValue={c.first_name}/></div>
                   <div >lastname</div>
                   <div style={{width:'250px'}}><Input defaultValue={c.last_name} /></div>
                   <div >email</div>
                   <div style={{width:'250px'}}><Input defaultValue={c.email} /></div>
                   <div>note</div>
                   <div style={{width:'250px'}}><Input defaultValue={c.note} /></div>
                   <div>tags</div>
                   <div style={{width:'250px'}}><Input defaultValue={c.tags} /></div>
                   <div>order count</div>
                   <div style={{width:'250px'}}><Input defaultValue={c.order_count} /></div>
               </div>
              
             
           </div>
           </Card>
     )

        return <div>
        <PageHeaderWrapper title='编辑客户'>
        {console.log('availcustomers:',this.props.availedit)}
        
           {ec}
        
        </PageHeaderWrapper>
        </div>
    }
}

export default Editcustomers;