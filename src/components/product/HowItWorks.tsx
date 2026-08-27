"use client";

import { motion } from "framer-motion";

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
  subtitle: string;
}

export default function HowItWorks({ steps, subtitle }: HowItWorksProps) {
  return (
    <section className="bg-white py-20 px-6">
      <div className="site-container text-center">
        <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How it Works
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-14">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 rounded-2xl p-8 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <img
                  src={step.icon}
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h4 className="font-['Outfit'] text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h4>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
