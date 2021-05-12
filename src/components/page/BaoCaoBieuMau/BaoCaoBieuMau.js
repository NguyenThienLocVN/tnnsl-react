import React from 'react';
import Header from '../../layout/Header';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

export default class BaoCaoBieuMau extends React.Component {

    componentDidMount(){
        document.title = "Báo cáo biểu mẫu | Giám sát tài nguyên nước Sơn La";
    }

    render(){

        return(
			<div className="p-0">
                <Header headTitle="BÁO CÁO BIỂU MẪU" previousLink="/" showHeadImage={false} />
                <main className="d-flex flex-column">
                    <div class="input-group col-4 py-2 mx-auto">
                        <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Tìm kiếm" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-danger d-flex align-items-center" type="button"><SearchOutlined /></button>
                        </div>
                    </div>
                    <div className="col-12 px-0 menu-page d-flex flex-column flex-lg-row">
                        {/* Block 1 */}
                        <div class="col-12 col-lg-3 pb-3 pb-lg-0 px-0 mb-lg-3 report-block-one">
                            <Link to="#" class="nav-link col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 01</p>
                                    <p class="text-success font-weight-bold">Số lượng trạm quan trắc</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU1.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU1" />
                            </Link>
                            <Link to="#" class="col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 02</p>
                                    <p class="text-success font-weight-bold">Tổng lượng mưa, phân phối mưa</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU2.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU2" />
                            </Link>
                            <Link to="#" class="col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 03</p>
                                    <p class="text-success font-weight-bold">Lượng mưa tháng, năm kỳ báo cáo</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU3.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU3" />
                            </Link>
                            <Link to="#" class="col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 04</p>
                                    <p class="text-success font-weight-bold">Tổng lượng nước mặt trên các LVS</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU4.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU4" />
                            </Link>
                            <Link to="#" class="col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 05</p>
                                    <p class="text-success font-weight-bold">Dòng chảy TB tháng, năm kỳ báo cáo</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU5.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU5" />
                            </Link>
                            <Link to="#" class="col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 06</p>
                                    <p class="text-success font-weight-bold">Tổng dung tích các hồ chứa lớn</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU6.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU6" />
                            </Link>
                            <div class="col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 07</p>
                                    <p class="text-success font-weight-bold">Diện tích đã được điều tra đánh giá TNNDĐ</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU7.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU7" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-one py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 08</p>
                                    <p class="text-success font-weight-bold">Tổng hợp các đặc trưng MNDĐ</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU8.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU8" />
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div class="col-12 col-lg-3 pb-3 pb-lg-0 px-0 mb-lg-3 report-block-two">
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 09</p>
                                    <p class="text-success font-weight-bold">Số lượng CTKT theo nguồn nước</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU9.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU9" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 10</p>
                                    <p class="text-success font-weight-bold">Số lượng CTKT phân theo sử dụng</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU10.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU10" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 11</p>
                                    <p class="text-success font-weight-bold">Số lượng CTKT phân theo loại hình</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU11.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU11" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 12</p>
                                    <p class="text-success font-weight-bold">Lượng nước khai thác sử dụng</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU12.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU12" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 13</p>
                                    <p class="text-success font-weight-bold">Chỉ tiêu chất lượng nước mặt</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU13.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU13" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 14</p>
                                    <p class="text-success font-weight-bold">Chỉ tiêu chất lượng nước dưới đất</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU14.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU14" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 15</p>
                                    <p class="text-success font-weight-bold">Văn bản PLTNN đã ban hành</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU15.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU15" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-two py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 16</p>
                                    <p class="text-success font-weight-bold">Số lượng giấy phép TNN đã cấp</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU16.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU16" />
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div class="col-12 col-lg-3 pb-3 px-0 pb-lg-0 px-lg-0 mb-lg-3 report-block-three">
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 17</p>
                                    <p class="text-success font-weight-bold">Cấp quyền khai thác</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU17.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU17" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 18</p>
                                    <p class="text-success font-weight-bold">Dòng chảy tối thiểu</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU18.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU10" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 19</p>
                                    <p class="text-success font-weight-bold">Kết quả thanh tra trong lĩnh vực TNN</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU19.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU11" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 20</p>
                                    <p class="text-success font-weight-bold">Danh mục các CTKT, SD tài nguyên nước</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU20.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU12" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 21</p>
                                    <p class="text-success font-weight-bold">KT, SD nước mặt đối với loại hình hồ chứa</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU21.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU13" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu22</p>
                                    <p class="text-success font-weight-bold">KT, SD nước mặt đối với loại hình khác hồ chứa</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU22.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU14" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 23</p>
                                    <p class="text-success font-weight-bold">KT, SD nước nước dưới đất</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU23.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU15" />
                            </div>
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 24</p>
                                    <p class="text-success font-weight-bold">Tổng hợp tình hình xả nước thải </p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU24.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU16" />
                            </div>
                        </div>

                        {/* Block 4 */}
                        <div class="col-12 col-lg-3 pb-3 pb-lg-0 px-0 mb-lg-3 report-block-four">
                            <div class="col-12 d-flex align-items-center report-item report-item-three py-3 py-lg-0">
                                <div class="col-8 p-0">
                                    <p class="text-danger font-weight-bold pt-2 mb-1">Biểu mẫu 25</p>
                                    <p class="text-success font-weight-bold">Nồng độ chất ô nhiễm</p>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/ANHBIEUMAU25.webp'} class="col-4 p-0 d-block" alt="ANHBIEUMAU25" />
                            </div>
                            <div class="col-12 d-flex flex-column align-items-center report-item report-item-four pt-4">
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/bao-cao-su-dung-tnn.webp'} class="col-4 p-0 my-2 d-block" alt="bao-cao-su-dung-tnn" />
                                <div class="col-9 p-0">
                                    <p class="text-danger font-weight-bold text-center">BÁO CÁO SỬ DỤNG TNN</p>
                                </div>
                            </div>
                            <div class="col-12 d-flex flex-column align-items-center report-item report-item-four pt-4">
                                <img src={process.env.PUBLIC_URL + '/images/BAO_CAO_BIEU_MAU/bao-cao-khai-thac-su-dung-xa-thai.webp'} class="col-4 p-0 my-2 d-block" alt="bao-cao-khai-thac-su-dung-xa-thai" />
                                <div class="col-9 p-0">
                                    <p class="text-danger font-weight-bold text-center">BÁO CÁO HOẠT ĐỘNG KHAI THÁC, SỬ DỤNG, <br/> XẢ THẢI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}