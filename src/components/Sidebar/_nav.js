export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        // Config for menu manager user
        {
            title: true,
            name: 'Người dùng',
            wrapper: {
                element: '',
                attributes: {}
            },
            class: ''
        },
        {
            name: 'Danh sách',
            url: '/user/list',
            icon: 'fa fa-users',
        },
        {
            name: 'Thống kê',
            url: '/user/add',
            icon: 'fa fa-bar-chart',
        },

        // Config for menu test
        {
            title: true,
            name: 'Kiểm tra',
            wrapper: {
                element: '',
                attributes: {}
            },
            class: ''
        },
        {
            name: 'Khối thi',
            url: '/theme/colors',
            icon: 'fa fa-mortar-board',
            children: [
                {
                    name: 'Danh sách',
                    url: '/category/list'
                },
                {
                    name: 'Thêm khối thi',
                    url: '/category/add'
                },
                {
                    name: 'Tìm kiếm',
                    url: '/theme/colors'
                }
            ]
        },
        {
            name: 'Bài thi',
            url: '/test/list',
            icon: 'fa fa-pencil-square',
            children: [
                {
                    name: 'Danh sách',
                    url: '/test/list'
                },
                {
                    name: 'Thêm bài thi',
                    url: '/test/add'
                }
            ]
        },
        {
            name: 'Câu hỏi',
            url: '/question/list',
            icon: 'fa fa-question-circle',
            children: [
                {
                    name: 'Danh sách',
                    url: '/question/list'
                },
                {
                    name: 'Thêm câu hỏi',
                    url: '/theme/colors'
                },
                {
                    name: 'Tìm kiếm',
                    url: '/theme/colors'
                }
            ]
        },

        // Config for payment
        {
            title: true,
            name: 'Thanh toán',
            wrapper: {
                element: '',
                attributes: {}
            },
            class: ''
        },
        {
            name: 'Danh sách',
            url: '/theme/colors',
            icon: 'fa fa-google-wallet',
        },
        {
            name: 'Thống kê',
            url: '/theme/typography',
            icon: 'fa fa-line-chart',
        },
    ]
};
