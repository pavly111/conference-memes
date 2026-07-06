import reasons from "../data/reasons";
import ReasonCard from "./ReasonCard/ReasonCard";
import { motion } from "framer-motion";

export default function ReasonsSection() {
  return (
    <section
      id="reasons"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-black text-center mb-5"
      >
        اختار عذرك 😂
      </motion.h2>

      <p className="text-center text-slate-400 mb-16 text-lg">
        دوس على أي سبب... ونشوف هنعرف نقنعك ولا لأ 😏
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
       {reasons.map((reason, index) => (
  <motion.div
    key={reason.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.12,
    }}
  >
    <ReasonCard reason={reason} />
  </motion.div>
))}
      </div>
    </section>
  );
}