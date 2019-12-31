import {
  queryORule,
  addOrders,
  updateORule,
  removeOrders,
  allord,
  searchOrders,
  getallporduct,
  getOrdersbychange,
  getOrders
} from '@/services/api';

const Model = {
  namespace: 'orders',

  state: {
    orders: [],
    link: ""
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getOrders);
      console.log('res', response);
      yield put({
        type: 'changeOrders',
        payload: response,
      });
    },
    *remove({ payload, callback }, { call, put }) {
      for (let i = 0; i < payload.id.length; i++) {
        yield call(removeOrders, payload.id[i]);
      }
      const response = yield call(getOrders);
      if (callback) callback();
      yield put({
        type: 'changeOrders',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addOrders, payload);
      console.log('payload');

      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put(routerRedux.push('/orders/orderlist'));
    },
    *allpro({ payload, callback }, { call, put }) {
      const response = yield call(getOrders);
      callback(response);
    },
    *allproduct({ payload, callback }, { call, put }) {
      console.log('1');
      const response = yield call(getallporduct);
      console.log('2');
      console.log(response);
      callback(response);
    },
    *changepage({ payload, callback }, { call, put }) {
      const response = yield call(getOrdersbychange, payload.link);
      if (callback) callback();
      yield put({
        type: 'changeOrders',
        payload: response,
      });},
    *search({ payload, callback }, { call, put }) {
      let params = '';
      console.log(payload.financial_status);
      if (payload.financial_status !== undefined) {
        params = params + 'financial_status=' + payload.financial_status + '&';
        console.log(params);
      }

      if (payload.customer !== undefined) {
        params = params + 'first_name=' + payload.customer + '&';
      }
      const response = yield call(searchOrders, params);

      yield put({
        type: 'changeOrders',
        payload: response,
      });
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateORule, payload);
      yield put({
        type: 'save',
        payload: response.data.orders,
      });
      if (callback) callback();
    },
  },

  reducers: {
    changeOrders(state, { payload }) {
      return { ...state, orders: payload.data.orders,link:payload.headers.link };
    },
  },
};

export default Model;
