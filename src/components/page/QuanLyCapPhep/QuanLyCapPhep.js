import React from 'react';
import Header from '../../layout/Header';
import { Link } from 'react-router-dom';
import { ForwardOutlined, SearchOutlined, DownloadOutlined, LineChartOutlined } from '@ant-design/icons';
import { Bar, Doughnut } from 'react-chartjs-2';

export default class QuanLyCapPhep extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            barChartData: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
                datasets: [{
                    label: 'KT, SD nước biển',
                    data: [10, 19, 3, 5, 8, 6],
                    stack: 1,
                    backgroundColor: [
                      'rgba(255, 99, 132)',
                      'rgba(255, 99, 132)',
                      'rgba(255, 99, 132)',
                      'rgba(255, 99, 132)',
                      'rgba(255, 99, 132)',
                      'rgba(255, 99, 132)'
                    ]
                  },
                  {
                    label: 'Xả nước thải vào nguồn nước',
                    data: [15, 19, 3, 5, 4, 3],
                    stack: 1,
                    backgroundColor: [
                      'rgba(255, 159, 64)',
                      'rgba(255, 159, 64)',
                      'rgba(255, 159, 64)',
                      'rgba(255, 159, 64)',
                      'rgba(255, 159, 64)',
                      'rgba(255, 159, 64)'
                    ]
                  },
                  {
                    label: 'KT, SD nước mặt',
                    data: [5, 7, 13, 5, 6, 9],
                    stack: 1,
                    backgroundColor: [
                      'rgb(97, 205, 187)',
                      'rgb(97, 205, 187)',
                      'rgb(97, 205, 187)',
                      'rgb(97, 205, 187)',
                      'rgb(97, 205, 187)',
                      'rgb(97, 205, 187)'
                    ]
                  },
                  {
                    label: 'KT, SD nước dưới đất',
                    data: [10, 11, 9, 5, 7, 3],
                    stack: 1,
                    backgroundColor: [
                      'rgb(39, 194, 76)',
                      'rgb(39, 194, 76)',
                      'rgb(39, 194, 76)',
                      'rgb(39, 194, 76)',
                      'rgb(39, 194, 76)',
                      'rgb(39, 194, 76)'
                    ]
                  },
                  {
                    label: 'TD nước dưới đất',
                    data: [5, 9, 3, 15, 8, 4],
                    stack: 1,
                    backgroundColor: [
                      'rgba(220, 172, 172, 0.77)',
                      'rgba(220, 172, 172, 0.77)',
                      'rgba(220, 172, 172, 0.77)',
                      'rgba(220, 172, 172, 0.77)',
                      'rgba(220, 172, 172, 0.77)',
                      'rgba(220, 172, 172, 0.77)'
                    ]
                  },
                  {
                    label: 'Hành nghề khoan NDĐ',
                    data: [10, 8, 6, 5, 4, 7],
                    stack: 1,
                    backgroundColor: [
                      'rgba(226, 159, 106, 0.92)',
                      'rgba(226, 159, 106, 0.92)',
                      'rgba(226, 159, 106, 0.92)',
                      'rgba(226, 159, 106, 0.92)',
                      'rgba(226, 159, 106, 0.92)',
                      'rgba(226, 159, 106, 0.92)'
                    ]
                  }
                ] 
            },
            doughnutData: {
                labels: [
                    'MFA',
                    'NON-MFA'
                ],
                datasets: [{
                    data: [5667, 2829],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB'
                    ],
                }]
            }      
        }
    }

    componentDidMount(){
        document.title = "Quản lý cấp phép | Giám sát tài nguyên nước Sơn La";
    }

    render(){
        const chartOptions = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Năm'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Số giấy phép'
                    }
                }
            }
        }

        const doughnutOptions = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                },
            }
        }

        return(
			<div className="p-0">
                <Header headTitle="QUẢN LÝ CẤP PHÉP" previousLink="/" showHeadImage={false} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-5 px-0 menu-page discharge-water">
                        <div className="row m-0">
                            <div className="col-lg-5 p-0">
                                <ul class="nav flex-column nav-pills pl-2 pb-1 mx-auto my-3 rounded">
                                    <div className="exploit-surfacewater">
                                        <p className="exploit-surfacewater-title mb-2 p-2 font-weight font-weight-bold text-left">KHAI THÁC SD NƯỚC MẶT</p>
                                        <li class="nav-item">
                                            <Link to="/quan-ly-cap-phep/nuoc-mat" class="nav-link font-13 text-dark" href="#">Thủy Điện</Link>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Hồ Chứa</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Trạm Bơm</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Đập / Hệ Thống Thủy Lợi</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Cống</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Trạm Cấp Nước</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Nhà Máy Nước</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Công Trình Khác</a>
                                        </li>
                                    </div>
                                    <div className="exploit-surfacewater">
                                        <p className="exploit-surfacewater-title mb-2 p-2 font-weight font-weight-bold text-left">KHAI THÁC SỬ DỤNG NDĐ</p>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Khai Thác</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Thăm Dò</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Hành Nghề Khoan</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Công Trình Khác</a>
                                        </li>
                                    </div>
                                    <div className="exploit-surfacewater">
                                        <p className="exploit-surfacewater-title mb-2 p-2 font-weight font-weight-bold text-left">XẢ THẢI VÀO NN</p>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Khu / Cụm CN  Tập Trung</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">SX Tiểu Thủ CN</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">SX KD Dịch Vụ</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">CS Bệnh Viện</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Khu Dân Cư / Làng Nghề</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Chăn Nuôi / NTTS</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-13 text-dark" href="#">Công Trình Khác</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-lg-7 p-0">
                                <Link to="/quan-ly-cap-phep/nuoc-mat" className="d-block col-11 pb-1 mx-auto my-3 rounded text-white px-0 bg-info">
                                    <p className="bg-sw-title-box rounded mb-2 p-2 font-weight font-weight-bold text-center">NƯỚC MẶT</p>
                                    <div className="font-weight-bold col-12 d-flex">
                                        <p className="col-9">Giấy phép: </p>
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
                                </Link>

                                <div className="col-11 pb-1 mx-auto my-3 rounded text-white px-0 bg-success">
                                    <p className="bg-ww-title-box rounded mb-2 p-2 font-weight-bold text-center">XẢ THẢI VÀO NGUỒN NƯỚC</p>
                                    <div className="font-weight-bold col-12 d-flex">
                                        <p className="col-9">Giấy phép: </p>
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
                                </div>

                                <div className="col-11 pb-1 mx-auto my-3 rounded text-dark px-0 bg-warning">
                                    <p className="bg-euw-title-box rounded mb-2 p-2 font-weight-bold text-center">KHAI THÁC NƯỚC DƯỚI ĐẤT</p>
                                    <div className="font-weight-bold col-12 d-flex">
                                        <p className="col-9">Giấy phép: </p>
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
                                </div>

                                <div className="col-11 pb-1 mx-auto my-3 rounded text-white px-0 bg-danger">
                                    <p className="bg-uwe-title-box rounded mb-2 p-2 font-weight-bold text-center">THĂM DÒ NƯỚC DƯỚI ĐẤT</p>
                                    <div className="font-weight-bold col-12 d-flex">
                                        <p className="col-9">Giấy phép: </p>
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
                                </div>

                                <div className="col-11 pb-1 mx-auto my-3 rounded text-white px-0 bg-secondary">
                                    <p className="bg-practise-title-box rounded mb-2 p-2 font-weight-bold text-center">HÀNH NGHỀ</p>
                                    <div className="font-weight-bold col-12 d-flex">
                                        <p className="col-9">Giấy phép: </p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 menu-page px-md-1">
                        <div className="qlcp-chart col-12 p-0 mt-3 card">
                            <div className="card-header">Số lượng giấy phép công trình được cấp theo năm</div>
                            <div className="col-12 d-flex pt-2">
                                <span className="col-2 font-weight-bold">Từ :</span>
                                <span className="col-2 font-weight-bold">Đến :</span>
                                <span className="col-2 font-weight-bold">Huyện :</span>
                            </div>
                            <div className="col-12 d-flex align-items-center">
                                <div className="col-2 p-0">
                                    <select className="mx-3 w-75">
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                    </select>
                                </div>
                                <div className="col-2 p-0">
                                    <select className="mx-3 w-75">
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                    </select>
                                </div>
                                <div className="col-2 p-0">
                                    <select className="mx-3 w-100">
                                        <option value="2018">Mộc Châu</option>
                                        <option value="2019">Mường La</option>
                                        <option value="2020">Yên Châu</option>
                                    </select>
                                </div>
                                <button className="col-2 btn btn-sm btn-info d-flex align-items-center font-weight-bold ml-md-5"><SearchOutlined /> &nbsp; THỐNG KÊ </button>
                            </div>
                            <div className="card-body">
                                <Bar height={350} width={75} data={this.state.barChartData} options={chartOptions} />
                            </div>
                        </div>

                        <div className="qlcp-chart col-12 p-0 mt-3 card">
                            <div className="card-body col-12 d-flex">
                                <div className="col-3 p-0">
                                    <div className="form-group">
                                        <label className="font-weight-bold m-0">Biểu đồ:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold m-0">Đối tượng:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold m-0">Nhóm:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold m-0">Giai đoạn:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold m-0">Chu kỳ:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group d-flex">
                                        <button className="col-6 btn btn-sm btn-success d-flex align-items-center justify-content-center mr-1"><DownloadOutlined /> &nbsp; Xuất PDF</button>
                                        <button className="col-6 btn btn-sm btn-primary d-flex align-items-center justify-content-center"><LineChartOutlined />&nbsp; Thống kê</button>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <Doughnut data={this.state.doughnutData} options={doughnutOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}