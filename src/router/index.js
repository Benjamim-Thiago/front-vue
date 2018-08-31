import HelloWorld from '../components/HelloWorld'
import AccountList from '../components/Account/List'
import AccountView from '../components/Account/View'
import AccountCreate from '../components/Account/Create'
import AccountEdit from '../components/Account/Edit'

const routes = [
  { path: '/', name: 'Hello', component: HelloWorld },
  { path: '/contas', component: AccountList },
  { path: '/contas/novo', component: AccountCreate },
  { path: '/contas/:id', component: AccountView },
  { path: '/contas/:id/editar', component: AccountEdit },
]

export default routes