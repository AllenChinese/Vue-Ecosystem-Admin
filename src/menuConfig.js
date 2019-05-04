/**
 * 菜单配置 包含 头部菜单和侧边栏菜单两种
 */
const headerMenuConfig = [];

const asideMenuConfig = [
  {
    path: '/dynamicForm',
    name: '动态表单',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/FormMaking',
        name: 'FormMaking'
      },
      {
        path: '/FormGenerator',
        name: 'FormGenerator'
      }
    ]
  },
  {
    path: '/dataVisual',
    name: '数据可视化',
    icon: 'el-icon-view',
    children: [
      {
        path: '/echarts',
        name: 'Echarts'
      }
    ]
  }
];

export { headerMenuConfig, asideMenuConfig };
