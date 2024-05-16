import { getFoogja } from "@/firebase/firebasedb"
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk"
import CustomMarker from "../CustomMarker/CustomMarker"
import styles from "./map.module.css"
import { useEffect } from "react";
import NaverMap from "../NaverMap/NaverMap";

declare global {
    interface Window {
        kakao: any;
    }
}
export default async function Kakaomap() {
    const result = await getFoogja()

    return (
        <NaverMap/>
        // <Map
        //     center={{ lat: 33.5563, lng: 126.79581 }}
        //     style={{ width: "100%", height: "85vh" }}
        //     className={styles.kakaomap}
        // >
        //     {
        //         result.map((store) => {
        //             return (
        //                 <CustomMarker key={store.storeName} x={store.x} y={store.y} storeName={store.storeName} />
        //             )
        //         })
        //     }
        // </Map>
    )
}