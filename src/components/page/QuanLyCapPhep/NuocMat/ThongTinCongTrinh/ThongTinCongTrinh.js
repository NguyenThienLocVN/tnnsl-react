import React from 'react';
import Header from '../../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../../layout/Map';

export default class QuanLyCapPhepNuocMatXemThongTinCongTrinh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mode: 'top',
          pagename: this.props.match.params.pagename,
        };
      }
      componentDidMount(){
        if(this.state.pagename === "thuy-dien"){
            document.title = "Xem thông tin | Thủy điện | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "ho-chua"){
            document.title = "Xem thông tin | Hồ Chứa | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "tram-bom"){
            document.title = "Xem thông tin | Trạm Bơm | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "he-thong-thuy-loi"){
            document.title = "Xem thông tin | Đập/Hệ Thống Thủy Lợi | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "cong"){
            document.title = "Xem thông tin | Cống | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "tram-cap-nuoc"){
            document.title = "Xem thông tin | Trạm Cấp  Nước | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "nha-may-nuoc"){
            document.title = "Xem thông tin | Nhà  Máy Nước | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "cong-trinh-khac"){
            document.title = "Xem thông tin | Công Trình Khác | Quản lý cấp phép nước mặt";
        }
        
    }
    headerTitle = () => {
        if(this.state.pagename === "thuy-dien"){
            return " THỦY ĐIỆN | THÔNG TIN CT";
        }
        else if(this.state.pagename === "ho-chua"){
            return " HỒ CHỨA | THÔNG TIN CT";
        }
        else if(this.state.pagename === "tram-bom"){
            return " TRẠM BƠM | THÔNG TIN CT";
        }
        else if(this.state.pagename === "he-thong-thuy-loi"){
            return " HT THỦY LỢI | THÔNG TIN CT";
        }
        else if(this.state.pagename === "cong"){
            return " CỐNG | THÔNG TIN CT";
        }
        else if(this.state.pagename === "tram-cap-nuoc"){
            return " TRẠM CẤP NƯỚC | THÔNG TIN CT";
        }
        else if(this.state.pagename === "nha-may-nuoc"){
            return " NHÀ MÁY NƯỚC | THÔNG TIN CT";
        }
        else if(this.state.pagename === "cong-trinh-khac"){
            return " CÔNG TRÌNH KHÁC | THÔNG TIN CT";
        }
    }
    

    render(){
        return(
			<div className="p-0">
                <Header headTitle={this.headerTitle()} previousLink={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename} showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-2    ">
                            <nav className="nav flex-column nav-pills pt-3">
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-thong-tin-chung"} className="nav-link text-dark border-bottom">Thông tin chung</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-thong-tin-cong-trinh"} className="nav-link text-dark border-bottom active">Thông tin công trình</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/giam-sat-khai-thac-su-dung"} className="nav-link text-dark border-bottom">Giám sát KTSD</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/chat-luong-nuoc-mat"} className="nav-link text-dark border-bottom">Chất lượng nước mặt</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/ho-so-cap-phep"} className="nav-link text-dark border-bottom">Hồ sơ cấp phép</Link>
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
                                        <Link className="py-2 px-3 text-primary" to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-thong-tin-cong-trinh/chi-tiet"}>Thông tin chi tiết</Link>
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