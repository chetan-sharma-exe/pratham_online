import Grid1 from "./Grid1/Grid1";
import ImageScroller from "./ImageScrollers";
import OptionsFor from "./OptionsFor/OptionsFor";

const Features = () => {
  return (
    <div className="w-full bg-[url(/banner-bg.jpg)] bg-fixed">
      <main className="flex flex-col gap-10 items-center bg-[rgba(8,16,84,0.9)] pt-20 pb-10 sm:pb-0">
        <ImageScroller
          images={[
            { id: 1, src: "../../public/ubanner3.jpeg", alt: "Image 1" },
            {
              id: 2,
              src: "../../public/bannerselectionipm1.jpg",
              alt: "Image 2",
            },
            { id: 3, src: "../../b12.jpg", alt: "Image 3" },
            { id: 4, src: "../../b13.jpg", alt: "Image 4" },
            { id: 5, src: "../../b4.jpg", alt: "Image 5" },
            { id: 6, src: "../../b2.jpg", alt: "Image 6" },
            { id: 7, src: "../../b10.jpg", alt: "Image 7" },
            { id: 8, src: "../../b7.jpg", alt: "Image 8" },
            { id: 9, src: "../../b6.jpg", alt: "Image 9" },
          ]}
        />
        <Grid1 />
      </main>
    </div>
  );
};

export default Features;
