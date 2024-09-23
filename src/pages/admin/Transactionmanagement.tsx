// import { useState } from "react";
// import { useForm } from "react-hook-form";
// // import SidebarDash from "../../components/SidebarDash.tsx";
// import { MdArrowBack } from "react-icons/md";
// import { useNavigate, useParams } from "react-router-dom";

// type FormValues = {
//   productname: string;
//   price: number;
//   stock: number;
//   photo: FileList;
// };

// const Transactionmanagement = () => {
//   // const [open] = useState<boolean>(false);
//   const [imageUrl, setImageUrl] = useState<string|null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>();

//   const onSubmit = (data: FormValues) => {
//     const formData = new FormData();
//     formData.append("productname", data.productname);
//     formData.append("price", data.price.toString());
//     formData.append("stock", data.stock.toString());
//     if (data.photo && data.photo.length > 0) {
//       formData.append("photo", data.photo[0]); // Use the first file in the FileList
//     } else {
//       console.log("No photo file selected");
//     }

//     // Debug: Check FormData content
//     // for (const pair of formData.entries()) {
//     //   console.log(pair[0], pair[1]);
//     // }
//     // formData.append("photo", data.photo[0]); // File input field returns a FileList, so use the first file
//     console.log("image--- ", formData.get("photo"));

//     // Post the formData to your backend API
//     //   fetch("YOUR_BACKEND_API_ENDPOINT", {
//     //     method: "POST",
//     //     body: formData,
//     //   })
//     //     .then((response) => response.json())
//     //     .then((result) => {
//     //       console.log("Success:", result);
//     //     })
//     //     .catch((error) => {
//     //       console.error("Error:", error);
//     //     });
//   };
//   const navigate=useNavigate();
//   const {id}=useParams();

//   return (
//     <div>
//       <div className="font-bold min-h-[100vh] relative flex justify-center max-lg:flex-col max-lg:items-center gap-5 m-5 bg-slate-300 rounded-md p-4 overflow-x-hidden">
//         {/* <SidebarDash open={open} /> */}
//         <div onClick={()=>{navigate(-1)}} className="cursor-pointer flex justify-center  items-center rounded-full max-lg:self-start  w-10 h-10 text-2xl text-white bg-black"><MdArrowBack/></div>
//         <div className="lg:w-[30%] md:w-[50%] w-full min-h-[100vh] bg-white border-2 rounded-xl border-black p-3">
//           <div className="text-end w-full text-green-500">10 available</div>
//           <div className="flex flex-col p-4">
//             <div>ID : {id}</div>
//             {imageUrl?<img
//               src={imageUrl}
//               alt="Uploaded Image"
//               style={{ width: "100%", height: "auto" }}
//             />:""}
//             <div className="text-semibold self-center text-slate-600">Puma Shoes</div>
//             <div className="text-bold self-center">$2000</div>
//           </div>
//         </div>
//         <form
//           className="w-full md:w-1/2 xl:w-1/3 bg-white min-h-[100vh]  p-2 rounded-xl flex flex-col justify-center gap-10"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="text-3xl uppercase font-semibold w-full text-center">
//             Manage
//           </div>
//           <div className="flex flex-col gap-5">
//             {/* Product Name */}
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm font-semibold text-gray-70 mx-2">
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Product Name"
//                 {...register("productname", {
//                   required: "Product Name is required",
//                 })}
//                 className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//               {errors.productname && (
//                 <span className="text-red-500 text-sm">
//                   {errors.productname.message}
//                 </span>
//               )}
//             </div>

//             {/* Price */}
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm font-semibold text-gray-70 mx-2">
//                 Price
//               </label>
//               <input
//                 type="number"
//                 placeholder="Enter The Price"
//                 {...register("price", {
//                   required: "Price is required",
//                   valueAsNumber: true,
//                 })}
//                 className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//               {errors.price && (
//                 <span className="text-red-500 text-sm">
//                   {errors.price.message}
//                 </span>
//               )}
//             </div>

//             {/* Stock */}
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm font-semibold text-gray-70 mx-2">
//                 Stock
//               </label>
//               <input
//                 type="number"
//                 placeholder="Enter the stock of the Item"
//                 {...register("stock", {
//                   required: "Stock is required",
//                   valueAsNumber: true,
//                 })}
//                 className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//               {errors.stock && (
//                 <span className="text-red-500 text-sm">
//                   {errors.stock.message}
//                 </span>
//               )}
//             </div>

