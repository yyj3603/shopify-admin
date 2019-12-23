import React, { Component } from 'react';
import { Card, Select, Form, Badge, Button } from 'antd';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import InputSearchInput from './InputSearchInput';
const FormItem = Form.Item;
const statusMap = ['pengding', 'paid'];
const { Option } = Select;
import Link from 'umi/link';

@connect(({ customers, loading }) => ({
  customers: customers.customers,

  loading: loading.effects['customers/fetch'],
}))


class Addcustomers extends Component {
 
    state={
      tagsInput:"",
      arrtags:[]
    }
 addCustomers=()=>{
  const { dispatch } = this.props;
  var opv=document.getElementById('province');
  var index=opv.selectedIndex;
  var gv=opv.value;
  var gt=opv[index].text;
  console.log('====',gv,gt)
  console.log('====',gv,gt)
  dispatch({
    type:'customers/add',
    payload:{
      first_name: document.getElementById("firstname").value,
      last_name: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      phone:'+'+document.getElementById('phonenumber').value,
      verified_email: true,
      tags:document.getElementById('tags').value,
      note:document.getElementById('note').value,
      addresses: [
        {
          address1: document.getElementById('address').value,
          city: document.getElementById('city').value,
          province: gt,
          phone: document.getElementById('aphone').value,
          zip: "123 ABC",
          last_name: document.getElementById('alastname').value,
          first_name: document.getElementById('afirstname').value,
          country: "CN"
        }
      ]
    }
  })
  alert('添加成功');
 }



 handleClick=(state,b)=>{
   if(b=='lab1'){
 var b1=  document.getElementById('lab1').innerHTML;
 console.log(b1);
 if(this.state.tagsInput==null||this.state.tagsInput==""){
this.state.tagsInput=state.tagsInput+b1; 
 }else{
  this.state.tagsInput=state.tagsInput+","+b1; 
  this.state.arrtags=this.state.tagsInput.split(',')
}
 console.log(this.state.tagsInput,this.state.arrtags)
   }
   if(b=='lab2'){
    var b2=  document.getElementById('lab2').innerHTML;
    console.log(b2);
    if(this.state.tagsInput==null||this.state.tagsInput==""){
   this.state.tagsInput=state.tagsInput+b2; 
    }else{
      this.state.tagsInput=state.tagsInput+","+b2; 
      this.state.arrtags=this.state.tagsInput.split(',')
    }
    console.log(this.state.tagsInput,this.state.arrtags)
      }

 }

