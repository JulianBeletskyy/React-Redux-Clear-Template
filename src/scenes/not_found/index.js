import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () =>
    (
        <div className="d-flex justify-content-center align-items-center h-100">
        	<div className="site__header">
            	<div className="main-title mb-3">404</div>
            	<Link to="/">Main</Link>
        	</div>
        </div>
    )