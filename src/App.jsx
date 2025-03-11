import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Grid1 from "./components/Grid1/Grid1.jsx";
import Grid2 from "./components/Grid2/Grid2.jsx";
import ImageScroller from "./components/ImageScrollers.jsx";
import Navbar from "./components/Navbar.jsx";
import OptionsFor from "./components/OptionsFor/OptionsFor.jsx";

function App() {
  return (
    <div className=" flex flex-col items-center">
      <Navbar />
      <Features />
      <div className="hidden sm:block">
        <ImageScroller
          images={[
            { id: 1, src: "../../ubanner3.jpeg", alt: "Image 1" },
            {
              id: 2,
              src: "../../bannerselectionipm1.jpg",
              alt: "Image 2",
            },
          ]}
        />
      </div>

      <OptionsFor />
      <ImageScroller
        images={[
          { id: 1, src: "../../b12.jpg", alt: "Image 1" },
          {
            id: 2,
            src: "../../bannerselectionipm1.jpg",
            alt: "Image 2",
          },
          { id: 3, src: "../../b4.jpg", alt: "Image 3" },
        ]}
      />
      <Grid2 />
      <ImageScroller
        images={[
          { id: 1, src: "../../b12.jpg", alt: "Image 1" },
          {
            id: 2,
            src: "../../bannerselectionipm1.jpg",
            alt: "Image 2",
          },
        ]}
      />
      <Footer />
    </div>
  );
}

export default App;
