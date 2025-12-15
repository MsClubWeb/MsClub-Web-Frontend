"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-background border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Club Info */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div>
                                <h3 className="font-bold text-lg">MS Club</h3>
                                <p className="text-xs text-muted-foreground">Uva Wellassa University</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 max-w-sm">
                            Empowering students through Microsoft technologies.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-2 flex-wrap">
                            <Link
                                href="https://www.facebook.com/share/1ChTtJGJUV/?mibextid=wwXIfr"
                                className="w-8 h-8 rounded bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={16} />
                            </Link>
                            <Link
                                href="https://www.instagram.com/msclubuwu?igsh=bjg1ODR5MjBkMTRu"
                                className="w-8 h-8 rounded bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} />
                            </Link>
                            <Link
                                href="https://youtube.com/@msclubofuwu?si=L4lVs1H6rViqhBeS"
                                className="w-8 h-8 rounded bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-600 transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube size={16} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/ms-club-of-uva-wellassa-university/"
                                className="w-8 h-8 rounded bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/events", label: "Events" },
                                { href: "/board", label: "Board" },
                                { href: "/blog", label: "Blog" },
                                { href: "/about", label: "About" },
                                { href: "/contact", label: "Contact" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-blue-600 transition-colors py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                <a
                                    href="mailto:info@msclub.edu"
                                    className="text-muted-foreground hover:text-blue-600 transition-colors break-all"
                                >
                                    ms_club@std.uwu.ac.lk
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                <p className="text-muted-foreground">
                                    +94 76 557 6407
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <p className="text-muted-foreground">
                                    Uva Wellassa University
                                    <br />
                                    Badulla, Sri Lanka
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-muted-foreground text-center sm:text-left">
                            © {new Date().getFullYear()} Microsoft Learn Student Club of UWU. All rights reserved. •{" "}
                            <a
                                href="/developers"
                                className="text-red-500 hover:text-red-600 transition-colors"
                            >
                                Meet the Devs
                            </a>
                        </p>

                        {/* Logos */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white shadow-sm border p-1.5">
                                <Image
                                    src="https://res.cloudinary.com/drkjmdgzs/image/upload/v1752344406/mlsa_z15rmu.png"
                                    alt="MLSA"
                                    width={36}
                                    height={36}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white shadow-sm border p-1.5">
                                <Image
                                    src="https://res.cloudinary.com/drkjmdgzs/image/upload/v1752345916/ms_club_abg3js.png"
                                    alt="MS Club UWU"
                                    width={36}
                                    height={36}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}