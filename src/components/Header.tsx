import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
// import { IoPersonSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import { useAppDispatch } from "../store/hook";
import { TbLogin } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { logout } from "../slices/authenticatedornot";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FaPersonDress } from "react-icons/fa6";
import { toast,Bounce } from "react-toastify";
// import { setauthenticatedornot } from "../slices/authenticatedornot";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [person, setperson] = useState({
    dob: "",
    email: "",
    gender: "",
    name: "",
    photo: "",
    role: "",
    _id: "",
  });
  const role = useAppSelector((state) => state.authenticatedornot.role);
  const id = useAppSelector((state) => state.authenticatedornot.value);
  const authen = useAppSelector((state) => state.authenticatedornot.auth);
  const obj = useAppSelector((state) => state.authenticatedornot);
  const dispatch = useAppDispatch();
  const cartarray = useAppSelector((state) => state.cart);
  console.log(id);
  const fetchinfo = useCallback(async () => {
    try {
      if (!authen) {
        return;
      }
      const info = await axios.get(
        `https://backendecommerce-megaproject.onrender.com/api/v1/users/${id}`
      );
      setperson(info.data.user);
      console.log(info.data);
    } catch (error) {
      console.log(error);
    }
  }, [id, authen]);
  const logoutnow = useCallback(async () => {
    try {
      const response = await signOut(auth);
      console.log(response);
      setperson({
        dob: "",
        email: "",
        gender: "",
        name: "",
        photo: "",
        role: "",
        _id: "",
      });
      dispatch(logout(null));
      const notify = () =>
        toast.success("Logged Out Successfully!", {
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
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    fetchinfo();
  }, [id, authen, cartarray, fetchinfo, obj, logoutnow]);
  // console.log("The object is :", person?.photo);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };
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
        {person?.photo ? (
          <div
            onMouseEnter={toggleDropdown}
            onClick={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="rounded-full p-1 border-2 border-black"
          >
            <FaPersonDress />
          </div>
        ) : // <div className="w-7 h-7 rounded-full overflow-hidden">
        //   <img src={person?.photo} alt="p" />
        // </div>
        null}
        {dropdownVisible && (
          <div className="absolute top-[3.5em] right-2 p-2 bg-white shadow-lg border rounded-lg  z-10">
            <p className="text-sm font-bold">
              Name: <span className="text-blue-500">{person.name}</span>
            </p>
            <p className="text-sm font-bold">
              Email: <span className="text-orange-600">{person.email}</span>
            </p>
            <p className="text-sm font-bold">
              Role: <span className="text-green-600">{person.role}</span>
            </p>
          </div>
        )}
        {role === "admin" ? (
          <NavLink
            to={"/admin/dashboard"}
            className="mt- cursor-pointer text-xl"
          >
            <IoPerson />
          </NavLink>
        ) : null}
        <div className="mt- cursor-pointer text-xl">
          {authen ? (
            <FiLogOut onClick={logoutnow} />
          ) : (
            <NavLink to={`/login`}>
              <TbLogin />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
