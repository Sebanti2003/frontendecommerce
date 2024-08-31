const Checkoutcart = ({
  subtotal,
  discount,
  couponcode,
  onchangecouponcode,
  oncheckout,
}: {
  subtotal: number;
  discount: number;
  couponcode: boolean;
  onchangecouponcode: (x: string) => void;
  oncheckout: () => void;
}) => {
  return (
    <div className=" w-full border-2 border-black bg-blue-200 mb-1 p-5 flex flex-col items-start justify-center gap-6">
      <div className="capitalize">Subtotal: ${subtotal}</div>
      <div className="flex items-center justify-center gap-3">
        <div className="font-mono">Tax:</div>
        <div>${subtotal * 0.18}</div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div>Discount:</div>
        <div className="text-red-500">-${discount}</div>
        <div className="text-red-500 italic">
          {couponcode ? "Discount coupon applies here" : ""}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="font-mono">Shipping Charges:</div>
        <div>${20}</div>
      </div>
      <div className="flex items-center justify-center gap-3 font-bold">
        <div>Total:</div>
        <div>${subtotal + subtotal * 0.18 + 20 - discount}</div>
      </div>
      <input
        onChange={(e) => onchangecouponcode(e.target.value)}
        type="text"
        className="py-2 w-full rounded-md text-center"
        placeholder="Coupon Code"
      />
      {/* <button className="bg-red-400 w-full py-3 font-semibold p-1 m-2 rounded-md">
              Apply
            </button> */}
      <button onClick={()=>oncheckout()} className="bg-violet-500 w-full py-3 font-semibold  rounded-md">
        Checkout
      </button>
    </div>
  );
};

export default Checkoutcart;
