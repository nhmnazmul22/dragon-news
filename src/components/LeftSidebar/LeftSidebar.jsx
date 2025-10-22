import CategoryList from "./CategoryList";
import { Suspense } from "react";
import { fetchCategories } from "../../utilities/api";

const LeftSidebar = () => {
  const promise = fetchCategories();

  return (
    <div>
      <div className="">
        <Suspense fallback={<p>Loading...</p>}>
          <CategoryList promise={promise}></CategoryList>
        </Suspense>
      </div>
    </div>
  );
};

export default LeftSidebar;
