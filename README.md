![screenshot_1](https://user-images.githubusercontent.com/35832978/44406288-eceb7780-a563-11e8-99ee-ae293d1e12ba.png)

# React/Redux clear template

Clear template for fast deploying React/Redux project. With routing, notifications, modal, multi languages and requests with clear structure.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installation packages:

* [React (16.4.2)](https://reactjs.org)
* [Redux (4.0.0)](https://redux.js.org)
* [Redux thunk (2.3.0)](https://github.com/reduxjs/redux-thunk)
* [React redux (5.0.7)](https://github.com/reduxjs/react-redux)
* [React router redux (5.0.0-alpha.9)](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
* [React router dom (4.3.1)](https://github.com/ReactTraining/react-router)
* [History (4.7.2)](https://github.com/ReactTraining/history)
* [Cross env (5.2.0)](https://github.com/kentcdodds/cross-env)
* [React notifications (1.4.3)](https://github.com/minhtranite/react-notifications)
* [Socket.io (2.1.1)](https://socket.io)

### Installing

For development env running you must do two simple step:

```
npm install
```

```
npm start
```

Thats all, enjoy ;).

### Usage template

#### Routing
For add page to routing you must add to 'config/route.js' role (like: 'public', 'private' etc.) with array of objects routes (with path & Component). In App.js you can determine role.
Example:

```
/* config/route.js */

export default {
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

/* App.js */

import routing from 'config/route'

...

	render() {
		...

		const key = token ? 'private' : 'public'

		return (
			...

			<Switch>
			    { routing[key].map((route, i) => this.printRoutes(route, i)) }
			</Switch>

			...
		)
	}

```

#### Modal

For open modal you must import toggleModal() function from 'actions/ui' and call it via dispatch.
Example:

```
/* Import function & store */

import store from 'store'
import { toggleModal } from 'actions/ui'

/* In your function */

yourFunction = e => {
	e.preventDefault()
	store.dispatch(toggleModal(true, 'Title modal', <YourComponent />))
}

/* In your template */

<a href="/" onClick={this.yourFunction}>Open modal</a>


```

#### Alert

For show notification you must import setAlert() function from 'actions/ui' and call it via dispatch.
Type of notification: 'success' (default), 'info', 'warning', 'error'.
Delay: 2000ms (default).
Example:

```
/* Import function & store */

import store from 'store'
import { setAlert } from 'actions/ui'

/* In your function */

yourFunction = e => {
	e.preventDefault()
	store.dispatch(setAlert('Text in notification', 'Type notification', delay))
}
```

## Deployment

For deploy project on a live system you must do this:

```
npm install
```

```
npm run-script build
```
## Authors

*Initial work* - [JulianBeletskyy](https://github.com/JulianBeletskyy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details