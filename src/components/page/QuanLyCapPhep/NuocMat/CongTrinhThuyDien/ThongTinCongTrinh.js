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
                <Header headTitle="THỦY ĐIỆN | XEM THÔNG TIN CÔNG TRÌNH" previousLink="/" showHeadImage={false} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <p className="col-lg-12 px-2 font-weight-bold my-2"> Contruction Name / Giấy phép khai thác nước mặt / Công trình thủy điện / Contruction Name </p>
                        <div className="col-lg-2">
                            <nav className="nav flex-column nav-pills">
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung" className="nav-link text-dark border-bottom ">Thông tin chung</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh" className="nav-link text-dark border-bottom active">Thông tin công trình</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/giam-sat-khai-thac-su-dung" className="nav-link text-dark border-bottom">Giám sát KTSD</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/chat-luong-nuoc-mat" className="nav-link text-dark border-bottom">Chất lượng nước mặt</Link>
                                <Link to="#" className="nav-link text-dark border-bottom">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-10 px-md-1 vh-50 pr-2">
                            <Map className="col-12" />

                            <Tabs className="col-12" defaultActiveKey="1" tabPosition={ mode }>
                                <TabPane tab="Thông tin chung" key="1">
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
                                        <div className="row mx-0 py-2 col-lg4 border-bottom px-0">
                                            <div className="col-lg-6 font-weight-bold">Loại kinh tuyến trục: </div>
                                            <div className="col-lg-6">Địa phương </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-4 border-bottom px-0">
                                            <div className="col-lg-6 font-weight-bold">Kinh tuyến trục (VN2000): </div>
                                            <div className="col-lg-6">104 độ 0' - Tỉnh Sơn La </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-4 border-bottom px-0">
                                            <div className="col-lg-6 font-weight-bold">Múi chiếu: </div>
                                            <div className="col-lg-6">3 độ </div>
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
                                </TabPane>
                                <TabPane tab="Thông tin chi tiết" key="2">
                                    <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Công suất lắp máy(MW): </div>
                                            <div className="col-lg-4">90 </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Lưu lượng lớn nhất qua nhà máy thủy điện (m3/s): </div>
                                            <div className="col-lg-4"> 66 </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Lưu lượng lớn nhất qua nhà máy thủy điện (m3/s): </div>
                                            <div className="col-lg-4">44 </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Dung tích hữu ích (triệu m3): </div>
                                            <div className="col-lg-4">33 </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Dung tích toàn bộ (triệu m3): </div>
                                            <div className="col-lg-4">34</div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Mực nước chết (m): </div>
                                            <div className="col-lg-4">12 </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Mực nước dâng bình thường (m): </div>
                                            <div className="col-lg-4">12 </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Mực nước cao nhất trước lũ (m): </div>
                                            <div className="col-lg-4">12 </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-8 font-weight-bold">Mực nước đón lũ (m): </div>
                                            <div className="col-lg-4">12 </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Lưu lượng theo mục đích khai thác sử dụng" key="3">
                                    <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                        <div className="row mx-0 py-2 col-lg-12 border-bottom px-0">
                                            <div className="col-lg-4 font-weight-bold">Mục đích: </div>
                                            <div className="col-lg-8"> Không có dữ liệu... </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-4 font-weight-bold">Lưu lượng: </div>
                                            <div className="col-lg-8"> Không có dữ liệu... </div>
                                        </div>
                                        <div className="row mx-0 py-2 col-lg-6 border-bottom px-0">
                                            <div className="col-lg-4 font-weight-bold">	Đơn vị đo: </div>
                                            <div className="col-lg-8"> Không có dữ liệu... </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Tọa độ công trình" key="4">
                                    <div className="row mx-0 col-lg-12 px-0 infomation_table pb-5">
                                        <table className="table table-bordered">
                                            <thead className="thead-light">
                                                <tr className="text-center">
                                                    <th className="font-13">#</th>
                                                    <th className="font-13">Ký hiệu</th>
                                                    <th className="font-13">Tọa Độ X</th>
                                                    <th className="font-13">Tọa Độ Y</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-center">
                                                    <td>1</td>
                                                    <td>CT01</td>
                                                    <td>1416102</td>
                                                    <td>483845</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </TabPane>
                                <TabPane tab="Hạng mục công trình" key="5">
                                    <div className="pb-2 mx-0 px-2">
                                        <table className="table table-bordered">
                                            <thead className="thead-light">
                                                <tr className="text-center">
                                                    <th className="font-13" rowspan="2">#</th>
                                                    <th className="font-13" rowspan="2">Tên hạng mục</th>
                                                    <th className="font-13" colspan="2">Tọa Độ</th>
                                                    <th className="font-13" rowspan="2">Mô tả</th>
                                                </tr>
                                                <tr className="text-center">
                                                        <th className="font-13">X</th>
                                                        <th className="font-13">Y</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-center">
                                                    <td>1</td>
                                                    <td>tuyến đập</td>
                                                    <td>1416102</td>
                                                    <td>483845</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
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