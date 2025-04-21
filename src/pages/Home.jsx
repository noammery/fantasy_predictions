import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Star, TrendingUp, Award } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src="/Logo.png"
              alt="FPL Predictor Logo"
              className="mx-auto block mb-2 drop-shadow-[0_0_30px_rgba(0,255,153,0.3)]"
              style={{ width: "200px", height: "auto" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />

            <h1 className="text-4xl md:text-6xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Fantasy Premier League AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unleash the power of AI to dominate your Fantasy Premier League.
              Get accurate predictions and stay ahead of the competition.
            </p>
            <button
              onClick={() => navigate("/predictions")}
              className="relative group overflow-hidden text-white font-bold text-base px-10 py-4 rounded-xl transition-all duration-300 ease-out
  bg-gradient-to-r from-[#00ff99] to-[#00ccff] shadow-[0_0_20px_rgba(0,255,153,0.3)] hover:shadow-[0_0_40px_rgba(0,255,153,0.5)] hover:scale-105 mb-2"
            >
              <span className="relative z-10">View Predictions</span>
              <span
                className="absolute inset-0 z-0 blur-xl opacity-60 group-hover:opacity-90 transition duration-300 
       bg-gradient-to-r from-[#00ff99] to-[#00ccff]"
              />
            </button>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-400">
              Advanced algorithms analyze historical data and current form to
              provide accurate predictions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Weekly Updates</h3>
            <p className="text-gray-400">
              Get fresh predictions and insights before each gameweek to
              maximize your points.
            </p>
          </motion.div>
        </div>
        {/*
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
       
            <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-400">
              Our predictions have helped thousands of managers climb their
              league rankings.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">94%</div>
            <div className="text-gray-400">Prediction Accuracy</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">250K+</div>
            <div className="text-gray-400">Predictions Made</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">
              Top 2%
            </div>
            <div className="text-gray-400">Average User Rank</div>
          </div>
        </div>
      </motion.div>
      */}
      </div>
    </div>
  );
}
