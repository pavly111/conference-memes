export default function ProgressBar({ step }) {
  return (
    <div className="w-full max-w-lg mx-auto mb-10">

      <div className="flex justify-between text-sm text-slate-400 mb-3">
        <span>العذر {step}</span>
        <span>5</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-orange-500 transition-all duration-500"
          style={{
            width: `${step * 20}%`,
          }}
        />

      </div>

    </div>
  );
}