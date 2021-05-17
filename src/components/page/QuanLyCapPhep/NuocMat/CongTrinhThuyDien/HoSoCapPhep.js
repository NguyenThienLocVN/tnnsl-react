import React from 'react';
import Header from '../../../../layout/Header';
import Map from '../../../../layout/Map';
import { Link } from 'react-router-dom';
import { PrinterOutlined, FolderViewOutlined } from '@ant-design/icons';

export default class QuanLyCapPhepNuocMatThongTinCongTrinhChiTiet extends React.Component {
    componentDidMount(){
        document.title = "Quản lý cấp phép | Giám sát tài nguyên nước Sơn La";
    }

    render(){
        return(
            <div className="p-0">
                <Header headTitle="THỦY ĐIỆN | HỒ SƠ CẤP PHÉP" previousLink="/quan-ly-cap-phep/nuoc-mat" showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-2    ">
                            <nav className="nav flex-column nav-pills pt-3">
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung" className="nav-link text-dark border-bottom ">Thông tin chung</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh" className="nav-link text-dark border-bottom ">Thông tin công trình</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/giam-sat-khai-thac-su-dung" className="nav-link text-dark border-bottom">Giám sát KTSD</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/chat-luong-nuoc-mat" className="nav-link text-dark border-bottom">Chất lượng nước mặt</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/ho-so-cap-phep" className="nav-link text-dark border-bottom active">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-10 px-md-1 pr-2">
                            <div className="col-12 row mx-0 px-0">
                                <div className="col-lg-6 px-0 menu-home discharge-water">
                                    <div className="row mx-0 mb-3">
                                        <p className="exploit-surfacewater-title col-12 mb-0 p-2 font-weight font-weight-bold text-left">HỒ SƠ CẤP PHÉP CÔNG TRÌNH</p>
                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Tên công trình:</div>
                                            <div className="col-6 px-0 text-13">Thủy Điện</div>
                                        </div>
                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Ký hiệu công trình:</div>
                                            <div className="col-6 px-0 text-13">Thủy Điện</div>
                                        </div>
                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Đơn xin cấp phép:</div>
                                            <div className="col-6 px-0 row mx-0 text-13">
                                                <button type="button" className="btn btn-outline-success btn-sm d-flex align-items-center mx-1 px-1"> <FolderViewOutlined className="mx-2" /> File Đính Kèm </button>
                                                <button type="button" className="btn btn-outline-info btn-sm d-flex align-items-center mx-1 px-1"> <PrinterOutlined className="mx-2" /> In Giấy Phép </button>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Báo cáo đề án KTSD:</div>
                                            <div className="col-6 px-0 row mx-0 text-13">
                                                <button type="button" className="btn btn-outline-success btn-sm d-flex align-items-center mx-1 px-1"> <FolderViewOutlined className="mx-2" /> File Đính Kèm </button>
                                                <button type="button" className="btn btn-outline-info btn-sm d-flex align-items-center mx-1 px-1"> <PrinterOutlined className="mx-2" /> In Giấy Phép </button>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Kết quả phân tích CLN:</div>
                                            <div className="col-6 px-0 row mx-0 text-13">
                                                <button type="button" className="btn btn-outline-success btn-sm d-flex align-items-center mx-1 px-1"> <FolderViewOutlined className="mx-2" /> File Đính Kèm </button>
                                                <button type="button" className="btn btn-outline-info btn-sm d-flex align-items-center mx-1 px-1"> <PrinterOutlined className="mx-2" /> In Giấy Phép </button>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Văn bản ý kiến cộng đồng:</div>
                                            <div className="col-6 px-0 row mx-0 text-13">
                                                <button type="button" className="btn btn-outline-success btn-sm d-flex align-items-center mx-1 px-1"> <FolderViewOutlined className="mx-2" /> File Đính Kèm </button>
                                                <button type="button" className="btn btn-outline-info btn-sm d-flex align-items-center mx-1 px-1"> <PrinterOutlined className="mx-2" /> In Giấy Phép </button>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Giấy tờ khác:</div>
                                            <div className="col-6 px-0 row mx-0 text-13">
                                                <button type="button" className="btn btn-outline-success btn-sm d-flex align-items-center mx-1 px-1"> <FolderViewOutlined className="mx-2" /> File Đính Kèm </button>
                                                <button type="button" className="btn btn-outline-info btn-sm d-flex align-items-center mx-1 px-1"> <PrinterOutlined className="mx-2" /> In Giấy Phép </button>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Quyết định phê duyệt giấy phép lần 1:</div>
                                            <div className="col-6 px-0 row mx-0 text-13">
                                                <button type="button" className="btn btn-outline-success btn-sm d-flex align-items-center mx-1 px-1"> <FolderViewOutlined className="mx-2" /> File Đính Kèm </button>
                                                <button type="button" className="btn btn-outline-info btn-sm d-flex align-items-center mx-1 px-1"> <PrinterOutlined className="mx-2" /> In Giấy Phép </button>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                            <div className="col-6 px-0 font-weight-bold text-13">Quyết định phê duyệt giấy phép lần 2:</div>
                                            <div className="col-6 px-0 row mx-0 text-13">
                                                <button type="button" className="btn btn-outline-success btn-sm d-flex align-items-center mx-1 px-1"> <FolderViewOutlined className="mx-2" /> File Đính Kèm </button>
                                                <button type="button" className="btn btn-outline-info btn-sm d-flex align-items-center mx-1 px-1"> <PrinterOutlined className="mx-2" /> In Giấy Phép </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 px-md-1 menu-home pr-2">
                                    <Map className="h-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}