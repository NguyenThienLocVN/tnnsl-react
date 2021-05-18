import React from 'react';
import Header from '../../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../../layout/Map';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class QuanLyCapPhepNuocMatXemThongTinCongTrinh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mode: 'top',
        };
      }
    componentDidMount(){
        document.title = "Quản lý cấp phép | Giám sát tài nguyên nước Sơn La";
    }
    

    render(){
        const { mode } = this.state;
        return(
			<div className="p-0">
                <Header headTitle="THỦY ĐIỆN | THÔNG TIN CÔNG TRÌNH" previousLink="/quan-ly-cap-phep/nuoc-mat/thuy-dien" showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-2    ">
                            <nav className="nav flex-column nav-pills pt-3">
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung" className="nav-link text-dark border-bottom ">Thông tin chung</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh" className="nav-link text-dark border-bottom active">Thông tin công trình</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/giam-sat-khai-thac-su-dung" className="nav-link text-dark border-bottom">Giám sát KTSD</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/chat-luong-nuoc-mat" className="nav-link text-dark border-bottom">Chất lượng nước mặt</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/ho-so-cap-phep" className="nav-link text-dark border-bottom">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-10 px-md-1 pr-2 menu-home discharge-water">
                            <div className="col-12 px-0">
                                <div className="vh-50 col-12 px-0">
                                    <Map className="col-12" />
                                </div>
                                <div className="col-12 px-0">
                                        <div className="row mx-0">
                                            <div className="py-2 px-3 text-primary border-bottom border-primary">Thông tin chung</div>
                                            <Link className="py-2 px-3 text-primary" to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh/chi-tiet">Thông tin chi tiết</Link>
                                        </div>
                                        <div tab="Thông tin chung" key="1">
                                            <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Tên công trình: </div>
                                                    <div className="col-lg-8">Thủy Điện  ABC </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Ký hiệu công trình: </div>
                                                    <div className="col-lg-8"> CT01 </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                    <div className="col-lg-12 font-weight-bold">Địa điểm: </div>
                                                    <div className="col-lg-12"> xã Ea Wer, xã Tân Hòa, huyện Buôn Đôn, tỉnh Đăk Lăk và xã Ea Pô huyện Cư Jút, tỉnh Đăk Nông </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Huyện: </div>
                                                    <div className="col-lg-8">Huyện ABC </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Xã: </div>
                                                    <div className="col-lg-8">Xã ABC </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Mục đích sử dụng: </div>
                                                    <div className="col-lg-8">phát điện </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Nguồn nước KTSD: </div>
                                                    <div className="col-lg-8"> sông Srê Pốk  </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Thuộc sông: </div>
                                                    <div className="col-lg-8">sông Srê Pốk </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                    <div className="col-lg-4 font-weight-bold">Thuộc lưu vực sông: </div>
                                                    <div className="col-lg-8">Mê công</div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                    <div className="col-lg-12 font-weight-bold">Chế độ khai thác: </div>
                                                    <div className="col-lg-12">Nguyễn Văn A </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                    <div className="col-lg-12 font-weight-bold">Lượng nước khai thác, sử dụng: </div>
                                                    <div className="col-lg-12">20/02/2020 </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                    <div className="col-lg-12 font-weight-bold">Phương thức khai thác: </div>
                                                    <div className="col-lg-12">Bằng công trình với các thông số như trong hồ sơ thiết kế đã được cấp có thẩm quyền phê duyệt nộp kèm theo Đề án khai thác, sử dụng nước. </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                    <div className="col-lg-12 font-weight-bold">Năm sử dụng: </div>
                                                    <div className="col-lg-12">20/02/2020 </div>
                                                </div>
                                                <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                    <div className="col-lg-12 font-weight-bold">Ghi chú: </div>
                                                    <div className="col-lg-12">Nội dung ghi chú </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}