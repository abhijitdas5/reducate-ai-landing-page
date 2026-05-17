"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#070b1a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-cyan-500/20 backdrop-blur-md sticky top-0 bg-[#070b1a]/80 z-50">
        <h1 className="text-3xl font-bold text-cyan-400">
          Reducate.ai
        </h1>

        <ul className="hidden md:flex gap-8 font-semibold">
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            About
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Features
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Testimonials
          </li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-cyan-400 text-black px-5 py-2 rounded-full font-bold shadow-lg"
        >
          Get Started
        </motion.button>
      </nav>

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-28">

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Learn Modern Skills <br />
          Build Your Dream Career
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 max-w-2xl text-lg mb-8"
        >
          Industry-focused learning platform with mentorship,
          real-world projects, and placement support.
        </motion.p>

        <div className="flex gap-5 flex-wrap justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-cyan-400 text-black px-7 py-3 rounded-full font-bold"
          >
            Explore Courses
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border border-cyan-400 px-7 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition"
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 py-20 text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-6 text-cyan-400"
        >
          About Us
        </motion.h2>

        <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-8">
          Reducate.ai empowers students and professionals with
          practical skills, live mentorship, hands-on projects,
          and career guidance. Our mission is to make quality
          education modern, accessible, and industry-ready.
        </p>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-20">

        <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/20 shadow-xl"
          >
            <FaLaptopCode className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-3xl font-bold mb-4">
              Real Projects
            </h3>
            <p className="text-gray-300">
              Build practical applications and gain real-world
              experience.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/20 shadow-xl"
          >
            <FaUserGraduate className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-3xl font-bold mb-4">
              Mentorship
            </h3>
            <p className="text-gray-300">
              Learn directly from experienced industry professionals.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/20 shadow-xl"
          >
            <FaStar className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-3xl font-bold mb-4">
              Career Support
            </h3>
            <p className="text-gray-300">
              Resume building, interview preparation, and placement support.
            </p>
          </motion.div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 py-20">

        <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#111827] p-8 rounded-3xl"
          >
            <p className="text-gray-300 mb-5">
              “Amazing learning platform. The mentorship helped me get my first internship.”
            </p>
            <h4 className="font-bold text-cyan-400">
              Abhijit Das
            </h4>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#111827] p-8 rounded-3xl"
          >
            <p className="text-gray-300 mb-5">
              “Modern UI, practical projects, and excellent support.”
            </p>
            <h4 className="font-bold text-cyan-400">
              Priya Das
            </h4>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#111827] p-8 rounded-3xl"
          >
            <p className="text-gray-300 mb-5">
              “One of the best platforms for skill development.”
            </p>
            <h4 className="font-bold text-cyan-400">
              Aman Verma
            </h4>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center">

        <motion.h2
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.7 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold mb-6"
        >
          Ready To Upgrade <br />
          Your Career?
        </motion.h2>

        <p className="text-gray-300 mb-8 text-lg">
          Join thousands of students building their future with Reducate.ai
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg"
        >
          Join Now
        </motion.button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 py-10 text-center text-gray-400">
        <h2 className="text-3xl font-bold text-cyan-400 mb-3">
          Reducate.ai
        </h2>

        <p>© 2026 All Rights Reserved</p>
      </footer>

    </main>
  );
}