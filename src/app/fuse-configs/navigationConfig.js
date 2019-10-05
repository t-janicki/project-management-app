
const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'E-Commerce',
        'type'    : 'group',
        'icon'    : 'shopping_cart',
        'children': [
            // {
            //     'id'      : 'dashboards',
            //     'title'   : 'Dashboards',
            //     'type'    : 'collapse',
            //     'icon'    : 'dashboard',
            //     'children': [
            //         {
            //             'id'   : 'analytics-dashboard',
            //             'title': 'Analytics',
            //             'type' : 'item',
            //             'url'  : '/apps/dashboards/analytics'
            //         },
            //         {
            //             'id'   : 'project-dashboard',
            //             'title': 'Project',
            //             'type' : 'item',
            //             'url'  : '/apps/dashboards/project'
            //         }
            //     ]
            // },
            {
                'id'   : 'e-commerce-personnel',
                'title': 'Personnel',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/personnel',
                'exact': true
            },
            {
                'id'   : 'e-commerce-customers',
                'title': 'Customers',
                'type' : 'item',
                'icon' : 'people',
                'url'  : '/customers',
                'exact': true
            },
            {
                'id'   : 'e-commerce-products',
                'title': 'Products',
                'type' : 'item',
                'icon' : 'store_mall_directory',
                'url'  : '/products',
                'exact': true
            },
            {
                'id'   : 'e-commerce-orders',
                'title': 'Orders',
                'type' : 'item',
                'icon' : 'local_dining',
                'url'  : '/orders',
                'exact': true
            },
        ]
    },
    {
        'id'   : 'todo',
        'title': 'To-Do-App',
        'type' : 'item',
        'icon' : 'check_box',
        // 'url'  : '/apps/todo',
        'url'  : '/coming-soon',
    },
    {
        'id'   : 'calendar',
        'title': 'Calendar',
        'type' : 'item',
        'icon' : 'today',
        // 'url'  : '/apps/calendar'
        'url'  : '/coming-soon',
    },
    {
        'id'   : 'scrumboard',
        'title': 'Scrumboard',
        'type' : 'item',
        'icon' : 'assessment',
        'url'  : '/apps/scrumboard'
        // 'url'  : '/coming-soon',
    },
    // {
    //     'id'      : 'pages',
    //     'title'   : 'Pages',
    //     'type'    : 'group',
    //     'icon'    : 'pages',
    //     'children': [
    //         {
    //             'id'      : 'authentication',
    //             'title'   : 'Authentication',
    //             'type'    : 'collapse',
    //             'icon'    : 'lock',
    //             'badge'   : {
    //                 'title': 10,
    //                 'bg'   : '#525E8A',
    //                 'fg'   : '#FFFFFF'
    //             },
    //             'children': [
    //                 {
    //                     'id'   : 'authentication-login',
    //                     'title': 'Login',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/login'
    //                 },
    //                 {
    //                     'id'   : 'login-v2',
    //                     'title': 'Login v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/login-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-register',
    //                     'title': 'Register',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/register'
    //                 },
    //                 {
    //                     'id'   : 'authentication-register-v2',
    //                     'title': 'Register v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/register-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-forgot-password',
    //                     'title': 'Forgot Password',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/forgot-password'
    //                 },
    //                 {
    //                     'id'   : 'authentication-forgot-password-v2',
    //                     'title': 'Forgot Password v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/forgot-password-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-reset-password',
    //                     'title': 'Reset Password',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/reset-password'
    //                 },
    //                 {
    //                     'id'   : 'authentication-reset-password-v2',
    //                     'title': 'Reset Password v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/reset-password-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-lock-screen',
    //                     'title': 'Lock Screen',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/lock'
    //                 },
    //                 {
    //                     'id'   : 'authentication-mail-confirmation',
    //                     'title': 'Mail Confirmation',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/mail-confirm'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'coming-soon',
    //             'title': 'Coming Soon',
    //             'type' : 'item',
    //             'icon' : 'alarm',
    //             'url'  : '/pages/coming-soon'
    //         },
    //         {
    //             'id'      : 'errors',
    //             'title'   : 'Errors',
    //             'type'    : 'collapse',
    //             'icon'    : 'error',
    //             'children': [
    //                 {
    //                     'id'   : '404',
    //                     'title': '404',
    //                     'type' : 'item',
    //                     'url'  : '/pages/errors/error-404'
    //                 },
    //                 {
    //                     'id'   : '500',
    //                     'title': '500',
    //                     'type' : 'item',
    //                     'url'  : '/pages/errors/error-500'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'invoice',
    //             'title'   : 'Invoice',
    //             'type'    : 'collapse',
    //             'icon'    : 'receipt',
    //             'children': [
    //                 {
    //                     'id'   : 'modern',
    //                     'title': 'Modern',
    //                     'type' : 'item',
    //                     'url'  : '/pages/invoices/modern'
    //                 },
    //                 {
    //                     'id'   : 'compact',
    //                     'title': 'Compact',
    //                     'type' : 'item',
    //                     'url'  : '/pages/invoices/compact'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'maintenance',
    //             'title': 'Maintenance',
    //             'type' : 'item',
    //             'icon' : 'build',
    //             'url'  : '/pages/maintenance'
    //         },
    //         {
    //             'id'      : 'pricing',
    //             'title'   : 'Pricing',
    //             'type'    : 'collapse',
    //             'icon'    : 'attach_money',
    //             'children': [
    //                 {
    //                     'id'   : 'style-1',
    //                     'title': 'Style 1',
    //                     'type' : 'item',
    //                     'url'  : '/pages/pricing/style-1'
    //                 },
    //                 {
    //                     'id'   : 'style-2',
    //                     'title': 'Style 2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/pricing/style-2'
    //                 },
    //                 {
    //                     'id'   : 'style-3',
    //                     'title': 'Style 3',
    //                     'type' : 'item',
    //                     'url'  : '/pages/pricing/style-3'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'profile',
    //             'title': 'Profile',
    //             'type' : 'item',
    //             'icon' : 'person',
    //             'url'  : '/pages/profile'
    //         },
    //         {
    //             'id'      : 'search',
    //             'title'   : 'Search',
    //             'type'    : 'collapse',
    //             'icon'    : 'search',
    //             'children': [
    //                 {
    //                     'id'   : 'classic-search',
    //                     'title': 'Classic Search',
    //                     'type' : 'item',
    //                     'url'  : '/pages/search/classic'
    //                 },
    //                 {
    //                     'id'   : 'modern-search',
    //                     'title': 'Modern Search',
    //                     'type' : 'item',
    //                     'url'  : '/pages/search/modern'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'faq',
    //             'title': 'Faq',
    //             'type' : 'item',
    //             'icon' : 'help',
    //             'url'  : '/pages/faq'
    //         },
    //         {
    //             'id'   : 'knowledge-base',
    //             'title': 'Knowledge Base',
    //             'type' : 'item',
    //             'icon' : 'import_contacts',
    //             'url'  : '/pages/knowledge-base'
    //         }
    //     ]
    // },
    // {
    //     'id'      : 'user-interface',
    //     'title'   : 'User Interface',
    //     'type'    : 'group',
    //     'icon'    : 'web',
    //     'children': [
    //         {
    //             'id'   : 'icons',
    //             'title': 'Icons',
    //             'type' : 'item',
    //             'icon' : 'photo',
    //             'url'  : '/ui/icons'
    //         },
    //         {
    //             'id'   : 'typography',
    //             'title': 'Typography',
    //             'type' : 'item',
    //             'icon' : 'text_fields',
    //             'url'  : '/ui/typography'
    //         },
    //         {
    //             'id'   : 'helper-classes',
    //             'title': 'Helper Classes',
    //             'type' : 'item',
    //             'icon' : 'help',
    //             'url'  : '/ui/helper-classes'
    //         },
    //         {
    //             'id'      : 'page-layouts',
    //             'title'   : 'Page Layouts',
    //             'type'    : 'collapse',
    //             'icon'    : 'view_quilt',
    //             'children': [
    //                 {
    //                     'id'      : 'carded',
    //                     'title'   : 'Carded',
    //                     'type'    : 'collapse',
    //                     'badge'   : {
    //                         'title': 12,
    //                         'bg'   : '#525E8A',
    //                         'fg'   : '#FFFFFF'
    //                     },
    //                     'children': [
    //                         {
    //                             'id'   : 'carded-full-width',
    //                             'title': 'Full Width',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width'
    //                         },
    //                         {
    //                             'id'   : 'carded-full-width-tabbed',
    //                             'title': 'Full Width Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-full-width-2',
    //                             'title': 'Full Width 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width-2'
    //                         },
    //                         {
    //                             'id'   : 'carded-full-width-2-tabbed',
    //                             'title': 'Full Width 2 Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width-2-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar',
    //                             'title': 'Left Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar-tabbed',
    //                             'title': 'Left Sidebar Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar-2',
    //                             'title': 'Left Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar-2-tabbed',
    //                             'title': 'Left Sidebar 2 Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar-2-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar',
    //                             'title': 'Right Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar-tabbed',
    //                             'title': 'Right Sidebar Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar-2',
    //                             'title': 'Right Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar-2-tabbed',
    //                             'title': 'Right Sidebar 2 Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar-2-tabbed'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'      : 'simple',
    //                     'title'   : 'Simple',
    //                     'type'    : 'collapse',
    //                     'badge'   : {
    //                         'title': 8,
    //                         'bg'   : '#525E8A',
    //                         'fg'   : '#FFFFFF'
    //                     },
    //                     'children': [
    //                         {
    //                             'id'   : 'simple-full-width',
    //                             'title': 'Full Width',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/full-width'
    //                         },
    //                         {
    //                             'id'   : 'simple-left-sidebar',
    //                             'title': 'Left Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/left-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'simple-left-sidebar-2',
    //                             'title': 'Left Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/left-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'simple-left-sidebar-3',
    //                             'title': 'Left Sidebar 3',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/left-sidebar-3'
    //                         },
    //                         {
    //                             'id'   : 'simple-right-sidebar',
    //                             'title': 'Right Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/right-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'simple-right-sidebar-2',
    //                             'title': 'Right Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/right-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'simple-right-sidebar-3',
    //                             'title': 'Right Sidebar 3',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/right-sidebar-3'
    //                         },
    //                         {
    //                             'id'   : 'simple-tabbed',
    //                             'title': 'Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/tabbed'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'   : 'blank',
    //                     'title': 'Blank',
    //                     'type' : 'item',
    //                     'url'  : '/ui/page-layouts/blank'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     'id'      : 'Documentation',
    //     'title'   : 'Documentation',
    //     'type'    : 'group',
    //     'icon'    : 'star',
    //     'children': [
    //         {
    //             'id'   : 'changelog',
    //             'title': 'Changelog',
    //             'type' : 'item',
    //             'icon' : 'history',
    //             'url'  : '/documentation/changelog',
    //             'badge': {
    //                 'title': '3.1.0',
    //                 'bg'   : 'rgb(236, 12, 142)',
    //                 'fg'   : '#FFFFFF'
    //             }
    //         },
    //         {
    //             'id'      : 'getting-started-doc',
    //             'title'   : 'Getting Started',
    //             'type'    : 'collapse',
    //             'icon'    : 'import_contacts',
    //             'children': [
    //                 {
    //                     'id'   : 'introduction-doc',
    //                     'title': 'Introduction',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/getting-started/introduction'
    //                 },
    //                 {
    //                     'id'   : 'installation-doc',
    //                     'title': 'Installation',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/getting-started/installation'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'working-with-fuse-react-doc',
    //             'title'   : 'Working with Fuse',
    //             'type'    : 'collapse',
    //             'icon'    : 'import_contacts',
    //             'children': [
    //                 {
    //                     'id'   : 'development-doc',
    //                     'title': 'Development',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/development'
    //                 },
    //                 {
    //                     'id'   : 'production-doc',
    //                     'title': 'Production',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/production'
    //                 },
    //                 {
    //                     'id'   : 'project-structure-doc',
    //                     'title': 'Project Structure',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/project-structure'
    //                 },
    //                 {
    //                     'id'   : 'updating-fuse-react-doc',
    //                     'title': 'Updating Fuse React',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/updating-fuse-react'
    //                 },
    //                 {
    //                     'id'   : 'theming-doc',
    //                     'title': 'Theming',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/theming'
    //                 },
    //                 {
    //                     'id'   : 'theme-layouts-doc',
    //                     'title': 'Theme Layouts',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/theme-layouts'
    //                 },
    //                 {
    //                     'id'   : 'page-layouts-doc',
    //                     'title': 'Page Layouts',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/page-layouts'
    //                 },
    //                 {
    //                     'id'   : 'settings-doc',
    //                     'title': 'Settings',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/settings'
    //                 },
    //                 {
    //                     'id'   : 'fuse-react-routing-doc',
    //                     'title': 'Routing',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/routing'
    //                 },
    //                 {
    //                     'id'   : 'fuse-react-code-splitting-doc',
    //                     'title': 'Code Splitting',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/code-splitting'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'authentication-doc',
    //             'title'   : 'Authentication',
    //             'type'    : 'collapse',
    //             'icon'    : 'import_contacts',
    //             'children': [
    //                 {
    //                     'id'   : 'jwt-auth-doc',
    //                     'title': 'JWT',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/authentication/jwt'
    //                 },
    //                 {
    //                     'id'   : 'firebase-auth-doc',
    //                     'title': 'Firebase',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/authentication/firebase'
    //                 },
    //                 {
    //                     'id'   : 'auth0-auth-doc',
    //                     'title': 'Auth0',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/authentication/auth0'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'fuse-components',
    //             'title'   : 'Fuse Components',
    //             'type'    : 'collapse',
    //             'icon'    : 'widgets',
    //             'children': [
    //                 {
    //                     'id'   : 'fuse-auth',
    //                     'title': 'FuseAuthorization',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-authorization'
    //                 },
    //                 {
    //                     'id'   : 'fuse-theme',
    //                     'title': 'FuseTheme',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-theme'
    //                 },
    //                 {
    //                     'id'   : 'fuse-layout',
    //                     'title': 'FuseLayout',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-layout'
    //                 },
    //                 {
    //                     'id'      : 'fuse-components-page',
    //                     'title'   : 'Fuse Page Layouts',
    //                     'type'    : 'collapse',
    //                     'children': [
    //                         {
    //                             'id'   : 'fuse-page-carded',
    //                             'title': 'FusePageCarded',
    //                             'type' : 'item',
    //                             'url'  : '/documentation/fuse-components/fuse-page-carded'
    //                         },
    //                         {
    //                             'id'   : 'fuse-page-simple',
    //                             'title': 'FusePageSimple',
    //                             'type' : 'item',
    //                             'url'  : '/documentation/fuse-components/fuse-page-simple'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'   : 'fuse-navigation',
    //                     'title': 'FuseNavigation',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-navigation'
    //                 },
    //                 {
    //                     'id'   : 'fuse-scrollbars',
    //                     'title': 'FuseScrollbars',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-scrollbars'
    //                 },
    //                 {
    //                     'id'   : 'fuse-highlight',
    //                     'title': 'FuseHighlight',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-highlight'
    //                 },
    //                 {
    //                     'id'   : 'fuse-countdown',
    //                     'title': 'FuseCountdown',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-countdown'
    //                 },
    //                 {
    //                     'id'   : 'fuse-message',
    //                     'title': 'FuseMessage',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-message'
    //                 },
    //                 {
    //                     'id'   : 'fuse-dialog',
    //                     'title': 'FuseDialog',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-dialog'
    //                 },
    //                 {
    //                     'id'   : 'fuse-animate',
    //                     'title': 'FuseAnimate',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-animate'
    //                 },
    //                 {
    //                     'id'   : 'fuse-animate-group',
    //                     'title': 'FuseAnimateGroup',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-animate-group'
    //                 },
    //                 {
    //                     'id'   : 'fuse-chip-select',
    //                     'title': 'FuseChipSelect',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/fuse-components/fuse-chip-select'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'material-ui-components',
    //             'title'   : 'Material UI Components',
    //             'type'    : 'collapse',
    //             'icon'    : 'layers',
    //             'children': [
    //                 ...MaterialUIComponentsNavigation
    //             ]
    //         },
    //         {
    //             'id'      : '3rd-party-components',
    //             'title'   : '3rd Party Components',
    //             'type'    : 'collapse',
    //             'icon'    : 'settings_input_component',
    //             'children': [
    //                 {
    //                     'id'      : 'datatables',
    //                     'title'   : 'Datatables',
    //                     'type'    : 'collapse',
    //                     'children': [
    //                         {
    //                             'id'   : 'react-table',
    //                             'title': 'React Table',
    //                             'type' : 'item',
    //                             'url'  : '/documentation/third-party-components/datatables/react-table'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'   : 'formsy',
    //                     'title': 'Formsy',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/third-party-components/formsy'
    //                 },
    //                 {
    //                     'id'   : 'google-map-react',
    //                     'title': 'Google Map React',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/third-party-components/google-map-react'
    //                 },
    //                 {
    //                     'id'   : 'react-chartjs-2',
    //                     'title': 'React ChartJs 2',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/third-party-components/react-chartjs-2'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     'type': 'divider',
    //     'id'  : 'divider-1'
    // },
    // {
    //     'id'      : 'auth',
    //     'title'   : 'Auth',
    //     'type'    : 'group',
    //     'icon'    : 'apps',
    //     'children': [
    //         {
    //             'id'   : 'login',
    //             'title': 'Login',
    //             'type' : 'item',
    //             'url'  : '/login',
    //             auth   : authRoles.onlyGuest,
    //             'icon' : 'lock'
    //         },
    //         {
    //             'id'   : 'register',
    //             'title': 'Register',
    //             'type' : 'item',
    //             'url'  : '/register',
    //             auth   : authRoles.onlyGuest,
    //             'icon' : 'person_add'
    //         },
    //         {
    //             'id'   : 'logout',
    //             'title': 'Logout',
    //             'type' : 'item',
    //             auth   : authRoles.user,
    //             'url'  : '/logout',
    //             'icon' : 'exit_to_app'
    //         },
    //         {
    //             'id'   : 'auth-admin-example',
    //             'title': 'Admin: Auth protected page',
    //             'type' : 'item',
    //             'url'  : '/auth/admin-role-example',
    //             'icon' : 'security'
    //         },
    //         {
    //             'id'   : 'only-admin-navigation-item',
    //             'title': 'Nav item only for Admin',
    //             'type' : 'item',
    //             'auth' : authRoles.admin,
    //             'url'  : '/auth/admin-role-example',
    //             'icon' : 'verified_user'
    //         },
    //         {
    //             'id'   : 'auth-manager-example',
    //             'title': 'Staff: Auth protected page',
    //             'type' : 'item',
    //             'url'  : '/auth/manager-role-example',
    //             'icon' : 'security'
    //         },
    //         {
    //             'id'   : 'only-manager-navigation-item',
    //             'title': 'Nav item only for Staff',
    //             'type' : 'item',
    //             'auth' : authRoles.manager,
    //             'url'  : '/auth/manager-role-example',
    //             'icon' : 'verified_user'
    //         },
    //         {
    //             'id'   : 'auth-guest-example',
    //             'title': 'Guest: Auth protected page',
    //             'type' : 'item',
    //             'url'  : '/auth/guest-role-example',
    //             'icon' : 'security'
    //         },
    //         {
    //             'id'   : 'only-guest-navigation-item',
    //             'title': 'Nav item only for Guest',
    //             'type' : 'item',
    //             'auth' : authRoles.onlyGuest,
    //             'url'  : '/auth/guest-role-example',
    //             'icon' : 'verified_user'
    //         }
    //     ]
    // },
    {
        'type': 'divider',
        'id'  : 'divider-2'
    },
];

export default navigationConfig;