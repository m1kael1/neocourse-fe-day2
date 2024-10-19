export const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  errors,
  validation,
  className = "",
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className='block mb-2'>
          {label}
        </label>
      )}
      <input
        {...register(name, validation)}
        type={type}
        name={name}
        id={name}
        className={`border-2 h-14 p-2 rounded-xl w-full ${className}`}
        placeholder={placeholder}
        {...props}
      />
      {errors?.[name] && (
        <p className='text-red-500 mt-1'>{errors[name]?.message}</p>
      )}
    </div>
  );
};
