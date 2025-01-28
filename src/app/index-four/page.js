"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import * as Unicons from "@iconscout/react-unicons";

import ModalVideo from "react-modal-video";

import Services from "../component/Services";
import About from "../component/About";
import Wrapper from "../component/Wrapper";

import "../assets/css/tailwind.css";
import "../assets/scss/tailwind.scss";

import "../assets/scss/icons.scss";
import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Portfolio from "../component/Portfolio";
import Review from "../component/Testimonial";
import Switcher from "../component/Switcher";

function Index_three() {
  const [isOpen, setMenu] = useState(true);
  const [videoModal, setModal] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", ()=>{
        setScroll(window.scrollY > 50)
      });
    }
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <div>
          <nav className={`${scroll ? "is-sticky" : ""} navbar`} id="navbar">
            <div className="container flex flex-wrap items-center justify-end">
              <Link className="navbar-brand" href="index.html">
                <span className="inline-block dark:hidden">
                  <Image
                    src={"/images/logo-dark.png"}
                    className="inline-block dark:hidden"
                    alt=""
                    width="100"
                    height={10}
                  />
                  <Image
                    src={"/images/logo-light.png"}
                    className="hidden dark:inline-block"
                    alt=""
                    width="100"
                    height={10}
                  />
                </span>
                <Image
                  src={"/images/logo-light.png"}
                  className="hidden dark:inline-block"
                  alt=""
                  height={10}
                  width="100"
                />
              </Link>

              <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                <ul className="list-none menu-social mb-0">
                  <li className="inline ms-1">
                    <Link
                      to="#"
                      className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"
                    >
                      <Unicons.UilGithub />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    <Link
                      to="#"
                      className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"
                    >
                      <Unicons.UilTwitter />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    <Link
                      to="#"
                      className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"
                    >
                      <Unicons.UilInstagram />
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Navigation Menu</span>
                  <i className="mdi mdi-menu mdi-24px"></i>
                </button>
              </div>

              <div
                className={`${
                  isOpen === true ? "hidden" : "block"
                } navigation lg_992:order-1 lg_992:flex`}
                id="menu-collapse"
              >
                <ul className="navbar-nav" id="navbar-navlist">
                  <Link
                    className="nav-item"
                    to="home"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Home</span>
                  </Link>
                  <Link
                    className="nav-item"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="about"
                  >
                    <span className="nav-link">About us</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="features"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Services</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="portfolio"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Portfolio</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="testi"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Review</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="pricing"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Pricing</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="blog"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Blog</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="contact"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Contact us</span>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
          <section
            className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-gradient-to-b from-orange-600/20 dark:from-orange-600/40 via-orange-600/10 dark:via-orange-600/20 to-gray-50 dark:bg-slate-800"
            id="home"
          >
            <div className="container">
              <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-7">
                  <div className="md:me-6 md:mb-20">
                    <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
                      Business Growth <br /> Makes Your Company
                    </h4>
                    <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">
                      Launch your campaign and benefit from our expertise on
                      designing and managing conversion centered Tailwind CSS
                      html page.
                    </p>

                    <div className="relative mt-10">
                      <Link
                        to="#"
                        className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1"
                      >
                        Get Started
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setModal(true)}
                        data-type="youtube"
                        data-id="S_CGed6E610"
                        className="btn btn-icon btn-lg bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full lightbox"
                      >
                        <i className="mdi mdi-play text-xl align-middle"></i>
                      </Link>
                      <small className="font-medium text-sm uppercase align-middle ms-2 dark:text-white/70">
                        Watch Now
                      </small>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 mt-8 md:mt-0">
                  <Image
                    src="/images/hero4.png"
                    alt=""
                    width="500"
                    height="700"
                  />
                </div>
              </div>
            </div>
          </section>

          <ModalVideo
            channel="youtube"
            isOpen={videoModal}
            videoId="S_CGed6E610"
            onClose={() => setModal(false)}
          />
          <div className="relative">
            <div className="shape overflow-hidden text-gray-50 dark:text-slate-800">
              <svg
                viewBox="0 0 2880 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M720 125L2160 0H2880V250H0V125H720Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          {/* About section */}
          <About />

          {/* Service section */}
          <Services />

          {/* Portfolio section */}
          <Portfolio />

          {/* Review section */}
          <Review />

          {/* Pricing section */}
          <Pricing />

          {/* Blog section */}
          <Blog />

          {/* Contact section */}
          <Contact />

          {/* Footer section */}
          <Footer />

          {/* Switcher section */}
          <Switcher />
        </div>
      </Wrapper>
    </>
  );
}

export default Index_three;
