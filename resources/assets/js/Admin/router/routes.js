import Vue from 'vue';
import Router from 'vue-router';

// Containers
import DefaultContainer from '../components/containers/DefaultContainer';

// Views
import Dashboard from '../components/views/Dashboard';

import Colors from '../components/views/theme/Colors';
import Typography from '../components/views/theme/Typography';

import Charts from '../components/views/Charts';
import Widgets from '../components/views/Widgets';

// Views - Components
import Cards from '../components/views/base/Cards';
import Forms from '../components/views/base/Forms';
import Switches from '../components/views/base/Switches';
import Tables from '../components/views/base/Tables';
import Tabs from '../components/views/base/Tabs';
import Breadcrumbs from '../components/views/base/Breadcrumbs';
import Carousels from '../components/views/base/Carousels';
import Collapses from '../components/views/base/Collapses';
import Jumbotrons from '../components/views/base/Jumbotrons';
import ListGroups from '../components/views/base/ListGroups';
import Navs from '../components/views/base/Navs';
import Navbars from '../components/views/base/Navbars';
import Paginations from '../components/views/base/Paginations';
import Popovers from '../components/views/base/Popovers';
import ProgressBars from '../components/views/base/ProgressBars';
import Tooltips from '../components/views/base/Tooltips';

// Views - Buttons
import StandardButtons from '../components/views/buttons/StandardButtons';
import ButtonGroups from '../components/views/buttons/ButtonGroups';
import Dropdowns from '../components/views/buttons/Dropdowns';
import BrandButtons from '../components/views/buttons/BrandButtons';

// Views - Icons
import Flags from '../components/views/icons/Flags';
import FontAwesome from '../components/views/icons/FontAwesome';
import SimpleLineIcons from '../components/views/icons/SimpleLineIcons';
import CoreUIIcons from '../components/views/icons/CoreUIIcons';

// Views - Notifications
import Alerts from '../components/views/notifications/Alerts';
import Badges from '../components/views/notifications/Badges';
import Modals from '../components/views/notifications/Modals';

// Views - Pages
import Page404 from '../components/views/pages/Page404';
import Page500 from '../components/views/pages/Page500';
import Login from '../components/views/pages/Login';
import Register from '../components/views/pages/Register';

// Users
import Users from '../components/views/users/Users';
import User from '../components/views/users/User';

Vue.use(Router);

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: DefaultContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'theme',
                    redirect: '/theme/colors',
                    name: 'Theme',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'colors',
                            name: 'Colors',
                            component: Colors
                        },
                        {
                            path: 'typography',
                            name: 'Typography',
                            component: Typography
                        }
                    ]
                },
                {
                    path: 'charts',
                    name: 'Charts',
                    component: Charts
                },
                {
                    path: 'widgets',
                    name: 'Widgets',
                    component: Widgets
                },
                {
                    path: 'users',
                    meta: { label: 'Users'},
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '',
                            component: Users,
                        },
                        {
                            path: ':id',
                            meta: { label: 'User Details'},
                            name: 'User',
                            component: User,
                        },
                    ]
                },
                {
                    path: 'base',
                    redirect: '/base/cards',
                    name: 'Base',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'cards',
                            name: 'Cards',
                            component: Cards
                        },
                        {
                            path: 'forms',
                            name: 'Forms',
                            component: Forms
                        },
                        {
                            path: 'switches',
                            name: 'Switches',
                            component: Switches
                        },
                        {
                            path: 'tables',
                            name: 'Tables',
                            component: Tables
                        },
                        {
                            path: 'tabs',
                            name: 'Tabs',
                            component: Tabs
                        },
                        {
                            path: 'breadcrumbs',
                            name: 'Breadcrumbs',
                            component: Breadcrumbs
                        },
                        {
                            path: 'carousels',
                            name: 'Carousels',
                            component: Carousels
                        },
                        {
                            path: 'collapses',
                            name: 'Collapses',
                            component: Collapses
                        },
                        {
                            path: 'jumbotrons',
                            name: 'Jumbotrons',
                            component: Jumbotrons
                        },
                        {
                            path: 'list-groups',
                            name: 'List Groups',
                            component: ListGroups
                        },
                        {
                            path: 'navs',
                            name: 'Navs',
                            component: Navs
                        },
                        {
                            path: 'navbars',
                            name: 'Navbars',
                            component: Navbars
                        },
                        {
                            path: 'paginations',
                            name: 'Paginations',
                            component: Paginations
                        },
                        {
                            path: 'popovers',
                            name: 'Popovers',
                            component: Popovers
                        },
                        {
                            path: 'progress-bars',
                            name: 'Progress Bars',
                            component: ProgressBars
                        },
                        {
                            path: 'tooltips',
                            name: 'Tooltips',
                            component: Tooltips
                        }
                    ]
                },
                {
                    path: 'buttons',
                    redirect: '/buttons/standard-buttons',
                    name: 'Buttons',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'standard-buttons',
                            name: 'Standard Buttons',
                            component: StandardButtons
                        },
                        {
                            path: 'button-groups',
                            name: 'Button Groups',
                            component: ButtonGroups
                        },
                        {
                            path: 'dropdowns',
                            name: 'Dropdowns',
                            component: Dropdowns
                        },
                        {
                            path: 'brand-buttons',
                            name: 'Brand Buttons',
                            component: BrandButtons
                        }
                    ]
                },
                {
                    path: 'icons',
                    redirect: '/icons/font-awesome',
                    name: 'Icons',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'coreui-icons',
                            name: 'CoreUI Icons',
                            component: CoreUIIcons
                        },
                        {
                            path: 'flags',
                            name: 'Flags',
                            component: Flags
                        },
                        {
                            path: 'font-awesome',
                            name: 'Font Awesome',
                            component: FontAwesome
                        },
                        {
                            path: 'simple-line-icons',
                            name: 'Simple Line Icons',
                            component: SimpleLineIcons
                        }
                    ]
                },
                {
                    path: 'notifications',
                    redirect: '/notifications/alerts',
                    name: 'Notifications',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'alerts',
                            name: 'Alerts',
                            component: Alerts
                        },
                        {
                            path: 'badges',
                            name: 'Badges',
                            component: Badges
                        },
                        {
                            path: 'modals',
                            name: 'Modals',
                            component: Modals
                        }
                    ]
                }
            ]
        },
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            component: {
                render (c) { return c('router-view') }
            },
            children: [
                {
                    path: '404',
                    name: 'Page404',
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register
                }
            ]
        }
    ]
})
