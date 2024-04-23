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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<div>main</div>} />
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
          <Route path="gallery" element={<div>gallery</div>} />
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
