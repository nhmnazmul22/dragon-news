import React, { use } from "react";
import News from "./News";

const SideNewses = ({ promise }) => {
  const newses = use(promise);

  const filteredNewses = newses
    .filter((news) => news.others.is_today_pick === true)
    .slice(0, 3);

  return (
    <div className="mt-10 flex flex-col gap-5">
      {filteredNewses.map((news) => (
        <News key={news.id} news={news}></News>
      ))}
    </div>
  );
};

export default SideNewses;
