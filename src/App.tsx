import React from "react";
import Sidebar from "./pages/Sidebar";
import FormSection from "./pages/FormSection";

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar currentStep={1} />
      <FormSection />
    </div>
  );
};

export default App;
