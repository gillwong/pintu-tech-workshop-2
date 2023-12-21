export default function Navbtn({ onClick, isActive, children }) {
  if (isActive) {
    <button
      onClick={onClick}
      className="font-semibold border-2 border-slate-600 py-2 px-4 bg-slate-300 rounded-lg drop-shadow-md hover:bg-slate-200 transition"
    >
      {children}
    </button>;
  }
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 bg-slate-300 rounded-lg drop-shadow-md hover:bg-slate-200 transition"
    >
      {children}
    </button>
  );
}
