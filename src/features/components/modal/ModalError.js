import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalSuccess = ({ text, to, message }) => {
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
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <i class="ri-close-line ri-2x text-red-500"></i>
            </div>
            <div className="mt-2 text-center">
              <h4 className="text-lg font-medium text-gray-800">
                Failed to {text}!
              </h4>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
