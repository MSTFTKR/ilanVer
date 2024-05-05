import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";
import AdvertPage from "./pages/adverts/advertPage.js";
import Bulunamadi from "./pages/bulunamadi.js";
import AddAdvertPage from "./pages/addAdverPage/addAdvertPage.js";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/ilanlar"/>} />
                <Route path="/ilanlar" element={<HomePage/>} />
                <Route path="/ilan" element={<AdvertPage/>} />
                <Route path="/ilan-ver" element={<AddAdvertPage/>} />
                <Route path="*" element={<Bulunamadi/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;