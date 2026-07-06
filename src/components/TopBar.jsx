import { Link, useLocation } from "react-router-dom";

export default function TopBar() {
  const location = useLocation();

  const pages = {
    "/friends": 1,
    "/tired": 2,
    "/boring": 3,
    "/busy": 4,
    "/sleep": 5,
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <Link
          to="/"
          className="text-xl font-black text-orange-400"
        >
         انا مش انا 
        </Link>

        {pages[location.pathname] && (
          <span className="text-slate-300">
            العذر {pages[location.pathname]} من 5
          </span>
        )}

      </div>
    </header>
  );
}