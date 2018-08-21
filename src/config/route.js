export default {
    /* Add roles as keys and routes as an array objects  */
    'public': [
        {
            'path': '/',
            'component': 'Main'
        }, {
            'path': '/about',
            'component': 'About'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ],
    'private': [
        {
            'path': '/',
            'component': 'Main'
        },
    ]
}