'use client'
import React from 'react';
import UseAppInView from '../hooks/UseAppInView';


function Animation({ children, animateInStyle, className }) {
    const { ref, style } = UseAppInView();

    return (
        <div className={`${style} ${animateInStyle} ${className ?? ''}`} ref={ref}>
            {children}
        </div>
    );
}

export default Animation;