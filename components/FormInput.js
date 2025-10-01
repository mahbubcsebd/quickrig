const FormInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  register,
  rules,
  error,
  options = [],
  isSelect = false,
  icon = null,
}) => {
  return (
    <div className="mb-3 sm:mb-4">
      <label className="block text-xs sm:text-sm font-bold text-[#262626] mb-2 sm:mb-3 md:mb-4">
        {label}
      </label>
      {isSelect ? (
        <select
          {...register(name, rules)}
          className={`w-full p-3 sm:p-3.5 md:p-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-sm sm:text-base text-[#262626] placeholder:text-gray-400 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          <input
            {...register(name, rules)}
            type={type}
            placeholder={placeholder}
            className={`w-full p-3 sm:p-3.5 md:p-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-sm sm:text-base text-[#262626] placeholder:text-gray-400 ${
              error ? 'border-red-500' : 'border-gray-300'
            } ${icon ? 'pr-10 sm:pr-12' : ''}`}
          />
          {icon && (
            <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex gap-1">
              {icon}
            </div>
          )}
        </div>
      )}
      {error && (
        <p className="text-red-500 text-[10px] sm:text-xs mt-1 sm:mt-1.5">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
