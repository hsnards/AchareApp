import React, {useEffect, useState} from 'react'
import axios from "axios";
import {data} from "autoprefixer";

const  ViewAllAddresses =()=> {
  const url = "http://stage.achareh.ir/api/karfarmas/address";
  const [adresses, setAdresses] = useState(null);
   axios({
        method: 'get', //you can set what request you want to be
        url: url,
        auth : {
          username : "09822222222",
          password:"sana1234"
        }
      }).then((data)=>setAdresses(data.data))

  return (
    <div className={"flex flex-wrap gap-8 max-w-screen-[1440px] justify-center py-4 overflow-hidden"}>
      {adresses !== null ? adresses.map((item) => (
            <div key={item.id} className={"flex flex-wrap w-[376px] shadow rounded py-4 px-2"}>
            <div className={"w-full pb-2"}>
              <h3 className={"mb-1 font-bold text-[#3F92BC]"}>آدرس:</h3>
              <p className={"text-black/ text-sm"}>{item.address}</p>
            </div>
              <div className={"w-1/2 pb-2"}>
                <h3 className={"mb-1 font-bold text-[#3F92BC]"}>نام ونام خانوادگی:</h3>
                <p className={"text-black/75 text-sm"}>{`${item.first_name} ${item.last_name}`}</p>
              </div>
              <div className={"w-1/2 pb-2"}>
                <h3 className={"mb-1 font-bold text-[#3F92BC] "}>موبایل:</h3>
                <p className={"text-black/75 text-sm"}>{item.coordinate_mobile}</p>
              </div>
            </div>
      )) :<p className={"animate-bounce"}> در حال پردازش لیست آدرس ها...</p>}
    </div>
  )
}

export default ViewAllAddresses