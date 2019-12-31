export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        name: 'login',
        component: './User/Login',
      },
      {
        path: '/user/register',
        name: 'register',
        component: './User/Register',
      },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  }, // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    /*  Routes: ['src/pages/Authorized'], */
    routes: [
      // dashboard

      {
        path: '/orders',
        name: 'orders',
        icon: 'dashboard',
        routes: [
          {
            path: '/orders/orderlist',
            name: 'orderlist',
            component: './Orders',
          },
          {
            path: '/orders/addorder',
            name: 'addorder',
            component: './orders/Addorder',
          },
        ],
      },
      {
        path: '/customer',
        name: 'customer',
        icon: 'dashboard',
        component: './Customer',
      },
      {
        path: '/products',
        name: 'products',
        icon: 'dashboard',
        routes: [
          {
            path: '/products/productlist',
            name: 'productlist',
            component: './Products',
          },
          {
            path: '/products/addproduct',
            name: 'addproduct',
            component: './products/Addproduct',
          },
          {
            path: '/products/editproduct',
            name: 'editproduct',
            component: './products/EditProduct',
          },
        ],
      },

      {
        component: '404',
      },
    ],
  },
];
