"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  Home,
  Search,
  Library,
  Video,
  User,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#fbf8f3] border-b border-[#e6e1d8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="text-green-800" />
            <span>BookWorm</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavItem icon={<Home size={18} />} label="Home" active />
            <NavItem icon={<Search size={18} />} label="Browse Books" />
            <NavItem icon={<Library size={18} />} label="My Library" />
            <NavItem icon={<Video size={18} />} label="Tutorials" />
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <User size={18} />
              Login
            </Link>

            <Link
              href="/register"
              className="bg-green-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#fbf8f3] border-t border-[#e6e1d8]">
          <div className="flex flex-col gap-4 px-6 py-4">
            <MobileItem label="Home" />
            <MobileItem label="Browse Books" />
            <MobileItem label="My Library" />
            <MobileItem label="Tutorials" />
            <Link href="/login" className="font-medium">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-green-900 text-white text-center py-2 rounded-full font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* ---------- Components ---------- */

type NavItemProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

const NavItem = ({ label, icon, active }: NavItemProps) => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
        ${
          active
            ? "bg-[#efe9df]"
            : "hover:bg-[#efe9df]"
        }`}
    >
      {icon}
      {label}
    </Link>
  );
};

const MobileItem = ({ label }: { label: string }) => {
  return (
    <Link
      href="/"
      className="text-sm font-medium hover:underline"
    >
      {label}
    </Link>
  );
};
