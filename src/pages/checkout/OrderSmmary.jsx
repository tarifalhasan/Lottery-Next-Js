const OrderSmmary = () => {
  return (
    <div>
      <header className="bg-[#0085FF] border-[#020055]  border-b-2 px-5 py-5">
        <h2 className="font-medium text-slate-50 text-lg">ORDER SUMMARY</h2>
      </header>
      <ul>
        <li className="text-[#202942] px-3 py-3 border-b-2 border-l-2 border-r-2 border-[#020055] border-solid  flex justify-between items-center">
          <span className="block">
            <span className="text-xl block">Apple Macbook pro m2</span>
            <span className="text-[]">Raffle Number: 4</span>
          </span>
          <span className="block">£11.99</span>
        </li>
        <li className="text-[#202942] px-3 border-l-2 border-r-2 py-3 border-b-2 border-[#020055] border-solid  flex justify-between items-center">
          <span className="block">
            <span className="text-xl block">Apple Macbook pro m2</span>
            <span className="text-[]">Raffle Number: 4</span>
          </span>
          <span className="block">£11.99</span>
        </li>
        <li className="text-[#202942] px-3 border-l-2 border-r-2 py-3 border-b-2 border-[#020055] border-solid  flex justify-between items-center">
          <span className="block">
            <span className="text-xl block">Apple Macbook pro m2</span>
            <span className="text-[]">Raffle Number: 4</span>
          </span>
          <span className="block">£11.99</span>
        </li>
      </ul>
    </div>
  );
};

export default OrderSmmary;
