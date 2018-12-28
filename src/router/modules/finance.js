import Layout from '@/views/layout/Layout'

const financeRouter = {
  path: '/finance',
  component: Layout,
  redirect: 'noredirect',
  name: 'FinanceManage',
  meta: { icon: 'money', title: 'finance', permission: ['admin'] },
  children: [
    {
      path: '/fund',
      component: () => import('@/views/finance/fund'),
      name: 'FundManage',
      meta: { title: 'fundManage', permission: ['admin'] }
    },
    {
      path: '/trade',
      component: () => import('@/views/finance/trade'),
      name: 'tradeManage',
      meta: { title: 'tradeManage', permission: ['admin'] }
    }
  ]
}

export default financeRouter
