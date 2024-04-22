import Aboutus from "./components/Aboutus/Aboutus";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components_gallery/Welcome/Welcome";



function GalleryPage() {
    return (
      <div>
          <Navbar />
          <Welcome />
          <Aboutus />
      </div>
    );
  }
  
  export default GalleryPage;
  