import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store from 'store'
import { setAlert, toggleModal, setLang } from 'actions/ui'
import { getLang } from 'utils/lang'

class About extends Component {
	showAlert = type => e => {
		e.preventDefault()
		store.dispatch(setAlert(type, type))
	}

	showModal = e => {
		e.preventDefault()
		store.dispatch(toggleModal(true, 'Title modal', <div className="p-4 text-center">{getLang('Component modal')}</div>))
	}

	changeLang = lang => e => {
		e.preventDefault()
		store.dispatch(setLang(lang))
	}

    render() {
        return (
        	<div className="d-flex justify-content-center align-items-center h-100">
        		<div className="container">
	            	<div className="site__header">
		            	<div className="main-title mb-5">{getLang('About')}</div>
		            	<div className="row">
		            		<div className="col-sm-4">
				            	<div className="header-list">
				            		<div className="mb-3">
				            			<strong>{getLang('Installation packages')}:</strong>
				            		</div>
			            		</div>
				            	<ul className="text-left">
				            		<li>React (16.4.2)</li>
				            		<li>Redux (4.0.0)</li>
				            		<li>Redux thunk (2.3.0)</li>
				            		<li>React redux (5.0.7)</li>
				            		<li>React router redux (5.0.0-alpha.9)</li>
				            		<li>React router dom (4.3.1)</li>
				            		<li>History (4.7.2)</li>
				            		<li>Cross env (5.2.0)</li>
				            		<li>React notifications (1.4.3)</li>
				            	</ul>
			            	</div>
			            	<div className="col-sm-4">
			            		<div className="header-list">
				            		<div className="mb-3">
				            			<strong>CSS:</strong>
			            			</div>
				            		<ul className="text-left">
					            		<li>Bootstrap v4.1.1 <small>({getLang('without')} JS)</small></li>
					            		<li>Animate.css v3.5.1</li>
					            	</ul>
					            	<div className="mb-3">
					            		<strong>{getLang('Configured components')}:</strong>
				            		</div>
				            		<ul className="text-left">
					            		<li>{getLang('Simple notifications')} 
					            			&nbsp;
					            			<small>
					            				(
					            					<a href="/" onClick={this.showAlert('info')}>Info</a>, &nbsp;
					            					<a href="/" onClick={this.showAlert('success')}>Success</a>, &nbsp;
					            					<a href="/" onClick={this.showAlert('warning')}>Warning</a>, &nbsp;
					            					<a href="/" onClick={this.showAlert('error')}>Error</a>
				            					)
				            				</small>
				            			</li>
				            			<li>{getLang('Modal')} <small>(<a href="/" onClick={this.showModal}>{getLang('Open modal')}</a>)</small></li>
				            			<li>{getLang('Multi languages')}
				            				&nbsp;
				            				<small>
				            					(
				            						<a href="/" onClick={this.changeLang('en')}>EN</a>, &nbsp;
				            						<a href="/" onClick={this.changeLang('uk')}>UK</a>, &nbsp;
				            						<a href="/" onClick={this.changeLang('fr')}>FR</a>
			            						)
		            						</small>
	            						</li>
					            	</ul>
			            		</div>
			            	</div>
			            	<div className="col-sm-4">
			            		<div className="header-list">
			            			<div className="mb-3">
				            			<strong>{getLang('Features')}:</strong>
			            			</div>
				            		<ul className="text-left">
				            			<li>{getLang('Easy install')} <small>(npm install, npm start)</small></li>
				            			<li>{getLang('Clear structure')}</li>
					            		<li>{getLang('Routing by role')}</li>
					            		<li>{getLang('Redirect to 404')}</li>
					            		<li>{getLang('Fetch requests')} <small>(get, post, patch, put, delete)</small></li>
					            		
					            	</ul>
			            		</div>
			            	</div>
		            	</div>
		            	<div className="mb-3">
		            		<a href="https://github.com/JulianBeletskyy/React-Redux-Clear-Template" target="_blank" rel="noopener noreferrer">{getLang('Documentation')}</a>
		            	</div>
		            	<Link to="/">{getLang('Back')}</Link>
	            	</div>
            	</div>
            </div>
        );
    }
}

export default About
