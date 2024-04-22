import {BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import ProductPage from "./productPage";
import GalleryPage from "./galleryPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Homepage />}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
