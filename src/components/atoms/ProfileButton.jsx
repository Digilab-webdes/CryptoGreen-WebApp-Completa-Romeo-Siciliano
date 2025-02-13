import { Link } from 'react-router-dom';

export default function ProfileButton({ children, to }) {
  return (
    <div className="w-full flex flex-col justify-around items-center">
        <button className="w-full">
        <Link
            to={to}
          className="w-102 bg-gray-400 text-white py-4 px-6 rounded-md flex items-center justify-between shadow-md transition hover:bg-gray-500"
        >
            <span className="text-lg font-medium">{children}</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </button>
    </div>
  );
}