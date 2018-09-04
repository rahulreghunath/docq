import Vue from 'vue';
import Router from 'vue-router';

// Containers
const DefaultContainer = () => import(/* webpackChunkName: "admin/components/containers/DefaultContainer" */ '../components/containers/DefaultContainer');

// Views
const Dashboard = () => import(/* webpackChunkName: "admin/components/views/Dashboard" */ '../components/views/Dashboard');

const Colors = () => import(/* webpackChunkName: "admin/components/views/theme/Colors" */ '../components/views/theme/Colors');
const Typography = () => import(/* webpackChunkName: "admin/components/views/theme/Typography" */ '../components/views/theme/Typography');

const Charts = () => import(/* webpackChunkName: "admin/components/views/Charts" */ '../components/views/Charts');
const Widgets = () => import(/* webpackChunkName: "admin/components/views/Widgets" */ '../components/views/Widgets');

// Views / Components
const Cards = () => import(/* webpackChunkName: "admin/components/views/base/Cards" */ '../components/views/base/Cards');
const Forms = () => import(/* webpackChunkName: "admin/components/views/base/Forms" */ '../components/views/base/Forms');
const Switches = () => import(/* webpackChunkName: "admin/components/views/base/Switches" */ '../components/views/base/Switches');
const Tables = () => import(/* webpackChunkName: "admin/components/views/base/Tables" */ '../components/views/base/Tables');
const Tabs = () => import(/* webpackChunkName: "admin/components/views/base/Tabs" */ '../components/views/base/Tabs');
const Breadcrumbs = () => import(/* webpackChunkName: "admin/components/views/base/Breadcrumbs" */ '../components/views/base/Breadcrumbs');
const Carousels = () => import(/* webpackChunkName: "admin/components/views/base/Carousels" */ '../components/views/base/Carousels');
const Collapses = () => import(/* webpackChunkName: "admin/components/views/base/Collapses" */ '../components/views/base/Collapses');
const Jumbotrons = () => import(/* webpackChunkName: "admin/components/views/base/Jumbotrons" */ '../components/views/base/Jumbotrons');
const ListGroups = () => import(/* webpackChunkName: "admin/components/views/base/ListGroups" */ '../components/views/base/ListGroups');
const Navs = () => import(/* webpackChunkName: "admin/components/views/base/Navs" */ '../components/views/base/Navs');
const Navbars = () => import(/* webpackChunkName: "admin/components/views/base/Navbars" */ '../components/views/base/Navbars');
const Paginations = () => import(/* webpackChunkName: "admin/components/views/base/Paginations" */ '../components/views/base/Paginations');
const Popovers = () => import(/* webpackChunkName: "admin/components/views/base/Popovers" */ '../components/views/base/Popovers');
const ProgressBars = () => import(/* webpackChunkName: "admin/components/views/base/ProgressBars" */ '../components/views/base/ProgressBars');
const Tooltips = () => import(/* webpackChunkName: "admin/components/views/base/Tooltips" */ '../components/views/base/Tooltips');

// Views - Buttons
const StandardButtons = () => import(/* webpackChunkName: "admin/components/views/buttons/StandardButtons" */ '../components/views/buttons/StandardButtons');
const ButtonGroups = () => import(/* webpackChunkName: "admin/components/views/buttons/ButtonGroups" */ '../components/views/buttons/ButtonGroups');
const Dropdowns = () => import(/* webpackChunkName: "admin/components/views/buttons/Dropdowns" */ '../components/views/buttons/Dropdowns');
const BrandButtons = () => import(/* webpackChunkName: "admin/components/views/buttons/BrandButtons" */ '../components/views/buttons/BrandButtons');

// Views - Icons
const Flags = () => import(/* webpackChunkName: "admin/components/views/icons/Flags" */ '../components/views/icons/Flags');
const FontAwesome = () => import(/* webpackChunkName: "admin/components/views/icons/FontAwesome" */ '../components/views/icons/FontAwesome');
const SimpleLineIcons = () => import(/* webpackChunkName: "admin/components/views/icons/SimpleLineIcons" */ '../components/views/icons/SimpleLineIcons');
const CoreUIIcons = () => import(/* webpackChunkName: "admin/components/views/icons/CoreUIIcons" */ '../components/views/icons/CoreUIIcons');

// Views - Notifications
const Alerts = () => import(/* webpackChunkName: "admin/components/views/notifications/Alerts" */ '../components/views/notifications/Alerts');
const Badges = () => import(/* webpackChunkName: "admin/components/views/notifications/Badges" */ '../components/views/notifications/Badges');
const Modals = () => import(/* webpackChunkName: "admin/components/views/notifications/Modals" */ '../components/views/notifications/Modals');

// Views - Pages
const Page404 = () => import(/* webpackChunkName: "admin/components/views/pages/Page404" */ '../components/views/pages/Page404');
const Page500 = () => import(/* webpackChunkName: "admin/components/views/pages/Page500" */ '../components/views/pages/Page500');
const Login = () => import(/* webpackChunkName: "admin/components/views/pages/Login" */ '../components/views/pages/Login');
const Register = () => import(/* webpackChunkName: "admin/components/views/pages/Register" */ '../components/views/pages/Register');
const DoctorSpecialization = () => import(/* webpackChunkName: "admin/components/views/pages/DoctorSpecialization" */ '../components/views/pages/DoctorSpecialization');
const DoctorQualifications = () => import(/* webpackChunkName: "admin/components/views/pages/DoctorQualifications" */ '../components/views/pages/DoctorQualifications');
const AddDoctor = () => import(/* webpackChunkName: "admin/components/views/pages/AddDoctor" */ '../components/views/pages/AddDoctor');
const AddDoctorImage = () => import(/* webpackChunkName: "admin/components/views/pages/AddDoctor" */ '../components/views/pages/AddDoctorImage');

// Users
const Users = () => import(/* webpackChunkName: "admin/components/views/users/Users" */ '../components/views/users/Users');
const User = () => import(/* webpackChunkName: "admin/components/views/users/User" */ '../components/views/users/User');

// Actions
const Logout = () => import(/* webpackChunkName: "admin/components/views/actions/Logout" */ '../components/views/actions/Logout');

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
                    redirect: {name: 'addDoctor'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'specializations',
                            name: 'doctorSpecialization',
                            component: DoctorSpecialization,
                            meta: {
                                label: 'Specializations',
                                title: 'Doctor Specializations'
                            },
                        },
                        {
                            path: 'qualifications',
                            name: 'doctorQualification',
                            component: DoctorQualifications,
                            meta: {
                                label: 'Qualifications',
                                title: 'Doctor Qualifications'
                            },
                        },
                        {
                            path: 'add-new',
                            name: 'addDoctor',
                            component: AddDoctor,
                            meta: {
                                label: 'Add Doctor',
                                title: 'Add Doctor'
                            },
                        },
                        {
                            path: 'add-image/:id',
                            name: 'addDoctorImage',
                            component: AddDoctorImage,
                            meta: {
                                label: 'Add Doctor Image',
                                title: 'Doctor Image'
                            },
                        }
                    ]
                },
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard,
                    meta: {
                        title: 'Home'
                    },
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

