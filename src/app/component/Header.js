'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const sections = ['home', 'about', 'services', 'review', 'pricing', 'blog', 'contact'];

const Header = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setMenu] = useState(true);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.35, // 35% of the section must be visible to trigger
        };

        const observerCallback = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

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
                        {sections.map(section => (
                            <li
                                key={section}
                                className={`nav-item ${activeSection === section ? 'active' : ''}`}
                            >
                                <Link href={`/#${section}`} className="nav-link">
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
