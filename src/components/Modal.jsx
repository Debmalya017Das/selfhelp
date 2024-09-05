import React from 'react';

export const Modal = ({ isOpen, onClose, title, message, type }) => {
  if (!isOpen) return null;

  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className={`mt-3 text-center ${bgColor} p-4 rounded-md`}>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white">
            <svg className={`h-6 w-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {type === 'success' 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              }
            </svg>
          </div>
          <h3 className={`text-lg leading-6 font-medium ${textColor}`}>{title}</h3>
          <div className="mt-2 px-7 py-3">
            <p className={`text-sm ${textColor}`}>{message}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className={`px-4 py-2 ${type === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white text-base font-medium rounded-md w-full shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${type === 'success' ? 'focus:ring-green-500' : 'focus:ring-red-500'}`}
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

