/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Header from '../../../layout/Header';
import { Steps, Button, message } from 'antd';
import Map from '../../../layout/Map';
import { SolutionOutlined, BankOutlined, BarChartOutlined, StarFilled, UploadOutlined, RightOutlined, LeftOutlined,SaveOutlined } from '@ant-design/icons';

const { Step } = Steps;

const Step1Form = () => {
    return (
      <>
        <div className="exploit-surfacewater">
            <div className="pb-2 mx-0">
                <label htmlFor="organization_name" className="col-sm-12 col-form-label font-weight-bold font-13">Tên tổ chức/cá nhân  được CP</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm font-13" id="organization_name" name="organization_name" placeholder=" -- Tên tổ chức/cá nhân  được CP --"  />
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="organization_address" className="col-sm-12 col-form-label font-weight-bold font-13"> Địa chỉ tổ chức/cá nhân được CP </label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm font-13" id="organization_address" name="organization_address" placeholder=" -- Địa chỉ tổ chức/cá nhân được CP --" />
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="license_num" className="col-sm-12 col-form-label font-weight-bold font-13"> Số GP </label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm font-13" id="license_num" name="license_num" placeholder=" -- Số GP --" />
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="license_name" className="col-sm-12 col-form-label font-weight-bold font-13"> Tên văn bản GP</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm font-13" id="license_name" name="license_name" placeholder=" -- Tên văn bản --" />
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="co_quan_cp" className="col-sm-12 col-form-label font-weight-bold font-13"> Cơ quan cấp phép </label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm font-13" id="co_quan_cp" name="co_quan_cp" placeholder=" -- Cơ quan cấp phép --" />
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="dv_tham_dinh" className="col-sm-12 col-form-label font-weight-bold font-13"> Đơn vị thẩm định </label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm font-13" id="dv_tham_dinh" name="dv_tham_dinh" placeholder=" -- Đơn vị thẩm định --" />
                </div>
            </div>
            <div className="row mx-0">
                <div className="pb-2 mx-0 col-sm-6 px-0">
                    <label htmlFor="cap_tham_quyen" className="col-sm-12 col-form-label font-weight-bold font-13">Cấp thẩm quyền </label>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <select id="cap_tham_quyen" className="form-control form-control-sm font-13 bg-white" name="cap_tham_quyen">
                                <option value="0">-- Cấp thẩm quyền --</option>
                                <option value="1">Cấp trung ương</option>
                                <option value="2">Cấp địa phương</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="pb-2 mx-0 col-sm-6 px-0">
                    <label htmlFor="license_type" className="col-sm-12 col-form-label font-weight-bold font-13">Loại hình GP </label>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <select id="license_type" className="form-control form-control-sm font-13 bg-white" name="license_type">
                                <option value="0">-- Loại hình GP --</option>
                                <option value="1">Cấp mới GP</option>
                                <option value="2">Cấp lại GP</option>
                                <option value="2">Gia hạn/Điều chỉhh GP</option>
                                <option value="2">Thu hồi GP</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-sm-4 px-0 pb-2 mx-0">
                    <label htmlFor="nguoi_ky_gp" className="col-sm-12 col-form-label font-weight-bold font-13"> Người ký GP </label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control form-control-sm font-13" id="nguoi_ky_gp" name="nguoi_ky_gp" placeholder=" -- Người ký GP --" />
                    </div>
                </div>
                <div className="col-sm-4 px-0 pb-2 mx-0">
                    <label htmlFor="chuc_vu_nguoi_ky_gp" className="col-sm-12 col-form-label font-weight-bold font-13"> Chức vụ </label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control form-control-sm font-13" id="chuc_vu_nguoi_ky_gp" name="chuc_vu_nguoi_ky_gp" placeholder=" -- Chức vụ --" />
                    </div>
                </div>
                <div className="col-sm-4 px-0 pb-2 mx-0">
                    <label htmlFor="ngay_ky_gp" className="col-sm-12 col-form-label font-weight-bold font-13">Ngày ký </label>
                    <div className="col-sm-12">
                        <input type="date" className="form-control form-control-sm font-13" id="ngay_ky_gp" name="ngay_ky_gp" placeholder=" -- Ngày ký --" />
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-sm-6 pb-2 px-0 px-0 mx-0">
                    <label htmlFor="ngay_hieu_luc_dp" className="col-sm-12 col-form-label font-weight-bold font-13">Ngày hiệu lực GP</label>
                    <div className="col-sm-12">
                        <input type="date" className="form-control form-control-sm font-13" id="ngay_hieu_luc_dp" name="ngay_hieu_luc_dp" placeholder=" -- Ngày hiệu lực--" />
                    </div>
                </div>
                <div className="col-sm-6 pb-2 px-0 mx-0">
                    <label htmlFor="han_hieu_luc_dp" className="col-sm-12 col-form-label font-weight-bold font-13">Hạn hiệu lực GP </label>
                    <div className="col-sm-12">
                        <input type="date" className="form-control form-control-sm font-13" id="han_hieu_luc_dp" name="han_hieu_luc_dp" placeholder=" -- Hạn hiệu lực GP --" />
                    </div>
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="noi_nhan_gp" className="col-sm-12 col-form-label font-weight-bold font-13">Nơi nhận GP </label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm font-13" id="noi_nhan_gp" name="noi_nhan_gp" placeholder=" -- Nơi nhận GP --" />
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="ghi_chu_gp" className="col-sm-12 col-form-label font-weight-bold font-13">Ghi chú GP</label>
                <div className="col-sm-12">
                    <textarea name="ghi_chu_gp" id="ghi_chu_gp" className="form-control form-control-sm font-13" cols="30" rows="4" placeholder=" -- Ghi chú--" ></textarea>
                </div>
            </div>
        </div>
        <div className="exploit-surfacewater mb-2">
            <p className="col-12 py-1 px-2 exploit-surfacewater-title font-weight-bold mb-2">Thanh tra - Kiểm tra</p>
            <div className="pb-2 mx-0">
            <table className="table table-bordered">
                <thead className="thead-light">
                        <tr className="text-center">
                        <td colSpan="6">
                            <div className="col-12 d-flex justify-content-end">
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ThanhTraKiemTra">
                                    +
                                    </button>
                                </div>
                            </td>
                    </tr>
                    <tr className="text-center">
                        <th className="font-13">#</th>
                        <th className="font-13">Tên đợt</th>
                        <th className="font-13">Tên đơn vị thực hiện</th>
                        <th className="font-13">Tên trưởng đoàn</th>
                        <th className="font-13">Năm thực hiện</th>
                        <th className="font-13">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td colSpan="6"><p className="text-secondary font-12">Không có dữ liệu</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* Modal ThanhTraKiemTra */}
                <div className="modal fade" id="ThanhTraKiemTra" tabIndex="-1" aria-labelledby="ThanhTraKiemTraLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ThanhTraKiemTraLabel">Thanh tra - Kiểm tra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="font-13 font-weight-bold" htmlFor="ten_dot_tt">Tên đợt</label>
                                <input type="text" className="form-control font-13" id="ten_dot_tt" placeholder="Tên đợt thanh tra" />
                            </div>
                            <div className="form-group">
                                <label className="font-13 font-weight-bold" htmlFor="ten_don_vi_tt">Tên đơn vị thực hiện</label>
                                <input type="text" className="form-control font-13" id="ten_don_vi_tt" placeholder="Tên đơn vị thực hiện" />
                            </div>
                            <div className="form-group">
                                <label className="font-13 font-weight-bold" htmlFor="ten_truong_doan_tt">Tên trưởng đoàn</label>
                                <input type="text" className="form-control font-13" id="ten_truong_doan_tt" placeholder="Tên trưởng đoàn" />
                            </div>
                            <div className="form-group">
                                <label className="font-13 font-weight-bold" htmlFor="nam_tt">Năm thực hiện</label>
                                <input type="text" className="form-control font-13" id="nam_tt" placeholder="Năm thực hiện" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary"><i className="fas fa-save"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal --> */}
        </div>
        <div className="exploit-surfacewater mb-2">
            <p className="col-12 py-1 px-2 exploit-surfacewater-title font-weight-bold mb-2">Tiền cấp quyền khai thác sử dụng</p>
            <div className="pb-2 mx-0">
            <table className="table table-bordered">
                <thead className="thead-light">
                        <tr className="text-center">
                        <td colSpan="6">
                            <div className="col-12 d-flex justify-content-end">
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#TienCapQuyen">
                                    +
                                    </button>
                                </div>
                            </td>
                    </tr>
                    <tr className="text-center">
                        <th className="font-13">#</th>
                        <th className="font-13">Số quyết định</th>
                        <th className="font-13">Tổng tiền</th>
                        <th className="font-13">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td colSpan="4"><p className="text-secondary font-12">Không có dữ liệu</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* <!-- Modal TienCapQuyen --> */}
            <div className="modal fade" id="TienCapQuyen" tabIndex="-1" aria-labelledby="TienCapQuyenLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="TienCapQuyenLabel">Tiền cấp quyền khai thác - sử dụng</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="so_quyet_dinh">Số quyết định</label>
                            <input type="text" className="form-control font-13" id="so_quyet_dinh" placeholder="Số quyết định" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="tong_tien">Tổng tiền</label>
                            <input type="text" className="form-control font-13" id="tong_tien" placeholder="Tổng tiền" />
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"><i className="fas fa-save"></i></button>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- end modal --> */}
        </div>
        <div className="exploit-surfacewater mb-2">
            <p className="col-12 py-1 px-2 exploit-surfacewater-title font-weight-bold mb-2">Thông tin tài liệu đính kèm</p>
            <div className="pb-2 mx-0">
                <div className="d-flex justify-content-start align-items-center mb-2 px-2">
                    <label htmlFor="don_xin_cp" className="col-6 font-13">Đơn xin cấp phép</label>
                    <label className="btn btn-default btn-sm center-block btn-file border my-0 mx-2" id="don_xin_cp">
                        <UploadOutlined /> File tài liệu
                        <input type="file" required accept=".pdf"  className="d-none" />
                    </label>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 px-2">
                    <label htmlFor="don_xin_cp" className="col-6 font-13">Đơn xin cấp phép</label>
                    <label className="btn btn-default btn-sm center-block btn-file border my-0 mx-2" id="don_xin_cp">
                        <UploadOutlined /> File tài liệu
                        <input type="file" required accept=".pdf"  className="d-none" />
                    </label>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 px-2">
                    <label htmlFor="don_xin_cp" className="col-6 font-13">Đơn xin cấp phép</label>
                    <label className="btn btn-default btn-sm center-block btn-file border my-0 mx-2" id="don_xin_cp">
                        <UploadOutlined /> File tài liệu
                        <input type="file" required accept=".pdf"  className="d-none" />
                    </label>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 px-2">
                    <label htmlFor="don_xin_cp" className="col-6 font-13">Đơn xin cấp phép</label>
                    <label className="btn btn-default btn-sm center-block btn-file border my-0 mx-2" id="don_xin_cp">
                        <UploadOutlined /> File tài liệu
                        <input type="file" required accept=".pdf"  className="d-none" />
                    </label>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 px-2">
                    <label htmlFor="don_xin_cp" className="col-6 font-13">Đơn xin cấp phép</label>
                    <label className="btn btn-default btn-sm center-block btn-file border my-0 mx-2" id="don_xin_cp">
                        <UploadOutlined /> File tài liệu
                        <input type="file" required accept=".pdf"  className="d-none" />
                    </label>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 px-2">
                    <label htmlFor="don_xin_cp" className="col-6 font-13">Đơn xin cấp phép</label>
                    <label className="btn btn-default btn-sm center-block btn-file border my-0 mx-2" id="don_xin_cp">
                        <UploadOutlined /> File tài liệu
                        <input type="file" required accept=".pdf"  className="d-none" />
                    </label>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 px-2">
                    <label htmlFor="don_xin_cp" className="col-6 font-13">Đơn xin cấp phép</label>
                    <label className="btn btn-default btn-sm center-block btn-file border my-0 mx-2" id="don_xin_cp">
                        <UploadOutlined /> File tài liệu
                        <input type="file" required accept=".pdf"  className="d-none" />
                    </label>
                </div>
            </div>
        </div>
        </div>

      </>
    );
};
const Step2Form = () => {
return (
    <>
    
        <div className="exploit-surfacewater">
            <div className="row pb-2 mx-0">
                <label htmlFor="construction_name" className="col-sm-12 col-form-label font-weight-bold font-13">Tên công trình</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="construction_name" name="construction_name" placeholder=" -- Tên công trình --"  />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="construction_type" className="col-sm-12 col-form-label font-weight-bold font-13"> Ký hiệu công trình </label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="construction_type" name="construction_type" placeholder=" -- Ký hiệu công trình --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="contruction_address" className="col-sm-12 col-form-label font-weight-bold font-13"> Địa điểm công trình</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="contruction_address" name="contruction_address" placeholder=" --  Địa điểm công trình --" />
                </div>
            </div>
            <div className="row pb-2 px09 mx-0">
                <div className="col-sm-6 pb-2 px-0 mx-0">
                    <label htmlFor="huyen" className="col-sm-12 col-form-label font-weight-bold font-13">Huyện </label>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <select id="huyen" className="form-control form-control-sm bg-white" name="huyen">
                                <option value="0">-- Huyện --</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 pb-2 px-0 mx-0">
                    <label htmlFor="xa" className="col-sm-12 col-form-label font-weight-bold font-13">Xã </label>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <select id="xa" className="form-control form-control-sm bg-white" name="xa">
                                <option value="0">-- Xã --</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-2 px-0 mx-0">
                <label htmlFor="muc_dich_sd" className="col-sm-12 col-form-label font-weight-bold font-13">Mục đích sử dụng </label>
                <div className="col-sm-12">
                <textarea name="muc_dich_sd" id="muc_dich_sd" className="form-control form-control-sm" cols="30" rows="4" placeholder=" -- Mục đích sử dụng--" ></textarea>
                </div>
            </div>
            <div className="pb-2 px-0 mx-0">
                <label htmlFor="nguon_nuoc_kt_sd" className="col-sm-12 col-form-label font-weight-bold font-13">Nguồn nước khai thác sử dụng</label>
                <div className="col-sm-12">
                    <textarea name="nguon_nuoc_kt_sd" id="nguon_nuoc_kt_sd" className="form-control form-control-sm" cols="30" rows="4" placeholder=" -- Nguồn nước khai thác sử dụng--" ></textarea>
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="thuoc_song" className="col-sm-12 col-form-label font-weight-bold font-13"> Thuộc sông</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="thuoc_song" name="thuoc_song" placeholder=" -- Thuộc sông --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="thuoc_luu_vuc_song" className="col-sm-12 col-form-label font-weight-bold font-13"> Thuộc lưu vực sông</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="thuoc_luu_vuc_song" name="thuoc_luu_vuc_song" placeholder=" -- Thuộc lưu vực sông --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="che_do_kt" className="col-sm-12 col-form-label font-weight-bold font-13"> Chế độ khai thác</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="che_do_kt" name="che_do_kt" placeholder=" -- Chế độ khai thác --" />
                </div>
            </div>
            <div className="pb-2 mx-0 px-0">
                <label htmlFor="luong_nuoc_kt_sd" className="col-sm-12 col-form-label font-weight-bold font-13"> Lượng nước khai thác, sử dụng</label>
                <div className="col-sm-12">
                    <textarea className="form-control form-control-sm" id="luong_nuoc_kt_sd" name="luong_nuoc_kt_sd" placeholder=" -- Lượng nước khai thác, sử dụng --" cols="30" rows="4"></textarea>
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="phuong_thuc_kt" className="col-sm-12 col-form-label font-weight-bold font-13"> Phương thức khai thác</label>
                <div className="col-sm-12">
                    <textarea className="form-control form-control-sm" id="phuong_thuc_kt" name="phuong_thuc_kt" placeholder=" -- Phương thức khai thác --" cols="30" rows="4"></textarea>
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <div className="col-sm-6 px-0 pb-2 mx-0">
                    <label htmlFor="loai_kinh_tuyen_truc" className="col-sm-12 col-form-label font-weight-bold font-13">Loại kinh tuyến trục </label>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <select id="loai_kinh_tuyen_truc" className="form-control form-control-sm bg-white" name="loai_kinh_tuyen_truc">
                                <option value="0">-- Loại kinh tuyến trục --</option>
                                <option value="1">-- Cấp địa phương --</option>
                                <option value="2">-- Cấp trung ương --</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 px-0 pb-2 mx-0">
                    <label htmlFor="mui_chieu" className="col-sm-12 col-form-label font-weight-bold font-13">Múi chiếu </label>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <select id="mui_chieu" className="form-control form-control-sm bg-white" name="mui_chieu">
                                <option value="0">-- Múi chiếu --</option>
                                <option value="1"> Múi chiếu 3 độ</option>
                                <option value="2"> Múi chiếu 6 độ</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="nam_sd" className="col-sm-12 col-form-label font-weight-bold font-13"> Năm sử dụng</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="nam_sd" name="nam_sd" placeholder=" -- Năm sử dụng --" />
                </div>
            </div>
            <div className="pb-2 mx-0">
                <label htmlFor="ghi_chu_ct" className="col-sm-12 col-form-label font-weight-bold font-13"> Ghi chú CT</label>
                <div className="col-sm-12">
                    <textarea className="form-control form-control-sm" id="ghi_chu_ct" name="ghi_chu_ct" placeholder=" -- Ghi chú CT --" cols="30" rows="4"></textarea>
                </div>
            </div>
        </div>
        <div className="exploit-surfacewater mb-2">
            <div className="row pb-2 mx-0">
                <label htmlFor="cong_suat_lap_may" className="col-sm-12 col-form-label font-weight-bold font-13"> Công suất lắp máy(MW)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="cong_suat_lap_may" name="cong_suat_lap_may" placeholder=" -- Công suất lắp máy(MW) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="q_max_thuy_dien" className="col-sm-12 col-form-label font-weight-bold font-13"> Lưu lượng lớn nhất qua nhà máy thủy điện (m3/s)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="q_max_thuy_dien" name="q_max_thuy_dien" placeholder=" -- Lưu lượng lớn nhất qua nhà máy thủy điện (m3/s) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="q_xa_tt" className="col-sm-12 col-form-label font-weight-bold font-13"> Lưu lượng xả dòng chảy tối thiểu (m3/s)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="q_xa_tt" name="q_xa_tt" placeholder=" -- Lưu lượng xả dòng chảy tối thiểu (m3/s) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="dung_tich_huu_ich" className="col-sm-12 col-form-label font-weight-bold font-13"> Dung tích hữu ích (triệu m3)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="dung_tich_huu_ich" name="dung_tich_huu_ich" placeholder=" -- Dung tích hữu ích (triệu m3) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="dung_tich_toan_bo" className="col-sm-12 col-form-label font-weight-bold font-13"> Dung tích toàn bộ (triệu m3)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="dung_tich_toan_bo" name="dung_tich_toan_bo" placeholder=" -- Dung tích toàn bộ (triệu m3) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="muc_nuoc_chet" className="col-sm-12 col-form-label font-weight-bold font-13"> Mực nước chết (m)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="muc_nuoc_chet" name="muc_nuoc_chet" placeholder=" -- Mực nước chết (m) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="muc_nuoc_dang_bt" className="col-sm-12 col-form-label font-weight-bold font-13"> Mực nước dâng bình thường (m)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="muc_nuoc_dang_bt" name="muc_nuoc_dang_bt" placeholder=" -- Mực nước dâng bình thường (m) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="muc_nuoc_max_truoc_lu" className="col-sm-12 col-form-label font-weight-bold font-13"> Mực nước cao nhất trước lũ (m)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="muc_nuoc_max_truoc_lu" name="muc_nuoc_max_truoc_lu" placeholder=" -- Mực nước cao nhất trước lũ (m) --" />
                </div>
            </div>
            <div className="row pb-2 mx-0">
                <label htmlFor="muc_nuoc_don_lu" className="col-sm-12 col-form-label font-weight-bold font-13"> Mực nước đón lũ (m)</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control form-control-sm" id="muc_nuoc_don_lu" name="muc_nuoc_don_lu" placeholder=" -- Mực nước đón lũ (m) --" />
                </div>
            </div>
        </div>
        <div className="exploit-surfacewater mb-2">
            <p className="col-12 py-1 px-2 exploit-surfacewater-title font-weight-bold mb-2">Lưu lượng theo mục đích khai thác sử dụng</p>
            <div className="pb-2 mx-0">
            <table className="table table-bordered">
                <thead className="thead-light">
                <tr className="text-center">
                        <td colSpan="6">
                            <div className="col-12 d-flex justify-content-end">
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LuuLuongThepMucDichKTSD">
                                    +
                                    </button>
                                </div>
                            </td>
                    </tr>
                    <tr className="text-center">
                        <th className="font-13">#</th>
                        <th className="font-13">Mục đích</th>
                        <th className="font-13">Lưu lượng</th>
                        <th className="font-13">Đơn vị đo</th>
                        <th className="font-13">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td colSpan="5"><p className="text-secondary font-12">Không có dữ liệu</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* <!-- Modal LuuLuongThepMucDichKTSD --> */}
            <div className="modal fade" id="LuuLuongThepMucDichKTSD" tabIndex="-1" aria-labelledby="LuuLuongThepMucDichKTSDLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ThanhTraKiemTraLabel">Lưu lượng theo mục đích khai thác sử dụng</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="muc_dich">Mục đích</label>
                            <input type="text" className="form-control font-13" id="muc_dich" placeholder="Mục đích" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="luu_luong">Lưu lượng</label>
                            <input type="text" className="form-control font-13" id="luu_luong" placeholder="Lưu lượng" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="dv_do">Đơn vị đo</label>
                            <input type="text" className="form-control font-13" id="dv_do" placeholder="Đơn vị đo" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"><i className="fas fa-save"></i></button>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- end modal --> */}
        </div>
        <div className="exploit-surfacewater mb-2">
            <p className="col-12 py-1 px-2 exploit-surfacewater-title font-weight-bold mb-2">Tọa độ công trình</p>
            <div className="pb-2 mx-0">
            <table className="table table-bordered">
                <thead className="thead-light">
                        <tr className="text-center">
                        <td colSpan="6">
                            <div className="col-12 d-flex justify-content-end">
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ToaDoCongTrinh">
                                    +
                                    </button>
                                </div>
                            </td>
                    </tr>
                    <tr className="text-center">
                        <th className="font-13">#</th>
                        <th className="font-13">Ký hiệu</th>
                        <th className="font-13">Tọa Độ X</th>
                        <th className="font-13">Tọa Độ Y</th>
                        <th className="font-13">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td colSpan="5"><p className="text-secondary font-12">Không có dữ liệu</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* <!-- Modal ToaDoCongTrinh --> */}
            <div className="modal fade" id="ToaDoCongTrinh" tabIndex="-1" aria-labelledby="ToaDoCongTrinhLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ThanhTraKiemTraLabel">Tọa độ công trình</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="ky_hieu_ct">Ký hiêu CT</label>
                            <input type="text" className="form-control font-13" id="ky_hieu_ct" placeholder="Ký hiêu CT" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="toa_do_x_ct">Tọa độ X</label>
                            <input type="text" className="form-control font-13" id="toa_do_x_ct" placeholder="Tọa độ X" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="toa_do_y_ct">Tọa Độ Y</label>
                            <input type="text" className="form-control font-13" id="toa_do_y_ct" placeholder="Tọa Độ Y" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"><i className="fas fa-save"></i></button>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- end modal --> */}
        </div>
        <div className="exploit-surfacewater mb-2">
            <p className="col-12 py-1 px-2 exploit-surfacewater-title font-weight-bold mb-2">Hạng mục công trình</p>
            <div className="pb-2 mx-0">
            <table className="table table-bordered">
                <thead className="thead-light">
                        <tr className="text-center">
                        <td colSpan="6">
                            <div className="col-12 d-flex justify-content-end">
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#HangMucCongTrinh">
                                    +
                                    </button>
                                </div>
                            </td>
                    </tr>
                    <tr className="text-center">
                        <th className="font-13" rowSpan="2">#</th>
                        <th className="font-13" rowSpan="2">Tên hạng mục</th>
                        <th className="font-13" colSpan="2">Tọa Độ</th>
                        <th className="font-13" rowSpan="2">Mô tả</th>
                        <th className="font-13" rowSpan="2">Thao tác</th>
                    </tr>
                    <tr className="text-center">
                            <th className="font-13">X</th>
                            <th className="font-13">Y</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td colSpan="6"><p className="text-secondary font-12">Không có dữ liệu</p></td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* <!-- Modal HangMucCongTrinh --> */}
            <div className="modal fade" id="HangMucCongTrinh" tabIndex="-1" aria-labelledby="HangMucCongTrinhLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ThanhTraKiemTraLabel">Hạng mục công trình</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="ten_hang_muc_ct">Tên hạng mục</label>
                            <input type="text" className="form-control font-13" id="ten_hang_muc_ct" placeholder="Ký hiêu CT" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="toa_do_x_hang_muc_ct">Tọa độ X</label>
                            <input type="text" className="form-control font-13" id="toa_do_x_hang_muc_ct" placeholder="Tọa độ X" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="toa_do_y_hang_muc_ct">Tọa Độ Y</label>
                            <input type="text" className="form-control font-13" id="toa_do_y_hang_muc_ct" placeholder="Tọa Độ Y" />
                        </div>
                        <div className="form-group">
                            <label className="font-13 font-weight-bold" htmlFor="muc_dich_hang_muc_vt">Mục đích</label>
                            <input type="text" className="form-control font-13" id="muc_dich_hang_muc_vt" placeholder="Mục đích" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"><i className="fas fa-save"></i></button>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- end modal --> */}
        </div>


    </>
);
};
const Step3Form = () => {
    return (
      <>
        <div className="exploit-surfacewater mb-2">
            <div className="py-2 mx-0">
                <div className="row mx-0">
                    <div className="form-group col-sm-6">
                        <label className="font-13 font-weight-bold" htmlFor="ngay_lay_mau">Ngày lấy mẫu</label>
                        <input type="date" className="form-control font-13" id="ngay_lay_mau" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label className="font-13 font-weight-bold" htmlFor="dia_diem_lay_mau">Địa điểm lấy mẫu</label>
                        <input type="text" className="form-control font-13" id="dia_diem_lay_mau" placeholder="Địa điểm lấy mẫu" />
                    </div>
                </div>
                <div className="form-group col-sm-12">
                    <label htmlFor="my-select">Giám sát theo thông tư</label>
                    <select  className="form-control form-control-sm w-25 bg-white" name="">
                        <option>47/2017/TT-BTNMT</option>
                    </select>
                </div>
            </div>
            <div className="pb-2 mx-0">
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
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Mực nước hồ</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">2</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả duy trì dòng chảy tối thiểu</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">3</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua nhà máy</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">4</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua tràn</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">5</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Giám sát bằng camera</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">6</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Chất lượng nước trong quá trình khai thác theo quy định</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">7</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng khai thác</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
      </>
    );
};
const Step4Form = () => {
    return (
      <>
        
        <div className="exploit-surfacewater mb-2">
            <div className="row py-2 mx-0">
                <div className="form-group col-sm-4">
                    <label htmlFor="my-select">Vị trí quan trắc</label>
                    <input type="text" className="form-control form-control-sm" placeholder=" -- Vị trí quan trắc -- " />
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="my-select">Quy chuẩn Việt Nam</label>
                    <select  className="form-control form-control-sm bg-white" name="">
                        <option>QCVN 08-MT:2015/BTNMT</option>
                    </select>
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="my-select">Mục đích sử dụng</label>
                    <select  className="form-control form-control-sm bg-white" name="">
                        <option>A1</option>
                        <option>A2</option>
                        <option>B1</option>
                        <option>B2</option>
                    </select>
                </div>
            </div>
            <div className="pb-2 mx-0">
            <table className="table table-bordered table_overflow">
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
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Mực nước hồ</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">2</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả duy trì dòng chảy tối thiểu</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">3</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua nhà máy</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">4</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua tràn</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">5</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Giám sát bằng camera</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">6</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Chất lượng nước trong quá trình khai thác theo quy định</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">7</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng khai thác</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">1</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Mực nước hồ</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">2</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả duy trì dòng chảy tối thiểu</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">3</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua nhà máy</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">4</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua tràn</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">5</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Giám sát bằng camera</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">6</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Chất lượng nước trong quá trình khai thác theo quy định</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">7</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng khai thác</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">1</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Mực nước hồ</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">2</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả duy trì dòng chảy tối thiểu</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">3</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua nhà máy</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">4</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua tràn</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">5</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Giám sát bằng camera</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">6</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Chất lượng nước trong quá trình khai thác theo quy định</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">7</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng khai thác</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">1</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Mực nước hồ</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">2</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả duy trì dòng chảy tối thiểu</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">3</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua nhà máy</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">4</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng xả qua tràn</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">5</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Giám sát bằng camera</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">6</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Chất lượng nước trong quá trình khai thác theo quy định</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                    <tr className="text-left">
                        <td className="font-13 text-center">7</td>
                        <td className="text-center"><input type="checkbox" /></td>
                        <td className="text-wrap">Lưu lượng khai thác</td>
                        <td>
                            <div className="form-group">
                                <select  className="form-control  form-control-sm bg-white" name="don_vi">
                                    <option value="m" className="text-center">m</option>
                                    <option value="mm" className="text-center">mm</option>
                                </select>
                            </div>
                        </td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                        <td><input className="form-control form-control-sm" type="number" /></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
      </>
    );
  };

