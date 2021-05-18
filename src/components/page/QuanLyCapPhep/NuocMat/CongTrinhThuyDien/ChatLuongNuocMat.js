import React from 'react';
import Header from '../../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../../layout/Map';

export default class QuanLyCapPhepNuocMatChatLuongNuocMat extends React.Component {
    
    componentDidMount(){
        document.title = "Quản lý cấp phép | Giám sát tài nguyên nước Sơn La";
    }

    render(){
        return(
			<div className="p-0">
                <Header headTitle="THỦY ĐIỆN | CHẤT LƯỢNG NƯỚC MẶT" previousLink="/quan-ly-cap-phep" showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-2">
                            <nav className="nav flex-column nav-pills pt-3">
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung" className="nav-link text-dark border-bottom ">Thông tin chung</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh" className="nav-link text-dark border-bottom ">Thông tin công trình</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/giam-sat-khai-thac-su-dung" className="nav-link text-dark border-bottom ">Giám sát KTSD</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/chat-luong-nuoc-mat" className="nav-link text-dark border-bottom active">Chất lượng nước mặt</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/ho-so-cap-phep" className="nav-link text-dark border-bottom">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 row mx-0 col-lg-10 px-md-1 pr-2 menu-home discharge-water">
                            <div className="col-12 px-0">
                                <div className="col-lg-12 vh-50 px-0 mb-3">
                                    <Map className="col-12 h-100" />
                                </div>
                                <div className="col-lg-12 px-0">
                                    <div className="row mx-0 mb-3">
                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Tên công trình:</div>
                                            <div className="col-6 px-0 text-13">Thủy điện</div>
                                        </div>
                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Ký hiệu công trình:</div>
                                            <div className="col-6 px-0 text-13">TD 01</div>
                                        </div>
                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Ngày lấy mẫu:</div>
                                            <div className="col-6 px-0 text-13"> 20/01/2020 </div>
                                        </div>
                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Địa điểm lấy mẫu:</div>
                                            <div className="col-6 px-0 text-13">Nhà máy thủy điện 1</div>
                                        </div>
                                    </div>
                                    <p className="exploit-surfacewater-title mb-0 p-2 font-weight font-weight-bold text-left">Chất lượng nước mặt theo QCVN 08-MT:2015-BTNMMT</p>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="text-center align-middle">
                                                <th className="p-1 align-middle" rowSpan="3">STT</th>
                                                <th className="p-1 align-middle" rowSpan="3">Thông số</th>
                                                <th className="p-1 align-middle" rowSpan="3">Giá trị quan trắc</th>
                                                <th className="p-1 align-middle" colSpan="4">Giá trị giới hạn</th>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <th className="p-1 align-middle" colSpan="2">A</th>
                                                <th className="p-1 align-middle" colSpan="2">B</th>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <th className="p-1 align-middle">A 1</th>
                                                <th className="p-1 align-middle">A 2</th>
                                                <th className="p-1 align-middle">B 1</th>
                                                <th className="p-1 align-middle">B 2</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-center align-middle">
                                                <td className="p-1">1</td>
                                                <td className="p-1"> pH </td>
                                                <td className="p-1"> - </td>
                                                <td className="p-1"> 6 - 8.5 </td>
                                                <td className="p-1"> 6 - 8.5 </td>
                                                <td className="p-1"> 5.5 - 9 </td>
                                                <td className="p-1"> 5.5 - 9 </td>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <td className="p-1">2</td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <td className="p-1">3</td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <td className="p-1">4</td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <td className="p-1">5</td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <td className="p-1">6</td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                            </tr>
                                            <tr className="text-center align-middle">
                                                <td className="p-1">7</td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                                <td className="p-1"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}