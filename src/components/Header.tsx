import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hook";
// import { useAppDispatch } from "../store/hook";
import { TbLogin } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
// import { setauthenticatedornot } from "../slices/authenticatedornot";
const Header = () => {
  const authenticatorornot = useAppSelector(
    (state) => state.authenticatedornot.value
  );
  const cartarray=useAppSelector(state=>state.cart);
  const role = useAppSelector((state) => state.authenticatedornot.role);
  console.log(authenticatorornot, role);

    // const dispatch = useAppDispatch();
    // dispatch(setauthenticatedornot(true));

  return (
    <div className="p-4 bg-slate-400">
      <div className="flex text-xl  justify-end gap-[1em] items-center">
        <NavLink to={"/"} className="cursor-pointer">
          Home
        </NavLink>
        <NavLink to={"/search"} className="mt-1 cursor-pointer text-xl">
          <IoMdSearch />
        </NavLink>
        <NavLink to={"/cart"} className="mt-1 relative cursor-pointer text-xl">
          <div className="w-4 h-4 rounded-full text-center text-xs flex justify-center items-center bg-blue-600 text-white absolute bottom-3 left-3">
            <div>{cartarray.length}</div>
          </div>
          <IoMdCart />
        </NavLink>
        {role === "admin" ? (
          <NavLink
            to={"/admin/dashboard"}
            className="mt-1 cursor-pointer text-xl"
          >
            <IoPerson />
          </NavLink>
        ) : null}
        <div className="mt-1 cursor-pointer text-xl">
          {authenticatorornot ? <FiLogOut /> : <NavLink to={`/login`}><TbLogin /></NavLink>}
        </div>
      </div>
    </div>
  );
};

export default Header;
