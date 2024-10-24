import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../store/hook";
import { addobj, delobj, initialcartarrayobj, minusobj } from "../slices/cart";
const ItemCartShow = ({
  _id,
  name,
  photo,
  price,
  incart,
  stock,
  category,
  createdAt,
  updatedAt,
  __v,
}: initialcartarrayobj) => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full py-3 border-2 border-black bg-red-300 flex items-center justify-between px-3">
      <div className="flex items-center justify-center gap-5">
        <div className="w-[120px] h-[140px] border-2 border-black   bg-slate-500 overflow-hidden flex items-center justify-center object-cover object-center">
          <img className="w-full h-full " src={photo} alt="" />
        </div>
        <div className="capitalize font-semibold">
          <div>{name}</div>
          <div>${price}</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 text-lg">
        <div className="flex">
          <div
            onClick={() => dispatch(minusobj(_id))}
            className="bg-slate-400 mr-2 p-1 px-3 rounded-lg font-semibold flex justify-center items-center cursor-pointer"
          >
            -
          </div>
          <div className="bg-slate-400 mr-2 p-1 px-3 rounded-lg font-semibold flex justify-center items-center">
            {incart}
          </div>
          <div
            onClick={() => dispatch(addobj({ photo, name, _id, price, incart,stock,category,createdAt,updatedAt,__v }))}
            className="bg-slate-400 mr-2 p-1 px-3 rounded-lg font-semibold flex justify-center items-center cursor-pointer"
          >
            +
          </div>
        </div>
        <div onClick={() => dispatch(delobj(_id))} className="cursor-pointer">
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default ItemCartShow;
