// 以下文件格式是描述路由的协议格式
// 布局
const HeaderAsideLayout = () =>
  import(/* webpackChunkName: "HeaderAsideLayout" */ './layouts/HeaderAsideLayout');
const EmptyLayout = () =>
  import(/* webpackChunkName: "EmptyLayout" */ './layouts/EmptyLayout');
// 页面
const FormMaking = () =>
  import(/* webpackChunkName: "FormMaking" */ './views/FormMaking');
const FormGenerator = () =>
  import(/* webpackChunkName: "FormGenerator" */ './views/FormGenerator');
const Echarts = () =>
  import(/* webpackChunkName: "Echarts" */ './views/Echarts');
// 404
const NotFound = () =>
  import(/* webpackChunkName: "NotFound" */ './views/NotFound');

const routeConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: FormMaking,
    name: 'dynamicForm',
    children: [
      {
        path: '/dynamicForm/FormMaking',
        layout: HeaderAsideLayout,
        component: FormMaking,
        name: 'FormMaking'
      },
      {
        path: '/dynamicForm/FormGenerator',
        layout: HeaderAsideLayout,
        component: FormGenerator,
        name: 'FormGenerator'
      }
    ]
  },
  {
    path: '/dataVisual',
    layout: HeaderAsideLayout,
    component: Echarts,
    name: 'dataVisual',
    children: [
      {
        path: '/dataVisual/echarts',
        layout: HeaderAsideLayout,
        component: Echarts,
        name: 'Echarts'
      }
    ]
  },
  {
    path: '*',
    layout: EmptyLayout,
    component: NotFound
  }
];

export default routeConfig;
