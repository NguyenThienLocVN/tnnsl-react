import React from 'react';
import Header from '../../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../../layout/Map';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class QuanLyCapPhepNuocMatGiamSatKhaiThacSuDung extends React.Component {
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
                <Header headTitle="THỦY ĐIỆN | GIÁM SÁT KTSD" previousLink="/quan-ly-cap-phep" showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-2">
                            <nav className="nav flex-column nav-pills pt-3">
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung" className="nav-link text-dark border-bottom ">Thông tin chung</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh" className="nav-link text-dark border-bottom ">Thông tin công trình</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/giam-sat-khai-thac-su-dung" className="nav-link text-dark border-bottom active">Giám sát KTSD</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/chat-luong-nuoc-mat" className="nav-link text-dark border-bottom">Chất lượng nước mặt</Link>
                                <Link to="/quan-ly-cap-phep/nuoc-mat/thuy-dien/ho-so-cap-phep" className="nav-link text-dark border-bottom">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-10 px-md-1 vh-50 pr-2">
                            <Map className="col-12" />

                            <Tabs className="col-12" defaultActiveKey="1" tabPosition={ mode }>
                                <TabPane tab="Giới hạn thông số" key="1">
                                    <div className="pb-2 mx-0 px-2">
                                        <table className="table table-bordered">
                                            <thead className="thead-light">
                                                <tr className="text-center">
                                                    <th className="font-13">#</th>
                                                    <th className="font-13">Quan trắc tự động</th>
                                                    <th className="font-13 text-nowrap">Thông số</th>
                                                    <th className="font-13 text-nowrap">Đơn vị đo</th>
                                                    <th className="font-13">Giá trị giới hạn nhỏ nhất</th>
                                                    <th className="font-13">Giá trị giới hạn lớn nhất</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-left">
                                                    <td className="font-13 text-center">1</td>
                                                    <td className="text-center"> có </td>
                                                    <td className="text-wrap">Mực nước hồ</td>
                                                    <td>
                                                        <div className="text-center">
                                                            m3/s
                                                        </div>
                                                    </td>
                                                    <td><div className="text-center">3,3</div></td>
                                                    <td><div className="text-center">3,3</div></td>
                                                </tr>
                                                <tr className="text-left">
                                                    <td className="font-13 text-center">2</td>
                                                    <td className="text-center"> có </td>
                                                    <td className="text-wrap">Lưu lượng xả duy trì dòng chảy tối thiểu</td>
                                                    <td>
                                                        <div className="text-center">
                                                            m3/s
                                                        </div>
                                                    </td>
                                                    <td><div className="text-center">3,3</div></td>
                                                    <td><div className="text-center">3,3</div></td>
                                                </tr>
                                                <tr className="text-left">
                                                    <td className="font-13 text-center">3</td>
                                                    <td className="text-center"> có </td>
                                                    <td className="text-wrap">Lưu lượng xả qua nhà máy</td>
                                                    <td>
                                                        <div className="text-center">
                                                            m3/s
                                                        </div>
                                                    </td>
                                                    <td><div className="text-center">3,3</div></td>
                                                    <td><div className="text-center">3,3</div></td>
                                                </tr>
                                                <tr className="text-left">
                                                    <td className="font-13 text-center">4</td>
                                                    <td className="text-center"> có </td>
                                                    <td className="text-wrap">Lưu lượng xả qua tràn</td>
                                                    <td>
                                                        <div className="text-center">
                                                            m3/s
                                                        </div>
                                                    </td>
                                                    <td><div className="text-center">3,3</div></td>
                                                    <td><div className="text-center">3,3</div></td>
                                                </tr>
                                                <tr className="text-left">
                                                    <td className="font-13 text-center">5</td>
                                                    <td className="text-center"> không </td>
                                                    <td className="text-wrap">Giám sát bằng camera</td>
                                                    <td>
                                                        <div className="text-center">
                                                            m3/s
                                                        </div>
                                                    </td>
                                                    <td><div className="text-center">3,3</div></td>
                                                    <td><div className="text-center">3,3</div></td>
                                                </tr>
                                                <tr className="text-left">
                                                    <td className="font-13 text-center">6</td>
                                                    <td className="text-center"> không </td>
                                                    <td className="text-wrap">Chất lượng nước trong quá trình khai thác theo quy định</td>
                                                    <td>
                                                        <div className="text-center">
                                                            m3/s
                                                        </div>
                                                    </td>
                                                    <td><div className="text-center">3,3</div></td>
                                                    <td><div className="text-center">3,3</div></td>
                                                </tr>
                                                <tr className="text-left">
                                                    <td className="font-13 text-center">7</td>
                                                    <td className="text-center"> không </td>
                                                    <td className="text-wrap">Lưu lượng khai thác</td>
                                                    <td>
                                                        <div className="text-center">
                                                            m3/s
                                                        </div>
                                                    </td>
                                                    <td><div className="text-center">3,3</div></td>
                                                    <td><div className="text-center">3,3</div></td>
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