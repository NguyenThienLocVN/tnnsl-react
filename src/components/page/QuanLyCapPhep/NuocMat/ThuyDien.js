import React from 'react';
import Header from '../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../layout/Map';

export default class QuanLyCapPhepNuocMatThuyDien extends React.Component {

    componentDidMount(){
        document.title = "Quản lý cấp phép nước mặt | Thủy điện | Giám sát tài nguyên nước Sơn La";
    }

    render(){
        return(
			<div className="p-0">
                <Header headTitle="NƯỚC MẶT | THỦY ĐIỆN" previousLink="/quan-ly-cap-phep" showHeadImage={false} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-3 px-0 menu-page discharge-water">
                        <div className="col-6 d-flex flex-column">
                            <p>Tổng số CT</p>
                            <div>
                                <p className="col-6 font-20">3</p>
                                <p className="col-6 font-20">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 d-flex flex-column menu-page px-md-1">
                        <Map className="col-12" />
                    </div>
                </main>
            </div>
        )
    }
}