import {
  queryORule,
  removeORule,
  addORule,
  updateORule,
  removeOrders,
  getOrders,
} from '@/services/api';

export default {
  namespace: 'order',

  state: {
    data: {
      orders: [],
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryORule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addORule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
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
      for (var i = 0; i < payload.id.length; i++) {
        const response = yield call(removeOrders, payload.id[i]);
      }
      const response = yield call(getOrders);
      if (callback) callback();
      console.log(response);
      console.log('ress-------');
      yield put({
        type: 'changeOrders',
        payload: response.data.Orders,
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
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
