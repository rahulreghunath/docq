import Vue from 'vue';
import Router from 'vue-router';

// Containers
const DefaultContainer = () => import('../components/containers/DefaultContainer');

// Views
const Dashboard = () => import('../components/views/Dashboard');

const Colors = () => import('../components/views/theme/Colors');
const Typography = () => import('../components/views/theme/Typography');

const Charts = () => import('../components/views/Charts');
const Widgets = () => import('../components/views/Widgets');

// Views - Components
const Cards = () => import('../components/views/base/Cards');
const Forms = () => import('../components/views/base/Forms');
const Switches = () => import('../components/views/base/Switches');
const Tables = () => import('../components/views/base/Tables');
const Tabs = () => import('../components/views/base/Tabs');
const Breadcrumbs = () => import('../components/views/base/Breadcrumbs');
const Carousels = () => import('../components/views/base/Carousels');
const Collapses = () => import('../components/views/base/Collapses');
const Jumbotrons = () => import('../components/views/base/Jumbotrons');
const ListGroups = () => import('../components/views/base/ListGroups');
const Navs = () => import('../components/views/base/Navs');
const Navbars = () => import('../components/views/base/Navbars');
const Paginations = () => import('../components/views/base/Paginations');
const Popovers = () => import('../components/views/base/Popovers');
const ProgressBars = () => import('../components/views/base/ProgressBars');
const Tooltips = () => import('../components/views/base/Tooltips');

// Views - Buttons
const StandardButtons = () => import('../components/views/buttons/StandardButtons');
const ButtonGroups = () => import('../components/views/buttons/ButtonGroups');
const Dropdowns = () => import('../components/views/buttons/Dropdowns');
const BrandButtons = () => import('../components/views/buttons/BrandButtons');

// Views - Icons
const Flags = () => import('../components/views/icons/Flags');
const FontAwesome = () => import('../components/views/icons/FontAwesome');
const SimpleLineIcons = () => import('../components/views/icons/SimpleLineIcons');
const CoreUIIcons = () => import('../components/views/icons/CoreUIIcons');

// Views - Notifications
const Alerts = () => import('../components/views/notifications/Alerts');
const Badges = () => import('../components/views/notifications/Badges');
const Modals = () => import('../components/views/notifications/Modals');

// Views - Pages
const Page404 = () => import('../components/views/pages/Page404');
const Page500 = () => import('../components/views/pages/Page500');
const Login = () => import('../components/views/pages/Login');
const Register = () => import('../components/views/pages/Register');
const DoctorSpecialization = () => import('../components/views/pages/DoctorSpecialization');
const DoctorQualifications = () => import('../components/views/pages/DoctorQualifications');
const AddDoctor = () => import('../components/views/pages/AddDoctor');

// Users
const Users = () => import('../components/views/users/Users');
const User = () => import('../components/views/users/User');

// Actions
const Logout = () => import('../components/views/actions/Logout');

Vue.use(Router);

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: DefaultContainer,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: 'doctor',
                    name: 'doctor',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'specialization',
                            name: 'doctorSpecialization',
                            component: DoctorSpecialization,
                            meta: {label: 'Specializations'},
                        },
                        {
                            path: 'qualifications',
                            name: 'doctorQualification',
                            component: DoctorQualifications,
                            meta: {label: 'Qualifications'},
                        },
                        {
                            path: 'add-new',
                            name: 'addDoctor',
                            component: AddDoctor,
                            meta: {label: 'Add Doctor'},
                        }
                    ]
                },
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
                        render(c) {
                            return c('router-view')
                        }
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
                    meta: {label: 'Users'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: Users,
                        },
                        {
                            path: ':id',
                            meta: {label: 'User Details'},
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
                        render(c) {
                            return c('router-view')
                        }
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
                        render(c) {
                            return c('router-view')
                        }
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
                        render(c) {
                            return c('router-view')
                        }
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
                        render(c) {
                            return c('router-view')
                        }
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
                render(c) {
                    return c('router-view')
                }
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
        },
        {
            path: '/login',
            name: 'adminLogin',
            component: Login,
        },
        {
            path: '/logout',
            name: 'adminLogout',
            component: Logout,
        }
    ]
});

