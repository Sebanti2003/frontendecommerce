// import React from "react";
// import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
interface formtypes {
  gender: string;
  dob: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formtypes>();
  const onsubmit: SubmitHandler<formtypes> = (data) => {
    console.log(data);
  };
  // const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] p-3">
        <div className="p-10 px-3 w-full h-[90%] shadow-lg border-2 border-black shadow-slate-400 my-2  md:w-[40%] lg:w-[30%] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 w-full ">
            <div className="text-3xl tracking-wide text-center uppercase text-slate-700">
              Login
            </div>
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="flex flex-col gap-4 w-full my-2"
            >
              <select
                className="w-full border-2 border-black p-3 rounded-lg"
                {...register("gender", {
                  required: true,
                })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p>
                  <span className="text-red-500">This field is required</span>
                </p>
              )}
              <input
                type="date"
                placeholder="Enter Email"
                className="w-full border-2 border-black p-3 rounded-lg"
                {...register("dob", {
                  required: true,
                })}
              />
              {errors.dob && (
                <p>
                  <span className="text-red-500">This field is required</span>
                </p>
              )}
              <button
                type="submit"
                className="w-full border-2 border-black bg-blue-500 text-white p-3 rounded-lg"
              >
                Submit
              </button>
            </form>
            <div>Already Signed in Once</div>
            <button className="flex justify-center items-center gap-2 w-full p-2 text-lg border-2 border-black transition-all duration-500 hover:bg-blue-200">
              <div><FcGoogle/></div>
              <div>Sign in With Google</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
