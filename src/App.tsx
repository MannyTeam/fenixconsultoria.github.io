import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { HomePage } from "./pages/home/Home";
import { Header } from "./pages/header/Header";
import { Footer } from './pages/footer/Footer';
import { Contact } from './pages/contact/Contact';
import { Procedures } from './pages/generalPage/Procedures';
import { Projects } from './pages/generalPage/Projects';
import { Seminars } from './pages/generalPage/Seminars';
import { Analytics } from './pages/generalPage/Analytics';
import { Clinic } from './pages/generalPage/Clinic';

export default function App() {
    return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/seminars" element={<Seminars/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/clinic" element={<Clinic/>}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
