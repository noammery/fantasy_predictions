import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-10 bg-red-500">
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 pb-12 flex flex-col items-center">
        <motion.div
          className="text-center max-w-3xl mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            Smarter FPL Picks, Powered by Data
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 w-full max-w-[90%] sm:max-w-[500px] md:max-w-[650px] mx-auto">
            Our prediction engine helped a top 2% FPL player climb the ranks —
            without watching a single match. Make your picks based on data, not
            guesswork.
          </p>
        </motion.div>

        <motion.img
          src="/Logo.png"
          alt="FPL Predictor Logo"
          className="mb-6 drop-shadow-[0_0_30px_rgba(0,255,153,0.3)]"
          style={{ width: "250px", height: "auto" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <button
          onClick={() => navigate("/predictions")}
          className="relative group overflow-hidden text-white font-bold text-base px-10 py-4 rounded-xl transition-all duration-300 ease-out
  bg-gradient-to-r from-[#00ff99] to-[#00ccff] shadow-[0_0_20px_rgba(0,255,153,0.3)] hover:shadow-[0_0_40px_rgba(0,255,153,0.5)] hover:scale-105 mb-2"
        >
          <span className="relative z-10">🔮 View Predictions</span>
          <span
            className="absolute inset-0 z-0 blur-xl opacity-60 group-hover:opacity-90 transition duration-300 
       bg-gradient-to-r from-[#00ff99] to-[#00ccff]"
          />
        </button>
        <motion.div
          className="mt-12 max-w-4xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Why It Works</h2>
          <p className="text-gray-400 text-lg w-full max-w-[90%] sm:max-w-[500px] md:max-w-[650px] mx-auto">
            This isn’t guesswork or gut feeling. Tamir, a data wizard, built a
            powerful Excel model that predicts FPL player value using gameweek
            stats, pricing, fixture difficulty, and form — better than any tool
            out there. you won't be disappointed.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
