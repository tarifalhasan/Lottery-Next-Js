import React, { useState, useEffect } from 'react';
import { faq } from '@/components/data/data';
import Layout from '@/components/Layout/Layout';

const FaqPage = () => {
  const [openItems, setOpenItems] = useState({});
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setOpenItems({ 0: true });
    setTheme({ 0: true });
  }, []);

  const toggleItem = index => {
    setOpenItems({ ...openItems, [index]: !openItems[index] });
    setTheme({ ...theme, [index]: !theme[index] });
  };

  return (
    <Layout>
      <section className="main-container md:px-10">
        <div className="py-5 pt-2">
          <h2 className="text-center text-[1.688em] py-4 text-[#434648] md:text-[3.125em]">
            Guarantees
          </h2>
          <ul className="flex flex-col gap-y-10 py-6 ">
            {faq.guarantee.map(guarantee => (
              <li
                className="text-[1.2em] text-[#434648] leading-[125%]"
                key={guarantee.id}
              >
                {guarantee.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-5 pt-2">
          <h2 className="text-center py-4 text-[#434648] text-[1.688em] md:text-[3.125em]">
            Frequently Asked Questions
          </h2>
          <ul className="flex flex-col gap-y-6 py-6 ">
            {faq.faq.map((item, index) => (
              <li
                className={`text-[1.2em] border cursor-pointer rounded-lg py-4 px-3 border-[#E5EAF4]  `}
                key={item.question}
              >
                <span
                  onClick={() => toggleItem(index)}
                  className={`block text-[1em] ${
                    theme[index] ? 'text-[#01A8FF]' : 'text-[#434648]'
                  } `}
                >
                  {item.question}
                </span>
                {openItems[index] && (
                  <span className="block text-[0.9em] py-2">{item.answer}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage;
