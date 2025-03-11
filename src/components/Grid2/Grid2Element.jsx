const Grid2Element = ({ icon, title, p }) => {
  return (
    <div className="h-60 w-100 px-10 py-7 flex flex-col items-start text-white">
      <img src={icon} alt="screen" className="h-13" />
      <p className="mt-4 font-bold text-[1.3rem]">{title}</p>
      <p className="mt-4 text-start">{p}</p>
    </div>
  );
};

export default Grid2Element;
