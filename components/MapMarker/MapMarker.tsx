import { getFoogja } from "@/firebase/firebasedb"





export default async function MapMarker() {
    
    const result = await getFoogja()

    return (
        <>
        {
            result.map((store) => {
                
            })
        }
        </>
    )

}