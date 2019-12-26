import { routerRedux } from 'dva/router';
import {
  queryORule,
  addOrders,
  updateORule,
  removeOrders,
  getOrders,
  allord,
  searchOrders,
} from '@/services/api';

export default {
  namespace: 'order',

  state: {
    data: {
      orders: [],
    },
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getOrders);
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
    /* *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeORule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    }, */
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
  },
  *update({ payload, callback }, { call, put }) {
    const response = yield call(updateORule, payload);
    yield put({
      type: 'save',
      payload: response,
    });
    if (callback) callback();
  },

  reducers: {
    changeOrders(state, { payload }) {
      console.log(payload.data.orders);
      console.log('payload.data.orders---');
      return { ...state, orders: payload.data.orders };
    },
    save(state, { payload }) {
      return { ...state, orders: [...state.orders, payload.data.orders] };
    },
  },
};
