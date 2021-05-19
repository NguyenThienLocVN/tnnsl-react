/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Map from '../../layout/Map';
import Header from '../../layout/Header';

import '../Page.css';

export default class HeThongGiamSat extends React.Component {

    componentDidMount(){
        document.title = "Hệ thống giám sát | Giám sát tài nguyên nước Sơn La";
    }

    render(){
        return(
            <div className="pt-1 px-1">
                <Header headTitle="HỆ THỐNG GIÁM SÁT" previousLink="/" showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-5 px-0 menu-home">
                        <div class="exploit-surfacewater exploit-surfacewater pb-2 mb-1">
                            <p class="col-12 py-1 exploit-surfacewater-title font-weight-bold mb-2">Đối tượng giám sát</p>
                            <div class="monitoring-object-content pl-2">
                                <div class="d-flex mb-1 align-items-center">
                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_NUOCMAT.png'} alt="ANH_NUOCMAT" class="col-1 py-0 pl-0 pr-2 h-100" />
                                    <span class="font-weight-bold col-3 p-0 font-13 mr-1">NƯỚC MẶT</span>
                                    <div class="text-center w-100">
                                        <span>Loại công trình &nbsp;</span>
                                        <select name="construction" class="facewater-construction-select construction-select" id="facewater-construction-select">
                                            <option value="tat-ca-nuoc-mat">Tất cả</option>
                                            <option value="TREN2MW">Hồ thủy điện trên 2MW</option>
                                            <option value="DUOI2MW">Hồ thủy điện dưới 2MW</option>
                                            <option value="ho-thuy-dien-tren-2m">Hồ SXNN trên 2m3/s</option>
                                            <option value="ho-thuy-dien-duoi-2m">Hồ SXNN dưới 2m3/s</option>
                                            <option value="ho-thuy-muc-dich-khac-tren-50000m">Hồ mục đích khác &gt; 50.000 3/s</option>
                                            <option value="ho-thuy-muc-dich-khac-duoi-50000m">Hồ mục đích khác &lt; 50.000 3/s</option>
                                            <option value="cong-tram-bom-tren-2m">Cống, trạm bơm &gt; 2m3/s</option>
                                            <option value="cong-tram-bom-duoi-2m">Cống, trạm bơm &lt; 2m3/s</option>
                                            <option value="cong-tram-bom-tren-50000m">Cống, trạm bơm &gt; 50.000 3/s</option>
                                            <option value="cong-tram-bom-duoi-50000m">Cống, trạm bơm &lt; 50.000 3/s</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_NUOCDUOIDAT.png'} alt="ANH_NUOCDUOIDAT" class="col-1 py-0 pl-0 pr-2 h-100" />
                                    <span class="font-weight-bold col-3 p-0 font-13 mr-1">NƯỚC DƯỚI ĐẤT</span>
                                    <div class="text-center w-100">
                                        <span>Loại công trình &nbsp;</span>
                                        <select name="" class="facewater-construction-select construction-select" id="facewater-construction-select">
                                            <option value="tat-ca-nuoc-mat">Tất cả</option>
                                            <option value="ho-thuy-dien-tren-2MW">Hồ thủy điện trên 2MW</option>
                                            <option value="ho-thuy-dien-duoi-2MW">Hồ thủy điện dưới 2MW</option>
                                            <option value="ho-thuy-dien-tren-2m">Hồ SXNN trên 2m3/s</option>
                                            <option value="ho-thuy-dien-duoi-2m">Hồ SXNN dưới 2m3/s</option>
                                            <option value="ho-thuy-muc-dich-khac-tren-50000m">Hồ mục đích khác &gt; 50.000 3/s</option>
                                            <option value="ho-thuy-muc-dich-khac-duoi-50000m">Hồ mục đích khác &lt; 50.000 3/s</option>
                                            <option value="cong-tram-bom-tren-2m">Cống, trạm bơm &gt; 2m3/s</option>
                                            <option value="cong-tram-bom-duoi-2m">Cống, trạm bơm &lt; 2m3/s</option>
                                            <option value="cong-tram-bom-tren-50000m">Cống, trạm bơm &gt; 50.000 3/s</option>
                                            <option value="cong-tram-bom-duoi-50000m">Cống, trạm bơm &lt; 50.000 3/s</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="exploit-surfacewater pb-2 mb-1">
                            <p class="col-12 py-1 exploit-surfacewater-title font-weight-bold mb-1">Số liệu quan trắc, vận hành</p>
                            <div class="observed-data-content font-13">
                                <div class="d-flex col-12 pl-0 observed-data-content-row mb-1">
                                    <div class="col-3 grid-item d-flex flex-column px-1" id="mua">
                                        <p class="text-center mb-1">MƯA</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span class="count_rain_stations">50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Trạm</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_MUA.png'} class="w-100" alt="ANH_MUA" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 grid-item d-flex flex-column px-1 ml-1">
                                        <p class="text-center mb-1">MỰC NƯỚC</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span class="count_rain_stations">50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_MUCNUOC.png'} class="w-100" alt="ANH_MUCNUOC" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 grid-item d-flex flex-column px-1 ml-1">
                                        <p class="text-center mb-1">Q<sub>đến</sub> (m<sup>3</sup>/s)</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span class="count_rain_stations">50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QDEN.png'} class="w-100" alt="ANH_QDEN" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 grid-item d-flex flex-column px-1 ml-1">
                                        <p class="text-center mb-1">Q<sub>xả</sub> (m<sup>3</sup>/s)</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span class="count_rain_stations">50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QXA.png'} class="w-100" alt="ANH_QXA" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex col-12 pl-0 observed-data-content-row">
                                    <div class="col-3 grid-item d-flex flex-column px-1 justify-content-between">
                                        <p class="text-center mb-1">Q<sub>tối thiểu</sub> (m<sup>3</sup>/s)</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Trạm</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QTOITHIEU.png'} class="w-100" alt="ANH_QTOITHIEU" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 grid-item d-flex flex-column px-1 ml-1 justify-content-between">
                                        <p class="text-center mb-1">Chất lượng nước</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_CHATLUONGNUOC.png'} class="w-100" alt="ANH_CHATLUONGNUOC" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 grid-item d-flex flex-column px-1 ml-1">
                                        <p class="text-center mb-1">Mực nước trong giếng quan trắc</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_MUCNUOCGIENG.png'} class="w-100" alt="ANH_MUCNUOCGIENG" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 grid-item d-flex flex-column px-1 ml-1">
                                        <p class="text-center mb-1">Lưu lượng khai thác NDD</p>
                                        <div class="d-flex align-items-center">
                                            <div class="col-6 p-0">
                                                <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>50</span></p>
                                                <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                            </div>
                                            <div class="col-6 p-0">
                                                <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_LUULUONGKHAITHACNUOCDUOIDAT.png'} class="w-100" alt="ANH_LUULUONGKHAITHACNUOCDUOIDAT" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="observed-for-electric pb-2 d-flex">
                            <div class="col-6 px-0 exploit-surfacewater">
                                <p class="col-12 py-1 px-1 text-center exploit-surfacewater-title font-weight-bold mb-1 font-14">Giám sát hồ chứa để phát điện</p>
                                <div class="observed-for-electric-content font-13">
                                    <div class="d-flex col-12 pl-0 pr-1 observed-for-electric-content-row mb-1">
                                        <div class="col-6 grid-item d-flex flex-column px-1">
                                            <p class="text-center mb-1">Mực nước</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_MUCNUOC.png'} class="w-100" alt="ANH_MUCNUOC" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 grid-item d-flex flex-column px-1 ml-1">
                                            <p class="text-center mb-1">Q<sub>xả</sub> tối thiểu</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QXATOITHIEU.png'} class="w-100" alt="ANH_QXATOITHIEU" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex col-12 pl-0 pr-1 observed-for-electric-content-row mb-1">
                                        <div class="col-6 grid-item d-flex flex-column px-1">
                                            <p class="text-center mb-1">Q<sub>xả</sub> qua nhà máy</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QXANHAMAY.png'} class="w-100" alt="ANH_QXANHAMAY" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 grid-item d-flex flex-column px-1 ml-1">
                                            <p class="text-center mb-1">Q<sub>xả</sub> tràn</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QXATRAN.png'} class="w-100" alt="ANH_QXATRAN" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6 p-0 exploit-surfacewater">
                                <p class="col-12 py-1 px-1 text-center exploit-surfacewater-title font-weight-bold mb-1 font-14">Giám sát hồ chứa để SXNN</p>
                                <div class="observed-for-electric-content font-13">
                                    <div class="d-flex col-12 pl-0 pr-1 observed-for-electric-content-row mb-1">
                                        <div class="col-6 grid-item d-flex flex-column px-1">
                                            <p class="text-center mb-1">Mực nước</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_MUCNUOC.png'} class="w-100" alt="ANH_MUCNUOC" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 grid-item d-flex flex-column px-1 ml-1">
                                            <p class="text-center mb-1">Q<sub>xả</sub> tối thiểu</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QXATOITHIEU.png'} class="w-100" alt="ANH_QXATOITHIEU" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex col-12 pl-0 pr-1 observed-for-electric-content-row mb-1">
                                        <div class="col-6 grid-item d-flex flex-column px-1">
                                            <p class="text-center mb-1">Q<sub>khai thác</sub> </p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QKHAITHAC.png'} class="w-100" alt="ANH_QKHAITHAC" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 grid-item d-flex flex-column px-1 ml-1">
                                            <p class="text-center mb-1">CLN khai thác</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>80</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">Hồ</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_CLNSXNN.png'} class="w-100" alt="ANH_CLNSXNN" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="observed-for-electric pb-2 d-flex">
                            <div class="col-5 px-0 exploit-surfacewater">
                                <p class="col-12 py-1 px-1 text-center exploit-surfacewater-title font-weight-bold mb-1 font-14">Giám sát công trình khác</p>
                                <div class="observed-for-electric-content font-13">
                                    <div class="d-flex col-12 pl-0 pr-1 observed-for-electric-content-row mb-1">
                                        <div class="col-6 grid-item d-flex flex-column px-1">
                                            <p class="text-center mb-1">Q<sub>khai thác</sub></p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>30</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">CT</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QKHAITHACKHAC.png'} class="w-100" alt="ANH_QKHAITHACKHAC" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 grid-item d-flex flex-column px-1 ml-1">
                                            <p class="text-center mb-1">CLN khai thác</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>30</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">CT</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_CLNKHAITHAC.png'} class="w-100" alt="ANH_CLNKHAITHAC" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-7 p-0 exploit-surfacewater">
                                <p class="col-12 py-1 px-1 text-center exploit-surfacewater-title font-weight-bold mb-1 font-14">Giám sát khai thác NDD</p>
                                <div class="observed-for-electric-content font-13">
                                    <div class="d-flex col-12 pl-0 pr-2 observed-for-electric-content-row mb-1">
                                        <div class="col-4 grid-item d-flex flex-column px-1">
                                            <p class="text-center mb-1">Q<sub>khai thác</sub></p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>30</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">CT</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_QKHAITHACNDD.png'} class="w-100" alt="ANH_QKHAITHACNDD" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 grid-item d-flex flex-column px-1 ml-1">
                                            <p class="text-center mb-1">Mực nước</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>30</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">CT</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_MUCNUOCGIENG.png'} class="w-100" alt="ANH_MUCNUOCGIENG" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 grid-item d-flex flex-column px-1 ml-1">
                                            <p class="text-center mb-1">CLN k/thác</p>
                                            <div class="d-flex align-items-center">
                                                <div class="col-6 p-0">
                                                    <p class="text-center font-13 font-weight-bold m-0 text-success"><span>0</span>/<span>30</span></p>
                                                    <p class="font-weight-bold text-danger text-center mb-1">CT</p>
                                                </div>
                                                <div class="col-6 p-0">
                                                    <img src={process.env.PUBLIC_URL + '/images/HE_THONG_GIAM_SAT/ANH_CLNNDD.png'} class="w-100" alt="ANH_CLNNDD" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 map-container px-md-0">
                        <Map />
                    </div>
                </main>
            </div>
        )
    }
}