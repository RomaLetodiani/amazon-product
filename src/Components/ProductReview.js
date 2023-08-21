const ProductReview = (props) => {
  return (
    <div className="w-1/2 flex flex-col items-start">
      <h1 className="font-bold text-[clamp(30px,3vw,50px)]">{props.title}</h1>
      <p className="py-8 text-[clamp(10px,3vw,20px)] font-bold">{props.desc}</p>
      <h2 className="font-bold text-[clamp(20px,3vw,30px)]">Select Color</h2>
      <div className="flex gap-5 mb-5 flex-wrap">
        {props.colorOpt.map((item) => (
          <div
            onClick={() => props.setCount(item.id)}
            key={item.id}
            className={`${
              item.id === props.count ? 'border-2 rounded border-[#007383]' : ''
            } cursor-pointer  w-24`}
          >
            <img className="w-full" src={item.imageUrl} alt={item.styleName} />
          </div>
        ))}
      </div>
      <h2 className="font-bold text-[30px]">Features</h2>
      <div className="flex gap-5 mb-5 flex-wrap">
        {props.ftList.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => props.setBtnCount(item.id)}
              className={`${
                item.id === props.btnCount
                  ? ' text-[#fff] bg-[#808080]'
                  : 'text-[#000] bg-[#DDDCDD]'
              } border-0 outline-0 text-center w-[125px] p-2 px-5 cursor-pointer rounded-[10px] `}
            >
              {item.styleName}
            </button>
          </div>
        ))}
      </div>
      <button className="mt-5 bg-[#007383] text-[#fff] border-0 outline-0 text-center p-3 px-6 cursor-pointer rounded-[10px] text-[20px] hover:bg-[#14555e] ">
        Buy Now
      </button>
    </div>
  );
};

export default ProductReview;
