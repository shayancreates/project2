"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black p-10 text-gray-300">
      <div className="container mx-auto flex flex-wrap justify-between gap-10 md:flex-row">
        {/* Brand Section */}
        <aside className="flex flex-col gap-4 md:w-1/4">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                fill="currentColor"
              />
            </svg>
            <span>Guider</span>
          </div>
          <p>Gate to Success</p>
        </aside>

        {/* Navigation Sections */}
        <nav className="flex flex-col gap-2 md:w-1/5">
          <h6 className="text-lg font-semibold text-white">Services</h6>
          <Link href="#" className="hover:text-blue-400">
            Branding
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Design
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Marketing
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Advertisement
          </Link>
        </nav>

        <nav className="flex flex-col gap-2 md:w-1/5">
          <h6 className="text-lg font-semibold text-white">Company</h6>
          <Link href="#" className="hover:text-blue-400">
            About us
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Contact
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Jobs
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Press kit
          </Link>
        </nav>

        <nav className="flex flex-col gap-2 md:w-1/5">
          <h6 className="text-lg font-semibold text-white">Legal</h6>
          <Link href="#" className="hover:text-blue-400">
            Terms of use
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Privacy policy
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Cookie policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
