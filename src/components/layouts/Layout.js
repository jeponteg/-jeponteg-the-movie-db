import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import '../../assets/styles/components/Layout.scss';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="content-wrap">
                <Header />
                {children}
            </div>  
            <Footer />
        </div>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.element.isRequired
};