import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <div className="bg-dark-100 p-4 min-h-[80px] flex gap-5 items-center justify-between">
      <button className="btn btn-secondary shadow-none rounded-none text-lg w-[110px] h-[48px] text-white hover:bg-secondary">
        Latest
      </button>
      <Marquee>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          aperiam, dolorum ipsum eum excepturi facere dicta laboriosam ullam
          cumque labore?
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          aperiam, dolorum ipsum eum excepturi facere dicta laboriosam ullam
          cumque labore?
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
