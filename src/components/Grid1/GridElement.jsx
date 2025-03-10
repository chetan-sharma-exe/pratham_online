const GridElement = ({ icon, title, p1, p2, p3 }) => {
  return (
    <div className="h-60 w-100 px-10 py-7 flex flex-col items-start text-white">
      <img src={icon} alt="screen" className="h-13" />
      <p className="mt-4 font-bold text-2xl">{title}</p>
      <ul className="text-sm mt-7 flex flex-col items-start">
        <li>&#8226; {p1}</li>
        <li>&#8226; {p2}</li>
        <li>&#8226; {p3}</li>
      </ul>
    </div>
  );
};

export default GridElement;
