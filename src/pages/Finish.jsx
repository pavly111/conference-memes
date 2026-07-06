import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Finish() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-3xl">

        <h1 className="text-7xl font-black">

          🏆

        </h1>

        <h2 className="text-5xl mt-8 font-black">

          خلصت كل الأعذار 😎

        </h2>

        <p className="mt-8 text-2xl text-slate-300">

          معندكش حجة خلاص...

          <br />

          مستنيينك في المؤتمر ❤️

        </p>

        <button className="mt-12 bg-orange-500 px-8 py-4 rounded-2xl text-xl font-bold">

          سجل دلوقتي 🚀

        </button>

      </div>

    </section>
  );
}