"use client";
import React from "react";
import SingleTool from "./SingleTool";
import brandData from "./toolsData";

const Tools = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className=" py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <p className="text-center pb-4">TOOLS WE WORK WITH</p>
          <div className="grid grid-cols-4 items-center justify-center">
            {brandData.map((tool) => (
              <SingleTool tool={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Tools;
