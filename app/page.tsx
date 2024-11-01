'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  return (
    <div className="relative">
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center text-white px-4"
          >
            <h1 className="text-6xl font-extrabold mb-4 leading-tight">Welcome to HumaneChat</h1>
            <p className="text-2xl mb-8 max-w-2xl mx-auto">
              Elevate your customer experience with our intelligent chatbots.
            </p>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-blue-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Discover More
            </motion.a>
          </motion.div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Features</h2>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Advanced Chatbots',
                  description:
                    'HumaneChat chatbots are designed to understand nuanced user language and emotion, offering an interactive experience perfect for any business type.',
                  gradient: 'from-green-400 to-blue-500',
                  delay: 0.2,
                },
                {
                  title: 'Smart Knowledge Bases',
                  description:
                    'Our system prioritizes your data, providing secure and permission-based access. Build multiple chatbots with unique data sets for varied applications.',
                  gradient: 'from-yellow-400 to-red-500',
                  delay: 0.4,
                },
                {
                  title: 'User-Friendly Interface',
                  description:
                    'Create and deploy chatbots effortlessly. Our platform handles the technical details, letting you focus on your core business.',
                  gradient: 'from-purple-400 to-pink-500',
                  delay: 0.6,
                },
                {
                  title: 'Continuous Learning',
                  description:
                    'Our chatbots learn from interactions, ensuring consistent and reliable responses by caching and refining replies based on user feedback.',
                  gradient: 'from-indigo-400 to-blue-500',
                  delay: 0.8,
                },
              ].map((feature, index) => (
                <FadeInSection key={index} delay={feature.delay}>
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} p-8 rounded-xl shadow-lg h-full`}
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-lg text-white/90">{feature.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <FadeInSection>
            <div className="text-center text-white px-4">
              <h2 className="text-4xl font-bold mb-8">Get Started with HumaneChat</h2>
              <motion.a
                href="/signup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-white text-blue-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Sign Up Now
              </motion.a>
            </div>
          </FadeInSection>
        </section>
      </main>

      <footer className="w-full py-8 text-center text-white bg-gray-800">
        <FadeInSection>
          <p>&copy; 2024 HumaneChat. All rights reserved.</p>
        </FadeInSection>
      </footer>
    </div>
  );
}
