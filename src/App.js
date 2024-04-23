import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import ProductPage from "./productPage";
import GalleryPage from "./galleryPage";
import AdminPage from "./adminPage";
import CategoryCreate from "./components/Admin/category/create";
import CategoryList from "./components/Admin/category/list";
import CategoryEdit from "./components/Admin/category/edit";

import ProductCreate from "./components/Admin/products/create";
import ProductList from "./components/Admin/products/list";
import ProductEdit from "./components/Admin/products/edit";

import GalleryCreate from "./components/Admin/gallery/create";
import GalleryList from "./components/Admin/gallery/list";
import GalleryEdit from "./components/Admin/gallery/edit";

import AdminMainList from "./components/Admin/main/main.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={< />} />
        <Route path="/admin" element={<AdminPage />}>
          {/* <Route path="/" index element={<AdminMainList />} /> */}
          <Route path="main">
            <Route index element={<AdminMainList />} />
            <Route path="create" element={<CategoryCreate />} />
            <Route path=":id" element={<CategoryEdit />} />
          </Route>
          <Route path="category">
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CategoryCreate />} />
            <Route path=":id" element={<CategoryEdit />} />
          </Route>
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path="create" element={<ProductCreate />} />
            <Route path=":id" element={<ProductEdit />} />
          </Route>
          <Route path="gallery">
            <Route index element={<GalleryList />} />
            <Route path="create" element={<GalleryCreate />} />
            <Route path=":id" element={<GalleryEdit />} />
          </Route>
          {/* <Route path="language">
            <Route index element={<LangList />} />
            <Route path="create" element={<LangCreate />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
