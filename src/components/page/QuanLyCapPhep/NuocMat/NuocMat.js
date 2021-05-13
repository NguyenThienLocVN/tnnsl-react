import React from 'react';
import Header from '../../../layout/Header';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined, PlusOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';

export default class QuanLyCapPhepNuocMat extends React.Component {
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
                  render: (text, id) => <Link to={id}>{text}</Link>,
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
                },
                {
                  id: '3',
                  so_giay_phep: '2011/GP-BTNMT',
                  ngay_ky: '20/04/2021',
                  ten_cong_trinh: 'Thủy điện Sập Việt',
                  ten_to_chuc: 'Công ty C',
                  ngay_hieu_luc: '10/05/2021',
                  thoi_han: 10,
                  trang_thai: ['3']
                },
                {
                  id: '4',
                  so_giay_phep: '3482/GP-BTNMT',
                  ngay_ky: '15/04/2021',
                  ten_cong_trinh: 'Thủy điện Huội Quảng',
                  ten_to_chuc: 'Công ty D',
                  ngay_hieu_luc: '09/05/2021',
                  thoi_han: 10,
                  trang_thai: ['5']
                },
            ]
        }
    }

    componentDidMount(){
        document.title = "Quản lý cấp phép nước mặt | Giám sát tài nguyên nước Sơn La";
    }

    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }

    showSearch = () => {
        this.setState({ showSearch: !this.state.showSearch });
    }

    render(){
        return(
			<div className="p-0">
                <Header headTitle="QUẢN LÝ CẤP PHÉP" previousLink="/quan-ly-cap-phep" showHeadImage={false} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-3 px-0 menu-page discharge-water">
                        <div className="col-11 pb-1 mx-auto my-2 rounded text-white px-0 bg-info bg-sw-box">
                            <p className="bg-sw-title-box rounded mb-2 p-2 font-weight font-weight-bold text-center">NƯỚC MẶT</p>
                            <div className="font-weight-bold col-12 d-flex">
                                <p className="col-9">Tổng số: </p>
                                <p className="col-3">500</p>
                            </div>
                            <div className="font-weight-bold col-12 d-flex">
                                <p className="col-9">Còn hiệu lực: </p>
                                <p className="col-3">100</p>
                            </div>
                            <div className="font-weight-bold col-12 d-flex">
                                <p className="col-9">Sắp hết hiệu lực: </p>
                                <p className="col-3">100</p>
                            </div>
                            <div className="font-weight-bold col-12 d-flex">
                                <p className="col-9">Hết hiệu lực: </p>
                                <p className="col-3">100</p>
                            </div>
                            <div className="font-weight-bold col-12 d-flex">
                                <p className="col-9">Chưa phê duyệt: </p>
                                <p className="col-3">100</p>
                            </div>
                            <div className="font-weight-bold col-12 d-flex">
                                <p className="col-9">Chưa có GP thay thế: </p>
                                <p className="col-3">100</p>
                            </div>
                            <hr className="w-50 mx-auto border-white"  />
                            <div className="row m-0">
                                <div className="col-sm-4 mb-3">
                                    <div className="position-relative">
                                        <div className="img__contruction">
                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/ANH_HETHONGGIAMSAT.png'} className="p-0 d-block mx-auto h-100" alt="ANH_HETHONGGIAMSAT" />
                                        </div>
                                        <div className="position-absolute bg-white p-1 rounded badge" title="Số công trình còn hiệu lực cấp phép">
                                            <span className="text-success font-weight-bold font-15">45/100</span>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold font-12 m-0 text-center">Thủy điện</p>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <div className="position-relative">
                                        <div className="img__contruction">
                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/ANH_HETHONGGIAMSAT.png'} className="p-0 d-block mx-auto h-100" alt="ANH_HETHONGGIAMSAT" />
                                        </div>
                                        <div className="position-absolute bg-white p-1 rounded badge" title="Số công trình còn hiệu lực cấp phép">
                                            <span className="text-success font-weight-bold font-15">45/100</span>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold font-12 m-0 text-center">Hồ chứa</p>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <div className="position-relative">
                                        <div className="img__contruction">
                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/ANH_HETHONGGIAMSAT.png'} className="p-0 d-block mx-auto h-100" alt="ANH_HETHONGGIAMSAT" />
                                        </div>
                                        <div className="position-absolute bg-white p-1 rounded badge" title="Số công trình còn hiệu lực cấp phép">
                                            <span className="text-success font-weight-bold font-15">45/100</span>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold font-12 m-0 text-center">Bai đập</p>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <div className="position-relative">
                                        <div className="img__contruction">
                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/ANH_HETHONGGIAMSAT.png'} className="p-0 d-block mx-auto h-100" alt="ANH_HETHONGGIAMSAT" />
                                        </div>
                                        <div className="position-absolute bg-white p-1 rounded badge" title="Số công trình còn hiệu lực cấp phép">
                                            <span className="text-success font-weight-bold font-15">45/100</span>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold font-12 m-0 text-center">Trạm bơm</p>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <div className="position-relative">
                                        <div className="img__contruction">
                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/ANH_HETHONGGIAMSAT.png'} className="p-0 d-block mx-auto h-100" alt="ANH_HETHONGGIAMSAT" />
                                        </div>
                                        <div className="position-absolute bg-white p-1 rounded badge" title="Số công trình còn hiệu lực cấp phép">
                                            <span className="text-success font-weight-bold font-15">45/100</span>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold font-12 m-0 text-center">Cống</p>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <div className="position-relative">
                                        <div className="img__contruction">
                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/ANH_HETHONGGIAMSAT.png'} className="p-0 d-block mx-auto h-100" alt="ANH_HETHONGGIAMSAT" />
                                        </div>
                                        <div className="position-absolute bg-white p-1 rounded badge" title="Số công trình còn hiệu lực cấp phép">
                                            <span className="text-success font-weight-bold font-15">45/100</span>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold font-12 m-0 text-center">Trạm cấp nước</p>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <div className="position-relative">
                                        <div className="img__contruction">
                                            <img src={process.env.PUBLIC_URL + '/images/QUAN_LY_CAP_PHEP/ANH_HETHONGGIAMSAT.png'} className="p-0 d-block mx-auto h-100" alt="ANH_HETHONGGIAMSAT" />
                                        </div>
                                        <div className="position-absolute bg-white p-1 rounded badge" title="Số công trình còn hiệu lực cấp phép">
                                            <span className="text-success font-weight-bold font-15">45/100</span>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold font-12 m-0 text-center">Nhà máy nước</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 menu-page px-md-1">
                        <div className="col-12 p-0 mt-2 card">
                            <div className="card-header font-weight-bold">Giấy phép khai thác nước mặt</div>
                            {this.state.showSearch &&
                            <div>
                                <div className="col-12 d-flex pt-2">
                                    <div className="input-group input-group-sm mb-1 col-3 pl-0">
                                        <input type="text" className="form-control" placeholder="-- Tìm kiếm --" aria-label="-- Tìm kiếm --" aria-describedby="basic-addon2" />
                                    </div>
                                </div>
                            
                                <div className="col-12 d-flex align-items-center pt-1">
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
                                            <option selected>-- Chọn loại công trình --</option>
                                            <option value="1">Công trình thủy điện</option>
                                            <option value="2">Công trình hồ chứa</option>
                                            <option value="3">Công trình bai đập</option>
                                            <option value="3">Công trình trạm bơm</option>
                                            <option value="3">Công trình cống</option>
                                            <option value="3">Công trình trạm cấp nước</option>
                                            <option value="3">Công trình nhà máy nước</option>
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
                                    <div className="input-group col-2">
                                        <select className="custom-select font-13" id="inputGroupSelect01">
                                            <option selected>Giảm dần</option>
                                            <option value="1">Tăng dần</option>
                                        </select>
                                    </div>
                                    <button className="col-1 btn btn-info d-flex align-items-center justify-content-center">Tìm &nbsp;<SearchOutlined /></button>
                                </div>
                                <hr class="my-2" />
                            </div>
                            }
                            <div className="col-12 d-flex align-items-center justify-content-start pt-1 px-2">
                                <Link to="/quan-ly-cap-phep/nuoc-mat/tao-moi" title="Tạo mới giấy phép" className="col-1 btn btn-primary d-flex align-items-center justify-content-center"><PlusOutlined /></Link>
                                <button title="Tìm kiếm" onClick={this.showSearch} className="col-1 btn btn-danger d-flex align-items-center justify-content-center mx-1"><SearchOutlined /></button>
                                <button title="Xuất file excel" className="col-1 btn btn-success d-flex align-items-center justify-content-center"><FileExcelOutlined /></button>
                            </div>
                            <div className="card-body p-2">
                                <Table columns={this.state.columns} bordered pagination={{ position: 'bottomLeft' }} dataSource={this.state.data} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}