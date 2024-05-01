import Aboutus from "./components/Aboutus/Aboutus";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components_gallery/Welcome/Welcome";

import call from "./assets/images//call.png";
import whatsapp from "./assets/images/whatsapp.webp";

function GalleryPage({ currentLanguage, setCurrentLanguage, data }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
      />
      <Welcome currentLanguage={currentLanguage} />
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

export default GalleryPage;
