import {AnalyticsDashboardAppConfig} from './dashboards/analytics/AnalyticsDashboardAppConfig';
import {ProjectDashboardAppConfig} from './dashboards/project/ProjectDashboardAppConfig';
import {TodoAppConfig} from './todo/TodoAppConfig';
import {CustomersAppConfig} from './e-commerce/customers/CustomersAppConfig';
import {CalendarAppConfig} from './calendar/CalendarAppConfig';
import {ScrumboardAppConfig} from './scrumboard/ScrumboardAppConfig';
import {NotesAppConfig} from './notes/NotesAppConfig';
import {ProductsAppConfig} from './e-commerce/products/ProductsAppConfig';
import {OrdersAppConfig} from './e-commerce/orders/OrdersAppConfig';
import {PersonnelAppConfig} from './e-commerce/personnel/PersonnelAppConfig';

export const appsConfigs = [
    AnalyticsDashboardAppConfig,
    ProjectDashboardAppConfig,
    TodoAppConfig,
    CustomersAppConfig,
    ProductsAppConfig,
    OrdersAppConfig,
    PersonnelAppConfig,
    CalendarAppConfig,
    // ECommerceAppConfig,
    ScrumboardAppConfig,
    NotesAppConfig
];
