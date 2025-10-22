import React from "react";
import { Calendar } from "lucide-react";
import { firstLatterUpperCase } from "../../utilities/lib";
import { format } from "date-fns";

const News = ({ news }) => {
  return (
    <div key={news.id}>
      <figure className="h-[150px] w-full rounded-md overflow-hidden">
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="mt-3">
        <h2 className="text-lg font-semibold text-dark-600">{news.title}</h2>
        <div className="flex justify-between items-center mt-4">
          <p className="text-dark-600 font-medium">
            {firstLatterUpperCase(news.tags?.[0])}
          </p>
          <p className="flex gap-2 items-center text-dark-400 text-base">
            <span>
              <Calendar />
            </span>
            {format(new Date(news.author.published_date), "MMM dd, yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
