import { queryFakeList, removeFakeList, addFakeList, updateFakeList,getCustomers,
  addCustomers,removeCustomers,updateCustomers } from '@/services/api';

export default {
  namespace: 'customers',

  state: {
    customers: [],
    availedit:[]
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
      yield put({
        type: 'changeAvailedit',
        apayload:apayload ,
      });
     
      yield put(routerRedux.push('/customers/editcustomers'));
    },
  },

  reducers: {
    changeCustomers(state, { payload }) {
      return { ...state, customers: payload };
    },
    changeAvailedit(state,{apayload}){
      return {...state,availedit:apayload};
    }
  },

};
