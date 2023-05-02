import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalSuccess = ({ text, to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate(to, { replace: true });
      window.location.reload();
    }, 2000); // Waktu yang ditentukan dalam milidetik (ms)

    return () => {
      clearTimeout(redirectTimeout); // Membersihkan timer saat komponen tidak lagi digunakan
    };
  }, [navigate]);
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
      <div className="flex  items-center min-h-screen px-4 py-8">
        <div className="relative max-w-md px-8 py-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-2 text-center">
              <h4 className="text-lg font-medium text-gray-800">
                Successfully {text}!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
