// 以下文件格式是描述路由的协议格式
// 布局
import HeaderAsideLayout from './layouts/HeaderAsideLayout'
import EmptyLayout from './layouts/EmptyLayout'
// 页面
import FormMaking from './views/FormMaking'
// 404
import NotFound from './views/NotFound'
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
      }
    ]
  },
  {
    path: '*',
    layout: EmptyLayout,
    component: NotFound,
  }
]

export default routeConfig