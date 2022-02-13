import React from 'react'

const CompleteInformation = ({setShowForm}) => {
    return (
          <div className={"h-screen w-screen "}>
              <div header className={"flex w-full pt-4 flex-col"}>
                  <div className={"flex justify-between px-6 pb-4 w-full items-center"}>

                      <p className={"text-16 font-normal"}>ثبت نام</p>
                      <svg onClick={()=>setShowForm(false)} className="h-6 w-6 text-black font-medium" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                      </svg>
                  </div>
                  <div className={"flex w-full bg-gray-300/25 py-5"}>
                      <p className={"px-6 text-black/50 font-medium"}>لطفا اطلاعات خود را وارد کنید</p>
                  </div>
              </div>
          </div>
    )
}

export default CompleteInformation