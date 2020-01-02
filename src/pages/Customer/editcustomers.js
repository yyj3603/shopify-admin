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
     arrsave=[];

  
     handlleSave=()=>{
        const { dispatch } = this.props;
         if(this.props.availedit.length!==0){
        for(var i=0;i<this.props.availedit.length;i++){
            var temp=document.getElementsByName(this.props.availedit[i].id);
           
            dispatch({
                type:'customers/update',
                payload:{
                    id:this.props.availedit[i].id,
                  first_name:temp[0].value,
                  last_name: temp[1].value,
                  email: temp[2].value,
                
                  
                  tags:temp[4].value,
                  note:temp[3].value,
               
                  
                }
              })
            alert('编辑成功！！！')
           
        };
    }
       }
    render(){
   
    var ae=this.props.availedit;
    var arritem=[];
  
 
        
    
    var v1,v2,v3,v4,v5,v6;
    
     var ec=this.props.availedit.map(
         c=>
         <Card>
           <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
              
               <div style={{width:'250px'}}>
                   <div style={{fontWeight:'bold'}}>ID: {c.id}</div>
                   <div>firstname</div>
                   <div style={{width:'250px'}}><Input name={c.id}  defaultValue={c.first_name} /></div>
                   <div >lastname</div>
                   <div style={{width:'250px'}}><Input name={c.id} defaultValue={c.last_name}/></div>
                   <div >email</div>
                   <div style={{width:'250px'}}><Input name={c.id} defaultValue={c.email} /></div>
                   <div>note</div>
                   <div style={{width:'250px'}}><Input name={c.id} defaultValue={c.note} /></div>
                   <div>tags</div>
                   <div style={{width:'250px'}}><Input name={c.id} defaultValue={c.tags} /></div>
                   
                
               </div>
              
             
           </div>
       
           </Card>
             
              
     )

        return <div>
        <PageHeaderWrapper title='编辑客户'>
        {console.log('availcustomers:',this.props.availedit)}
        <Card>
           {ec}
          <div style={{width:'120px',margin:' auto',display:'flex',justifyContent:'center'}}>
          <Link to='/customers/customerlist'><Button type='primary' >取消</Button></Link>
           <Button style={{marginLeft:'25px'}}  type="primary" onClick={()=>this.handlleSave()}>
               保存
              </Button>
              </div>
              </Card>
        </PageHeaderWrapper>
        </div>
    }
}

export default Editcustomers;