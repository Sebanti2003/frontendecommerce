import { useState } from "react";
import { useForm } from "react-hook-form";
import SidebarDash from "../../components/SidebarDash.tsx";

type FormValues = {
  productname: string;
  price: number;
  stock: number;
  photo: FileList;
};

const Newproduct = () => {
  const [open] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string|null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("productname", data.productname);
    formData.append("price", data.price.toString());
    formData.append("stock", data.stock.toString());
    if (data.photo && data.photo.length > 0) {
      formData.append("photo", data.photo[0]); // Use the first file in the FileList
    } else {
      console.log("No photo file selected");
    }

    // Debug: Check FormData content
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    // formData.append("photo", data.photo[0]); // File input field returns a FileList, so use the first file
    console.log("image--- ", formData.get("photo"));

    // Post the formData to your backend API
    //   fetch("YOUR_BACKEND_API_ENDPOINT", {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log("Success:", result);
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
  };

  return (
    <div>
      <div className="font-bold relative flex flex-col gap-5 m-5 bg-slate-300 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
        <SidebarDash open={open} />
        <form
          className="w-full md:w-1/2 xl:w-1/3 bg-white mx-auto p-2 rounded-xl flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-3xl font-semibold w-full text-center">
            New Product
          </div>
          <div className="flex flex-col gap-5">
            {/* Product Name */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-semibold text-gray-70 mx-2">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                {...register("productname", {
                  required: "Product Name is required",
                })}
                className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.productname && (
                <span className="text-red-500 text-sm">
                  {errors.productname.message}
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-semibold text-gray-70 mx-2">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter The Price"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-semibold text-gray-70 mx-2">
                Stock
              </label>
              <input
                type="number"
                placeholder="Enter the stock of the Item"
                {...register("stock", {
                  required: "Stock is required",
                  valueAsNumber: true,
                })}
                className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.stock && (
                <span className="text-red-500 text-sm">
                  {errors.stock.message}
                </span>
              )}
            </div>

            {/* Photo */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-semibold text-gray-70 mx-2">
                Photo
              </label>
              <input
                type="file"
                {...register("photo", { required: "Photo is required" })}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    setImageUrl(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }}
                className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.photo && (
                <span className="text-red-500 text-sm">
                  {errors.photo.message}
                </span>
              )}
            </div>
            {imageUrl?<img
              src={imageUrl}
              alt="Uploaded Image"
              style={{ width: "100%", height: "auto" }}
            />:""}
            {/* Submit Button */}
            <button
              type="submit"
              className="p-2 bg-indigo-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newproduct;

// import { useState } from "react";
// import SidebarDash from "../../components/SidebarDash.tsx";

// const Newproduct = () => {
//   const [open] = useState<boolean>(false);
//   // setopen(true);
//   //price stock photo
//   return (
//     <div>
//       <div className="font-bold relative flex flex-col gap-5 m-5 bg-slate-300 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
//         <SidebarDash open={open} />
//         <form className="w-full md:w-1/2 xl:w-1/3 bg-white mx-auto p-2 rounded-xl flex flex-col gap-10">
//           <div className="text-3xl font-semibold w-full text-center">
//             New Product
//           </div>
//           <div className="flex flex-col gap-5">
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm  font-semibold text-gray-70 mx-2">
//                 Product Name
//               </label>
//               <div className="">
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter Product Name"
//                   name="productname"
//                   id="productname"
//                   className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm  font-semibold capitalize text-gray-70 mx-2">
//                 price
//               </label>
//               <div className="">
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter The Price"
//                   name="price"
//                   id="price"
//                   className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm  font-semibold text-gray-70 mx-2">
//                 Stock
//               </label>
//               <div className="">
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter the stock of the Item"
//                   name="stock"
//                   id="stock"
//                   className="block w-full p-2 placeholder:capitalize rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm  font-semibold text-gray-70 mx-2">
//                 Photo
//               </label>
//               <div className="">
//                 <input
//                   type="file"
//                   required
//                   placeholder="photo"
//                   name="photo"
//                   id="photo"
//                   className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             {/* <div className="flex flex-col gap-2">
//               <label className="block text-sm  font-semibold text-gray-70 mx-2">
//                 Product Name
//               </label>
//               <div className="">
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter Product Name"
//                   name="productname"
//                   id="productname"
//                   className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div> */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Newproduct;
