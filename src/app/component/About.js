import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="about"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={"/images/about.jpg"}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link
                    to="#"
                    onClick={() => setOpen(true)}
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600 cursor-pointer"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                  Who We Are ?
                </h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  Our Company Story
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  Start working with Upwind that can provide everything you need
                  to generate awareness, drive traffic, connect. Dummy text is
                  text that is used in the publishing industry or by web
                  designers to occupy the space which will later be filled with
                  real content. This is required when, for example, the final
                  text is not yet available. Dummy texts have been in use by
                  typesetters since the 16th century.
                </p>

                <div className="relative mt-10">
                  <Link
                    href="#portfolio"
                    className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="S_CGed6E610"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
