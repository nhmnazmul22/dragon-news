import React, { use } from "react";
import { Link, NavLink } from "react-router";

const CategoryList = ({ promise }) => {
  const category = use(promise);

  return (
    <div>
      <h4 className="font-semibold text-xl mb-5">All Category</h4>
      <div className="flex flex-col gap-2 justify-start">
        {category.map((cate) => (
          <NavLink
            to={`/category/${cate.id}`}
            key={cate.id}
            className={({ isActive }) =>
              `p-4 justify-start border-0 text-dark-400 font-medium rounded-sm transition-all duration-200 shadow-none text-xl  hover:bg-dark-200 hover:text-dark-600 ${
                isActive ? "bg-dark-200 text-dark-600" : "bg-transparent"
              }`
            }
          >
            {cate.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
