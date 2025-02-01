'use client';

import * as Unicons from '@iconscout/react-unicons';
import { useEffect } from 'react';

export default function Switcher() {
    const changeMode = mode => {
        switch (mode) {
            case 'mode':
                if (document.documentElement.className.includes('dark')) {
                    document.documentElement.className = 'light';
                    localStorage.setItem('theme', 'light');
                } else {
                    document.documentElement.className = 'dark';
                    localStorage.setItem('theme', 'dark');
                }
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            document.documentElement.className = 'dark'; // Apply saved theme
        } else if (savedTheme === 'light') {
            document.documentElement.className = 'light'; // Default to light mode
        }
    }, []);

    return (
        <>
            {/* <!-- Switcher --> */}
            <div className="fixed top-1/4 -right-2 z-3">
                <span className="relative inline-block rotate-90">
                    <input
                        type="checkbox"
                        className="checkbox opacity-0 absolute"
                        id="chk"
                        onClick={event => changeMode('mode', event)}
                    />
                    <label
                        className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
                        htmlFor="chk"
                    >
                        <Unicons.UilMoon width="20px" className=" text-[#a3cfff]" />
                        <Unicons.UilSun width="20px" className=" text-[#a3cfff]" />
                        <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                    </label>
                </span>
            </div>
        </>
    );
}
