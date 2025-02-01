'use client';

import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required.';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Enter a valid email.';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message cannot be empty.';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', service: '', message: '' });
                setErrors({});
            } else {
                setErrors({ apiError: data.message });
            }
        } catch (err) {
            setErrors({ apiError: 'Something went wrong, please try again.' });
        }

        setLoading(false);
    };

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
                            Get In Touch!
                        </h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            We’re here to help you every step of the way.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
                        <div className="lg:col-span-8">
                            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="Name:"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-input"
                                                placeholder="Email:"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <select
                                                name="service"
                                                className="w-full h-10 px-2 py-2 rounded-[4px] border border-solid border-[rgb(229,231,235)] dark:border-[rgb(31_41_55)] text-[#9ca3af] bg-transparent"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>
                                                    Choose the service you're interested in:
                                                </option>
                                                <option value="order-management">
                                                    Order Management
                                                </option>
                                                <option value="table-reservations">
                                                    Table Reservations
                                                </option>
                                                <option value="inventory-tracking">
                                                    Inventory Tracking
                                                </option>
                                                <option value="staff-scheduling">
                                                    Staff Scheduling
                                                </option>
                                                <option value="customer-insights">
                                                    Customer Insights
                                                </option>
                                                <option value="multi-location-management">
                                                    Multi-Location Management
                                                </option>
                                            </select>
                                        </div>

                                        <div className="mb-5">
                                            <textarea
                                                name="message"
                                                id="message"
                                                className="form-input textarea h-28"
                                                placeholder="Message:"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            {errors.message && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        id="submit"
                                        name="send"
                                        className="btn disabled:opacity-70 disabled:pointer-events-none disabled:cursor-progress bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md h-11 justify-center flex items-center"
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {success && (
                                        <p className="text-green-600 mt-2">
                                            Send message successfully.
                                        </p>
                                    )}
                                    {errors.apiError && (
                                        <p className="text-red-600 mt-2">{errors.apiError}</p>
                                    )}
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="lg:ms-8">
                                <div className="flex">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilEnvelope className="rounded text-2xl dark:text-white mb-0" />
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">
                                            Email
                                        </h5>
                                        <a
                                            href="mailto:contact@koacook.com"
                                            className="text-slate-400"
                                        >
                                            contact@koacook.com
                                        </a>
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
