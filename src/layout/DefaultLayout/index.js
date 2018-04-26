import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class DefaultLayout extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        const { Component, ...restProps } = this.props;

        return(
            <div>
                <Route {...restProps} render={Component} />
            </div>
        )
    }
}

export default DefaultLayout;