import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <motion.div>

        <Component {...pageProps} />
        <motion.div className="slide-in absolute top-0 left-0 w-[100%] h-[100vh] origin-bottom bg-[#23297A]" initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} ></motion.div>
        <motion.div className="slide-out absolute top-0 left-0 w-[100%] h-[100vh] origin-top bg-[#23297A]" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}></motion.div>
      </motion.div>
    </AnimatePresence>


  );
}
