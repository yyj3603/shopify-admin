import { queryFakeList, removeFakeList, addFakeList, updateFakeList,getCustomers,
  addCustomers,removeCustomers,updateCustomers } from '@/services/api';

export default {
  namespace: 'customers',

  state: {
    customers: [],
    availedit:[],
    availindexdata:[],
    tags:[]
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getCustomers);
      console.log('res', response);
      yield put({
        type: 'changeCustomers',
        payload: response.data.customers,
      });
 
    },
    *getavail({}, { call, put }) {
      const response = yield call(getCustomers);
      console.log('res', response);
      yield put({
        type: 'changeAvailindexdata',
        aipayload: response.data.customers,
      });
    },
    *add({ payload, callback }, { call, put }) {
      console.log("11s")
      const response = yield call(addCustomers, payload);
      console.log("1")
      const res=yield call(getCustomers)
      yield put({
        type: ' changeCustomers',
        payload: res,
      });
      if (callback) callback();
      yield put(routerRedux.push('/customers/customerlist'));
    },
    *remove({ payload, callback }, { call, put }) {
     
        yield call(removeCustomers, payload.id);
      
      const response = yield call(getCustomers);
      if (callback) callback();
      yield put({
        type: 'changeCustomers',
        payload: response,
      });
      if (callback) callback();
      yield put(routerRedux.push('/customers/customerlist'));
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateCustomers, payload);
      if (callback) callback();
      const res = yield call(getCustomers);
      yield put({
        type: 'changeCustomers',
        payload: res,
      });
      if (callback) callback();
      yield put(routerRedux.push('/customers/editcustomers'));
    },
    *getedit({ apayload}, {  put }){
      console.log("-------")
      console.log(apayload)
      console.log("-------")
      yield put({
        type: 'changeAvailedit',
        apayload:apayload ,
      });
     
      yield put(routerRedux.push('/customers/editcustomers'));
    },
    *getavailindexdata({ aipayload,callback}, {  put }){
      yield put({
        type: 'changeAvailindexdata',
        aipayload:aipayload ,
      });
      if (callback) callback();
      yield put(routerRedux.push('/customers/editcustomers'));
    },
    *gettags({ agpayload,callback}, {  put }){
      yield put({
        type: 'changeAddTags',
        agpayload:agpayload ,
      });
      if (callback) callback();
      yield put(routerRedux.push('/customers/addcustomers'));
    },
  },

  reducers: {
    changeCustomers(state, { payload }) {
      return { ...state, customers: payload };
    },
    changeAvailedit(state,{apayload}){
      return {...state,availedit:apayload};
    },
    changeAvailindexdata(state,{aipayload}){
      return {...state,availindexdata:aipayload};
    },
    changeAddTags(state,{agpayload}){
      return {...state,tags:agpayload};
    }
  },

};
