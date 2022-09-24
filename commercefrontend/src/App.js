import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProdPage from "./pages/ProdPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProdPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
