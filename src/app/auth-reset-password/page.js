"use client"; // This is a client component 👈🏽
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Switcher from "../component/Switcher";

import "../assets/css/tailwind.css";
import "../assets/scss/tailwind.scss";

import "../assets/scss/icons.scss";

/**
 * Reset Password Component
 */
export default function ResetPassword() {
    return (
        <>
            <section
                 style={{ backgroundImage: `url(/images/bg/auth.jpg)` }}
                className="position-relative bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-90"></div>
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="lg:col-span-4">
                            <div className="flex flex-col min-h-screen md:px-12 py-12 px-3">

                                <div className="text-center mx-auto">
                                <Link href="/"><Image src={"/images/logo-light.png"} width={105} height={24} alt=""/></Link>
                                </div>
                                <div className=" my-auto">
                                    <div className="mt-5 w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-slate-800">
                                        <div className="grid grid-cols-1">
                                            <h5 className="mb-8 text-xl dark:text-white font-semibold text-center">Reset Your Password</h5>
                                            <p className="text-slate-400 dark:text-slate-300 mb-6 text-center">Please enter your email address. You will receive a link to create a new password via email.</p>
                                            <form className="ltr:text-left rtl:text-right">
                                                <div className="grid grid-cols-1">
                                                    <div className="mb-4">
                                                        <label className="dark:text-white" htmlFor="LoginEmail">Email Address:</label>
                                                        <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com" />
                                                    </div>

                                                    <div className="mb-4">
                                                        <Link href="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Send</Link>
                                                    </div>

                                                    <div className="text-center">
                                                        <span className="text-slate-400 dark:text-slate-300 me-2">Remember your password ? </span> <Link href="/auth-login" className="text-dark dark:text-white fw-bold">Sign in</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Start Footer --> */}
                                <div className="text-center">
                                    <p className="text-gray-400">© {new Date().getFullYear()} Upwind. Design & Develop with <i className="mdi mdi-heart text-orange-700"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                </div>
                                {/* <!-- End Footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Switcher section */}
            <Switcher />
        </>
    )
}