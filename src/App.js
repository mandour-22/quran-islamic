import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Favicon from "react-favicon";
import Header from "./Pages/Header/Header";
import Icon from "./img/moon.png";
import Quran from "./Pages/Quran/Quran";
import Hadis from "./Pages/Hadis/Hadis";
import Azkar from "./Pages/Azkar/Azkar";
import Donation from "./Pages/Donation/Donation";
import Commnuication from "./Pages/Commnuication/Commnuication";
import Home from "./Pages/Home/Home";
import AzkarMorning from "./Pages/Azkar/azkar-morning";
import AzkarElmasa from "./Pages/Azkar/azkar-elmasa";
import AzkarShalah from "./Pages/Azkar/azkar-shalah";
import Tasbeh from "./Pages/Azkar/Tasbeh";
import AzkarNome from "./Pages/Azkar/azkar-nome";
import AzkarAlastikaz from "./Pages/Azkar/azkar-alastikaz";
import DoaaAyahs from "./Pages/Azkar/doaa-ayahs";
import DoaaAnbya from "./Pages/Azkar/doaa-anbya";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Header />} />
      <Route path="/home" element={<Header />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/hadis" element={<Hadis />} />
      <Route path="/azkar" element={<Azkar />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/comunication" element={<Commnuication />} />
      <Route path="/azkar-morning" element={<AzkarMorning />} />
      <Route path="/azkar-elmasa" element={<AzkarElmasa />} />
      <Route path="/azkar-shalah" element={<AzkarShalah />} />
      <Route path="/tasbeh" element={<Tasbeh />} />
      <Route path="/azkar-nome" element={<AzkarNome />} />
      <Route path="/azkar-alastikaz" element={<AzkarAlastikaz />} />
      <Route path="/doaa-ayahs" element={<DoaaAyahs />} />
      <Route path="/doaa-anbya" element={<DoaaAnbya />} />
      {/* ... etc. */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  const [fav] = useState(Icon);
  return (
    <>
      <Favicon url={fav} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
