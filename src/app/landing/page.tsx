"use client"
import dynamic from 'next/dynamic'
const DynamicMapComponent =  dynamic(() => import("@/components/MapComponent"), { ssr: false });
import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <h2>Landing Page</h2>
            <div>This is The Map View</div>
            <div>
                <DynamicMapComponent />
            </div>
        </div>
    )
}

export default LandingPage
