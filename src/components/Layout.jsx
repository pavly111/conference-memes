import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Background from "./Background/Background";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      <Background />

      <div className="relative z-10">

        <AnimatePresence mode="wait">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: .45 }}
          >
            <TopBar />
            <Outlet />
          </motion.div>

        </AnimatePresence>

        <Footer />

      </div>

    </main>
  );
}