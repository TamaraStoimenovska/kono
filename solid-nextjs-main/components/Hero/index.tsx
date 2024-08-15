"use client";
import Image from "next/image";
import { useState } from "react";


const Hero = () => {
  // const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46"
        style={{
          backgroundImage: `url('/images/backgrounds/heroBackground.png')`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Transform your business with <span className="text-[#AA1012]">LLM</span> and <span className="text-[#D35400]">Enterprise</span> AI Experts
              </h1>
              <p>
                We help you automate your business with specialized robots who can help your employees and customers with your data & knowledge.
                We're experts at automating Generative AI with tools like Langchain and ChatGPT Plugins.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho bg-gradient-to-r from-customOrange to-customRed"
                    >
                      Schedule a call
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-grey px-7.5 py-2.5 text-dark duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Contact Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/hero/heroImg.png"
                  alt="shape"
                  width={500}
                  height={5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
