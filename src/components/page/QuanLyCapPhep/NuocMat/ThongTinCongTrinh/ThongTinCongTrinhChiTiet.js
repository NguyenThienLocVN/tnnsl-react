import React from 'react';
import Header from '../../../../layout/Header';
import Map from '../../../../layout/Map';
import { FileImageOutlined } from '@ant-design/icons';

export default class QuanLyCapPhepNuocMatThongTinCongTrinhChiTiet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pagename: this.props.match.params.pagename,
        };
      }
      componentDidMount(){
        if(this.state.pagename === "thuy-dien"){
            document.title = "Thông tin chi tiết | Thủy điện | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "ho-chua"){
            document.title = "Thông tin chi tiết | Hồ Chứa | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "tram-bom"){
            document.title = "Thông tin chi tiết | Trạm Bơm | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "he-thong-thuy-loi"){
            document.title = "Thông tin chi tiết | Đập/Hệ Thống Thủy Lợi | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "cong"){
            document.title = "Thông tin chi tiết | Cống | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "tram-cap-nuoc"){
            document.title = "Thông tin chi tiết | Trạm Cấp  Nước | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "nha-may-nuoc"){
            document.title = "Thông tin chi tiết | Nhà  Máy Nước | Quản lý cấp phép nước mặt";
        }
        else if(this.state.pagename === "cong-trinh-khac"){
            document.title = "Thông tin chi tiết | Công Trình Khác | Quản lý cấp phép nước mặt";
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
                <Header headTitle={this.headerTitle()} previousLink={"/quan-ly-cap-phep/nuoc-mat/"+this.state.pagename+"/xem-cong-trinh"} showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-lg-12 px-0 row mx-0">
                        <div className="col-lg-6 px-0 menu-home discharge-water">
                            <div className="row mx-0 mb-3">
                                <p className="exploit-surfacewater-title col-12 mb-0 p-2 font-weight font-weight-bold text-left">THÔNG TIN CHUNG</p>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-6 px-0 font-weight-bold text-13">Tên công trình:</div>
                                    <div className="col-6 px-0 text-13">Thủy Điện</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-6 px-0 font-weight-bold text-13">Ký hiệu công trình:</div>
                                    <div className="col-6 px-0 text-13">Thủy Điện</div>
                                </div>
                                <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-12 px-0 font-weight-bold text-13">Chế độ khai thác:</div>
                                    <div className="col-12 px-0 text-13">Thủy Điện</div>
                                </div>
                                <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
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
                                <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-12 px-0 font-weight-bold text-13">Nguồn nước khai thác:</div>
                                    <div className="col-12 px-0 text-13">Thủy Điện</div>
                                </div>
                                <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-12 px-0 font-weight-bold text-13">Mục đích sử dụng:</div>
                                    <div className="col-12 px-0 text-13">Thủy Điện</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-6 px-0 font-weight-bold text-13">Thuộc sông:</div>
                                    <div className="col-6 px-0 text-13">Thủy Điện</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-6 px-0 font-weight-bold text-13">Thuộc lưu vực sông:</div>
                                    <div className="col-6 px-0 text-13">Thủy Điện</div>
                                </div>
                                <div className="row col-lg-12 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-12 px-0 font-weight-bold text-13">Năm vận hành:</div>
                                    <div className="col-12 px-0 text-13">Thủy Điện</div>
                                </div>
                                <hr />
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Công suất lắp máy(MW):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Q lớn nhất qua NM(m3/s):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Q xả TT NM(m3/s):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Dung tích hữu ích(triệu m3):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Dung tích toàn bộ (triệu m3):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Dung tích chết (triệu m3):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Mực nước chết(m):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Mực nước dâng BT(m):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Mực nước cao nhất TL(m):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Mực nước đón lũ(m):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                            </div>
                            <div className="row mx-0 mb-3">
                                <p className="exploit-surfacewater-title col-12 mb-0 p-2 font-weight font-weight-bold text-left">LƯU LƯỢNG THEO MỤC ĐÍCH KTSD</p>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Xả dòng chảy tối thiểu(m3/s):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Cấp nước nông nghiệp(m3/s):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Phát điện(m3/s):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Cấp  nước nông nghiệp(m3/s):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                                <div className="row col-lg-6 mx-0 border-bottom align-items-center py-1">
                                    <div className="col-9 px-0 font-weight-bold text-13">Cấp nước sinh hoạt(m3/s):</div>
                                    <div className="col-3 px-0 text-13">200</div>
                                </div>
                            </div>
                            <div className="row mx-0 mb-3">
                                <p className="exploit-surfacewater-title col-12 mb-0 p-2 font-weight font-weight-bold text-left">HẠNG MỤC CÔNG TRÌNH</p>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="text-center">
                                            <th></th>
                                            <th>Tọa độ X</th>
                                            <th>Tọa độ Y</th>
                                            <th>Ảnh công trình</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Tuyến đập</th>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center"> <button type="button" className=" mx-auto d-flex align-items-center btn btn-outline-success btn-sm"> <FileImageOutlined className="mx-1" /> XEM</button> </td>
                                        </tr>
                                        <tr>
                                            <th>Cửa lấy nước</th>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center"> <button type="button" className=" mx-auto d-flex align-items-center btn btn-outline-success btn-sm"> <FileImageOutlined className="mx-1" /> XEM</button> </td>
                                        </tr>
                                        <tr>
                                            <th>Nhà máy thủy điện</th>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center"> <button type="button" className=" mx-auto d-flex align-items-center btn btn-outline-success btn-sm"> <FileImageOutlined className="mx-1" /> XEM</button> </td>
                                        </tr>
                                        <tr>
                                            <th>Cửa xả sau nhà máy</th>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center"> <button type="button" className=" mx-auto d-flex align-items-center btn btn-outline-success btn-sm"> <FileImageOutlined className="mx-1" /> XEM</button> </td>
                                        </tr>
                                        <tr>
                                            <th>Công trình xả tối thiểu</th>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center"> <button type="button" className=" mx-auto d-flex align-items-center btn btn-outline-success btn-sm"> <FileImageOutlined className="mx-1" /> XEM</button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row justify-content-center mx-0">
                                <button type="button" className="btn btn-primary btn-sm mx-2 px-3"> Xem </button>
                                <button type="button" className="btn btn-primary btn-sm mx-2 px-3"> Sửa </button>
                                <button type="button" className="btn btn-primary btn-sm mx-2 px-3"> Xóa </button>
                                <button type="button" className="btn btn-primary btn-sm mx-2 px-3"> Lưu </button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 px-md-1 h-100 pr-2">
                            <Map className="h-100" />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}