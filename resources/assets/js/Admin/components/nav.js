export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'primary',
                text: 'NEW'
            }
        },
        {
            title: true,
            name: 'Theme',
            class: '',
            wrapper: {
                element: '',
                attributes: {}
            }
        },
        {
            name: 'Booking',
            url: '/booking/new-booking',
            icon: 'fa fa-calendar-plus-o'
        },
        {
            name: 'Patients',
            url: '/patients',
            icon: 'icon-pencil'
        },
        {
            title: true,
            name: 'Components',
            class: '',
            wrapper: {
                element: '',
                attributes: {}
            }
        },
        {
            name: 'Manage Doctor',
            url: '/base',
            icon: 'fa fa-bar-chart',
            children: [
                {
                    name: 'Doctors',
                    url: '/doctors',
                    icon: 'fa fa-user-md'
                },
                {
                    name: 'Add Doctor',
                    url: '/doctor/add-new',
                    icon: 'fa fa-user-plus'
                },
                {
                    name: 'Specialisations',
                    url: '/doctor/specializations',
                    icon: 'fa fa-sliders'
                },
                {
                    name: 'Qualifications',
                    url: '/doctor/qualifications',
                    icon: 'fa fa-university'
                },
            ]
        },
        {
            name: 'Manage Bookings',
            url: '/buttons',
            icon: 'fa fa-calendar-plus-o',
            children: [
                {
                    name: 'All Bookings',
                    url: '/booking/all-booking',
                    icon: 'fa fa-calendar'
                },
                {
                    name: 'Cancelled Bookings',
                    url: '/booking/cancelled-booking',
                    icon: 'icon-cursor'
                },
            ]
        },
        {
            name: 'Ivrs',
            url: '/ivrs',
            icon: 'fa fa-phone'
        },
        {
            divider: true
        },
    ]
}
