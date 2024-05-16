'use client'

import { useEffect, useState } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import styles from "./marker.module.css"

interface IMarker {
    x: number
    y: number
    storeName: string
}
export default function CustomMarker({ x, y, storeName }: IMarker) {
    const [isNameVisible, setIsVisible] = useState(false)

    const onOver = async () => {
        console.log(storeName)
        await setIsVisible(true)
        console.log(isNameVisible)
    }

    return (
        <>
            <CustomOverlayMap
                position={{ lat: y, lng: x }}
                yAnchor={2}>
                <MapMarker
                    position={{ lat: y, lng: x }}
                    // onClick={handleClickMarker}
                    onMouseOver={onOver} // 마우스 오버 이벤트 추가
                    onMouseOut={() => setIsVisible(false)}
                >
                </MapMarker>
            </CustomOverlayMap>
        </>
    )

}