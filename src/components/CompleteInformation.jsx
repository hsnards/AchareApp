import React, {useState} from "react";
import { Formik } from "formik";
import * as yup from "yup";
import InputText from "./InputText";
import "yup-phone";
import axios from "axios";
import {toast} from "react-toastify";
import { useHistory ,useNavigate } from "react-router-dom";
const CompleteInformation = ({ setShowForm ,position }) => {
  const [type, setType] = useState("woman");
  const url = "http://stage.achareh.ir/api/karfarmas/address";
  let navigate = useNavigate();
  //initial value formik
  const initialValues = {
    first_name: "",
    last_name: "",
    coordinate_phone_number: "",
    coordinate_mobile: "",
    address: "",
    type: type
  };

  //yup validation
  const validationSchema = yup.object().shape({
    first_name: yup
      .string()
      .min(2, "باید بیشتر از 4 کارکتر باشد")
      .required("این فیلد الزامیست"),
    last_name: yup
      .string()
      .min(2, "باید بیشتر از 4 کارکتر باشد")
      .required("این فیلد الزامیست"),
    coordinate_phone_number: yup
      .string()
      .required("این فیلد الزامیست")
      .phone("IR", true, "شماره وارده صحیح نیست"),
    coordinate_mobile: yup
      .string()
      .required("این فیلد الزامیست")
      .phone("IR", true, "شماره وارده صحیح نیست"),
    address: yup
      .string()
      .min(10, "باید بیشتر از 10 کارکتر باشد")
      .required("این فیلد الزامیست"),
  });

  //submit function
  const handleSubmit = async(values, resetForm) => {
    try{
      let body = { ...values };
      body.gender = type;
      body.region = 1;
      body.lat = position.lat;
      body.lng = position.lng;
      delete body["type"];
      let {data, status ,statusText} =  await axios({
        method: 'post', //you can set what request you want to be
        url: url,
        data: body,
        headers: {
          Authorization: "Basic " + [""]

        },
        auth : {
          username : "09822222222",
          password:"sana1234"
        }
      })
      if(status === 201){
        toast.success("اطلاعات شما با موفقیت ثبت گردید" , {
          position:"bottom-right"
        })
        navigate("/all-addresses")
      }

    }
    catch (error){
    if(error.response.data.phone){
      toast.error(error.response.data.phone[0])
    }
    else if(error.response.data.detail){
      toast.error(error.response.data.detail)
    }
    else{
      toast.error("مشکلی از سمت سرور رخ داده لطفا بعدا تلاش کنید")
    }
    }
  };

  return (
    <div className={"min-h-screen "}>
      <div  className={"flex w-full pt-4 flex-col"}>
        <div className={"flex justify-between px-6 pb-4 w-full items-center"}>
          <p className={"text-16 font-normal"}>ثبت نام</p>
          <svg
            onClick={() => setShowForm(false)}
            className="h-6 w-6 text-black font-medium"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <div className={"flex w-full bg-gray-300/25 py-5"}>
          <p className={"px-6 text-black/50 font-medium"}>
            لطفا اطلاعات خود را وارد کنید
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}

      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="basis-full md:basis-3/5 rounded-l-md px-4 space-y-5  lg:px-16 py-7 bg-white flex flex-col justify-between"
          >
            {/* inputs */}
            <div className="basis-full flex items-center justify-center flex-col">
              <div className="w-full lg:w-7/12  px-2 h-[80px]">
                <InputText
                  name="first_name"
                  label="نام"
                  {...formik.getFieldProps("first_name")}
                  ok={formik.values.first_name && !formik.errors.first_name}
                />
                {formik.touched.first_name && formik.errors.first_name ? <p className={"text-[12px] text-red-500 py-1 pr-3"}>{formik.errors.first_name}</p> :null}
              </div>

              <div className="w-full lg:w-7/12  px-2 h-[80px]">
                <InputText
                  name="last_name"
                  label="نام خانوادگی"
                  ok={formik.values.last_name && !formik.errors.last_name}
                  {...formik.getFieldProps("last_name")}
                />
                {formik.touched.last_name && formik.errors.last_name ? <p className={"text-[12px] text-red-500 py-1 pr-3"}>{formik.errors.last_name}</p> :null}
              </div>

              <div className="w-full lg:w-7/12  px-2 h-[80px]">
                <InputText
                  name="coordinate_mobile"
                  label="تلفن همراه"
                  ok={formik.values.coordinate_mobile && !formik.errors.coordinate_mobile}
                  {...formik.getFieldProps("coordinate_mobile")}
                />
                {formik.touched.coordinate_mobile && formik.errors.coordinate_mobile ? <p className={"text-[12px] text-red-500 py-1 pr-3"}>{formik.errors.coordinate_mobile}</p> :null}
              </div>
              <div className="w-full lg:w-7/12  px-2 h-[80px]">
                <InputText
                  name="coordinate_phone_number"
                  label="تلفن ثابت"
                  ok={formik.values.coordinate_phone_number && !formik.errors.coordinate_phone_number}
                  {...formik.getFieldProps("coordinate_phone_number")}
                />
                {formik.touched.coordinate_phone_number && formik.errors.coordinate_phone_number ? <p className={"text-[12px] text-red-500 py-1 pr-3"}>{formik.errors.coordinate_phone_number}</p> :null}
              </div>

              <hr className="mb-5 border-8 w-full"/>

              <div className="w-full lg:w-7/12  px-2">
                <InputText
                  name="address"
                  label="آدرس دقیق"
                  ok={formik.values.address && !formik.errors.address}
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? <p className={"text-[12px] text-red-500 py-1 pr-3"}>{formik.errors.address}</p> :null}
              </div>

              <div className="flex items-center justify-between w-full lg:w-7/12">
            <span>
              جنسیت
            </span>
                <div className="inline-block rounded overflow-hidden cursor-pointer mt-3 border-2 border-[#2483B3] ">
                  <span onClick={() => {setType("man")}} className={`p-3 transition inline-block w-24 text-center ${type === "man" && 'bg-[#2483B3] text-white'} `}>آقا</span>
                  <span onClick={() => {setType("woman")}} className={`p-3 transition inline-block w-24 text-center ${type === "woman" && 'bg-[#2483B3] text-white'}`}>خانم</span>
                </div>
              </div>
            </div>



            <div className="w-full  flex justify-end items-end">

            </div>
            <div className={"px-2.5 "}>
              <button type={"submit"} className={"px-16 py-3 text-white rounded-md bg-emerald-400 w-full"}> مرحله بعد</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CompleteInformation;
