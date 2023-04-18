/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

import { ChartLine, CreditCard, House, ListBullets, PawPrint, Question, SignOut, UserCircle } from "@phosphor-icons/react"

interface IRoute {
  path?: string
  icon?: React.FC
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive(pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.path
    : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}



const routes: IRoute[] = [
  {
    path: '/dashboard', // the url
    icon: House,
    name: 'Início', // name that appear in Sidebar
    exact: true,
  },

  {
    path: '/dashboard/pets',
    icon: PawPrint,
    name: 'Meus Filhotes',
  },
  {
    path: '/dashboard/stats',
    icon: ChartLine,
    name: 'Estatísticas',
  },
  {
    path: '/dashboard/account',
    icon: UserCircle,
    name: 'Minha Conta',
  },
  {
    path: '/dashboard/subscription',
    icon: CreditCard,
    name: 'Assinatura',
  },
  {
    path: '/dashboard/help',
    icon: Question,
    name: 'Ajuda',
  },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },

  //   ],
  // },
]

export type { IRoute }
export default routes
