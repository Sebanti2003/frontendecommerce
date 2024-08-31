import { useNavigate } from "react-router-dom";
import Checkoutcart from "../components/Checkoutcart";
import ItemCartShow from "../components/ItemCartShow";
import { initialcartarrayobj } from "../slices/cart";
import { useAppSelector } from "../store/hook";
import { useCallback, useEffect, useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const [discount, setdiscount] = useState<number>(20);
  const [couponcode, setcouponcodeapp] = useState<boolean>(false);
  const cartarray: initialcartarrayobj[] = useAppSelector(
    (state) => state.cart
  );
  const subtotal = cartarray.reduce((acc, e) => acc + e.price * e.incart, 0);
  useEffect(() => {
    if (couponcode) {
      setdiscount(400);
    } else {
      setdiscount(0);
    }
    return () => setdiscount(0);
  }, [discount, couponcode]);
  const onchangecouponcode = useCallback(
    (x: string) => {
      if (x === "DISCOUNT20") {
        setcouponcodeapp(true);
      } else {
        setcouponcodeapp(false);
      }
    },
    [setcouponcodeapp]
  );
  const oncheckout = () => {
    navigate("/shipping");
  };
  console.log(cartarray);
  return (
    <>
      <div className="flex min-h-[100vh] max-md:flex-col px-3">
        <div className="md:min-h-[100vh] flex flex-col  gap-2  w-full md:w-[60%] p-2">
          {cartarray.map((e) => {
            return (
              <ItemCartShow
                id={e.id}
                key={Math.random()}
                image={e.image}
                name={e.name}
                price={e.price}
                incart={e.incart}
              />
            );
          })}
        </div>
        <div className=" w-full font-mono  flex justify-start  items-center  md:w-[40%] capitalize">
          <Checkoutcart
            subtotal={subtotal}
            discount={discount}
            couponcode={couponcode}
            onchangecouponcode={onchangecouponcode}
            oncheckout={oncheckout}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
