import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const footerSections = [
        {
            title: 'Company Info',
            links: [
                { text: 'About Us', href: '#' },
                { text: 'Contact Us', href: '#' },
                { text: 'Careers', href: '#' },
                { text: 'FAQs', href: '#' },
                { text: 'Terms of Service', href: '#' },
                { text: 'Privacy Policy', href: '#' },
            ],
        },
        {
            title: 'Help',
            links: [
                { text: 'Account Support', href: '#' },
                { text: 'Listing Events', href: '#' },
                { text: 'Event Ticketing', href: '#' },
                { text: 'Ticket Purchase Terms & Conditions', href: '#' },
            ],
        },
        {
            title: 'Categories',
            links: [
                { text: 'Concerts & Gigs', href: '#' },
                { text: 'Festivals & Lifestyle', href: '#' },
                { text: 'Business & Networking', href: '#' },
                { text: 'Food & Drinks', href: '#' },
                { text: 'Performing Arts', href: '#' },
                { text: 'Sports & Outdoors', href: '#' },
                { text: 'Exhibitions', href: '#' },
                { text: 'Workshops, Conferences & Classes', href: '#' },
            ],
        },
        {
            title: 'Follow Us',
            links: [
                { text: 'Facebook', href: '#' },
                { text: 'Instagram', href: '#' },
                { text: 'Twitter', href: '#' },
                { text: 'YouTube', href: '#' },
            ],
        },
    ];

    const appLinks = [
        { src: '/assets/play-store.svg', alt: 'Play Store', href: '#' },
        { src: '/assets/app-store.svg', alt: 'App Store', href: '#' },
    ];

    return (
        <footer className="px-5 bg-[#F3F3F3]">
            <div className="max-w-[1660px] w-full mx-auto">
                <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10 pt-12 pb-14">
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 xsm:mb-6">
                                {section.title}
                            </h2>
                            
                            <ul className="space-y-2 text-base xsm:text-lg font-normal">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href} className="hover:opacity-80 transition-all duration-300">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4 xsm:mb-6">Download The App</h2>
                        <div className="grid grid-cols-2 xsm:grid-cols-1 gap-4">
                            {appLinks.map((app, idx) => (
                                <Link key={idx} href={app.href}>
                                    <Image
                                        src={app.src}
                                        alt={app.alt}
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                        className="w-auto h-auto rounded-md"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#A9A9A980] flex items-center justify-center py-5">
                    <div className="flex items-center gap-2 text-[#A9A9A9] text-base xsm:text-lg">
                        <Image
                            src="/assets/copyright-icon.svg"
                            alt="Copyright Icon"
                            width={17}
                            height={17}
                            loading="lazy"
                        />
                        <span>2025 Destination Pass</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