const steps = [
    {
      title: 'Thông tin chung',
      content: < Step1Form />,
      icon: <SolutionOutlined />,
      ct: '<div>ok</div>'
    },
    {
      title: 'Thông tin công trình',
      content: < Step2Form />,
      icon: <BankOutlined />,
    },
    {
      title: 'Giám sát KT/SD',
      content: < Step3Form />,
      icon: <BarChartOutlined />,
    },
    {
        title: 'Chất lượng nước mặt',
        content: < Step4Form />,
        icon: <StarFilled />,
      },
];


export default class QuanLyCapPhepNuocMat extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            current: 0,
        }
    }
    state = {
        current: 0,
    };
    
      onChange = current => {
        this.setState({ current });
      };

    componentDidMount(){
        document.title = "Tạo mới giấy phép nước mặt | Giám sát tài nguyên nước Sơn La";
    }

    next = () => {
        this.setState({current: this.state.current + 1});
      };
    
      prev = () => {
        this.setState({current: this.state.current - 1});
      };

    render(){
          const { current } = this.state;
        return(
			<div className="p-0">
                <Header headTitle="CẤP MỚI GIẤY PHÉP NƯỚC MẶT" previousLink="/quan-ly-cap-phep/nuoc-mat/thuy-dien" showHeadImage={true} />
                <main className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-6 px-0 menu-home discharge-water">
                        <form className="pb-5">
                        <div className="col-sm-12 px-0 pb-3 step__button">
                            <Steps type="navigation" size="small" current={current} onChange={this.onChange} className="site-navigation-steps" >
                                {steps.map(item => (
                                    <Step key={item.title} icon={item.icon}  title={item.title} />
                                ))}
                            </Steps>
                        </div>
                        <div className="steps-content"> {steps[current].content} </div>
                            <div className="steps-action d-flex justify-content-end">
                            
                                {current > 0 && (
                                    <div className="col-6 d-flex justify-content-start align-items-center">
                                        <Button className="mx-3 d-flex justify-content-center align-items-center" onClick={this.prev}>
                                            <LeftOutlined /> Trước
                                        </Button>
                                    </div>
                                )}
                                
                            
                                {current < steps.length - 1 && (
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <Button type="primary" className="mx-3 d-flex justify-content-center align-items-center" onClick={this.next}>
                                            Tiếp <RightOutlined />
                                        </Button>
                                    </div>
                                )}
                                
                                {current === steps.length - 1 && (
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <Button type="primary" className="mx-3 d-flex justify-content-center align-items-center" onClick={() => message.success('Processing complete!')}>
                                            Xong <SaveOutlined />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </form> 
                    </div>
                    <div className="col-12 col-lg-6 menu-home px-md-1">
                        <Map />
                    </div>
                </main>
            </div>
        )
    }
}