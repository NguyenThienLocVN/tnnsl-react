/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import Header from '../../../layout/Header';
import { Steps, Button, message } from 'antd';
import Map from '../../../layout/Map';
import { SolutionOutlined, BankOutlined, BarChartOutlined, StarFilled, UploadOutlined, RightOutlined, LeftOutlined,SaveOutlined } from '@ant-design/icons';
import { Modal} from 'react-bootstrap';
import FormThongTinChung from "./CongTrinhThuyDien/FormCreate/FormThongTinChung";
import FormThongTinCongTrinh from "./CongTrinhThuyDien/FormCreate/FormThongTinCongTrinh";
import FormGiamSatKTSD from "./CongTrinhThuyDien/FormCreate/FormGiamSatKTSD";
import FormChatLuongNuocMat from "./CongTrinhThuyDien/FormCreate/FormChatLuongNuocMat";

const { Step } = Steps;

const FormCreate1 = () => {
    return (
      <>
        <FormThongTinChung />
      </>
    );
};
const FormCreate2 = () => {
return (
    <>
        <FormThongTinCongTrinh />
    </>
);
};
const FormCreate3 = () => {
    return (
      <>
        <FormGiamSatKTSD />
      </>
    );
};
const Step4Form = () => {
    return (
      <>
        <FormChatLuongNuocMat />
      </>
    );
};

function ModalThanhTraKiemTra() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="btn-primary btn-sm" onClick={handleShow}>
          Thêm dữ liệu
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thanh tra - Kiểm tra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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

  function TienCapQuyen() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className="btn-primary btn-sm" onClick={handleShow}>
            Thêm dữ liệu
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tiền cấp quyền khai thác sử dụng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label className="font-13 font-weight-bold" htmlFor="so_quyet_dinh">Số quyết định</label>
                    <input type="text" className="form-control font-13" id="so_quyet_dinh" placeholder="Số quyết định" />
                </div>
                <div className="form-group">
                    <label className="font-13 font-weight-bold" htmlFor="tong_tien">Tổng tiền</label>
                    <input type="text" className="form-control font-13" id="tong_tien" placeholder="Tổng tiền" />
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


const steps = [
    {
      title: 'Thông tin chung',
      content: < FormCreate1 />,
      icon: <SolutionOutlined />,
      ct: '<div>ok</div>'
    },
    {
      title: 'Thông tin công trình',
      content: < FormCreate2 />,
      icon: <BankOutlined />,
    },
    {
      title: 'Giám sát KT/SD',
      content: < FormCreate3 />,
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