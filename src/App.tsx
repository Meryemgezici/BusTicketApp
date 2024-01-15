import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InquiryPage from "./pages/InquiryPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBuses } from "./redux/actions/busesAction";
import TripDetailsPage from "./pages/TripDetailsPage";
import { getChairs } from "./redux/actions/chairsAction";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getBuses());
      await dispatch(getChairs());
    };

    fetchData();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/tripDetail/:id" element={<TripDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
