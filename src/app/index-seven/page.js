"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import * as Unicons from "@iconscout/react-unicons";

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

function Home2() {
  const [isOpen, setMenu] = useState(true);
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
                    className="l-dark"
                    alt=""
                    width="105"
                    height={24}
                  />
                  <Image
                    src={"/images/logo-light.png"}
                    className="l-light"
                    alt=""
                    width="105"
                    height={24}
                  />
                </span>
                <Image
                  src={"/images/logo-light.png"}
                  className="hidden dark:inline-block"
                  alt=""
                  width="105"
                  height={24}
                />
              </Link>

              <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                <ul className="list-none menu-social mb-0">
                  <li className="inline ms-1">
                    <Link to="#">
                      <span className="login-btn-primary">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                          <Unicons.UilGithub />
                        </span>
                      </span>
                      <span className="login-btn-light">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                          <i className="uil uil-github"></i>
                          <Unicons.UilGithub />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    <Link to="#">
                      <span className="login-btn-primary">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                          <Unicons.UilTwitter />
                        </span>
                      </span>
                      <span className="login-btn-light">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                          <Unicons.UilTwitter />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    <Link to="#">
                      <span className="login-btn-primary">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                          <Unicons.UilInstagram />
                        </span>
                      </span>
                      <span className="login-btn-light">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                          <Unicons.UilInstagram />
                        </span>
                      </span>
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
                <ul className="navbar-nav nav-light" id="navbar-navlist">
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
            style={{ backgroundImage: `url(/images/bg/5.jpg)` }}
            className="py-36 lg:py-64 w-full table relative bg-no-repeat bg-center bg-cover"
            id="home"
          >
            <div className="container relative z-1">
              <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                  Everything you need to build <br /> a great company
                </h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered Tailwind CSS html
                  page.
                </p>

                <div className="relative mt-10">
                  <Link
                    to="#"
                    className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute lg:w-1/2 md:w-4/6 w-full h-full bg-gradient-to-t to-orange-600 from-orange-400 md:opacity-100 opacity-80 top-0"></div>
          </section>

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

export default Home2;
