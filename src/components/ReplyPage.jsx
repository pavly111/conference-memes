import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function ReplyPage({ data }) {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - MEMES */}
        <div className="space-y-10">

          {/* MEME 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={data.meme1}
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-contain"
            />
          </motion.div>

          {/* REPLY BOX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
          >
            <p className="text-xl leading-loose whitespace-pre-line text-center">
              {data.reply}
            </p>
          </motion.div>

          {/* MEME 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={data.meme2}
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-contain"
            />
          </motion.div>

        </div>

        {/* RIGHT SIDE - INFO */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left"
        >

          <ProgressBar step={data.step} />

          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            {data.title}
          </h1>

          <Link to={data.next}>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold text-lg transition">
              السبب اللي بعده →
            </button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}