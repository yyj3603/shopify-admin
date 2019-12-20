import { getProducts } from '@/services/api';
import { addProducts } from '@/services/api';
import { removeProducts } from '@/services/api';
import { routerRedux } from 'dva/router';
const Model = {
  namespace: 'products',

  state: {
    products: [],
    link: '',
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getProducts);
      console.log(response.headers.link);
      console.log('ress-------');
      yield put({
        type: 'changeProducts',
        // payload: response.data.products,
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addProducts, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put(routerRedux.push('/products/productlist'));
    },
    *remove({ payload, callback }, { call, put }) {
      for (var i = 0; i < payload.id.length; i++) {
        const response = yield call(removeProducts, payload.id[i]);
      }
      const response = yield call(getProducts);
      if (callback) callback();
      console.log(response);
      console.log('ress-------');
      yield put({
        type: 'changeProducts',
        payload: response,
      });
    },
  },
  reducers: {
    changeProducts(state, { payload }) {
      return { ...state, products: payload.data.products, link: payload.headers.link };
    },
    save(state, { payload }) {
      return { ...state, products: [...state.products, payload.data.product] };
    },
  },
};
export default Model;
