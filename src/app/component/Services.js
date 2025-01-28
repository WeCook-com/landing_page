import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons';

export default function Services() {
  const team = [
    {
      title: "Grow Your Business",
      Icon: Unicons.UilAdjustCircle ,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Drive More Sales",
      Icon: Unicons.UilCircuit ,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Handled By Expert",
      Icon:Unicons.UilFire ,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Discussion For Idea",
      Icon: Unicons.UilShoppingBasket ,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Increase Conversion",
      Icon: Unicons.UilFlower ,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Sales Growth Idea",
      Icon: Unicons.UilFlipH ,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
  ];

  return (
    <>
      {/* Start */}
      <section id="features" className="relative md:py-24 py-16">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
            <div>
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                What We Do ?
              </h6>
              <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white md:mb-0">
                Perfect Solution For Your <br /> Business
              </h3>
            </div>

            <div>
              <p className="text-slate-400 dark:text-slate-300 max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS html page.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {team.map((item, key) => { 
             const Icon = item.Icon
             return(
              <div
                key={key}
                className={`features p-6 ${
                  key % 2 === 0
                    ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800"
                    : "shadow-xl shadow-slate-100 dark:shadow-slate-800"
                } transition duration-500 rounded-3xl mt-8`}
              >
                <div className="w-20 h-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                  <Icon  width="30px" height="30px"/>
                </div>

                <div className="content mt-7">
                  <Link
                    href="#"
                    className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium"
                  >
                    {item.title}
                  </Link>
                  <p className="text-slate-400 mt-3">{item.subtext}</p>

                  <Link href="#" className="mt-5 inline-flex  btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">
                    <span>
                       Read More
                    </span>
                      <Unicons.UilArrowRight width="16px"/>
                  </Link>
                </div>
              </div>
            )})}
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              Work Process
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Digital System For Our Business
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/svg/design-thinking.svg"}
                        className="h-64 w-64"
                        alt=""
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Strategy
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        The generated injected humour, or non-characteristic
                        words etc. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec quam
                        felis,
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Development
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        The generated injected humour, or non-characteristic
                        words etc. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec quam
                        felis,
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <Image
                        src={"/images/svg/coding.svg"}
                        className="h-64 w-64"
                        alt=""
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/svg/office-desk.svg"}
                        className="h-64 w-64"
                        alt=""
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Launch
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        The generated injected humour, or non-characteristic
                        words etc. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec quam
                        felis,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
