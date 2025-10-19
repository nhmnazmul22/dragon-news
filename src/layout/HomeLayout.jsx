import { Outlet } from "react-router";
import RootHeader from "../components/Headers/RootHeader";

const HomeLayout = () => {
  return (
    <>
      <header>
        <RootHeader></RootHeader>
      </header>
      <main>
        {/* Left sidebar */}
        <section className="">left sidebar</section>
        {/* Main content */}
        <section>
          <Outlet></Outlet>
        </section>
        {/* Right sidebar */}
        <section className="">right sidebar</section>
      </main>
    </>
  );
};

export default HomeLayout;
