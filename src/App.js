import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header';

import { Routes, Route } from "react-router-dom";

import Country from "./routes/Country";
import CountryDetails from "./routes/CountryDetails";



function App() {

  return (
    <ThemeProvider>
      <div className="font-nurito">
        <Header />
        <Routes>
          <Route path="/" exact element={<Country />} />
          <Route path="/:id" element={<CountryDetails />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
