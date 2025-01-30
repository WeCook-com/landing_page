'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setMenu] = useState(true);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if (window && typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                setScroll(window.scrollY > 50);
            });
        }
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenu(!isOpen);
    };

    return (
        <nav
            className={`${scroll ? 'is-sticky' : ''} ${
                pathname.includes('/blogs/') ? 'in-blog' : ''
            } navbar`}
            id="navbar"
        >
            <div className="container flex flex-wrap items-center justify-end">
                <Link className="navbar-brand" href="/">
                    {!pathname.includes('/blogs/') ? (
                        <>
                            <span className="inline-block dark:hidden">
                                <Image src="/images/logo-dark.png" alt="" width={100} height={10} />
                            </span>
                            <span className="hidden dark:inline-block">
                                <Image
                                    src="/images/logo-light.png"
                                    alt=""
                                    height={10}
                                    width={100}
                                />
                            </span>
                        </>
                    ) : (
                        <>
                            {scroll ? (
                                <>
                                    <span className="inline-block dark:hidden">
                                        <Image
                                            src="/images/logo-dark.png"
                                            alt=""
                                            width={100}
                                            height={10}
                                        />
                                    </span>
                                    <span className="hidden dark:inline-block">
                                        <Image
                                            src="/images/logo-light.png"
                                            alt=""
                                            height={10}
                                            width={100}
                                        />
                                    </span>
                                </>
                            ) : (
                                <span>
                                    <Image
                                        src="/images/logo-light.png"
                                        alt=""
                                        width={100}
                                        height={10}
                                    />
                                </span>
                            )}
                        </>
                    )}
                </Link>

                <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                    <ul className="list-none menu-social mb-0">
                        <li className="inline ms-1">
                            <a className="btn btn-sm btn-icon p-1.5  rounded-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white">
                                <Unicons.UilLinkedin />
                            </a>
                        </li>
                        <li className="inline ms-1">
                            <a className="btn btn-sm btn-icon  p-1.5 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white">
                                <Unicons.UilTwitter />
                            </a>
                        </li>
                        <li className="inline ms-1">
                            <a className="btn btn-sm btn-icon p-1.5  rounded-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white">
                                <Unicons.UilInstagram />
                            </a>
                        </li>
                        <li className="inline ms-1">
                            <a className="btn btn-sm btn-icon p-1.5  rounded-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white">
                                <Unicons.UilFacebookF />
                            </a>
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
                        isOpen === true ? 'hidden' : 'block'
                    } navigation lg_992:order-1 lg_992:flex`}
                    id="menu-collapse"
                >
                    <ul className="navbar-nav" id="navbar-navlist">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#about" className="nav-link">
                                About us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#services" className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#review" className="nav-link">
                                Review
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#pricing" className="nav-link">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#blog" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#contact" className="nav-link">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
