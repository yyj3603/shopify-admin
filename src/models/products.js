import { getProducts } from '@/services/api';

const Model = {
  namespace: 'products',

  state: {
    products: [],
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getProducts);
      console.log('res', response);
      yield put({
        type: 'changeProducts',
        payload: response.products,
      });
    },
  },

  reducers: {
    changeProducts(state, { payload }) {
      return { ...state, products: payload };
    },
  },
};

export default Model;
