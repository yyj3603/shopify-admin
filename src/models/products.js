import { routerRedux } from 'dva/router';
import {
  getProducts,
  addProducts,
  removeProducts,
  getProductsbychange,
  UpdateProduct,
  allProduct,
  searchProducts,
} from '@/services/api';




const Model = {
  namespace: 'products',

  state: {
    products: [],
    link: '',
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getProducts);
      yield put({
        type: 'changeProducts',
        // payload: response.data.products,
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addProducts, payload);
      console.log(response);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put(routerRedux.push('/products/productlist'));
    },
    *remove({ payload, callback }, { call, put }) {
      for (let i = 0; i < payload.id.length; i++) {
        yield call(removeProducts, payload.id[i]);
      }
      const response = yield call(getProducts);
      if (callback) callback();
      yield put({
        type: 'changeProducts',
        payload: response,
      });
    },
    *changepage({ payload, callback }, { call, put }) {
      const response = yield call(getProductsbychange, payload.link);
      if (callback) callback();
      yield put({
        type: 'changeProducts',
        payload: response,
      });
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(UpdateProduct, payload);
      console.log(response);
      if (callback) callback();
      const res = yield call(getProducts);
      yield put({
        type: 'changeProducts',
        payload: res,
      });
    },
    *search({ payload, callback }, { call, put }) {
      let params = '';
      if (payload.name !== undefined) {
        params = params + 'title=' + payload.name + '&';
        console.log(params);
      }
      if (payload.type !== undefined) {
        params = params + 'product_type=' + payload.type + '&';
      }
      if (payload.vendor !== undefined) {
        params = params + 'vendor=' + payload.vendor + '&';
      }
      const response = yield call(searchProducts, params);
      yield put({
        type: 'changeProducts',
        payload: response,
      });
    },
    *allpro({ payload, callback }, { call, put }) {
      const response = yield call(allProduct);
      callback(response);
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
