import React, { useState } from 'react';
import Header from '../../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../../layout/Map';
import {Button, } from 'antd';
import { Modal} from 'react-bootstrap';
import { MacCommandOutlined, SelectOutlined, } from "@ant-design/icons";

function TongHopHoChua() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <MacCommandOutlined onClick={handleShow} />
        <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Tổng hợp hồ chứa / tên hồ chứa (CP)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="">
                    Nội dung, biểu đồ
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>   
            </Modal.Footer>
        </Modal>
        </>
    );
}

function CapNhatSoLieuVanHanh() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <SelectOutlined onClick={handleShow} />
        <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>CẬP NHẬT SỐ LIỆU VẬN HÀNH - TÊN THỦY ĐIỆN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="">
                    Nội dung
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>   
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default class QuanLyCapPhepNuocMatGiamSatKhaiThacSuDung extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            return " THỦY ĐIỆN | GIÁM SÁT KTSD";
        }
        else if(this.state.pagename === "ho-chua"){
            return " HỒ CHỨA | GIÁM SÁT KTSD";
        }
        else if(this.state.pagename === "tram-bom"){
            return " TRẠM BƠM | GIÁM SÁT KTSD";
        }
        else if(this.state.pagename === "he-thong-thuy-loi"){
            return " HT THỦY LỢI | GIÁM SÁT KTSD";
        }
        else if(this.state.pagename === "cong"){
            return " CỐNG | GIÁM SÁT KTSD";
        }
        else if(this.state.pagename === "tram-cap-nuoc"){
            return " TRẠM CẤP NƯỚC | GIÁM SÁT KTSD";
        }
        else if(this.state.pagename === "nha-may-nuoc"){
            return " NHÀ MÁY NƯỚC | GIÁM SÁT KTSD";
        }
        else if(this.state.pagename === "cong-trinh-khac"){
            return " CÔNG TRÌNH KHÁC | GIÁM SÁT KTSD";
        }
    }

    render(){
        return(
			<div className="p-0">
                <Header headTitle={this.headerTitle()} previousLink={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename} showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-2">
                            <nav className="nav flex-column nav-pills pt-3">
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-thong-tin-chung"} className="nav-link text-dark border-bottom ">Thông tin chung</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-thong-tin-cong-trinh"} className="nav-link text-dark border-bottom">Thông tin công trình</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/giam-sat-khai-thac-su-dung"} className="nav-link text-dark border-bottom active">Giám sát KTSD</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/chat-luong-nuoc-mat"} className="nav-link text-dark border-bottom">Chất lượng nước mặt</Link>
                                <Link to={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/ho-so-cap-phep"} className="nav-link text-dark border-bottom">Hồ sơ cấp phép</Link>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-10 px-0 pr-2 menu-home discharge-water">
                            <div className="col-12 px-0 row mx-0">
                                <div className="col-sm-7 px-0">
                                    <div className="pb-2 mx-0">
                                        <div className="row mx-0 mb-3">
                                            <p className="exploit-surfacewater-title col-12 mb-0 p-2 font-weight-bold text-left">THÔNG TIN CHUNG</p>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-12 px-0 font-weight-bold text-13">Tên công trình:</div>
                                                <div className="col-12 px-0 text-13">Thủy Điện</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-12 px-0 font-weight-bold text-13">Ký hiệu công trình:</div>
                                                <div className="col-12 px-0 text-13">Thủy Điện</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-12 px-0 font-weight-bold text-13">Chế độ khai thác:</div>
                                                <div className="col-12 px-0 text-13">Thủy Điện</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-12 px-0 font-weight-bold text-13">Phương thức khai thác:</div>
                                                <div className="col-12 px-0 text-13">Thủy Điện</div>
                                            </div>
                                            <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-12 px-0 font-weight-bold text-13">Địa điểm:</div>
                                                <div className="col-12 px-0 text-13">Thủy Điện</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-6 px-0 font-weight-bold text-13">Huyện:</div>
                                                <div className="col-6 px-0 text-13">Tên Huyện</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-6 px-0 font-weight-bold text-13">Xã:</div>
                                                <div className="col-6 px-0 text-13">Tên Xã</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-10 px-0 font-weight-bold text-13">Q lớn nhất qua NM (m3/s):</div>
                                                <div className="col-2 px-0 text-13">40000</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-10 px-0 font-weight-bold text-13">Q xả tối thiểu (m3/s):</div>
                                                <div className="col-2 px-0 text-13">40000</div>
                                            </div>
                                            <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                <div className="col-10 px-0 font-weight-bold text-13">Công suất lắp máy MW:</div>
                                                <div className="col-2 px-0 text-13">40000</div>
                                            </div>
                                        </div>
                                        <div className="row mx-0 mb-3">
                                            <p className="exploit-surfacewater-title col-12 mb-0 p-2 font-weight-bold text-left">Giám sát HTSD theo thông tư 47/2017/TT-BTNMT</p>
                                            <p className="font-14 col-12 mb-0 font-weight-bold text-danger">Thông số giám sát</p>
                                            <div className="row mx-0">
                                                <div className="col-sm-6 px-0 row mx-0">
                                                    <p className="font-14 col-12 font-weight-bold text-success mb-0">Mực nước hồ (m)</p>
                                                    <div className="row mx-0 col-sm-6 px-0">
                                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-10 px-0 font-weight-bold text-13">H_min(m):</div>
                                                            <div className="col-2 px-0 text-13">40</div>
                                                        </div>
                                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-10 px-0 font-weight-bold text-13">H_max(m):</div>
                                                            <div className="col-2 px-0 text-13">40</div>
                                                        </div>
                                                    </div>
                                                    <div className="row mx-0 col-sm-6 px-0">
                                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-12 px-0 font-weight-bold text-13">H_hiện tại(m):</div>
                                                            <div className="col-12 px-0 text-13">40</div>
                                                        </div>
                                                        <div className="row col-lg-6 p-0 mx-0 border-bottom align-items-center p-1">
                                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/sea-level.png'} alt="sea-level" className="w-100 h-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 px-0 row mx-0">
                                                    <p className="font-14 col-12 font-weight-bold text-success mb-0">Lưu lượng xả nhà máy (m3/s)</p>
                                                    <div className="row mx-0 col-sm-6 px-0">
                                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-10 px-0 font-weight-bold text-13">Q_min(m3/s):</div>
                                                            <div className="col-2 px-0 text-13">40</div>
                                                        </div>
                                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-10 px-0 font-weight-bold text-13">Q_max(m3/s):</div>
                                                            <div className="col-2 px-0 text-13">40</div>
                                                        </div>
                                                    </div>
                                                    <div className="row mx-0 col-sm-6 px-0">
                                                        <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-12 px-0 font-weight-bold text-13">Q_hiện tại(m3/s):</div>
                                                            <div className="col-12 px-0 text-13">40</div>
                                                        </div>
                                                        <div className="row col-lg-6 p-0 mx-0 border-bottom align-items-center p-1">
                                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/sea-level-2.png'} alt="sea-level-2" className="w-100 h-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 px-0 row mx-0">
                                                <p className="font-14 col-12 font-weight-bold text-success mb-0">Lưu lượng duy trì xả tối thiểu (m3/s)</p>
                                                <div className="row mx-0 col-sm-9 px-0">
                                                    <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                        <div className="col-10 px-0 font-weight-bold text-13">H_min(m):</div>
                                                        <div className="col-2 px-0 text-13">40</div>
                                                    </div>
                                                    <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                        <div className="col-10 px-0 font-weight-bold text-13">H_max(m):</div>
                                                        <div className="col-2 px-0 text-13">40</div>
                                                    </div>
                                                </div>
                                                <div className="row mx-0 col-sm-3 px-1">
                                                    <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/water-level.png'} alt="water-level" className="w-100 h-100" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 px-0 row mx-0">
                                                <p className="font-14 col-12 font-weight-bold text-success mb-0">Lưu lượng xả qua tràn (m3/s)</p>
                                                <div className="row mx-0 col-sm-9 px-0">
                                                    <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                        <div className="col-10 px-0 font-weight-bold text-13">Q_min(m3/s):</div>
                                                        <div className="col-2 px-0 text-13">40</div>
                                                    </div>
                                                    <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                        <div className="col-10 px-0 font-weight-bold text-13">Q_max(m3/s):</div>
                                                        <div className="col-2 px-0 text-13">40</div>
                                                    </div>
                                                </div>
                                                <div className="row mx-0 col-sm-3 px-1">
                                                    <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/water-level-2.png'} alt="water-level-2" className="w-100 h-100" />
                                                </div>
                                            </div>
                                            {/*  */}
                                            <p className="font-14 col-12 mb-0 font-weight-bold text-danger">Hình thức giám sát</p>
                                            <div className="row mx-0">
                                                <div className="col-sm-4 px-0 row mx-0 border-right">
                                                    <p className="font-14 col-12 font-weight-bold text-success text-center mb-0">Tự động, tực tuyến (m)</p>
                                                    <div className="row mx-0 col-sm-9 px-0">
                                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-12 px-0 font-weight-bold text-13">
                                                                <div className="row col-lg-12 mx-0 align-items-center py-1">
                                                                    <div className="col-6 px-0 text-13 d-flex align-items-center">
                                                                        <input type="checkbox" className="mx-1" /> <span>Có</span>
                                                                    </div>
                                                                    <div className="col-6 px-0 text-13 d-flex align-items-center">
                                                                        <input type="checkbox" className="mx-1" /> <span>Không</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mx-0 col-sm-3 p-1 border-bottom">
                                                        <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/automatic.png'} alt="automatic" className="w-100 h-100" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 px-0 row mx-0 border-right">
                                                    <p className="font-14 col-12 font-weight-bold text-success text-center mb-0">Giám sát bằng camera</p>
                                                    <div className="row mx-0 col-sm-9 px-0">
                                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-12 px-0 font-weight-bold text-13">
                                                                <div className="row col-lg-12 mx-0 align-items-center py-1">
                                                                    <div className="col-6 px-0 text-13 d-flex align-items-center">
                                                                        <input type="checkbox" className="mx-1" /> <span>Có</span>
                                                                    </div>
                                                                    <div className="col-6 px-0 text-13 d-flex align-items-center">
                                                                        <input type="checkbox" className="mx-1" /> <span>Không</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mx-0 col-sm-3 p-1 border-bottom">
                                                        <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/cctv-camera.png'} alt="cctv-camera" className="w-100 h-100" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 px-0 row mx-0">
                                                    <p className="font-14 col-12 font-weight-bold text-success text-center mb-0">Giám sát định kỳ</p>
                                                    <div className="row mx-0 col-sm-9 px-0">
                                                        <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                                            <div className="col-12 px-0 font-weight-bold text-13">
                                                                <div className="row col-lg-12 mx-0 align-items-center py-1">
                                                                    <div className="col-6 px-0 text-13 d-flex align-items-center">
                                                                        <input type="checkbox" className="mx-1" /> <span>Có</span>
                                                                    </div>
                                                                    <div className="col-6 px-0 text-13 d-flex align-items-center">
                                                                        <input type="checkbox" className="mx-1" /> <span>Không</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mx-0 col-sm-3 p-1 border-bottom">
                                                        <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/report.png'} alt="report" className="w-100 h-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 px-0">
                                    <Map className="col-12 h-100" />
                                </div>  
                                <div className="col-sm-12 px-0">
                                    <p className="exploit-surfacewater-title col-12 mb-0 p-2 font-weight-bold text-left">Số liệu vận hành</p>
                                        <div>
                                            <table className="table table-hover mx-auto table-bordered table-responsive">
                                                <thead className="thead-inverse">
                                                    <tr>
                                                        <th className="align-middle text-center font-13 " rowSpan="2">LVH/HỒ CHỨA</th>
                                                        <th className="font-13 align-middle text-center" colSpan="3">TỔNG LƯỢNG XẢ(TRIỆU m3)</th>
                                                        <th className="font-13 align-middle text-center" colSpan="3">SỐ NGÀY VẬN HÀNH KHÔNG ĐÚNG YÊU CẦU(NGÀY)</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="font-13 align-middle text-center">YÊU CẦU</th>
                                                        <th className="font-13 align-middle text-center">THỰC TẾ</th>
                                                        <th className="font-13 align-middle text-center">+/-</th>
                                                        <th className="font-13 align-middle text-center">LƯU LƯỢNG XẢ</th>
                                                        <th className="font-13 align-middle text-center">DÒNG CHẢY TỐI THIỂU</th>
                                                        <th className="font-13 align-middle text-center">THỜI GIAN XẢ</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th className="font-13 align-middle text-center">TỔNG CỘNG TẤT CẢ LVS: 302</th>
                                                            <th className="font-13 align-middle text-center">3200</th>
                                                            <th className="font-13 align-middle text-center">3200</th>
                                                            <th className="font-13 align-middle text-center">3200</th>
                                                            <th className="font-13 align-middle text-center">50</th>
                                                            <th className="font-13 align-middle text-center">50</th>
                                                            <th className="font-13 align-middle text-center">50</th>
                                                        </tr>
                                                        <tr>
                                                            <td className="font-13 align-middle">Suối lắp 1 
                                                                <div className="float-right font-14 d-flex text-primary"> 
                                                                    <div className="mx-1"><TongHopHoChua /></div>
                                                                    <div className="mx-1"><CapNhatSoLieuVanHanh /> </div>
                                                                </div>
                                                            </td>
                                                            <td className="font-13 align-middle text-center">0</td>
                                                            <td className="font-13 align-middle text-center">1.3</td>
                                                            <td className="font-13 align-middle text-center">1.3</td>
                                                            <td className="font-13 align-middle text-center">0</td>
                                                            <td className="font-13 align-middle text-center">0</td>
                                                            <td className="font-13 align-middle text-center">__</td>
                                                        </tr>
                                                    </tbody>
                                            </table>
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