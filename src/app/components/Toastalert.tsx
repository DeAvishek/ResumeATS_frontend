"use client"
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  type toastalert={
    message:string
  }
  export default function Toast({message}:toastalert){
    const notify = () => toast(message);

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }