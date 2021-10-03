export function TextInput({ children, ...rest }) {
  return (
    <input
      className="p-2 rounded-lg border-2 border-gray-300 w-full md:max-w-xs"
      type="text"
      {...rest}
    >
      {children}
    </input>
  );
}
