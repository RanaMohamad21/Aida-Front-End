import HomePage from "./User/HomePage";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Footer from "./UI/Footer";
import FashionPage from "./Products/FashionPage";
import ElectronicsPage from "./Products/ElectronicsPage";
import SportsPage from "./Products/SportsPage";
import HealthPage from "./Products/HealthPage";
import PetsPage from "./Products/PetSuppliesPage";
import BooksPage from "./Products/BooksPage";
import HomeEssentialsPage from "./Products/HomeEssentialsPage";
import OfficeSuppliesPage from "./Products/OfficeSuppliesPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Authentication Pages */}
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<Signup />} />

          {/* Products Pages  */}
          <Route path="/fashion" element={<FashionPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/homeessentials" element={<HomeEssentialsPage />} />
          <Route path="/officesupplies" element={<OfficeSuppliesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
