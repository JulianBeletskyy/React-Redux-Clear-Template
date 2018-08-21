import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getLang } from 'utils/lang'

class Main extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center h-100 flex-wrap">
            	<div className="site__header w-100">
	            	<div className="main-title mb-3">React / Redux</div>
	            	<div className="template-text mb-3">Clear Template</div>
	            	<Link to="/about">{getLang('About')}</Link>
            	</div>
                <div className="mt-auto p-3">
                    <a href="https://github.com/JulianBeletskyy" target="_blank" rel="noopener noreferrer">By Julian Beletskyy</a>
                </div>
            </div>
        );
    }
}

export default Main;
