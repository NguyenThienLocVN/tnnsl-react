import React from 'react';
import Header from '../../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../../layout/Map';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class QuanLyCapPhepNuocMatXemThongTinThuyDien extends React.Component {
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
                <Header headTitle="THỦY ĐIỆN | XEM THÔNG TIN CHUNG" previousLink="/" showHeadImage={false} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <p className="col-lg-12 px-0 font-weight-bold my-2"> "Contruction Name" / Giấy phép khai thác nước mặt / Công trình thủy điện / "Contruction Name" </p>
                        <div className="col-lg-2">
                            <nav className="nav flex-column nav-pills">
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung" className="nav-link active">Thông tin chung</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh" className="nav-link">Thông tin công trình</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/giam-sat-khai-thac-su-dung" className="nav-link">Giám sát KTSD</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/chat-luong-nuoc-mat" className="nav-link">Chất lượng nước mặt</Link>
                                <Link to="#" className="nav-link">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-10 px-md-1 vh-50">
                            <Map className="col-12" />

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
                                            <div className="col-lg-6"> <button type="button" className="btn btn-sm btn-outline-primary">Xem Tài Liệu</button> </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                            <div className="col-lg-1">2</div>
                                            <div className="col-lg-5">Tên tài liệu 2</div>
                                            <div className="col-lg-6"> <button type="button" className="btn btn-sm btn-outline-primary">Xem Tài Liệu</button> </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                            <div className="col-lg-1">3</div>
                                            <div className="col-lg-5">Tên tài liệu 3</div>
                                            <div className="col-lg-6"> <button type="button" className="btn btn-sm btn-outline-primary">Xem Tài Liệu</button> </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}