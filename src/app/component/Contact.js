import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-scroll';

export default function Contact() {
    return (
        <>
            {/* Start */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                            Contact us
                        </h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                            Get In Touch !
                        </h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            Launch your campaign and benefit from our expertise on designing and
                            managing conversion centered Tailwind CSS html page.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
                        <div className="lg:col-span-8">
                            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="Name :"
                                            />
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-input"
                                                placeholder="Email :"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <input
                                                name="subject"
                                                id="subject"
                                                className="form-input"
                                                placeholder="Subject :"
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <textarea
                                                name="comments"
                                                id="comments"
                                                className="form-input textarea h-28"
                                                placeholder="Message :"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        id="submit"
                                        name="send"
                                        className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md h-11 justify-center flex items-center"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="lg:ms-8">
                                <div className="flex">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilPhone className="rounded text-2xl dark:text-white mb-0" />
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">
                                            Phone
                                        </h5>
                                        <Link href="tel:+152534-468-854" className="text-slate-400">
                                            +152 534-468-854
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilEnvelope className="rounded text-2xl dark:text-white mb-0" />
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">
                                            Email
                                        </h5>
                                        <Link
                                            href="mailto:contact@example.com"
                                            className="text-slate-400"
                                        >
                                            contact@example.com
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilMapMarker className="rounded text-2xl dark:text-white mb-0" />
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">
                                            Location
                                        </h5>
                                        <p className="text-slate-400 mb-2">
                                            C/54 Northwest Freeway, Suite 558, Houston, USA 485
                                        </p>
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
