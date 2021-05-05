/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";

import './Page.css'

export default class Login extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            nameUser: '',
            redirect: false,
        }
    }

    componentDidMount(){
        document.title = "Trang chủ | Giám sát tài nguyên nước Sơn La";
    }

    onLogoutHandler = () => {
        var user = JSON.parse(localStorage.getItem("userData"));

        axios
            .post("http://localhost/tnnsl-api/public/api/logout", {
                remember_token: user.remember_token,
            })
            .then((response) => {
                localStorage.clear();
                this.setState({redirect: true}); 
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render(){
        const user = JSON.parse(localStorage.getItem("userData"));
        if (!user || this.state.redirect) {
            return <Redirect to="/login" push={true} />;
        }
        return(
            <div className="container p-0">
                <header>
                    <Link to="/"><img className="w-100 banner-tnmt" src={process.env.PUBLIC_URL + '/images/ANHSOTNMT.png'} alt="banner-tnmt" /></Link>
                    <div className="bg-primary d-flex flex-column flex-lg-row top-bar">
                        <div className="col-lg-4 col-sm-12 col-md-12 px-0 pt-md-0 pb-md-0 d-flex align-items-center">
                            <a href="http://tainguyenmoitruongsonla.vn" title="Về trang chủ" className="font-weight-bold text-white btn-home-top d-block pl-2 pt-2 pt-md-0"><i className="fa fa-home" aria-hidden="true"></i></a>
                            <div className="font-weight-bold text-white d-block pl-2"> TÀI NGUYÊN NƯỚC</div>
                        </div>
                        <div className="bg-lightgray col-lg-8 col-sm-12 col-md-12 text-center py-1 py-lg-0">
                            <span className="text-primary font-weight-bold">HỆ THỐNG QUẢN LÝ,  GIÁM SÁT, KHAI THÁC SỬ DỤNG TÀI NGUYÊN NƯỚC </span>
                        </div>
                    </div> 
                </header>
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-4 px-md-0 menu-home">
                        <div className="d-flex auth-bar pl-2 justify-content-between align-items-center">
                            <span className="font-weight-bold p-0">Xin chào, {user.name} </span>
                            <button onClick={this.onLogoutHandler} className="px-md-2 p-2 d-block text-white btn-logout btn-danger" title="Đăng xuất">
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_THONGTINCHUNG.png'} alt="thong-tin-chung" />
                                    <p className="grid-item-text font-weight-bold">Giới thiệu chung</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_QUANLYDULIEU.png'} alt="quan-ly-du-lieu" />
                                    <p className="grid-item-text font-weight-bold">Thông tin dữ liệu</p>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_HETHONGQUANTRAC.png'} alt="he-thong-quan-trac" />
                                    <p className="grid-item-text font-weight-bold">Hệ thống quan trắc</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_THONGBAO.png'} alt="thong-bao" />
                                    <p className="grid-item-text font-weight-bold">Thông báo</p>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_HETHONGGIAMSAT.png'} alt="he-thong-giam-sat" />
                                    <p className="grid-item-text font-weight-bold">Hệ thống giám sát</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_BIEUMAUBAOCAO.png'} alt="bieu-mau" />
                                    <p className="grid-item-text font-weight-bold">Báo cáo biểu mẫu</p>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_QUANLYCAPPHEP.png'} alt="cap-phep" />
                                    <p className="grid-item-text font-weight-bold">Quản lý cấp phép</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_DANGKY.png'} alt="dang-ky" />
                                    <p className="grid-item-text font-weight-bold">Đăng ký / Kết nối</p>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <div className="col-12 px-0 pt-3 pb-0 d-flex justify-content-center">
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/ANH_HUONGDANQUYDINH.png'} alt="huong-dan-quy-dinh" />
                                    <p className="grid-item-text font-weight-bold">Hướng dẫn quy định</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 pb-3 map-container px-md-0">
                        <div id="map" className="h-100 w-100 position-relative">
                            <img title="Về trung tâm bản đồ" className="position-absolute map-tool center-map" id="center-map" src={process.env.PUBLIC_URL + '/images/ANH_VEGIUABANDO.png'} alt="trung-tam-ban-do" />
                            <img title="Vị trí hiện tại" className="position-absolute map-tool current-location" id="current-location" src={process.env.PUBLIC_URL + '/images/ANH_VITRIHIENTAI.png'} alt="vi-tri-hien-tai" />
                            <img title="Phóng to" className="position-absolute map-tool zoom-in" id="zoom-in" src={process.env.PUBLIC_URL + '/images/ANH_PHONGTO.png'} alt="phong-to" />
                            <img title="Thu nhỏ" className="position-absolute map-tool zoom-out" id="zoom-out" src={process.env.PUBLIC_URL + '/images/ANH_THUNHO.png'} alt="thu-nho" />
                            <img title="Thêm công trình" className="position-absolute map-tool add-construction" src={process.env.PUBLIC_URL + '/images/ANH_THEMCONGTRINH.png'} alt="them-cong-trinh" />
                            <img title="Sửa công trình" className="position-absolute map-tool edit-construction" src={process.env.PUBLIC_URL + '/images/ANH_SUACONGTRINH.png'} alt="sua-cong-trinh" />
                            <img title="Xem thông tin" className="position-absolute map-tool view-info" src={process.env.PUBLIC_URL + '/images/ANH_VEGIUABANDO.png'} alt="xem-thong-tin" />
                            <img title="Đo khoảng cách" className="position-absolute map-tool distance-measure" src={process.env.PUBLIC_URL + '/images/ANH_DOKHOANGCACH.png'} alt="do-khoang-cach" />
                            <div className="position-absolute map-layers d-flex align-items-center" id="map-layers" title="Chọn lớp bản đồ">
                                <img src={process.env.PUBLIC_URL + '/images/ANH_LOPBANDO.png'} alt="lop-ban-do" />
                                <span className="font-weight-bold">&nbsp; Lớp bản đồ</span>
                            </div>
                            <div className="position-absolute map-panel-layers align-items-center text-white" id="map-panel-layers">
                                <ul className="p-2 m-0">
                                    <li className="text-right"><i className="fa fa-window-close text-danger btn-close-layers" id="btn-close-layers" aria-hidden="true"></i></li>
                                    <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="Topographic" />&nbsp; Bản đồ địa hình</li>
                                    <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="Imagery" />&nbsp; Bản đồ vệ tinh</li>
                                    <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="Streets" />&nbsp; Bản đồ đường</li>
                                    <li className="d-flex align-items-center"><input type="radio" name="select-layer" id="select-layer" value="NationalGeographic" />&nbsp; Bản đồ hành chính</li>
                                </ul>
                            </div>
                            <div className="position-absolute map-note d-flex align-items-center">
                                <img src={process.env.PUBLIC_URL + '/images/ANH_CHUGIAIBANDO.png'} alt="chu-giai-ban-do" />
                                <span className="font-weight-bold">&nbsp; Chú giải</span>
                            </div>
                        </div>

                        
                    </div>
                </main>
            </div>
        )
    }
}