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

import config from "./config.json";

import ItemPage from "./ItemPage.jsx";
import { useEffect, useState } from "react";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("tm");
  // const {pathname} = useLocation();

  const [data, SetData] = useState({});
  const GetData = () => {
    fetch(`${config.serverIP}/main`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData(response);
      })
      .catch((err) => console.log(err));
  };

  console.log(data);

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Homepage
              data={data}
              currentLanguage={currentLanguage}
              setCurrentLanguage={setCurrentLanguage}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductPage
              data={data}
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ItemPage
              data={data}
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <GalleryPage
              data={data}
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              data={data}
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
