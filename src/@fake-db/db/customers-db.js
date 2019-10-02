import mock from './../mock';
import {FuseUtils} from '@fuse';
import _ from '@lodash';

const customersDB = {
    customers: [
        {
            'id': '5725a680b3249760ea21de52',
            'name': 'Abbott',
            'lastName': 'Keitch',
            'email': 'abbott@withinpixels.com',
            'phone': '+1-202-555-0175',
            'street': '933 8th Street Stamford',
            'postCode': 'CT 06902',
            'city': 'London',
            'country': 'England',
            'lat': 51.425490,
            'lng': 5.392840,
            orders: [
                {
                    'id': 1,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680606588342058356d',
            'name': 'Arnold',
            'lastName': 'Matlock',
            'email': 'arnold@withinpixels.com',
            'phone': '+1-202-555-0141',
            'street': '906 Valley Road  ',
            'postCode': 'IN 46360',
            'city': 'Michigan City',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 2,
                    'orderNumber': '1KSIE23J',
                    'date': 'today',
                    'customer': 'Arnold'
                }
            ]
        },
        {
            'id': '5725a68009e20d0a9e9acf2a',
            'name': 'Barrera',
            'lastName': 'Bradbury',
            'email': 'barrera@withinpixels.com',
            'phone': '+1-202-555-0196',
            'street': '183 River Street',
            'postCode': 'NJ 07055',
            'city': 'Passaic',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 3,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a6809fdd915739187ed5',
            'name': 'Blair',
            'lastName': 'Strangeway',
            'email': 'blair@withinpixels.com',
            'phone': '+1-202-555-0118',
            'street': '143 Jones Street Eau',
            'postCode': 'WI 54701',
            'city': 'Claire',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 4,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a68007920cf75051da64',
            'name': 'Boyle',
            'lastName': 'Winters',
            'email': 'boyle@withinpixels.com',
            'phone': '+1-202-555-0177',
            'street': '218 Pearl Street',
            'postCode': 'FL 33510',
            'city': 'Brandon',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 5,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a68031fdbb1db2c1af47',
            'name': 'Christy',
            'lastName': 'Camacho',
            'email': 'christy@withinpixels.com',
            'phone': '+1-202-555-0136',
            'street': '329 Bridge Street',
            'postCode': 'TX 75115',
            'city': 'Desoto',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 5,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680bc670af746c435e2',
            'name': 'Copeland',
            'lastName': 'Redcliff',
            'email': 'copeland@withinpixels.com',
            'phone': '+1-202-555-0107',
            'street': '956 6th Avenue North',
            'postCode': 'NJ 0704',
            'city': 'Bergen',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 6,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680e7eb988a58ddf303',
            'name': 'Estes',
            'lastName': 'Stevens',
            'email': 'estes@withinpixels.com',
            'phone': '+1-202-555-0113',
            'street': '664 York Street',
            'postCode': 'MA 02138',
            'city': 'Cambridge',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 7,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680dcb077889f758961',
            'name': 'Harper',
            'lastName': 'MacGuffin',
            'email': 'harper@withinpixels.com',
            'phone': '+1-202-555-0173',
            'street': '738 Route 11',
            'postCode': 'NC 28031',
            'city': 'Cornelius',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 8,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a6806acf030f9341e925',
            'name': 'Helen',
            'lastName': 'Sheridan',
            'email': 'helen@withinpixels.com',
            'phone': '+1-202-555-0163',
            'street': '194 Washington Avenue Saint',
            'postCode': 'FL 33702',
            'city': 'Petersburg',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 9,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680ae1ae9a3c960d487',
            'name': 'Henderson',
            'lastName': 'Cambias',
            'email': 'henderson@withinpixels.com',
            'phone': '+1-202-555-0151',
            'street': '686 Roosevelt Avenue',
            'postCode': 'FL 32765',
            'city': 'Oviedo',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 10,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680b8d240c011dd224b',
            'name': 'Josefina',
            'lastName': 'Lakefield',
            'email': 'josefina@withinpixels.com',
            'phone': '+1-202-555-0160',
            'street': '202 Hartford Road',
            'postCode': 'VA 24502',
            'city': 'Lynchburg',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 11,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a68034cb3968e1f79eac',
            'name': 'Katina',
            'lastName': 'Bletchley',
            'email': 'katina@withinpixels.com',
            'phone': '+1-202-555-0186',
            'street': '219 Woodland Road',
            'postCode': 'FL 33594',
            'city': 'Valrico',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 12,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a6801146cce777df2a08',
            'name': 'Lily',
            'lastName': 'Peasegood',
            'email': 'lily@withinpixels.com',
            'phone': '+1-202-555-0115',
            'street': '305 Willow Drive',
            'postCode': 'WI 54880',
            'city': 'Superior',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 13,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a6808a178bfd034d6ecf',
            'name': 'Mai',
            'lastName': 'Nox',
            'email': 'mai@withinpixels.com',
            'phone': '+1-202-555-0199',
            'street': '148 Heather Lane',
            'postCode': 'TN 37110',
            'city': 'Mcminnville',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 14,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680653c265f5c79b5a9',
            'name': 'Nancy',
            'lastName': 'Jaggers',
            'email': 'nancy@withinpixels.com',
            'phone': '+1-202-555-0120',
            'street': '345 Laurel Lane',
            'postCode': 'NJ 07087',
            'city': 'Union City',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 15,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680bbcec3cc32a8488a',
            'name': 'Nora',
            'lastName': 'Franklin',
            'email': 'nora@withinpixels.com',
            'phone': '+1-202-555-0172',
            'street': '572 Rose Street',
            'postCode': 'FL 34491',
            'city': 'Summerfield',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 16,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a6803d87f1b77e17b62b',
            'name': 'Odessa',
            'lastName': 'Goodman',
            'email': 'odessa@withinpixels.com',
            'phone': '+1-202-555-0190',
            'street': '527 Jefferson Court',
            'postCode': 'GA 30012',
            'city': 'Conyers',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 17,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680e87cb319bd9bd673',
            'name': 'Reyna',
            'lastName': 'Preece',
            'email': 'reyna@withinpixels.com',
            'phone': '+1-202-555-0116',
            'street': '297 Strawberry Lane',
            'postCode': 'MN 55021',
            'city': 'Faribault',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 18,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a6802d10e277a0f35775',
            'name': 'Shauna',
            'lastName': 'Atherton',
            'email': 'shauna@withinpixels.com',
            'phone': '+1-202-555-0159',
            'street': '928 Canterbury Court',
            'postCode': 'PA 15206',
            'city': 'Pittsburgh',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 19,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680aef1e5cf26dd3d1f',
            'name': 'Shepard',
            'lastName': 'Rosco',
            'email': 'shepard@withinpixels.com',
            'phone': '+1-202-555-0173',
            'street': '904 Ridge Road',
            'postCode': 'OH 43147',
            'city': 'Pickerington',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 20,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680cd7efa56a45aea5d',
            'name': 'Tillman',
            'lastName': 'Lee',
            'email': 'tillman@withinpixels.com',
            'phone': '+1-202-555-0183',
            'street': '447 Charles Street',
            'postCode': 'MA 02125',
            'city': 'Dorchester',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 21,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a680fb65c91a82cb35e2',
            'name': 'Trevino',
            'lastName': 'Bush',
            'email': 'trevino@withinpixels.com',
            'phone': '+1-202-555-0138',
            'street': '84 Valley View Road',
            'postCode': 'OK 73072',
            'city': 'Norman',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 22,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a68018c663044be49cbf',
            'name': 'Tyson',
            'lastName': 'Marshall',
            'email': 'tyson@withinpixels.com',
            'phone': '+1-202-555-0146',
            'street': '204 Clark Street',
            'postCode': 'NY 10952',
            'city': 'Monsey',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 23,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        },
        {
            'id': '5725a6809413bf8a0a5272b1',
            'name': 'Velazquez',
            'lastName': 'Smethley',
            'email': 'velezquez@withinpixels.com',
            'phone': '+1-202-555-0146',
            'street': '261 Cleveland Street',
            'postCode': 'NJ 08075',
            'city': 'Riverside',
            'country': 'England',
            'lat': 41.2183223,
            'lng': -95.8420876,
            orders: [
                {
                    'id': 24,
                    'orderNumber': '1KSIE23J',
                    'orderStatus': 'ORDERED',
                    'date': 'today',
                    'totalPrice': '20.3',
                }
            ]
        }
    ],
};

