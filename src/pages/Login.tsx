//the form
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
// import { useAppSelector } from "../store/hook";
// import { setauthenticatedornot } from "../slices/authenticatedornot";
import { useState } from "react";
// import { useAppDispatch } from "../store/hook";
import { setauthenticatedornot } from "../slices/authenticatedornot";
import { Bounce, toast } from "react-toastify";

interface formtypes {
  gender: string;
  dob: string;
  role: string;
}

const Login = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.authenticatedornot.auth);
  console.log("Authenticated? ",user);
  
  const dispatch=useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<formtypes>();

  const onsubmit: SubmitHandler<formtypes> = (data) => {
    console.log("Form data:", data);
  };

  const onhandlegoogle = async () => {
    try {
      if (errors.gender || errors.dob) {
        return;
      }
      const formData = getValues();
      console.log("Form data before Google sign-in:", formData);
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      let role = "user";
      if (adminkey === keynum) {
        role = "admin";
      }
      const combinedData = {
        name: user.displayName,
        email: user.email,
        password: user.uid,
        gender: formData.gender,
        photo: user.photoURL,
        dob: formData.dob,
        role: role,
      };
      console.log("Combined data (Google + Form):", combinedData);
      const response = await axios.post(
        'https://backendecommerce-megaproject.onrender.com/api/v1/users',
        combinedData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Response from server:", response.data);
      if(response.data.message==="User already exists"){
        // alert("User already exists");
        const obj={
          value:response.data.user["_id"],
          role:response.data.user["role"]
        }
        dispatch(setauthenticatedornot(obj));
        const notify = () =>
          toast.success("User Already Exists and Logged In Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        notify();
      }else{
        const obj={
          value:response.data.newuser["_id"],
          role:response.data.newuser["role"]
        }
        dispatch(setauthenticatedornot(obj));
        const notify = () =>
          toast.success("Registered Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        notify();
      }
      
      navigate('/');
    } catch (error) {
      console.log("Error during Google sign-in or POST request:", error);
    }
  };
  // console.log(user);
  const keynum = "12345";
  const [adminkey, setadminkey] = useState<string>("");

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] p-3">
        <div className="p-10 px-3 w-full h-[90%] shadow-lg border-2 border-black shadow-slate-400 my-2  md:w-[40%] lg:w-[30%] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="text-3xl tracking-wide text-center uppercase text-slate-700">
              Login
            </div>
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="flex flex-col gap-4 w-full my-2"
            >
              <select
                className="w-full border-2 border-black p-3 rounded-lg"
                {...register("gender", { required: true })}
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
                className="w-full border-2 border-black p-3 rounded-lg"
                {...register("dob", { required: true })}
              />
              {errors.dob && (
                <p>
                  <span className="text-red-500">This field is required</span>
                </p>
              )}
              <div className="text-lg font-semibold">Provide the Admin Key</div>
              <input
                type="text" value={adminkey}
                onChange={(e)=>setadminkey(e.target.value)}
                className="w-full border-2 border-black p-3 rounded-lg"
              />
              {adminkey==keynum?<input
                type="text"
                value={`admin`}
                className="w-full border-2 font-bold border-black p-3 rounded-lg"
                {...register("role", { required: true })}
              />:<input
              type="text"
              value={`user`}
              className="w-full border-2 font-bold border-black p-3 rounded-lg"
              {...register("role", { required: true })}
            />}
              {errors.role && (
                <p>
                  <span className="text-red-500">This field is required</span>
                </p>
              )}
              <button
                onClick={() => onhandlegoogle()}
                className="flex justify-center items-center bg-blue-400 gap-2 w-full p-2 text-lg border-2 border-black transition-all duration-500 hover:bg-blue-200"
              >
                <FcGoogle />
                <span>Sign in With Google</span>
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
