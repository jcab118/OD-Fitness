import {
  withGoogleMap, 
  GoogleMap, 
  InfoWindow, 
  Marker,
} from "react-google-maps";

const google = withGoogleMap(props => {
  return (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom = {14}
    defaultCenter={{lat: 40.778794, lng: -73.98206829999998}}
    >
    <Marker
    key={index}
    position={marker.position}
    onClick={() => props.onMarkeClick(marker)}
    />
    </GoogleMap>
  )  
})