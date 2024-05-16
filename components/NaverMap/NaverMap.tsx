'use client'
import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        naver: any;
    }
}

export default function NaverMap() {
    const mapContainer = useRef(null)
    useEffect(()=> {
        const {naver} = window
        const location = new naver.maps.LatLng(37.5262411, 126.99289439)
        const option = {
            center: location,
            zoom: 17
        }
        const map = new naver.maps.Map(mapContainer.current, option)
    },[])
    
    return (
        <div ref={mapContainer} style={{width:"500px", height:"500px"}}>
            
        </div>
    )
}