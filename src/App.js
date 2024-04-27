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

import LanguageCreate from "./components/Admin/Languages/create";
import LanguageList from "./components/Admin/Languages/list";
import LanguageEdit from "./components/Admin/Languages/edit";

import AdminMainList from "./components/Admin/main/main.jsx";
import Contact from "./contactPage.jsx";

import ItemPage from "./ItemPage.jsx";
import { useState } from "react";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("tm");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Homepage
              currentLanguage={currentLanguage}
              setCurrentLanguage={setCurrentLanguage}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductPage
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ItemPage
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <GalleryPage
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          }
        />
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
            <Route
              index
              element={<ProductList currentLanguage={currentLanguage} />}
            />
            <Route
              path="create"
              element={<ProductCreate currentLanguage={currentLanguage} />}
            />
            <Route
              path=":id"
              element={<ProductEdit currentLanguage={currentLanguage} />}
            />
          </Route>
          <Route path="gallery">
            <Route index element={<GalleryList />} />
            <Route path="create" element={<GalleryCreate />} />
            <Route path=":id" element={<GalleryEdit />} />
          </Route>
          <Route path="language">
            <Route index element={<LanguageList />} />
            <Route path="create" element={<LanguageCreate />} />
            <Route path=":id" element={<LanguageEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
