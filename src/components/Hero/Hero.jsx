import { motion } from "framer-motion";

export default function Hero() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-orange-500/20 text-orange-300 px-5 py-2 rounded-full border border-orange-500/30">
            🔥 المؤتمر قرب
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            مستعد
            <br />
            <span className="text-orange-400">
              تضيع أحلى مؤتمر
            </span>
            <br />
            في السنة؟
          </h1>

          <p className="mt-8 text-slate-300 text-xl leading-10">
            كل واحد عنده عذر...
            <br />
            تعالى نشوف إذا كان عذرك يستاهل،
            ولا هنقنعك تحضر 😂
          </p>

          <button
            onClick={() => {
              document.getElementById("reasons")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="
              mt-10
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              font-bold
              text-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(249,115,22,.45)]
            "
          >
            ابدأ الأعذار 🚀
          </button>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-6 border border-white/10 shadow-2xl">
            <img
              src={`${BASE}memes/main.png`}
              alt="Conference Meme"
              className="w-full max-w-md object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}