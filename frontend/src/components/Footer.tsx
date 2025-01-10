import React from "react";

const Footer: React.FC = () => {
  return (
    
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">iOS</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Windows</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-4 bg-gray-700 rounded-lg md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025 <a href="#" className="hover:underline">SERVEM™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.033 4.033 0 0 0-.555 2.031 4.06 4.06 0 0 0 1.822 3.362A4.115 4.115 0 0 1 .8 5.9v.05A4.085 4.085 0 0 0 4.04 10a4.188 4.188 0 0 1-1.794.065 4.088 4.088 0 0 0 3.827 2.838A8.24 8.24 0 0 1 0 15.254a11.56 11.56 0 0 0 6.29 1.814A11.45 11.45 0 0 0 17.8 5.562v-.526a8.033 8.033 0 0 0 2.2-2.055Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0ZM8.818 15.946a.492.492 0 0 1-.328.012 4.94 4.94 0 0 1-2.48-1.731 6.96 6.96 0 0 1-1.375-3.615 7.248 7.248 0 0 1 2.087-5.193 2.118 2.118 0 0 1 .924-.5 2.037 2.037 0 0 1 1.063.054 3.325 3.325 0 0 1 1.6 1.25 4.7 4.7 0 0 1 .844 1.938c.028.13.028.26.028.39v.278c-.056.028-.084.056-.14.056a.227.227 0 0 1-.084-.028c-.74-.166-1.21-.6-1.683-1.124-.084-.1-.168-.195-.252-.29a.477.477 0 0 0-.168-.14.306.306 0 0 0-.364.084 3.473 3.473 0 0 0-.2.457c-.252.46-.364.949-.39 1.448a3.52 3.52 0 0 0 .7 2.147 2.294 2.294 0 0 0 1.876.908c.084 0 .14 0 .224-.028v.084a.605.605 0 0 0-.448.524c-.028.223-.028.445-.028.668v1.337Zm6.487-2.38a3.63 3.63 0 0 0-1.229-.815c-.056-.028-.084-.056-.112-.084a.496.496 0 0 1-.056-.056c-.084-.056-.14-.112-.224-.084a.277.277 0 0 0-.196.223 1.25 1.25 0 0 0 .28.504c.028.028.056.056.084.112a.224.224 0 0 1-.056.28c-.056.028-.112.056-.168.056-.224.028-.448 0-.672-.028-.028 0-.056-.028-.112-.028V9.916a1.563 1.563 0 0 0-.084-.476 3.054 3.054 0 0 0-.475-.895 1.536 1.536 0 0 0-.196-.224c-.056-.056-.112-.056-.168-.056-.168 0-.28.112-.364.252a2.242 2.242 0 0 0-.364.7c-.224.608-.364 1.224-.308 1.87.084.752.336 1.475.784 2.107a3.077 3.077 0 0 0 2.3 1.212c.252 0 .476-.084.728-.14.532-.14 1.064-.28 1.583-.448a.483.483 0 0 0 .196-.14c.056-.056.084-.112.084-.168.056-.112-.028-.252-.112-.336Z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M13.252 0a.25.25 0 0 1 .213.124l6.5 11.25a.25.25 0 0 1-.213.376H.248a.25.25 0 0 1-.213-.376L6.535.124A.25.25 0 0 1 6.748 0h6.504ZM6.714 9.999h6.572L10 3.867 6.714 9.999Zm.536 1.563H2.554L7.25 18.63l.004.007 4.1-7.073H7.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
 
  );
};

export default Footer;
