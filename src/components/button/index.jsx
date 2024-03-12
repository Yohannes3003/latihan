export default function Button({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-green-600 border-green-600 text-white',
    secondary: 'bg-transparent text-green-600 border-green-600 border',
  };

  return <button className={`py-2 px-6 w-full rounded-md font-bold text-sm block hover:opacity-90 active:scale-[0.98] ${variants[variant]}`}>{children}</button>;
}
