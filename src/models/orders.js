import { getOrders } from '@/services/api';

const Model = {
  namespace: 'orders',

  state: {
    orders: [],
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getOrders);
      console.log('res', response);
      yield put({
        type: 'changeOrders',
        payload: response.data.orders,
      });
    },
  },

  reducers: {
    changeOrders(state, { payload }) {
      return { ...state, orders: payload };
    },
  },
};

export default Model;
