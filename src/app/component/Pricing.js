import React from "react";

import Link from "next/link";
import Team from "./Team";
import * as Unicons from '@iconscout/react-unicons';

export default function Pricing() {
  const pricing = [
    {
      id: 1,
      title: "Basic",
      price: 10,
      user: 10,
      features: [
        "Complete documentation",
        "Working materials in Figma",
        "100GB cloud storage",
        "500 team members",
      ],
    },
    {
      id: 2,
      title: "Business",
      price: 99,
      user: 30,
      features: [
        "Complete documentation",
        "Working materials in Figma",
        "100GB cloud storage",
        "500 team members",
      ],
    },
    {
      id: 3,
      title: "Professional",
      price: 299,
      user: 100,
      features: [
        "Complete documentation",
        "Working materials in Figma",
        "100GB cloud storage",
        "500 team members",
      ],
    },
  ];

  return (
    <>
      {/* Start */}

      <section className="relative md:py-24 py-16" id="pricing">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              Pricing
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Comfortable Rates
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>

          <div className="flex flex-wrap">
            {pricing.map((item, key) => (
              <div
                className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-3 mt-8"
                key={key}
              >
                <div className="flex flex-col pt-8 pb-8 bg-zinc-50 hover:bg-white dark:bg-gray-800 dark:hover:bg-black rounded-md shadow shadow-slate-200 dark:shadow-slate-700 transition duration-500">
                  <div className="px-8 pb-8">
                    <h3 className="mb-6 text-lg md:text-xl font-semibold dark:text-white">
                      {item.title}
                    </h3>
                    <div className="mb-6 dark:text-white/70">
                      <span className="relative -top-5 text-2xl">$</span>
                      <span className="text-5xl font-semibold dark:text-white">
                        {item.price}
                      </span>
                      <span className="inline-block ms-1">/ month</span>
                    </div>
                    <p className="mb-6 text-slate-430 dark:text-slate-300">
                      Basic features for up to {item.user} users.
                    </p>
                    <Link
                      href="#"
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
                    >
                      Started Now
                    </Link>
                  </div>
                  <div className="border-b border-slate-200 dark:border-slate-700"></div>
                  <ul className="self-start px-8 pt-8">
                    {item.features.map((subitem, index) => (
                      <li
                        className="flex items-center my-1 text-slate-400 dark:text-slate-300"
                        key={index}
                      >
                        <Unicons.UilCheckCircle width="18px" className="text-lg text-green-600 me-1"/>
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center text-slate-400 dark:text-slate-300 mt-2">
            <span className="text-orange-600">*</span>No credit card required
          </div>
        </div>
      </section>

      <Team />
    </>
  );
}