    render() {
     var   state=this.state;
 
      return (
        <div >
          
          
          
          <PageHeaderWrapper title="添加客户">
 
           
           
            <div style={{
                     width:'1000px',
                     height:'340px',
                     display:'flex',
                     justifyContent:'space-between',
                    margin:'0 auto',
                    borderBottom:'solid 2px  	#EAEAEA'
                  }}>
               <div style={{width:'300px',height:'300px'}}>
                   <div style={{fontWeight:'bold',marginTop:'35px'}}>
                   Customer overview
                   </div>
                   
               </div>
               <div style={{width:'600px',height:'300px'}}>
                 <Card>
                   <div style={{
                     display:'flex',
                     justifyContent:'space-between',
                     flexWrap:'wrap',
                     width:'560px',
                     margin:'0 auto'
                     }}>
                     <div style={{width:'280px'}}>
                          <div>
                            <label >First name</label>
                          </div>
                          <div>
                            <input id='firstname' />
                          </div>
                     </div>
                     <div style={{width:'280px'}}>
                          <div>
                            <label >Last name</label>
                          </div>
                          <div>
                            <input id='lastname' />
                          </div>
                     </div>
                     <div style={{width:'560px'}}>
                           <div>
                            <label >Email</label>
                          </div>
                          <div>
                            <input style={{width:'555px'}} id='email' type='email' />
                          </div>
                     </div>
                     <div style={{width:'560px'}}>
                          <div>
                            <label >Phone number</label>
                          </div>
                          <div>
                            <input style={{width:'555px'}} id='phonenumber'/>
                          </div>
                     </div>
                     <div>

                     </div>
                    </div>
                 </Card>
               </div>
            </div>
            <br />
            <div style={{
                     width:'1000px',
                     height:'450px',
                     display:'flex',
                     justifyContent:'space-between',
                    margin:'0 auto',
                    borderBottom:'solid 2px  	#EAEAEA'
                  }}>
               <div style={{width:'300px',height:'300px'}}>
                   <div style={{fontWeight:'bold'}}>
                   Address
                   </div>
                   <div style={{width:'260px',marginTop:'35px'}}>
                   The primary address of this customer
                   </div>
               </div>
               <div style={{width:'600px',height:'340px'}}>
                 <Card>
                 <div style={{
                     display:'flex',
                     justifyContent:'space-between',
                     flexWrap:'wrap',
                     width:'560px',
                     margin:'0 auto'
                     }}>
                     <div style={{width:'280px'}}>
                          <div>
                            <label >First name</label>
                          </div>
                          <div>
                            <input id='afirstname' />
                          </div>
                     </div>
                     <div style={{width:'280px'}}>
                          <div>
                            <label >Last name</label>
                          </div>
                          <div>
                            <input id='alastname' />
                          </div>
                     </div>
                     <div style={{width:'560px'}}>
                           <div>
                            <label >Company</label>
                          </div>
                          <div>
                            <input style={{width:'555px'}} id='company'/>
                          </div>
                     </div>
                     <div style={{width:'560px'}}>
                           <div>
                            <label >Address</label>
                          </div>
                          <div>
                            <input style={{width:'555px'}} id='address'/>
                          </div>
                     </div>
                     <div style={{width:'560px'}}>
                          <div>
                            <label >Apartment, suite, etc.</label>
                          </div>
                          <div>
                            <input style={{width:'555px'}} id='apartment'/>
                          </div>
                     </div>
                     <div style={{width:'560px'}}>
                          <div>
                            <label >City</label>
                          </div>
                          <div>
                            <input style={{width:'555px'}} id='city'/>
                          </div>
                     </div>
                     <div style={{width:'280px'}}>
                          <div>
                            <label >Province</label>
                          </div>
                          <div>
                            <select id='province' style={{height:'35px'}}>
                               <option value='Ah'>Anhui</option>
                               <option value='BJ'>Beijing</option>
                               <option value='CQ'>Chongqing</option>
                               <option value='FJ'>Fujian</option>
                               <option value='GS'>Gansu</option>
                               <option value='GD'>Guangdong</option>
                               <option value='GX'>Guangxi</option> 
                               <option value='GZ'>Guizhou</option>
                               <option value='HN'>Hainan</option>
                               <option value='HB'>Hebei</option>
                               <option value='HL'>Heilongjiang</option>
                               <option value='HA'>Henan</option>
                               <option value='HuB'>Hubei</option>
                               <option value='HuN'>Hunan</option>
                               <option value='NM'>Inner Mongolia</option>
                               <option value='JS'>Jiangsu</option>
                               <option value='JX'>Jiangxi</option>
                               <option value='JL'>Jilin</option>
                               <option value='LN'>Liaoning</option>
                               <option value='NX'>Ningxi</option>
                               <option value='QH'>Qinghai</option>
                               <option value='SN'>Shaanxi</option>
                               <option value='SX'>Shanxi</option>
                               <option value='SD'>Shandong</option>
                               <option value='SH'>Shanghai</option>
                               <option value='SC'>Sichuan</option>
                               <option value='TJ'>Tianjin</option>
                               <option value='XJ'>Xinjiang</option>
                               <option value='YZ'>Tibet</option>
                               <option value='YN'>yunnan</option>
                               <option value='ZJ'>Zhejiang</option>
                           
                               


                            </select>
                          </div>
                     </div>
                     <div style={{width:'280px'}}>
                          <div>
                            <label >Postal code</label>
                          </div>
                          <div>
                            <input id='postalcode' />
                          </div>
                     </div>
                     <div style={{width:'560px'}}>
                           <div>
                            <label >Phone</label>
                          </div>
                          <div>
                            <input style={{width:'555px'}} id='aphone'/>
                          </div>
                     </div>
                     <div>

                     </div>
                    </div>
                 </Card>
               </div>
            </div>
            <br />
            <div style={{
                     width:'1000px',
                     height:'200px',
                     display:'flex',
                     justifyContent:'space-between',
                    margin:'0 auto',
                    borderBottom:'solid 2px  	#EAEAEA'
                  }}>
               <div style={{width:'300px',height:'300px'}}>
                   <div style={{fontWeight:'bold'}}>
                   Tax exemptions
                   </div>
                   <div style={{width:'260px',marginTop:'35px'}}>
                   Tax exemptions are currently limited to Canada.
                   </div>
               </div>
               <div style={{width:'600px',height:'300px'}}>
                 <Card>
                        
                 </Card>
               </div>
            </div>
            <br />
            <div style={{
                     width:'1000px',
                     height:'200px',
                     display:'flex',
                     justifyContent:'space-between',
                    margin:'0 auto',
                    borderBottom:'solid 2px  	#EAEAEA'
                  }}>
               <div style={{width:'300px',height:'300px'}}>
                   <div style={{fontWeight:'bold'}}>
                   Notes
                   </div>
                   <div style={{width:'260px',marginTop:'35px'}}>
                   Add notes about your customer.
                   </div>
               </div>
               <div style={{width:'600px',height:'300px'}}>
                 <Card>
                 <div style={{width:'280px'}}>
                          <div>
                            <label >Note</label>
                          </div>
                          <div>
                            <input style={{width:'560px'}} id='note' />
                          </div>
                     </div>
                 </Card>
               </div>
            </div>
            <br />
            <div style={{
                     width:'1000px',
                     height:'200px',
                     display:'flex',
                     justifyContent:'space-between',
                    margin:'0 auto',
                    borderBottom:'solid 2px  	#EAEAEA'
                  }}>
               <div style={{width:'300px',height:'300px'}}>
                   <div style={{fontWeight:'bold'}}>
                   Tags
                   </div>
                   <div style={{width:'260px',marginTop:'35px'}}>
                   Tags can be used to categorize customers into groups.
                   </div>
               </div>
               <div style={{width:'600px',height:'300px'}}>
                 <Card>
                 <div style={{width:'280px'}}>
                          <div>
                            <label >Tags</label>
                          </div>
                          <div>
                            <div></div>
                            <input style={{width:'560px'}} id='tags' />
                            
                               
                                
                                
                            
                           
                          </div>
                     </div>
                     <div style={{marginBottom:'10px'}}>Add existing tags:</div>
                     <div>
                       <label id='lab1'
                               onClick={(e)=>this.handleClick(this.state,e.target.id)}
                              style={{backgroundColor:'#E3E3E3',margin:'5px',color:'#777',padding:'5px'}}
                       >
                           password page
                       </label>
                       <label id='lab2' onClick={(e)=>this.handleClick(this.state,e.target.id)}
                             style={{backgroundColor:'#E3E3E3',margin:'5px',color:'#777',padding:'5px'}}
                       >
                           prospect
                       </label>
                       {console.log('--------')}
                     </div>
                 </Card>
               </div>
            </div>
            <br />
          

           
            <div style={{
              
              width:'180px',
              height:'70px',
              display:'flex',
              flexWrap:'wrap',
              justifyContent:'space-between',
              margin:'0 auto'
              }}
           >
          
             <Button type='primary' >Cancel</Button>
             <Button type='primary' onClick={this.addCustomers}>Save</Button>
           
       
          </div>
          </PageHeaderWrapper>
        </div>
      );
    }
  }
  
  export default Addcustomers;