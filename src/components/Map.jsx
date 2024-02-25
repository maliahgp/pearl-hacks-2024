import { Map, Marker } from "pigeon-maps"
import LenoirPic from '../assets/Lenoir-Pic.jpg'

export function UNCMap({markerClick}) {
    const places = {
        Lenoir: {name: "Lenoir", coords: [35.910651317144364, -79.0486821489566], picture: <img id="picture" src={LenoirPic}></img>}
    }

    return (
    <Map defaultCenter={[35.91056, -79.05021]} defaultZoom={11}>
        {/* <Marker width={50} anchor={[35.91056, -79.05021]} /> */}
        {Object.keys(places).map((placeName) => {
            return <Marker key={places[placeName].name} anchor={places[placeName].coords} onClick={() => markerClick(places[placeName])}></Marker>
        })}
      </Map>
    )
}