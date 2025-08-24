"use client"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastProps = {
  message: string;
};

export default function Toastalert({ message }: ToastProps) {
  const notify = () =>
    toast(message, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: "#0ea5e9", // sky-600
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      },
    });

  React.useEffect(() => {
    if (message) notify();
    // eslint-disable-next-line
  }, [message]);

  return (
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
}