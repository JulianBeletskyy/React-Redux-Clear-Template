import React, { Component } from 'react'
import './loader.css'

class Loader extends Component {

    render() {
        return (
            <div className="wrap-loader">
                <div className="loader">
                    { Array.apply(null, new Array(9)).map((item, i) => <div key={i}></div>) }
    			</div>
            </div>
        );
    }
}

export default Loader
