const Sidebar = ({open,range,setrange}:{
    open:boolean,
    range:number|undefined,
    setrange:(value:number)=>void
}) => {
  return <div
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
</div>;
};

export default Sidebar;
