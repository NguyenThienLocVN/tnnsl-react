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
			<div class="map-container">
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
			</div>

            // <div id="map" className="h-100 w-100 position-relative">
            //     <img title="Về trung tâm bản đồ" className="position-absolute map-tool center-map" id="center-map" src={process.env.PUBLIC_URL + '/images/ANH_VEGIUABANDO.png'} alt="trung-tam-ban-do" />
            //     <img title="Vị trí hiện tại" className="position-absolute map-tool current-location" id="current-location" src={process.env.PUBLIC_URL + '/images/ANH_VITRIHIENTAI.png'} alt="vi-tri-hien-tai" />
            //     <img title="Phóng to" className="position-absolute map-tool zoom-in" id="zoom-in" src={process.env.PUBLIC_URL + '/images/ANH_PHONGTO.png'} alt="phong-to" />
            //     <img title="Thu nhỏ" className="position-absolute map-tool zoom-out" id="zoom-out" src={process.env.PUBLIC_URL + '/images/ANH_THUNHO.png'} alt="thu-nho" />
            //     <img title="Thêm công trình" className="position-absolute map-tool add-construction" src={process.env.PUBLIC_URL + '/images/ANH_THEMCONGTRINH.png'} alt="them-cong-trinh" />
            //     <img title="Sửa công trình" className="position-absolute map-tool edit-construction" src={process.env.PUBLIC_URL + '/images/ANH_SUACONGTRINH.png'} alt="sua-cong-trinh" />
            //     <img title="Xem thông tin" className="position-absolute map-tool view-info" src={process.env.PUBLIC_URL + '/images/ANH_VEGIUABANDO.png'} alt="xem-thong-tin" />
            //     <img title="Đo khoảng cách" className="position-absolute map-tool distance-measure" src={process.env.PUBLIC_URL + '/images/ANH_DOKHOANGCACH.png'} alt="do-khoang-cach" />
            //     <div className="position-absolute map-layers d-flex align-items-center" id="map-layers" title="Chọn lớp bản đồ">
            //         <img src={process.env.PUBLIC_URL + '/images/ANH_LOPBANDO.png'} alt="lop-ban-do" />
            //         <span className="font-weight-bold">&nbsp; Lớp bản đồ</span>
            //     </div>
            //     <div className="position-absolute map-panel-layers align-items-center text-white" id="map-panel-layers">
            //         <ul className="p-2 m-0">
            //             <li className="text-right"><i className="fa fa-window-close text-danger btn-close-layers" id="btn-close-layers" aria-hidden="true"></i></li>
            //             <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="Topographic" />&nbsp; Bản đồ địa hình</li>
            //             <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="Imagery" />&nbsp; Bản đồ vệ tinh</li>
            //             <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="Streets" />&nbsp; Bản đồ đường</li>
            //             <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="NationalGeographic" />&nbsp; Bản đồ hành chính</li>
            //         </ul>
            //     </div>
            //     <div className="position-absolute map-note d-flex align-items-center">
            //         <img src={process.env.PUBLIC_URL + '/images/ANH_CHUGIAIBANDO.png'} alt="chu-giai-ban-do" />
            //         <span className="font-weight-bold">&nbsp; Chú giải</span>
            //     </div>
            // </div>
        )
    }
}