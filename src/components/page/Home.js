/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import Map from '../layout/Map';

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
                        <Map />
                    </div>
                </main>
            </div>
        )
    }
}