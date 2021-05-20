import React from 'react';
import Header from '../../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../../layout/Map';
import { Tabs } from 'antd';
import { FolderViewOutlined } from '@ant-design/icons';

const TabPane = Tabs.TabPane;

export default class QuanLyCapPhepNuocMatXemThongTinThuyDien extends React.Component {
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
            return " THỦY ĐIỆN | THÔNG TIN CHUNG";
        }
        else if(this.state.pagename === "ho-chua"){
            return " HỒ CHỨA | THÔNG TIN CHUNG";
        }
        else if(this.state.pagename === "tram-bom"){
            return " TRẠM BƠM | THÔNG TIN CHUNG";
        }
        else if(this.state.pagename === "he-thong-thuy-loi"){
            return " HT THỦY LỢI | THÔNG TIN CHUNG";
        }
        else if(this.state.pagename === "cong"){
            return " CỐNG | THÔNG TIN CHUNG";
        }
        else if(this.state.pagename === "tram-cap-nuoc"){
            return " TRẠM CẤP NƯỚC | THÔNG TIN CHUNG";
        }
        else if(this.state.pagename === "nha-may-nuoc"){
            return " NHÀ MÁY NƯỚC | THÔNG TIN CHUNG";
        }
        else if(this.state.pagename === "cong-trinh-khac"){
            return " CÔNG TRÌNH KHÁC | THÔNG TIN CHUNG";
        }
    }

    render(){
        const { mode } = this.state;
        return(
			<div className="p-0">
                <Header headTitle={this.headerTitle()} previousLink={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename} showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-2">
                            <nav className="nav flex-column nav-pills pt-3">
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-thong-tin-chung"} className="nav-link text-dark border-bottom active">Thông tin chung</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-thong-tin-cong-trinh"} className="nav-link text-dark border-bottom">Thông tin công trình</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/giam-sat-khai-thac-su-dung"} className="nav-link text-dark border-bottom">Giám sát KTSD</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/chat-luong-nuoc-mat"} className="nav-link text-dark border-bottom">Chất lượng nước mặt</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/ho-so-cap-phep"} className="nav-link text-dark border-bottom">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-10 px-md-1 pr-2 menu-home discharge-water">
                            <div className="col-12 px-0 vh-50">
                                <Map className="col-12" />
                            </div>
                            <div className="col-12 px-0">
                                <Tabs className="col-12" defaultActiveKey="1" tabPosition={ mode }>
                                    <TabPane tab="Thông tin chung" key="1">
                                        <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Tổ chức/Cá nhân được cấp phép: </div>
                                                <div className="col-lg-12">Organition Name </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Đ/C tổ chức/cá nhân được cấp phép: </div>
                                                <div className="col-lg-12">Organition Adress </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Số giấy phép: </div>
                                                <div className="col-lg-8"> Licence Number </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Tên văn bản: </div>
                                                <div className="col-lg-8">Licence Name </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Cơ quan cấp phép: </div>
                                                <div className="col-lg-12">Licensing authorities </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Loại hình giấy phép: </div>
                                                <div className="col-lg-8">Licence Type </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Thời hạn giấy phép: </div>
                                                <div className="col-lg-8"> 12/12/2022 </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Số giấy phép cũ: </div>
                                                <div className="col-lg-8">Old Licence Number </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Ngày cấp phép  cũ: </div>
                                                <div className="col-lg-8">01/01/2010 </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold"> Nội dung cấp lại </div>
                                                <div className="col-lg-12">Re-issued content </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Người ký: </div>
                                                <div className="col-lg-8">Nguyễn Văn A </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Ngày ký: </div>
                                                <div className="col-lg-8">20/02/2020 </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Có hiệu lực từ: </div>
                                                <div className="col-lg-8">20/02/2020 </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Hiệu lực đến: </div>
                                                <div className="col-lg-8">20/02/2020 </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Nơi nhận: </div>
                                                <div className="col-lg-12">Sở TNMT </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Ghi Chú </div>
                                                <div className="col-lg-12">20/02/2020 </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Thanh tra / Kiểm tra" key="2">
                                        <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Tên đợt thanh tra: </div>
                                                <div className="col-lg-12">Inspections Name </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Tên trưởng đoàn: </div>
                                                <div className="col-lg-12"> Nguyễn Văn A </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Tên đơn vị thực hiện: </div>
                                                <div className="col-lg-8">Đoàn Thah Tra ABC </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Năm thực hiện: </div>
                                                <div className="col-lg-8">2020 </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Ghi chú: </div>
                                                <div className="col-lg-12">nội dung ghi chú </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Tiền cấp quyền KTSD" key="3">
                                        <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Quyết định số: </div>
                                                <div className="col-lg-8">AB123D </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                                <div className="col-lg-4 font-weight-bold">Tổng Tiền: </div>
                                                <div className="col-lg-8"> 11,511,353,700 </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Theo dõi quá trình sau GP" key="4">
                                        <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Ngày tháng: </div>
                                                <div className="col-lg-12"> Không có dữ liệu... </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Văn bản: </div>
                                                <div className="col-lg-12"> Không có dữ liệu... </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-12 font-weight-bold">Nội Dung: </div>
                                                <div className="col-lg-12">Không có dữ liệu... </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Theo dõi quá trình thực hiện kết nối" key="5">Content of tab 5</TabPane>
                                    <TabPane tab="Thông tin tài liệu đính kèm" key="6">
                                        <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-1">1</div>
                                                <div className="col-lg-5">Tên tài liệu 1</div>
                                                <div className="col-lg-6"> <button type="button" className="btn btn-sm d-flex align-items-center btn-outline-primary"> < FolderViewOutlined className="mx-2" /> Xem Tài Liệu</button> </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-1">2</div>
                                                <div className="col-lg-5">Tên tài liệu 2</div>
                                                <div className="col-lg-6"> <button type="button" className="btn btn-sm d-flex align-items-center btn-outline-primary"> < FolderViewOutlined className="mx-2" /> Xem Tài Liệu</button> </div>
                                            </div>
                                            <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                                <div className="col-lg-1">3</div>
                                                <div className="col-lg-5">Tên tài liệu 3</div>
                                                <div className="col-lg-6"> <button type="button" className="btn btn-sm d-flex align-items-center btn-outline-primary"> < FolderViewOutlined className="mx-2" /> Xem Tài Liệu</button> </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}