import { useNavigate } from "react-router-dom";
import image from "/cover.jpg";
import { FaEye } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { addobj } from "../slices/cart";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [latestproducts, setlatestproducts] = useState<
    [
      {
        _id: string;
        name: string;
        photo: string;
        price: number;
        stock: number;
        category: string;
        createdAt: Date;
        updatedAt: Date;
        __v: number;
        incart: number;
      }
    ]
  >([
    {
      _id: "",
      name: "",
      photo: "",
      price: 0,
      stock: 0,
      category: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
      incart: 0,
    },
  ]);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {}, [cart]);
  const latestProductsfunc = useCallback(async () => {
    try {
      const products = await axios.get(
        `${import.meta.env.VITE_BACKEND_SERVER}/api/v1/products/latestProducts`
      );
      const productsWithInCart = products.data.data.map(
        (product: {
          _id: string;
          name: string;
          photo: string;
          price: number;
          stock: number;
          category: string;
          createdAt: Date;
          updatedAt: Date;
          __v: number;
        }) => ({
          ...product,
          incart: 0, // Initialize incart as 0 for each product
        })
      );

      setlatestproducts(productsWithInCart);
      console.log(products.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    latestProductsfunc();
  },[]);
  const navigate = useNavigate();
  // const data: initialcartarrayobj[] = [
  //   {
  //     id: 83291320,
  //     price: 300,
  //     incart: 0,
  //     name: "Shirt",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 8329832,
  //     price: 3560,
  //     incart: 0,
  //     name: "Headphone",
  //     image:
  //       "https://images.unsplash.com/photo-1491927570842-0261e477d937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8fDB8fHww",
  //   },
  //   {
  //     id: 323289,
  //     price: 900,
  //     incart: 0,
  //     name: "Crop-Top",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvcCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  // ];
  return (
    <div className="w-[95vw] p-5 mx-auto my-5 bg-slate-300">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      ></div>
      <div className="flex mt-3 justify-between items-center ">
        <div className="text-3xl tracking-wide text-slate-800 uppercase">
          Latest products
        </div>
        <div className="cursor-pointer font-semibold">More</div>
      </div>
      <div className="grid mt-2 grid-cols-1 md:grid-cols-3 gap-4">
        {latestproducts.map((e) => {
          return (
            <div key={e._id}>
              <div className="relative flex flex-col justify-center items-center gap-1 bg-gray-100 border-slate-500 border-2 shadow-lg h-[500px] cursor-pointer p-4 group">
                <div className="absolute top-0 bottom-0  left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div
                    onClick={() => navigate(`/product/${e._id}`)}
                    className="text-3xl font-semibold text-white opacity-100 flex items-center justify-center rounded-full bg-blue-900 p-5 see"
                  >
                    <FaEye />
                  </div>
                </div>
                <div className="h-[70%] w-full border-2 border-black">
                  <img className="w-full h-full" src={e.photo} alt="" />
                </div>

                <div className="capitalize font-semibold m-5 text-2xl text-center">
                  {e.name}
                </div>
                <div className="text-center text-blue-600">
                  Price: ${e.price}
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={() => {
                    dispatch(addobj({ ...e, incart: e.incart + 1 }));
                    console.log("hi");
                  }}
                  className="p-2 border-2 border-black bg-blue-300 text-black rounded-lg "
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;




























