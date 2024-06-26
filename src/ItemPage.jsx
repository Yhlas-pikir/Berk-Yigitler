import Navbar from "./components/Navbar/Navbar";
import call from "./assets/images//call.png";
import whatsapp from "./assets/images/whatsapp.webp";
import Aboutus from "./components/Aboutus/Aboutus";
import { useParams } from "react-router-dom";
import config from "./config.json";
import React, { useEffect, useState } from "react";
function ItemPage({ setCurrentLanguage, currentLanguage, data }) {
  const { id } = useParams();

  const [products, SetProducts] = useState({});
  const GetData = () => {
    fetch(`${config.serverIP}/category/${id}`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetProducts(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (products) {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <div
          className="obshiy"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="itemImageWrapepr">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                textAlign: "center",
                marginTop: "20px",
              }}
              className="itemText"
            >
              <h2 style={{ textAlign: "center", marginBottom: 10 }}>
                {products && products.name && products.name[currentLanguage]}
              </h2>
              {products.products &&
                products.products.map((product) =>
                  // eslint-disable-next-line array-callback-return
                  product.productTranslates.map((translate, i) => {
                    if (translate.language.code === currentLanguage) {
                      return (
                        <p key={i} style={{ fontSize: 20 }}>
                          {translate.name}
                        </p>
                      );
                    }
                  })
                )}
            </div>
            <img
              className="itemImage"
              src={`${config.serverIP}/${products.image}`}
              alt=""
            />
          </div>
        </div>
        <Aboutus currentLanguage={currentLanguage} />
        <a href={`tel:${data?.footer && data?.footer?.callPhone?.undefined}`}>
          <div
            className="fixedcall"
            style={{
              backgroundColor: "white",
              height: 50,
              width: 50,
              position: "fixed",
              bottom: 30,
              left: 10,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              zIndex: 999,
            }}
          >
            <img src={call} width={24} height={24} alt="" />
          </div>
        </a>
        <a href={data?.footer && data?.footer?.whatsUp?.undefined}>
          <img
            style={{
              height: 55,
              width: 55,
              position: "fixed",
              bottom: 32,
              right: 10,
              zIndex: 999,
            }}
            src={whatsapp}
            alt=""
          />
        </a>
      </div>
    );
  }
}

export default ItemPage;
