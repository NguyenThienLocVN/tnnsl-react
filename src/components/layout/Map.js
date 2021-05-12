import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default class Map extends React.Component {
	constructor() {
		super();
		this.state = {
		  lat: 21.529737201190642,
		  lng: 103.9692398828125,
		  zoom: 8,
		};
	}

    render(){
		const position = [this.state.lat, this.state.lng];

        return(
			<MapContainer className="h-100 w-100 position-relative" center={position} zoom={this.state.zoom}>
				<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
				</Marker>
			</MapContainer>
			
        )
    }
}