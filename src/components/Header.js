import logo from "../logo.png";
import "./css/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        <header className="relative bg-white ">
          <p className="flex h-10 items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>
          <nav
            aria-label="Top"
            className="px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:bg-gray-900 dark:border-neutral-950"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex h-16 items-center">
                <div className="ml-4 flex lg:ml-0">
                  <Link to="/" className="flex items-center space-x-2">
                    <img className="h-8 w-auto" src={logo} alt="" />
                    <div className="logo-text">
                      Food <span className="logo-text-second">Box</span>
                    </div>
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8 ">
                    <Link
                      to="/"
                      className="flex items-center text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600"
                    >
                      Home
                    </Link>
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600"
                    >
                      Restaurants
                    </a>
                    <Link
                      to="/about"
                      className="flex items-center text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600"
                    >
                      Sign in
                    </a>
                    <span
                      className="h-6 w-px bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700  dark:text-white hover:text-lime-600"
                    >
                      Create account
                    </a>
                  </div>
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-700 hover:text-lime-600 dark:text-white hover:text-lime-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 dark:text-white hover:text-lime-600">
                        0
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
