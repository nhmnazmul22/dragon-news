import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const News = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    if (id !== "0") {
      const filteredNews = data.filter((news) => news.category_id == id);
      setNewses(filteredNews);
    } else {
      setNewses(data);
    }
  }, [data, id]);

  console.log(newses);
  return <div>News {id}</div>;
};

export default News;
