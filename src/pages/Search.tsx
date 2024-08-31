import { useCallback, useEffect, useState } from "react";
import { MdMenu, MdArrowBack } from "react-icons/md";
import { initialcartarrayobj } from "../slices/cart";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../store/hook";
// import { addobj } from "../slices/cart";
// import { FaEye } from "react-icons/fa";
function Search() {
  const [search, setsearch] = useState<string>("");
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [open, setopen] = useState<boolean>(false);
  const [range, setrange] = useState<number>();
  const loging = useCallback(
    function () {
      console.log(search);
    },
    [search]
  );
  const data: initialcartarrayobj[] = [
    {
      id: 83291320,
      price: 300,
      incart: 0,
      name: "Shirt",
      image:
        "https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 8329832,
      price: 3560,
      incart: 0,
      name: "Headphone",
      image:
        "https://images.unsplash.com/photo-1491927570842-0261e477d937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8fDB8fHww",
    },
    {
      id: 323289,
      price: 900,
      incart: 0,
      name: "Crop-Top",
      image:
        "https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvcCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  useEffect(() => {
    loging();
  }, [search, loging]);
  return (
    <div className="p-3 flex relative min-h-[100vh] ">
      <div
        className={`h-[96.5%] baby w-[40%] ${
          open ? "translate-x-0" : "translate-x-[-350px]"
        } transition-all duration-300 absolute shadow-lg border-2 min-w-[250px] p-4 max-w-[300px] border-black bg-slate-300`}
      >
        <div className="flex flex-col gap-5 ">
          <div className="tracking-wider text-slate-600 text-2xl">FILTERS</div>
          <label className="font-bold" htmlFor="">
            Sort
          </label>
          <select
            title="sortOptions"
            className="w-full border-2  border-black p-3 rounded-lg"
            name="sortOptions"
            id="sortOptions"
          >
            <option value="">Select</option>
            <option value="none">None</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
          <div className="flex flex-col gap-5">
            <label className="font-bold" htmlFor="">
              Category
            </label>
            <select
              title="categoryOptions"
              className="w-full border-2  border-black p-3 rounded-lg"
              name="categoryOptions"
              id="categoryOptions"
            >
              <option value="">Select</option>
              <option value="none">None</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>
          <div>
            <label className="font-bold" htmlFor="">
              Rating: {range}
            </label>
            <input
              type="range"
              className="w-full border-2  border-black p-3 rounded-lg"
              name="range"
              id="range"
              title="range"
              min={0}
              max={100000}
              step={1000}
              value={range}
              onChange={(e) => {
                setrange(Number(e.target.value));
              }}
            />
          </div>
        </div>
      </div>
      <div className="p-2 flex flex-col gap-3 max-md:w-[100%] w-full border-2  border-stone-500">
        <div className="tracking-wide w-full text-slate-700 flex items-center justify-between uppercase text-2xl">
          <div>PRODUCTS</div>
          <div
            onClick={() => setopen((t) => !t)}
            className="w-14  rounded-full h-14 p-2 cursor-pointer flex justify-center items-center m-1 border-[1px] border-black"
          >
            {open ? <MdArrowBack /> : <MdMenu />}
          </div>
        </div>
        <input
          onChange={(e) => setsearch(e.currentTarget.value)}
          type="text"
          placeholder="Search by name..."
          className="w-full p-2 rounded-md border-2 border-slate-600 outline-none"
        />
        <div className="grid mt-2 grid-cols-1 md:grid-cols-5 gap-4">
          {data.map((e) => {
            return (
              <div
                key={e.id}
                className="flex flex-col items-center
                 gap-3 border-2 border-black shadow-slate-400 shadow-lg p-3 rounded-lg"
              >
                <img src={e.image} alt="" />
                <div className="capitalize font-bold">{e.name}</div>
                <div className="font-semibold flex gap-1">Price:- <div className="text-blue-500">${e.price}</div></div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
