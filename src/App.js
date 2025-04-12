import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";
import Projects from "./components/Projects";
import Footer from "./components/Fotter";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      {/* Navbar */}
      <Navbar2 />

      {/* Scroll Animations with Routes */}
      <Routes>
        {/* Main Route */}
        <Route
          path="/"
          element={
            <>
              {/* Apply animations to each section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={fadeInVariants}
              >
                <Home />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                variants={fadeInVariants}
              >
                <Experience />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={fadeInVariants}
              >
                <Projects />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                variants={fadeInVariants}
              >
                <Certificate />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                variants={fadeInVariants}
              >
                <About />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 1 }}
                variants={fadeInVariants}
              >
                <Contact />
              </motion.div>
            </>
          }
        />

        {/* Individual Routes */}
        <Route
          path="/about"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
            >
              <Experience />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/certificate"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
            >
              <Certificate />
            </motion.div>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