mock.onGet('/api/e-commerce-app/customers').reply(() => {
    return [200, customersDB.customers];
});

mock.onPost('/api/customers/add-customer').reply((request) => {
    const data = JSON.parse(request.data);
    customersDB.customers = [
        ...customersDB.customers, {
            ...data.newCustomer,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, customersDB.customers];
});

mock.onPost('/api/customers/update-customer').reply((request) => {
    const data = JSON.parse(request.data);

    customersDB.customers = customersDB.customers.map((customer) => {
        if (data.customer.id === customer.id) {
            return data.customer
        }
        return customer
    });

    return [200, customersDB.customers];
});

mock.onPost('/api/customers/remove-customer').reply((request) => {
    const data = JSON.parse(request.data);

    customersDB.customers = customersDB.customers.filter((customer) => data.customerId !== customer.id);

    return [200, customersDB.customers];
});

mock.onPost('/api/customers/remove-customers').reply((request) => {
    const data = JSON.parse(request.data);
    customersDB.customers = customersDB.customers.filter((customer) => !data.customersIds.includes(customer.id));
    return [200, customersDB.customers];
});


mock.onPost('/api/customers/toggle-starred-customer').reply((request) => {
    const data = JSON.parse(request.data);
    customersDB.user[0].starred = _.xor(customersDB.user[0].starred, [data.customerIds]);
    return [200, customersDB.user[0]];
});

mock.onPost('/api/customers/toggle-starred-customer').reply((request) => {
    const data = JSON.parse(request.data);
    customersDB.user[0].starred = _.xor(customersDB.user[0].starred, data.customerIds);
    return [200, customersDB.user[0]];
});

mock.onPost('/api/customers/set-customers-starred').reply((request) => {
    const data = JSON.parse(request.data);

    customersDB.user[0].starred = [
        ...customersDB.user[0].starred,
        ...data.customerIds
    ];

    return [200, customersDB.user[0]];
});

mock.onPost('/api/customers/set-customers-unstarred').reply((request) => {
    const data = JSON.parse(request.data);

    customersDB.user[0].starred = customersDB.user[0].starred.filter(customerId => !data.customerIds.includes(customerId));

    return [200, customersDB.user[0]];
});

mock.onGet('/api/customer').reply((request) => {
    const {customerId} = request.params;
    const response = _.find(customersDB.customers, {'id': customerId});
    return [200, response];
});
