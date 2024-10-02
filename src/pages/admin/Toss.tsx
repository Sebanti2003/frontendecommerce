// import React, { useCallback, useEffect, useState } from "react";

// const Toss: React.FC = () => {
//   const [toss, settoss] = useState<string>("Heads");

//   const tossing = useCallback(() => {
//     const random = Math.random();
//     if (random < 0.5) {
//       settoss("Heads");
//     } else {
//       settoss("Tails");
//     }
//   }, [settoss]);
//   useEffect(() => {
//     tossing();
//   }, [tossing, toss, settoss]);

//   return (
//     <div className="flex justify-center items-center w-full h-[100vh]">
//       <div
//         onClick={tossing}
//         className={`${
//           toss == "Heads" ? "" : ""
//         } shadow-2xl w-48 h-48 cursor-pointer rounded-full border-2 flex justify-center items-center border-black`}
//       >
//         <div>{toss === "Heads" ? <div><img src="" alt="" /></div> : <div><img src="" alt="" /></div>}</div>
//       </div>
//     </div>
//   );
// };

// export default Toss;
import React, { useCallback, useEffect, useState } from "react";
import SidebarDash from "../../components/SidebarDash";

const Toss: React.FC = () => {
  const [open, setopen] = useState<boolean>(false);
  const [toss, settoss] = useState<string>("Heads");
  const [flipping, setFlipping] = useState<boolean>(false);

  const tossing = useCallback(() => {
    setFlipping(true); // Trigger the flip animation
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        settoss("Heads");
      } else {
        settoss("Tails");
      }
      setFlipping(false); // Stop the animation after the coin is tossed
    }, 500); // Duration of the animation in milliseconds
  }, [settoss]);

  useEffect(() => {
    tossing(); // Toss the coin initially when the component mounts
  }, [tossing]);

  return (
    <div className="font-bold  relative flex  flex-col gap-5 m-5 max-md:m-0 bg-slate-100 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
      <SidebarDash open={open} />
      <div
        onClick={() => setopen((e) => !e)}
        className="text-end font-bold cursor-pointer"
      >
        Menu
      </div>
      <div className="flex justify-center flex-col gap-5 items-center w-full min-h-[100vh]">
        <div className="font-bold text-2xl tracking-wide capitalize">
          Toss the coin
        </div>
        <div
          onClick={tossing}
          className={`shadow-2xl w-48 h-48 cursor-pointer rounded-full  flex justify-center items-center  transition-transform duration-500 ${
            flipping
              ? toss === "Heads"
                ? "rotate-x-360" // Flip 360 degrees for "Heads"
                : "rotate-x-180" // Flip 180 degrees for "Tails"
              : ""
          }`}
        >
          <div className="w-full h-full">
            {toss === "Heads" ? (
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq" // Replace with your Heads image URL
                alt="Heads"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2z7K0-eZWnhzHVmE9vduBz_RlSyA1bpDyg&s" // Replace with your Tails image URL
                alt="Tails"
                className="w-[200px] h-[200px] rounded-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toss;
