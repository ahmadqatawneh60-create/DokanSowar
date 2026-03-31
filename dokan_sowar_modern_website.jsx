import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DokanSowar() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-widest">Dokan Sowar</h1>
        <div className="space-x-6 text-sm">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Capture Moments.
          <br />
          Create Memories.
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-xl">
          Professional photography studio specializing in portraits, events, and creative shoots.
        </p>

        <Button className="mt-8 rounded-2xl px-6 py-4 text-lg">
          Book Now
        </Button>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">About Us</h3>
        <p className="text-gray-400">
          At Dokan Sowar, we turn your moments into timeless art. Our studio combines creativity, lighting mastery, and modern editing to deliver stunning visuals.
        </p>
      </section>

      {/* Gallery */}
      <section id="work" className="px-6 py-20">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <motion.img
              key={i}
              src={`https://source.unsplash.com/600x600/?portrait,photography&sig=${i}`}
              className="rounded-2xl object-cover h-80 w-full"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
        <p className="text-gray-400">Phone: 07XXXXXXXX</p>
        <p className="text-gray-400">Amman, Jordan</p>

        <a href="https://www.instagram.com/dokansowar/" target="_blank">
          <Button className="mt-6 rounded-2xl">Instagram</Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Dokan Sowar Studio
      </footer>
    </div>
  );
}
