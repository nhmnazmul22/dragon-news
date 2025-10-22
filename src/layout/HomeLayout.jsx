import { Outlet } from "react-router";
import RootHeader from "../components/Headers/RootHeader";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSideBar from "../components/RightSidebar/RightSidebar";

const HomeLayout = () => {
  return (
    <>
      <header>
        <RootHeader></RootHeader>
      </header>
      <main className="main-container grid grid-cols-12 gap-5">
        {/* Left sidebar */}
        <aside className="col-span-3">
          <LeftSidebar></LeftSidebar>
        </aside>
        {/* Main content */}
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        {/* Right sidebar */}
        <section className="col-span-3">
          <RightSideBar></RightSideBar>
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
