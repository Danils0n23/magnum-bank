import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Services from "../pages/Services";
import WhyChooseUs from "../pages/WhyChooseUs";
import TeamSection from "../pages/TeamSection";
import LoginForm from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardContent from "../components/DashboardContent/DashboardContent";
import Transaction from "../pages/Transaction";

const Layout = () => {
  const location = useLocation();
  const isLoginPage =
    location.pathname.startsWith("/dashboard", "/transactions") ||
    location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whyUs" element={<WhyChooseUs />} />
        <Route path="/teammate" element={<TeamSection />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Rota com layout dashboard e subrotas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardContent />} />
          <Route path="transactions" element={<Transaction />} />
        </Route>
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default AppRoutes;
