import { useCallback, useEffect, useState } from "react";
import SidebarDash from "../../components/SidebarDash";

const Coupon = () => {
  const [open, setopen] = useState<boolean>(false);
  const [alphabets, setAlphabets] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [specialCharacters, setSpecialCharacters] = useState<boolean>(true);
  const [couponLength, setCouponLength] = useState<number>(5);
  const [showCopyButton, setShowCopyButton] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const generateCouponCode = useCallback(
    (length: number) => {
      let characters = "";

      if (!alphabets && !numbers && !specialCharacters) {
        return "";
      }

      if (alphabets) {
        characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      if (numbers) {
        characters += "0123456789";
      }

      if (specialCharacters) {
        characters += "!@#$%^&*()_+";
      }

      let couponCode = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        couponCode += characters[randomIndex];
      }
      return couponCode;
    },
    [alphabets, numbers, specialCharacters]
  );
  const [coupon, setCoupon] = useState<string>("");
  useEffect(() => {
    setCoupon(generateCouponCode(couponLength));
    return () => {
      console.log("Component unmounted");
    };
  }, [alphabets, numbers, specialCharacters, couponLength, generateCouponCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="font-bold  relative flex  flex-col gap-5 m-5 max-md:m-0 bg-slate-100 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
      <SidebarDash open={open} />
      <div
        onClick={() => setopen((e) => !e)}
        className="text-end font-bold cursor-pointer"
      >
        Menu
      </div>
      <div className="w-[60%]  min-h-[80vh] mx-auto flex flex-col justify-center max-md:w-full   items-center gap-5">
        <div className="flex flex-col gap-3 border-black rounded-md shadow-xl max-md:w-full border-2 p-5">
        <div className="text-2xl text-center font-bold">Coupon Generator</div>
        <div className="w-full">
          {coupon && (
            <div
              className="relative hover:bg-black w-full  text-center p-1 hover:text-white mt-4 cursor-pointer"
              onMouseEnter={() => setShowCopyButton(true)}
              onMouseLeave={() => setShowCopyButton(false)}
            >
              {coupon}
              {showCopyButton && (
                <button
                  className="absolute top-0 right-0 capitalize left-0 bottom-0 p-1 rounded hover:bg-black hover:text-white"
                  onClick={handleCopy}
                >
                  {copied ? "copied" : "copy"}
                </button>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={() => setAlphabets((e) => !e)}
            className={`bg-blue-600 max-sm:text-xs ${
              alphabets ? "bg-blue-950 text-white" : ""
            } p-2 w-auto`}
          >
            Alphabets
          </button>
          <button
            onClick={() => setNumbers((e) => !e)}
            className={`bg-blue-600 max-sm:text-xs ${
              numbers ? "bg-blue-950 text-white" : ""
            } p-2 w-auto`}
          >
            Numbers
          </button>
          <button
            onClick={() => setSpecialCharacters((e) => !e)}
            className={`bg-blue-600 max-sm:text-xs ${
              specialCharacters ? "bg-blue-950 text-white" : ""
            } p-2 w-auto`}
          >
            special characters
          </button>
        </div>

        <div className="bg-blue-200 rounded-lg p-2">
          <input
            className="w-full rounded-lg p-2"
            placeholder="Coupon Length"
            type="string"
            value={String(couponLength)}
            onChange={(e) => setCouponLength(Number(e.target.value))}
          />
        </div>
        <button className="w-full bg-blue-500 p-2 rounded-xl">
          Generate
        </button>
        </div>
      </div>

      {/* {copied && (
        <div className="text-green-500 mt-2">
          Coupon code copied to clipboard!
        </div>
      )} */}
    </div>
  );
};

export default Coupon;
