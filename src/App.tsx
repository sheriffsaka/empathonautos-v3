import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import HomeV2 from './pages/HomeV2';
import About from './pages/About';
import Showroom from './pages/Showroom';
import Corporate from './pages/Corporate';
import Dealers from './pages/Dealers';
import PreOrder from './pages/PreOrder';
import TrackOrder from './pages/TrackOrder';
import FAQs from './pages/FAQs';
import SupportCenter from './pages/SupportCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeV2 />} />
          <Route path="about" element={<About />} />
          <Route path="showroom" element={<Showroom />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="dealers" element={<Dealers />} />
          <Route path="pre-order" element={<PreOrder />} />
          <Route path="track" element={<TrackOrder />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="support" element={<SupportCenter />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<HomeV2 />} />
        </Route>
      </Routes>
    </Router>
  );
}
