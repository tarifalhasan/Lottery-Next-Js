const Input = ({ type, name, placeholder, label }) => (
  <div className="flex w-full flex-col gap-y-2">
    {label && (
      <label
        className="text-base block font-normal text-[#2B2F2F]"
        htmlFor={name}
      >
        {label}
      </label>
    )}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-[#E6ECF4] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] w-full text-[1em]"
      required
    />
  </div>
);

export default Input;
