import CategoryList from "./CategoryList";
import { Suspense } from "react";
import { fetchCategories, fetchNewses } from "../../utilities/api";
import LineSkeleton from "../Skeleton/LineSkeleton";
import SideNewses from "./SideNewses";
import CardSkeleton from "../Skeleton/CardSkeleton";

const LeftSidebar = () => {
  const categoriesPromise = fetchCategories();
  const newsPromise = fetchNewses();

  return (
    <div>
      <div className="">
        <Suspense fallback={<LineSkeleton />}>
          <CategoryList promise={categoriesPromise}></CategoryList>
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <SideNewses promise={newsPromise}></SideNewses>
        </Suspense>
      </div>
    </div>
  );
};

export default LeftSidebar;
