import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

function Resume() {
  return (
    <>
      <div className="mt-10 flex justify-center items-center">
        <a
          href="https://drive.google.com/file/d/1WC_m4C_2TlISM_l_BTZEdPqy8Z_vOeGW/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-[16px] px-8 bg-[#FEB901] hover:bg-opacity-5 hover:text-yellow-400 text-black bg-opacity-100 text-2xl rounded-full border border-yellow-400 font-semibold duration-150"
        >
          <FaArrowDownLong />
          Resume
        </a>
      </div>
    </>
  );
}

export default Resume;
