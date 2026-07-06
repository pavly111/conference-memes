import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

export default function ReasonCard({ reason }) {
  return (
    <Tilt
  glareEnable={true}
  glareMaxOpacity={0.2}
  scale={1.03}
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  transitionSpeed={1500}
>
  {/* الكارت الحالي */}

    <motion.div
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-[32px]
    bg-white/5
    border
    border-white/10
    backdrop-blur-xl
    shadow-2xl
    hover:border-orange-400/40
    duration-300
  "
>
      {/* Meme */}

      <div className="bg-slate-900 h-72 flex items-center justify-center p-5">
<div
  className="
    absolute
    -top-24
    -right-24
    h-52
    w-52
    rounded-full
    bg-orange-500/20
    blur-3xl
    opacity-0
    transition
    duration-500
    group-hover:opacity-100
  "
/>
        <img
          src={reason.image}
          alt={reason.title}
          className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
        />

      </div>

      {/* Text */}

      <div className="p-7">

        <motion.h2
  whileHover={{ x: -5 }}
  className="text-2xl font-black mb-6"
>
  {reason.title}
</motion.h2>

        <Link to={reason.path}>

          <button className="
w-full
rounded-2xl
bg-gradient-to-r
from-orange-500
to-orange-600
py-4
font-bold
transition-all
duration-300
hover:shadow-[0_0_40px_rgba(249,115,22,.45)]
hover:scale-[1.02]
flex
justify-center
items-center
gap-3
">

            ده سببي

            <FaArrowLeftLong />

          </button>

        </Link>

      </div>

    </motion.div>
</Tilt>
  );
}