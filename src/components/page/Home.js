/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import Map from '../layout/Map';
import Header from '../layout/Header';
import { trackPromise } from 'react-promise-tracker';
import { LoginOutlined } from '@ant-design/icons';
import configData from "../../config.json";

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

        trackPromise(
        axios
            .post(configData.API_URL + "/logout", {
                remember_token: user.remember_token,
            })
            .then((response) => {
                localStorage.clear();
                this.setState({redirect: true}); 
            })
            .catch((error) => {
                console.log(error);
            })
        );
    };

    render(){
        const user = JSON.parse(localStorage.getItem("userData"));
        if (!user || this.state.redirect) {
            return <Redirect to="/login" push={true} />;
        }
        return(
            <div className="pt-1 px-1">
                <Header headTitle="TÀI NGUYÊN NƯỚC" isHomepage={true} showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-4 px-0 menu-home discharge-water">
                        <div className="d-flex auth-bar pl-2 justify-content-between align-items-center">
                            <span className="font-weight-bold p-0">Xin chào, {user.name} </span>
                            <button onClick={this.onLogoutHandler} className="px-md-3 p-2 d-flex justify-content-center align-items-center text-white btn-logout btn-danger" title="Đăng xuất">
                                <LoginOutlined />
                            </button>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="/gioi-thieu-chung" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_THONGTINCHUNG.png'} alt="thong-tin-chung" />
                                    <p className="grid-item-text font-weight-bold">Giới thiệu chung</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_QUANLYDULIEU.png'} alt="quan-ly-du-lieu" />
                                    <p className="grid-item-text font-weight-bold">Thông tin dữ liệu</p>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_HETHONGQUANTRAC.png'} alt="he-thong-quan-trac" />
                                    <p className="grid-item-text font-weight-bold">Hệ thống quan trắc</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_THONGBAO.png'} alt="thong-bao" />
                                    <p className="grid-item-text font-weight-bold">Thông báo</p>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="/he-thong-giam-sat" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_HETHONGGIAMSAT.png'} alt="he-thong-giam-sat" />
                                    <p className="grid-item-text font-weight-bold">Hệ thống giám sát</p>
                                </Link>
                                <Link to="/bao-cao-bieu-mau" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_BIEUMAUBAOCAO.png'} alt="bieu-mau" />
                                    <p className="grid-item-text font-weight-bold">Báo cáo biểu mẫu</p>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 px-0 pt-3 pb-0 d-flex">
                                <Link to="/quan-ly-cap-phep" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_QUANLYCAPPHEP.png'} alt="cap-phep" />
                                    <p className="grid-item-text font-weight-bold">Quản lý cấp phép</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_DANGKY.png'} alt="dang-ky" />
                                    <p className="grid-item-text font-weight-bold">Đăng ký</p>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <div className="col-12 px-0 pt-3 pb-0 d-flex justify-content-center">
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_HUONGDANQUYDINH.png'} alt="huong-dan-quy-dinh" />
                                    <p className="grid-item-text font-weight-bold">Hướng dẫn quy định</p>
                                </Link>
                                <Link to="#" className="col-6 text-center">
                                    <img className="grid-item-image" src={process.env.PUBLIC_URL + '/images/TRANG_CHU/ANH_YEUCAUKETNOI.png'} alt="yeu-cau-ket-noi" />
                                    <p className="grid-item-text font-weight-bold">Yêu cầu kết nối</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 map-container px-md-0">
                        <Map />
                    </div>
                </main>
            </div>
        )
    }
}