import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Unicons from '@iconscout/react-unicons';

export default function Footer() {
    return (
        <>
            {/*  Start Footer  */}
            <footer className="py-8 bg-slate-800 dark:bg-gray-900">
                <div className="container">
                    <div className="grid md:grid-cols-12 items-center">
                        <div className="md:col-span-3">
                            <div href="#" className="logo-footer">
                                <Image
                                    src={'/images/logo-light.png'}
                                    className="md:ms-0 mx-auto"
                                    alt=""
                                    width={105}
                                    height={24}
                                />
                            </div>
                        </div>

                        <div className="md:col-span-5 md:mt-0 mt-8">
                            <div className="text-center">
                                <p className="text-gray-400">
                                    © {new Date().getFullYear()} KoaCook. Design & Develop with{' '}
                                    <i className="mdi mdi-heart text-[#2563eb]"></i> by{' '}
                                    <Link
                                        href="https://jameskaois.com/"
                                        target="_blank"
                                        className="text-reset"
                                    >
                                        James Cao
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-4 md:mt-0 mt-8">
                            <ul className="list-none foot-icon md:text-end text-center">
                                {/* <li className="inline ms-1">
                  <Link
                    href="https://1.envato.market/upwind-next"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-[#3b82f6] bg-slate-800 dark:bg-gray-900 hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] text-gray-400 hover:text-white"
                  >
                     <Unicons.UilShoppingCart width="17px" />
                  </Link>
                </li> */}
                                <li className="inline ms-1">
                                    <Link
                                        href="https://dribbble.com/shreethemes"
                                        target="_blank"
                                        className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-[#3b82f6] bg-slate-800 dark:bg-gray-900 hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] text-gray-400 hover:text-white"
                                    >
                                        <Unicons.UilLinkedin width="17px" />
                                    </Link>
                                </li>
                                <li className="inline ms-1">
                                    <Link
                                        href="https://www.behance.net/shreethemes"
                                        target="_blank"
                                        className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-[#3b82f6] bg-slate-800 dark:bg-gray-900 hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] text-gray-400 hover:text-white"
                                    >
                                        <Unicons.UilTwitter width="17px" />
                                    </Link>
                                </li>
                                <li className="inline ms-1">
                                    <Link
                                        href="http://linkedin.com/company/shreethemes"
                                        target="_blank"
                                        className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-[#3b82f6] bg-slate-800 dark:bg-gray-900 hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] text-gray-400 hover:text-white"
                                    >
                                        <Unicons.UilInstagram width="17px" />
                                    </Link>
                                </li>
                                <li className="inline ms-1">
                                    <Link
                                        href="https://www.facebook.com/shreethemes"
                                        target="_blank"
                                        className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-[#3b82f6] bg-slate-800 dark:bg-gray-900 hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] text-gray-400 hover:text-white"
                                    >
                                        <Unicons.UilFacebookF width="17px" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- End Footer --> */}

            {/* <!-- Back to top --> */}
            <Link
                href="home"
                id="back-to-top"
                className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-[#3b82f6] text-white leading-9"
            >
                <i className="uil uil-arrow-up"></i>
            </Link>
            {/* <!-- Back to top --> */}
        </>
    );
}
