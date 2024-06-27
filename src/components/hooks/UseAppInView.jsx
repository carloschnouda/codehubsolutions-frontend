'use client'
import React, { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

function UseAppInView() {
    const { ref, inView } = useInView({
    });
    const isInViewStyle = useMemo(() => inView ? "animate show" : "", [inView])
    return (
        { inView, ref, style: isInViewStyle }
    )
}

export default UseAppInView