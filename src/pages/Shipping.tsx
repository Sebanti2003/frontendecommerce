import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

export interface Inputs {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form submitted with values:", data);
    console.log(errors);
  };

  return (
    <>
      <div className="w-full">
        <div
          onClick={() => navigate(-1)}
          className="bg-black w-10 h-10 rounded-full flex justify-center items-center text-white m-2"
        >
          <FiArrowLeft />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="p-10 px-3 w-full md:w-[40%] lg:w-[30%] flex items-center justify-center">
          <div className="flex flex-col gap-2 w-full ">
            <div className="text-3xl tracking-wide text-center text-slate-700">
              SHIPPING
            </div>
            <div className="text-3xl tracking-wide text-center text-slate-700">
              ADDRESS
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full my-2"
            >
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                placeholder="Address"
                className="w-full border-2 border-black p-3 rounded-lg"
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}

              <input
                type="text"
                {...register("city", {
                  required: "City is required",
                  minLength: {
                    value: 3,
                    message: "City must be at least 3 characters long",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "City can only contain alphabets",
                  },
                })}
                placeholder="City"
                className="w-full border-2 border-black p-3 rounded-lg"
              />
              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}

              <input
                type="text"
                {...register("state", { required: "State is required" })}
                placeholder="State"
                className="w-full border-2 border-black p-3 rounded-lg"
              />
              {errors.state && (
                <p className="text-red-500">{errors.state.message}</p>
              )}

              <select
                {...register("country", { required: "Country is required" })}
                className="w-full border-2 border-black p-3 rounded-lg"
              >
                <option value="">Choose a country</option>
                <option value="India">India</option>
              </select>
              {errors.country && (
                <p className="text-red-500">{errors.country.message}</p>
              )}

              <input
                type="number"
                {...register("pincode", { required: "Pincode is required" })}
                placeholder="Pincode"
                className="w-full border-2 border-black p-3 rounded-lg"
              />
              {errors.pincode && (
                <p className="text-red-500">{errors.pincode.message}</p>
              )}

              <input
                type="submit"
                value="Submit"
                className="w-full border-2 border-black  p-3 rounded-lg"
              />
              <button
                onClick={() => navigate("/payment")}
                className="w-full border-2 border-black bg-blue-500 p-3 rounded-lg"
              >
                Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
