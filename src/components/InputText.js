import React from "react";

export default function InputText({ label, type = "text", ok, ...rest }) {
  return (
    <div className="relative">
      <label className="absolute top-3 right-3 font-bold text-[#3F92BC]">
        {label}
      </label>
      <input
        className={`w-full h-12 pr-28  pl-[40px] py-1.5 rounded-sm text-black outline outline-[#F2F2F2] outline-2 focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-[black] text-12 text-right `}
        autoComplete={"off"}
        type={type}
        {...rest}
      />
      <div className="absolute top-3 left-3 ">
      {ok ? (<svg className="h-6 w-6 text-green-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="9"/>
        <path d="M9 12l2 2l4 -4"/>
      </svg>) : <div className="w-6 h-6 rounded-full bg-gray-200" />}
      </div>
    </div>
  );
}
