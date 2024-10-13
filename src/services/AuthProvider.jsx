'use client'

import React from 'react';
// receive korbo children
const AuthProvider = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;