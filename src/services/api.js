import { stringify } from 'qs';
import request from '@/utils/request';

/* 获取订单 */
export async function getOrders() {
  return request('/admin/api/2019-10/orders.json');
}
/* 删除订单 */
export async function removeOrders(params) {
  console.log(params);
  return request(`/admin/api/2019-10/orders/${params}.json`, {
    method: 'DELETE',
  });
}
export async function queryORule(params) {
  return request(`/api//2019-10/orders?${stringify(params)}`);
}

export async function removeORule(params) {
  return request('/api/2019-10/orders', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addORule(params) {
  return request('/api/2019-10/orders', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateORule(params = {}) {
  return request(`/api/orders?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}

/* */
export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    data: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile(id) {
  return request(`/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}
export async function getProducts() {
  return request('/admin/api/2019-10/products.json?limit=10');
}
export async function addProducts(params) {
  return request('/admin/api/2019-10/products.json', {
    method: 'POST',
    data: {
      product: params,
    },
  });
}
export async function removeProducts(params) {
  console.log(params);
  return request(`/admin/api/2019-10/products/${params}.json`, {
    method: 'DELETE',
  });
}
