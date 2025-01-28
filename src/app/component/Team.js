import React from "react";
import * as Unicons from '@iconscout/react-unicons';
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Calvin Carlo",
      profile: "/images/client/01.jpg",
      designation: "Designer",
    },
    {
      name: "Aliana Rosy",
      profile: "/images/client/02.jpg",
      designation: "Designer",
    },
    {
      name: "Sofia Razaq",
      profile: "/images/client/03.jpg",
      designation: "Designer",
    },
    {
      name: "Micheal Carlo",
      profile: "/images/client/04.jpg",
      designation: "Designer",
    },
  ];

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="team"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              Our Team
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Creative Minds
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative rounded-md shadow-lg overflow-hidden group"
              >
                <Image
                  src={member.profile}
                  className="group-hover:origin-center group-hover:scale-105 transition duration-500"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 z-0 transition duration-500"></div>
                <ul className="list-none absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 mb-0 transition-all duration-500">
                  <li className="mb-1">
                    <Link
                      href="#"
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon btn-sm rounded-full"
                    >
                      <Unicons.UilFacebookF width="17px" />
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="#"
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon btn-sm rounded-full"
                    >
                      <Unicons.UilInstagram width="17px"/>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="#"
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon btn-sm rounded-full"
                    >
                       <Unicons.UilTwitter width="17px"/>
                    </Link>
                  </li>
                </ul>

                <div className="content absolute start-4 end-4 bottom-4 bg-white dark:bg-slate-900 opacity-0 group-hover:opacity-100 p-4 rounded-md text-center transition-all duration-500">
                  <Link
                    href="#"
                    className="h5 text-md dark:text-white hover:text-orange-600 dark:hover:text-orange-600 font-medium"
                  >
                    {member.name}
                  </Link>
                  <h6 className="text-slate-400 dark:text-slate-300 mb-0 font-light">
                    {member.designation}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="counter-box position-relative text-center">
              <h3 className="font-medium text-3xl mb-2 dark:text-white">
                <CountUp
                  start={3}
                  className="counter-value"
                  end={40}
                  duration={2.75}
                />
                +
              </h3>
              <span className="counter-head text-slate-400 dark:text-slate-300">
                Projects
              </span>
            </div>

            <div className="counter-box position-relative text-center">
              <h3 className="font-medium text-3xl mb-2 dark:text-white">
                <CountUp
                  start={1}
                  className="counter-value"
                  end={200}
                  duration={2.75}
                />
                +
              </h3>
              <span className="counter-head text-slate-400 dark:text-slate-300">
                Clients
              </span>
            </div>

            <div className="counter-box position-relative text-center">
              <h3 className="font-medium text-3xl mb-2 dark:text-white">
                <CountUp
                  start={200}
                  className="counter-value"
                  end={457}
                  duration={2.75}
                />
                K
              </h3>
              <span className="counter-head text-slate-400 dark:text-slate-300">
                Members
              </span>
            </div>

            <div className="counter-box position-relative text-center">
              <h3 className="font-medium text-3xl mb-2 dark:text-white">
                <CountUp
                  start={100}
                  className="counter-value"
                  end={150}
                  duration={2.75}
                />
                +
              </h3>
              <span className="counter-head text-slate-400 dark:text-slate-300">
                Employee
              </span>
            </div>
          </div>
        </div>

        <div className="container mt-12">
          <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-8">
            <div className="mx-auto">
              <Image
                src={"/images/client/amazon.svg"}
                className="h-[25px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>

            <div className="mx-auto">
              <Image
                src={"/images/client/google.svg"}
                className="h-[25px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>

            <div className="mx-auto">
              <Image
                src={"/images/client/lenovo.svg"}
                className="h-[25px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>

            <div className="mx-auto">
              <Image
                src={"/images/client/paypal.svg"}
                className="h-[25px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>

            <div className="mx-auto">
              <Image
                src={"/images/client/shopify.svg"}
                className="h-[25px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>

            <div className="mx-auto">
              <Image
                src={"/images/client/spotify.svg"}
                className="h-[25px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>
          </div>
        </div>
        {/* <!--end container--> */}
      </section>
    </>
  );
}
