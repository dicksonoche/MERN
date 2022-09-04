import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProdPage from "./pages/ProdPage";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to='/'> Pairlead</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProdPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
