import React from "react";

const Wrapper = ({ children }) => {
  return (
    <>
      <div className="font-rubik text-base text-slate-900 dark:text-white bg-white dark:bg-slate-900">
         {children}
      </div>
    </>
  );
};

export default Wrapper;
