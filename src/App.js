import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// Home page
import Home from './components/page/Home';
// Quanly cap phep page
import QuanLyCapPhep from './components/page/QuanLyCapPhep/QuanLyCapPhep';
import QuanLyCapPhepNuocMat from './components/page/QuanLyCapPhep/NuocMat/NuocMat';
// Quanly cap phep / thuy dien
import QuanLyCapPhepNuocMatThuyDien from './components/page/QuanLyCapPhep/NuocMat/ThuyDien';
import QuanLyCapPhepTaoGiayPhepNuocMat from './components/page/QuanLyCapPhep/NuocMat/TaoMoiGiayPhep';
import QuanLyCapPhepNuocMatXemThongTinThuyDien from './components/page/QuanLyCapPhep/NuocMat/CongTrinhThuyDien/XemThongTinChung';
import QuanLyCapPhepNuocMatXemThongTinCongTrinh from './components/page/QuanLyCapPhep/NuocMat/CongTrinhThuyDien/ThongTinCongTrinh';
import QuanLyCapPhepNuocMatThongTinCongTrinhChiTiet from './components/page/QuanLyCapPhep/NuocMat/CongTrinhThuyDien/ThongTinCongTrinhChiTiet';
import QuanLyCapPhepNuocMatGiamSatKhaiThacSuDung from './components/page/QuanLyCapPhep/NuocMat/CongTrinhThuyDien/GiamSatKhatThacSuDung';
import QuanLyCapPhepNuocMatChatLuongNuocMat from './components/page/QuanLyCapPhep/NuocMat/CongTrinhThuyDien/ChatLuongNuocMat';
import QuanLyCapPhepNuocMatHoSoCapPhep from './components/page/QuanLyCapPhep/NuocMat/CongTrinhThuyDien/HoSoCapPhep';

// import Gioi thieu chung pages
import GioiThieuChung from './components/page/GioiThieuChung/GioiThieuChung';



import BaoCaoBieuMau from './components/page/BaoCaoBieuMau/BaoCaoBieuMau';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />

				{/* Quan ly cap phep */}
				<Route exact path="/quan-ly-cap-phep" component={QuanLyCapPhep} />
				{/* Nuoc Mat */}
				<Route exact path="/quan-ly-cap-phep/nuoc-mat" component={QuanLyCapPhepNuocMat} />
				{/* Thuy Dien */}
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/thuy-dien" component={QuanLyCapPhepNuocMatThuyDien} />
				{/* Thuy Dien Tao Moi GP NuocMat */}
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/tao-moi" component={QuanLyCapPhepTaoGiayPhepNuocMat} />
				{/* Thuy Dien Xem Thong Tin GP */}
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-chung" component={QuanLyCapPhepNuocMatXemThongTinThuyDien} />
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh" component={QuanLyCapPhepNuocMatXemThongTinCongTrinh} />
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/thuy-dien/xem-thong-tin-cong-trinh/chi-tiet" component={QuanLyCapPhepNuocMatThongTinCongTrinhChiTiet} />
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/thuy-dien/giam-sat-khai-thac-su-dung" component={QuanLyCapPhepNuocMatGiamSatKhaiThacSuDung} />
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/thuy-dien/chat-luong-nuoc-mat" component={QuanLyCapPhepNuocMatChatLuongNuocMat} />
				<Route exact path="/quan-ly-cap-phep/nuoc-mat/thuy-dien/ho-so-cap-phep" component={QuanLyCapPhepNuocMatHoSoCapPhep} />

				{/* Ho Chua */}
				{/* <Route exact path="/quan-ly-cap-phep/nuoc-mat/ho-chua" component={QuanLyCapPhepNuocMatHoChua} /> */}

				{/* Gioi thieu chung */}
				<Route exact path="/gioi-thieu-chung" component={GioiThieuChung} />

				{/* Bao Cao Bieu Mau */}
				<Route exact path="/bao-cao-bieu-mau" component={BaoCaoBieuMau} />
			</Switch>
		</BrowserRouter>
  );
}

export default App;