//             {/* Photo */}
//             <div className="flex flex-col gap-2">
//               <label className="block text-sm font-semibold text-gray-70 mx-2">
//                 Photo
//               </label>
//               <input
//                 type="file"
//                 {...register("photo", { required: "Photo is required" })}
//                 onChange={(e) => {
//                   const file = e.target.files?.[0];
//                   if (!file) return;
//                   const reader = new FileReader();
//                   reader.onload = () => {
//                     setImageUrl(reader.result as string);
//                   };
//                   reader.readAsDataURL(file);
//                 }}
//                 className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//               {errors.photo && (
//                 <span className="text-red-500 text-sm">
//                   {errors.photo.message}
//                 </span>
//               )}
//             </div>
//             <div className="flex justify-center">
//             {imageUrl?<img
//               src={imageUrl}
//               alt="Uploaded Image"
//               style={{ width: "80%", height: "auto" }}
//             />:""}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="p-2 bg-indigo-600 text-white rounded-md"
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Transactionmanagement;
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Transactionmanagement = () => {
  const [imageUrl] = useState<string | null>("data:image/jpeg;base64,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");
  const navigate = useNavigate();
  // const { id } = useParams();

  const status = "Shipped"; // Set dynamically based on your data

  return (
    <div>
      <div className="font-bold min-h-[100vh] relative flex justify-center max-lg:flex-col max-lg:items-center gap-5 m-5 bg-slate-300 rounded-md p-4 overflow-x-hidden">
        {/* Left Side: Order Items */}
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer flex justify-center items-center rounded-full max-lg:self-start w-10 h-10 text-2xl text-white bg-black"
        >
          <MdArrowBack />
        </div>
        <div className="lg:w-[30%] md:w-[50%] w-full min-h-[100vh] bg-white border-2 rounded-xl border-black p-3">
          <div className="text-xl font-bold mb-4">Order Items</div>
          <div className="flex justify-between items-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Product"
                className="w-24 h-24 object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
                No Image
              </div>
            )}
            <div className="flex  items-center gap-3 justify-center">
              <div className="text-semibold  text-slate-600">
                Puma Shoes
              </div>
              <div className="text-bold ">$2000*4={2000*4}</div>
            </div>
          </div>
        </div>

        {/* Right Side: Order Info */}
        <div className="lg:w-[60%] md:w-[80%] w-full min-h-[100vh] bg-white border-2 rounded-xl border-black p-4">
          <div className="text-3xl font-bold mb-4 text-center">Order Info</div>

          {/* User Info */}
          <div className="text-xl underline font-semibold mb-2">User Info</div>
          <div className="flex flex-col gap-8 mb-4">
            <div>
              <span className="font-semibold">Name:</span> John Doe
            </div>
            <div>
              <span className="font-semibold">Address:</span> 123 Main St, City,
              Country
            </div>
          </div>

          {/* Amount Info */}
          <div className="text-xl underline font-semibold mb-2">Amount Info</div>
          <div className="flex flex-col gap-8 mb-4">
            <div>
              <span className="font-semibold">Subtotal:</span> $1800
            </div>
            <div>
              <span className="font-semibold">Shipping Charges:</span> $50
            </div>
            <div>
              <span className="font-semibold">Tax:</span> $150
            </div>
            <div>
              <span className="font-semibold">Discount:</span> $100
            </div>
            <div>
              <span className="font-bold">Total:</span> $1900
            </div>
          </div>

          {/* Status Info */}
          <div className="text-xl underline font-semibold mb-2">Status Info</div>
          <div
            className={`mb-4 rounded-md flex  items-center gap-2 `}
          >
            Status: <span className={`${status === "Shipped" ? "text-green-500" : status === "Processing" ? "text-red-500" : status === "Delivered" ? "text-violet-500" : "text-blue-500"}`}>{status}</span>
          </div>

          {/* Button to Process Status */}
          <div className="flex justify-center">
            <button className="p-2 bg-blue-600 w-full text-white rounded-md">
              Process Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactionmanagement;
