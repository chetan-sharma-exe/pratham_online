import Features from "./components/Features.jsx";
import Grid1 from "./components/Grid1/Grid1.jsx";
import ImageScroller from "./components/ImageScrollers.jsx";
import Navbar from "./components/Navbar.jsx";
import OptionsFor from "./components/OptionsFor/OptionsFor.jsx";

function App() {
  return (
    <div className="h-1000 flex flex-col items-center">
      <Navbar />
      <Features />
      <div className="hidden sm:block">
        <ImageScroller
          images={[
            { id: 1, src: "../../public/ubanner3.jpeg", alt: "Image 1" },
            {
              id: 2,
              src: "../../public/bannerselectionipm1.jpg",
              alt: "Image 2",
            },
          ]}
        />
      </div>

      <OptionsFor />
      <ImageScroller
        images={[
          { id: 1, src: "../../public/ubanner3.jpeg", alt: "Image 1" },
          {
            id: 2,
            src: "../../public/bannerselectionipm1.jpg",
            alt: "Image 2",
          },
          { id: 3, src: "../../public/b4.jpg", alt: "Image 3" },
        ]}
      />
    </div>
  );
}

export default App;
