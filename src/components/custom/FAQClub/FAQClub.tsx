import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqData: FAQItem[] = [
  {
    question: "How old does my kid need to be to join?",
    answer:
      "We accept 8 years old and up into our Code Club",
  },
  {
    question: "I would like my kid to join, but have no idea what class(es) they should do?",
    answer:
      ["Historically, most kids would start with Beginner's HTML, which is an introduction to web development, teaching how to make websites, just like this one!",
      "However, moving to a beginner-friendly programming class like Beginner's Python, which will teach real programming and scripting, would also be a great choice."]
  },
  {
    question: "If my kid doesn't like the class they joined can they switch?",
    answer:
      "Yes! This isn't like school - if the kid doesn't like what they're doing, they're not going to learn much so there's no point in making them stick it out. You can change class whenever you want, and encourage new kids to move around for their first two weeks if they're not sure what class to join.",
  },
  {
    question: "What facilities are available?",
    answer:
      ["There's a kitchen, where parents can wait, with a coffee machine (that also does hot chocolate), a kettle, teabags, and mugs and glasses. This is a place recommended for parents to stay, as there is seating and is a good atmosphere to chat with other parents.",
      "Free guest WiFi (get in touch with one of the mentors, or the Code Club leader (Thomas) to get access.)",
      "There is a wheelchair-accessible bathroom."]
  },
  {
    question: "I would like to keep an eye on my kid while they're in class, is this ok?",
    answer:
      "Yes! Parents can sit-in on classes and help their kid if they like.",
  },
];

const FAQClub: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-4">
      <h2 className="text-center text-3xl md:text-5xl font-light mb-12">Frequently Asked <span className="text-blue-500 font-medium"> Questions</span></h2>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-lg bg-white shadow transition hover:shadow-lg"
          >
            <button
              className="flex justify-between items-center w-full px-5 py-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 text-purple-700"
              >
                ▶
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  id={`faq-answer-${idx}`}
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden px-5"
                >
                  <div className="py-2 text-gray-600">
                    {Array.isArray(item.answer) ? (
                      <ul className="list-disc list-inside space-y-1">
                        {item.answer.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQClub;