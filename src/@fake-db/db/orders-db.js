import mock from './../mock';
import _ from '@lodash';
import {FuseUtils} from '@fuse';

const ordersDB = {
    orders: [
        {
            'id': '1',
            'orderNumber': '70d4d7d0',
            'orderType': 'DELIVERY',
            'subtotal': '39.97',
            'tax': '77.44',
            'discount': '-10.17',
            'total': '73.31',
            'date': '2015/04/25 02:07:59',
            'customer': {
                'id': 1,
                'firstName': 'Dollie',
                'lastName': 'Bullock',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 13,
                    'name': 'On pre-order2 (not paid)',
                    'color': 'purple-300',
                    'date': '2016/04/03 10:06:18'
                },
                {
                    'id': 1,
                    'name': 'Awaiting check payment',
                    'color': 'blue-500',
                    'date': '2015/03/17 18:28:37'
                }
            ],
            'payment': {
                'transactionId': '2a894b9e',
                'amount': '73.31',
                'method': 'Credit Card',
                'date': '2016/02/23 15:50:23'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '10.44',
                    'fee': '7.00',
                    'date': '2015/04/10 07:03:52'
                }
            ]
        },
        {
            'id': '2',
            'orderNumber': '2003479c',
            'orderType': 'PICK_UP',
            'subtotal': '98.68',
            'tax': '45.55',
            'discount': '-10.25',
            'total': '24.51',
            'date': '2015/11/07 15:47:31',
            'customer': {
                'id': 1,
                'firstName': 'Holmes',
                'lastName': 'Hines',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'green-500',
                    'date': '2015/10/04 08:54:33'
                },
                {
                    'id': 1,
                    'name': 'Awaiting check payment',
                    'color': 'blue-500',
                    'date': '2015/05/03 03:43:04'
                }
            ],
            'payment': {
                'transactionId': '79c640c8',
                'amount': '24.51',
                'method': 'Check',
                'date': '2015/04/22 04:49:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '2.92',
                    'fee': '4.00',
                    'date': '2015/07/11 14:57:12'
                }
            ]
        },
        {
            'id': '3',
            'orderNumber': '09f5443b',
            'orderType': 'DELIVERY',
            'subtotal': '23.03',
            'tax': '16.36',
            'discount': '-19.46',
            'total': '87.17',
            'date': '2015/11/26 16:04:40',
            'customer': {
                'id': 1,
                'firstName': 'Serena',
                'lastName': 'Glover',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 8,
                    'name': 'Payment error',
                    'color': 'red-900',
                    'date': '2015/07/02 20:44:34'
                },
                {
                    'id': 3,
                    'name': 'Preparing the order2',
                    'color': 'orange-500',
                    'date': '2015/03/23 04:59:45'
                }
            ],
            'payment': {
                'transactionId': '5ff44b0c',
                'amount': '87.17',
                'method': 'PayPal',
                'date': '2016/01/25 11:46:28'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '7.53',
                    'fee': '7.00',
                    'date': '2015/11/25 00:40:54'
                }
            ]
        },
        {
            'id': '4',
            'orderNumber': '960898d0',
            'orderType': 'DELIVERY',
            'subtotal': '13.47',
            'tax': '53.45',
            'discount': '-15.55',
            'total': '26.98',
            'date': '2015/11/23 05:35:18',
            'customer': {
                'id': 1,
                'firstName': 'Dianne',
                'lastName': 'Prince',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'green-800',
                    'date': '2015/10/26 16:12:47'
                },
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'purple-500',
                    'date': '2016/02/06 06:42:37'
                }
            ],
            'payment': {
                'transactionId': '787d49b1',
                'amount': '26.98',
                'method': 'Check',
                'date': '2015/03/07 05:50:57'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '11.93',
                    'fee': '5.00',
                    'date': '2016/03/21 07:08:26'
                }
            ]
        },
        {
            'id': '5',
            'orderNumber': '2d7f68de',
            'orderType': 'PICK_UP',
            'subtotal': '46.93',
            'tax': '12.14',
            'discount': '-19.16',
            'total': '12.97',
            'date': '2015/01/13 06:21:21',
            'customer': {
                'id': 1,
                'firstName': 'Frankie',
                'lastName': 'Hewitt',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 8,
                    'name': 'Payment error',
                    'color': 'red-900',
                    'date': '2015/02/01 09:21:46'
                },
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'pink-500',
                    'date': '2015/11/16 04:48:32'
                }
            ],
            'payment': {
                'transactionId': 'cd8c4727',
                'amount': '12.97',
                'method': 'Bank-wire',
                'date': '2016/05/15 21:15:32'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '5.43',
                    'fee': '3.00',
                    'date': '2016/01/06 00:51:59'
                }
            ]
        },
        {
            'id': '6',
            'orderNumber': '9c991708',
            'orderType': 'DELIVERY',
            'subtotal': '32.55',
            'tax': '11.81',
            'discount': '-12.33',
            'total': '30.96',
            'date': '2015/01/17 04:21:08',
            'customer': {
                'id': 1,
                'firstName': 'Cole',
                'lastName': 'Holcomb',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 3,
                    'name': 'Preparing the order2',
                    'color': 'orange-500',
                    'date': '2015/11/30 01:04:32'
                },
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'green-500',
                    'date': '2015/11/12 21:27:18'
                }
            ],
            'payment': {
                'transactionId': 'a41f4b7c',
                'amount': '30.96',
                'method': 'Check',
                'date': '2015/04/27 03:59:22'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '6.05',
                    'fee': '4.00',
                    'date': '2015/09/10 11:28:47'
                }
            ]
        },
        {
            'id': '7',
            'orderNumber': '7683b54d',
            'orderType': 'PICK_UP',
            'subtotal': '14.08',
            'tax': '74.96',
            'discount': '-16.60',
            'total': '63.36',
            'date': '2015/06/14 14:49:47',
            'customer': {
                'id': 1,
                'firstName': 'Merrill',
                'lastName': 'Richardson',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 11,
                    'name': 'Awaiting PayPal payment',
                    'color': 'blue-500',
                    'date': '2015/09/03 18:53:02'
                },
                {
                    'id': 13,
                    'name': 'On pre-order2 (not paid)',
                    'color': 'purple-300',
                    'date': '2015/12/13 18:14:40'
                }
            ],
            'payment': {
                'transactionId': 1974588,
                'amount': '63.36',
                'method': 'PayPal',
                'date': '2015/11/28 22:24:58'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '2.89',
                    'fee': '3.00',
                    'date': '2016/02/10 09:03:44'
                }
            ]
        },
        {
            'id': '8',
            'orderNumber': 'c1de0f75',
            'orderType': 'DELIVERY',
            'subtotal': '13.77',
            'tax': '55.78',
            'discount': '-17.20',
            'total': '45.74',
            'date': '2015/01/18 01:31:47',
            'customer': {
                'id': 1,
                'firstName': 'Morgan',
                'lastName': 'Pitts',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'purple-500',
                    'date': '2015/04/29 07:57:43'
                },
                {
                    'id': 3,
                    'name': 'Preparing the order2',
                    'color': 'orange-500',
                    'date': '2015/04/23 11:14:38'
                }
            ],
            'payment': {
                'transactionId': '1e704aaf',
                'amount': '45.74',
                'method': 'Credit Card',
                'date': '2015/06/08 03:50:41'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '6.35',
                    'fee': '2.00',
                    'date': '2015/06/01 09:18:26'
                }
            ]
        },
        {
            'id': '9',
            'orderNumber': '35a4dbc6',
            'orderType': 'PICK_UP',
            'subtotal': '56.49',
            'tax': '11.44',
            'discount': '-17.45',
            'total': '15.31',
            'date': '2016/02/14 14:22:58',
            'customer': {
                'id': 1,
                'firstName': 'Krista',
                'lastName': 'Mathis',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 12,
                    'name': 'Remote payment accepted',
                    'color': 'green-500',
                    'date': '2015/07/15 15:48:00'
                },
                {
                    'id': 14,
                    'name': 'Awaiting Cash-on-delivery payment',
                    'color': 'blue-500',
                    'date': '2015/11/08 18:30:15'
                }
            ],
            'payment': {
                'transactionId': '762c4e1a',
                'amount': '15.31',
                'method': 'Bank-wire',
                'date': '2015/06/19 14:52:53'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '7.93',
                    'fee': '8.00',
                    'date': '2015/08/25 15:18:55'
                }
            ]
        },
        {
            'id': '10',
            'orderNumber': 'a8bc5b17',
            'orderType': 'DELIVERY',
            'subtotal': '29.34',
            'tax': '87.50',
            'discount': '-18.11',
            'total': '20.97',
            'date': '2015/10/23 03:02:55',
            'customer': {
                'id': 1,
                'firstName': 'Hayden',
                'lastName': 'Fitzgerald',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'green-800',
                    'date': '2016/05/02 09:53:55'
                },
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'green-500',
                    'date': '2015/07/11 05:33:31'
                }
            ],
            'payment': {
                'transactionId': '3dce47a3',
                'amount': '20.97',
                'method': 'Credit Card',
                'date': '2015/07/28 23:53:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '9.20',
                    'fee': '2.00',
                    'date': '2015/08/05 08:45:55'
                }
            ]
        },
        {
            'id': '11',
            'orderNumber': '54ab8191',
            'orderType': 'DELIVERY',
            'subtotal': '50.35',
            'tax': '71.75',
            'discount': '-10.46',
            'total': '72.30',
            'date': '2015/07/28 13:22:49',
            'customer': {
                'id': 1,
                'firstName': 'Cotton',
                'lastName': 'Carlson',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 9,
                    'name': 'On pre-order2 (paid)',
                    'color': 'purple-300',
                    'date': '2016/02/26 14:15:38'
                },
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'purple-500',
                    'date': '2015/10/17 03:32:39'
                }
            ],
            'payment': {
                'transactionId': 'f4154419',
                'amount': '72.30',
                'method': 'PayPal',
                'date': '2016/03/07 15:10:12'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '2.81',
                    'fee': '7.00',
                    'date': '2016/05/01 11:15:22'
                }
            ]
        },
        {
            'id': '12',
            'orderNumber': '6919050',
            'orderType': 'PICK_UP',
            'subtotal': '81.95',
            'tax': '22.44',
            'discount': '-10.89',
            'total': '42.54',
            'date': '2015/06/07 17:54:36',
            'customer': {
                'id': 1,
                'firstName': 'Kaye',
                'lastName': 'Baldwin',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 10,
                    'name': 'Awaiting bank wire payment',
                    'color': 'blue-500',
                    'date': '2015/09/01 20:50:07'
                },
                {
                    'id': 12,
                    'name': 'Remote payment accepted',
                    'color': 'green-500',
                    'date': '2016/02/13 21:19:04'
                }
            ],
            'payment': {
                'transactionId': 44464979,
                'amount': '42.54',
                'method': 'Credit Card',
                'date': '2015/06/30 11:59:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '5.52',
                    'fee': '2.00',
                    'date': '2015/03/15 07:08:37'
                }
            ]
        },
        {
            'id': '13',
            'orderNumber': '1d4e89f0',
            'orderType': 'DELIVERY',
            'subtotal': '67.10',
            'tax': '46.96',
            'discount': '-11.64',
            'total': '97.49',
            'date': '2016/02/06 13:26:55',
            'customer': {
                'id': 1,
                'firstName': 'Iva',
                'lastName': 'Clark',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'pink-500',
                    'date': '2015/03/31 03:01:12'
                },
                {
                    'id': 8,
                    'name': 'Payment error',
                    'color': 'red-900',
                    'date': '2016/03/11 18:53:35'
                }
            ],
            'payment': {
                'transactionId': '2aef4aa3',
                'amount': '97.49',
                'method': 'Check',
                'date': '2015/05/13 13:28:52'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '5.37',
                    'fee': '6.00',
                    'date': '2015/04/22 01:48:15'
                }
            ]
        },
        {
            'id': '14',
            'orderNumber': 'd897564e',
            'orderType': 'PICK_UP',
            'subtotal': '55.50',
            'tax': '48.92',
            'discount': '-18.45',
            'total': '16.95',
            'date': '2016/01/17 04:23:11',
            'customer': {
                'id': 1,
                'firstName': 'Shauna',
                'lastName': 'Rosales',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 7,
                    'name': 'Refunded',
                    'color': 'red-500',
                    'date': '2015/12/29 15:34:46'
                },
                {
                    'id': 11,
                    'name': 'Awaiting PayPal payment',
                    'color': 'blue-500',
                    'date': '2015/07/14 19:10:43'
                }
            ],
            'payment': {
                'transactionId': 'b7ea43c9',
                'amount': '16.95',
                'method': 'PayPal',
                'date': '2015/07/11 07:18:06'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '6.49',
                    'fee': '6.00',
                    'date': '2015/01/05 13:42:13'
                }
            ]
        },
        {
            'id': '15',
            'orderNumber': '1a803de2',
            'orderType': 'DELIVERY',
            'subtotal': '13.73',
            'tax': '64.42',
            'discount': '-19.64',
            'total': '20.34',
            'date': '2015/09/26 14:26:33',
            'customer': {
                'id': 1,
                'firstName': 'Carroll',
                'lastName': 'Dotson',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 1,
                    'name': 'Awaiting check payment',
                    'color': 'blue-500',
                    'date': '2015/12/21 10:42:21'
                },
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'pink-500',
                    'date': '2016/02/11 05:58:55'
                }
            ],
            'payment': {
                'transactionId': '0633458c',
                'amount': '20.34',
                'method': 'Check',
                'date': '2015/07/17 20:54:14'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '3.30',
                    'fee': '2.00',
                    'date': '2015/11/04 14:08:16'
                }
            ]
        },
        {
            'id': '16',
            'orderNumber': '7d90eaa6',
            'orderType': 'DELIVERY',
            'subtotal': '99.07',
            'tax': '31.36',
            'discount': '-18.23',
            'total': '10.64',
            'date': '2015/08/10 14:28:10',
            'customer': {
                'id': 1,
                'firstName': 'Jeannie',
                'lastName': 'Reese',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 9,
                    'name': 'On pre-order2 (paid)',
                    'color': 'purple-300',
                    'date': '2015/06/20 08:37:46'
                },
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'green-500',
                    'date': '2015/01/01 01:42:21'
                }
            ],
            'payment': {
                'transactionId': '45f7440a',
                'amount': '10.64',
                'method': 'PayPal',
                'date': '2015/11/23 11:14:47'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '9.94',
                    'fee': '6.00',
                    'date': '2016/04/30 19:17:39'
                }
            ]
        },
        {
            'id': '17',
            'orderNumber': 'cf9b4bfc',
            'orderType': 'PICK_UP',
            'subtotal': '96.93',
            'tax': '74.32',
            'discount': '-12.63',
            'total': '27.06',
            'date': '2015/11/10 16:54:11',
            'customer': {
                'id': 1,
                'firstName': 'Dena',
                'lastName': 'Rowe',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'green-800',
                    'date': '2015/03/23 00:18:52'
                },
                {
                    'id': 3,
                    'name': 'Preparing the order2',
                    'color': 'orange-500',
                    'date': '2015/03/22 04:48:12'
                }
            ],
            'payment': {
                'transactionId': '966f4c8e',
                'amount': '27.06',
                'method': 'PayPal',
                'date': '2015/07/10 17:22:44'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '6.81',
                    'fee': '3.00',
                    'date': '2015/01/23 07:31:46'
                }
            ]
        },
        {
            'id': '18',
            'orderNumber': '07a938c4',
            'orderType': 'DELIVERY',
            'subtotal': '67.73',
            'tax': '33.33',
            'discount': '-12.33',
            'total': '91.50',
            'date': '2015/08/26 16:24:38',
            'customer': {
                'id': 1,
                'firstName': 'Blankenship',
                'lastName': 'Lynch',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'pink-500',
                    'date': '2016/03/24 22:56:35'
                },
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'purple-500',
                    'date': '2016/04/09 13:33:26'
                }
            ],
            'payment': {
                'transactionId': '411a4e97',
                'amount': '91.50',
                'method': 'PayPal',
                'date': '2016/02/05 05:35:52'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '6.11',
                    'fee': '7.00',
                    'date': '2015/10/20 10:46:31'
                }
            ]
        },
        {
            'id': '19',
            'orderNumber': 'd460f4ff',
            'orderType': 'DELIVERY',
            'subtotal': '15.83',
            'tax': '41.90',
            'discount': '-16.54',
            'total': '47.99',
            'date': '2015/01/04 21:13:53',
            'customer': {
                'id': 1,
                'firstName': 'Whitley',
                'lastName': 'Mcgee',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 7,
                    'name': 'Refunded',
                    'color': 'red-500',
                    'date': '2015/08/10 17:14:57'
                },
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'green-800',
                    'date': '2016/03/30 01:38:14'
                }
            ],
            'payment': {
                'transactionId': '761943c2',
                'amount': '47.99',
                'method': 'PayPal',
                'date': '2015/10/11 20:10:46'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '5.51',
                    'fee': '5.00',
                    'date': '2015/08/28 21:24:36'
                }
            ]
        },
        {
            'id': '20',
            'orderNumber': 'ba6a946d',
            'orderType': 'PICK_UP',
            'subtotal': '36.84',
            'tax': '20.12',
            'discount': '-14.57',
            'total': '44.40',
            'date': '2015/02/24 00:57:18',
            'customer': {
                'id': 1,
                'firstName': 'Hood',
                'lastName': 'Hodges',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'A Walk Amongst Friends - Canvas Print',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id': 2,
                    'name': 'Lago di Braies - Canvas Print',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id': 3,
                    'name': 'Never Stop Changing - Canvas Print',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status': [
                {
                    'id': 10,
                    'name': 'Awaiting bank wire payment',
                    'color': 'blue-500',
                    'date': '2015/05/19 11:09:56'
                },
                {
                    'id': 12,
                    'name': 'Remote payment accepted',
                    'color': 'green-500',
                    'date': '2015/03/27 05:02:33'
                }
            ],
            'payment': {
                'transactionId': '4af94368',
                'amount': '44.40',
                'method': 'PayPal',
                'date': '2015/11/11 14:25:39'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '3.63',
                    'fee': '5.00',
                    'date': '2016/03/01 09:07:49'
                }
            ]
        }
    ],
    customers: [
        {
            'id': '1',
            'name': 'Customer 1',
            'lastName': 'Last name 1',
            'email': 'email1@email.com',
            'phoneNumber': '+31 123456789'
        },
        {
            'id': '2',
            'name': 'Customer2',
            'lastName': 'Last name 2',
            'email': 'email2@email.com',
            'phoneNumber': '+31 123456788'
        },
        {
            'id': '3',
            'name': 'Customer 3',
            'lastName': 'Last name 3',
            'email': 'email3@email.com',
            'phoneNumber': '+31 123456787'
        },
        {
            'id': '4',
            'name': 'Customer 4',
            'lastName': 'Last name 4',
            'email': 'email4@email.com',
            'phoneNumber': '+31 123456786'
        },
        {
            'id': '5',
            'name': 'Customer 5',
            'lastName': 'Last name 5',
            'email': 'email5@email.com',
            'phoneNumber': '+31 123456785'
        },

    ],
    ordersDaily: [
        {
            'id': '5725a6802d10e277a0f35724',
            'dailyIncome': '2031.00',
            'numberOfOrders': '32',
            'orders': [
                '1',
                '3',
                '5',
                '7',
                '9',
                '11',
                '13',
                '15',
                '17',
                '19',
                '21',
                '25'
            ]
        }
    ]
};

mock.onGet('/api/orders').reply((config) => {
    const id = config.params.id;
    let response = [];
    switch  (id) {
        case 'daily': {
            response = ordersDB.orders.filter(order =>
                ordersDB.ordersDaily[0].orders.includes(order.id)
            );
            break;
        }
        default: {
            response = ordersDB.orders;
        }
    }
    return [200, response]
});

mock.onGet('/api/orders/daily').reply((config) => {
    return [200, ordersDB.ordersDaily[0]];
});

mock.onPost('/api/orders/add-order').reply((request) => {
    const data = JSON.parse(request.data);
    ordersDB.orders = [
        ...ordersDB.orders, {
            ...data.newOrder,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, ordersDB.orders];
});

mock.onPost('/api/orders/update-order').reply((request) => {
    const data = JSON.parse(request.data);

    ordersDB.orders = ordersDB.orders.map((order) => {
        if (data.order.id === order.id) {
            return data.order;
        }
        return order;
    });

    return [200, ordersDB.orders];
});

mock.onPost('/api/orders/remove-order').reply((request) => {
    const data = JSON.parse(request.data);

    ordersDB.orders = ordersDB.orders.filter((order) => data.orderId !== order.id);

    return [200, ordersDB.orders];
});

mock.onPost('/api/orders/remove-orders').reply((request) => {
    const data = JSON.parse(request.data);

    ordersDB.orders = ordersDB.orders.filter((order) => !data.orderIds.includes(order.id));

    return [200, ordersDB.orders]
});

mock.onPost('/api/orders/add-to-daily-order').reply((request) => {
    const data = JSON.parse(request.data);
    ordersDB.ordersDaily[0].orders = _.xor(ordersDB.ordersDaily[0].orders, [data.orderId]);
    return [200, ordersDB.ordersDaily[0]];
});

mock.onPost('/api/orders/add-to-daily-orders').reply((request) => {
    const data = JSON.parse(request.data);

    ordersDB.ordersDaily[0].orders = _.xor(ordersDB.ordersDaily[0].orders, data.orderIds);

    return [200, ordersDB.ordersDaily[0]];
});

mock.onPost('/api/orders/set-daily-orders').reply((request) => {
    const data = JSON.parse(request.data);

    ordersDB.ordersDaily[0].orders = [
        ...ordersDB.ordersDaily[0].orders,
        ...data.orderIds
    ];
    return [200, ordersDB.ordersDaily[0]];
});

mock.onPost('/api/orders/set-daily-un-orders').reply((request) => {
    const data = JSON.parse(request.data);

    ordersDB.ordersDaily[0].orders = ordersDB.ordersDaily[0].orders.filter(orderId => !data.orderIds.includes(orderId));

    return [200, ordersDB.ordersDaily[0]];
});

mock.onGet('/api/order').reply((request) => {
    const {orderId} = request.params;
    const response = _.find(ordersDB.orders, {'id': orderId});
    return [200, response]
});
