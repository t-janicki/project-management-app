import {combineReducers} from 'redux';
import customers from './customers.reducer';
import customer from './customer.reducer';
import products from './products.reducer';
import product from './product.reducer';
import orders from './orders.reducer';
import order from './order.reducer';
import dailyOrdersList from './daily.orders.reducer';
import personnel from './personnel.reducer';
import person from './person.reducer';

const reducer = combineReducers({
    products,
    product,
    orders,
    order,
    dailyOrdersList,
    customers,
    customer,
    personnel,
    person
});

export default reducer;
