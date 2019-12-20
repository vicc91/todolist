import React, { useState, useEffect } from 'react';
// Component
import Header from './Header';

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Header />
            <div className="Layout-content">
                <div className="Layout-children">
                    {children}
                </div>    
            </div>
        </div>
    );
}

export default Layout;