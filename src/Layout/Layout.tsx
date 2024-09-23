import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import FormSection from "./FormSection";

export default function layout() {
  return (
    <>
      <Header />
      <div className="flex ">
        {/* <FormSection /> */}
        <Outlet />
      </div>
    </>
  );
}
