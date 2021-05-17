import React from 'react';
import Header from '../../../layout/Header';
import { Link } from 'react-router-dom';
import Map from '../../../layout/Map';
import { InfoCircleOutlined, PlusOutlined, FileExcelOutlined, SearchOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';

const Step1Form = () => {
    <>
        <div className="exploit-surfacewater">ok</div>
    </>
}


export default class QuanLyCapPhepNuocMatThuyDien extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            showSearch: false,
            columns : [
                {
                    title: '#',
                    dataIndex: 'id',
                },
                {
                  title: 'Số giấy phép',
                  dataIndex: 'so_giay_phep',
                //   render: (text, id) => <Link onClick={this.RedirectToXemThongTinChung(id)} to={id}>{text}</Link>,
                },
                {
                  title: 'Ngày ký',
                  dataIndex: 'ngay_ky',
                },
                {
                  title: 'Tên công trình',
                  dataIndex: 'ten_cong_trinh',
                },
                {
                  title: 'Tổ chức được CP',
                  dataIndex: 'ten_to_chuc',
                },
                {
                    title: 'Ngày có hiệu lực',
                    dataIndex: 'ngay_hieu_luc',
                },
                {
                    title: 'Thời hạn (năm)',
                    dataIndex: 'thoi_han',
                },
                {
                    title: 'Trạng thái',
                    dataIndex: 'trang_thai',
                    render: trang_thai => (
                        <>
                          {trang_thai.map(tt => {
                            let color = 'gray';
                            let text = 'Chưa phê duyệt';
                            if (tt === '1') {
                              color = 'green';
                              text = 'Còn hiệu lực';
                            }
                            else if (tt === '2') {
                                color = 'orange';
                                text = 'Sắp hết hiệu lực';
                            }
                            else if (tt === '3') {
                                color = 'red';
                                text = 'Hết hiệu lực';
                            }
                            else if (tt === '4') {
                                color = 'purple';
                                text = 'Chưa có GP thay thế';
                            }
                            return (
                              <Tag color={color} key={tt}>
                                {text.toUpperCase()}
                              </Tag>
                            );
                          })}
                        </>
                      ),
                },
                {
                    title: 'Thao tác',
                    content: <Step1Form />
                }
            ],
            data : [
                {
                  id: '1',
                  so_giay_phep: '482/GP-BTNMT',
                  ngay_ky: '11/05/2021',
                  ten_cong_trinh: 'Thủy điện Sơ Vin',
                  ten_to_chuc: 'Công ty A',
                  ngay_hieu_luc: '12/05/2021',
                  thoi_han: 10,
                  trang_thai: ['1']
                },
                {
                  id: '2',
                  so_giay_phep: '773/GP-BTNMT',
                  ngay_ky: '04/05/2021',
                  ten_cong_trinh: 'Thủy điện Nậm Pia',
                  ten_to_chuc: 'Công ty B',
                  ngay_hieu_luc: '11/05/2021',
                  thoi_han: 10,
                  trang_thai: ['2']
                }
            ]
        }
    }

    componentDidMount(){
        document.title = "Quản lý cấp phép nước mặt | Thủy điện | Giám sát tài nguyên nước Sơn La";
    }

    RedirectToXemThongTinChung(id){
        return this.props.history.push('/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung/'+id);
    }

    render(){
        return(
			<div className="p-0">
                <Header headTitle="NƯỚC MẶT | THỦY ĐIỆN" previousLink="/quan-ly-cap-phep" showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-3 px-0 menu-home discharge-water text-center">
                        <div className="col-12 px-0">
                            
                            <div class="col-10 py-2 m-auto d-flex justify-content-center text-center">
                                <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/CONG_TRINH_THUY_DIEN/dam.png'} class="p-0 hydroelectric-icon rounded-circle border border-secondary my-auto mx-3" alt="dap-thuy-dien" />
                                <div class="col-7 text-left p-0">
                                    <p class="font-30 m-0 font-weight-bold">60</p>
                                    <p class="font-weight-bold mb-1">Tổng số công trình</p>
                                </div>
                            </div>

                            <div class="col-12 py-1 mt-4 d-flex justify-content-center text-center border-top border-bottom">
                                <div class="col-9 text-left p-0">
                                    <p class="font-weight-bold m-0">Tổng số CT đã vận hành</p>
                                    <p class="font-18 m-0 font-weight-bold text-danger">28 / 60</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/CONG_TRINH_THUY_DIEN/factory.png'} class="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="dap-thuy-dien" />
                            </div>
                            <div class="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                                <div class="col-9 text-left p-0">
                                    <p class="font-weight-bold m-0">Giấy phép đã cấp</p>
                                    <p class="font-18 m-0 font-weight-bold text-danger">11 / 60</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/CONG_TRINH_THUY_DIEN/licensing.png'} class="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="giay-phep" />
                            </div>
                            <div class="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                                <div class="col-9 text-left p-0">
                                    <p class="font-weight-bold m-0">Giấy phép sắp hết hiệu lực</p>
                                    <p class="font-18 m-0 font-weight-bold text-danger">06 / 60</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/CONG_TRINH_THUY_DIEN/licensing-2.png'} class="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="giay-phep-2" />
                            </div>
                            <div class="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                                <div class="col-9 text-left p-0">
                                    <p class="font-weight-bold m-0">Giấy phép hết hiệu lực</p>
                                    <p class="font-18 m-0 font-weight-bold text-danger">03 / 60</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/CONG_TRINH_THUY_DIEN/licensing-3.png'} class="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="giay-phep-3" />
                            </div>
                            <div class="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                                <div class="col-9 text-left p-0">
                                    <p class="font-weight-bold m-0">Giấy phép chưa phê duyệt</p>
                                    <p class="font-18 m-0 font-weight-bold text-danger">10 / 60</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/CONG_TRINH_THUY_DIEN/report.png'} class="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="chua-duyet" />
                            </div>
                            <div class="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                                <div class="col-9 text-left p-0">
                                    <p class="font-weight-bold m-0">Chưa có giấy phép thay thế</p>
                                    <p class="font-18 m-0 font-weight-bold text-danger">02 / 60</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/CONG_TRINH_THUY_DIEN/expire.png'} class="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="het-han" />
                            </div>

                            <Link to="/quan-ly-cap-phep/nuoc-mat/tao-moi" className="col-11 btn btn-primary d-flex align-items-center mx-auto mt-3"><PlusOutlined /> &nbsp; Tạo mới giấy phép</Link>
                            <button className="col-11 btn btn-success d-flex align-items-center mx-auto mt-1"><FileExcelOutlined /> &nbsp; Xuất file</button>
                            <button className="col-11 btn btn-info d-flex align-items-center mx-auto mt-1"><InfoCircleOutlined /> &nbsp; Hướng dẫn sử dụng</button>
                        </div>
                    </div>
                    <div className="menu-home col-12 col-lg-9 discharge-water">
                        <div className="col-12 px-md-1 vh-50">
                            <Map className="col-12" />

                            <div className="col-12 p-0 ">
                                <div className="col-12 d-flex align-items-center my-1">
                                    <div className="input-group input-group-sm mb-1 col-3 pl-0">
                                        <input type="text" className="form-control" placeholder="-- Tìm kiếm --" aria-label="-- Tìm kiếm --" aria-describedby="basic-addon2" />
                                    </div>
                                    <div className="input-group col-3 pl-0">
                                        <select className="custom-select font-13" id="inputGroupSelect01">
                                            <option selected>-- Chọn hiệu lực --</option>
                                            <option value="1">Còn hiệu lực</option>
                                            <option value="2">Chưa phê duyệt</option>
                                            <option value="3">Hết hiệu lực</option>
                                            <option value="3">Sắp hết hiệu lực</option>
                                            <option value="3">Hết hiệu lực chưa có GP thay thế</option>
                                        </select>
                                    </div>
                                    <div className="input-group col-3">
                                        <select className="custom-select font-13" id="inputGroupSelect01">
                                            <option selected>-- Sắp xếp --</option>
                                            <option value="1">Sắp xếp theo số giấy phép</option>
                                            <option value="2">Sắp xếp theo ngày kí</option>
                                            <option value="3">Sắp xếp theo tên công trình</option>
                                            <option value="3">Sắp xếp theo tên ĐVXCP</option>
                                            <option value="3">Sắp xếp theo ngày bắt đầu hiệu lực</option>
                                            <option value="3">Sắp xếp theo ngày kết thúc hiệu lực</option>
                                        </select>
                                    </div>
                                    <button className="col-1 btn btn-info d-flex align-items-center justify-content-center font-13">Tìm &nbsp;<SearchOutlined /></button>
                                </div>
                                <Table columns={this.state.columns} bordered pagination={{ position: 'bottomLeft' }} dataSource={this.state.data}  />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}