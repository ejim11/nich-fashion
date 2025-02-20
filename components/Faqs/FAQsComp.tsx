"use client";
import React, { useEffect, useState } from "react";
import FAQITem from "./FAQItem";
import MainContainer from "../MainContainer";

const FAQsComp = () => {
  const [expanded, setExpanded] = useState<false | number>(false);

  const faqs = [
    {
      title: "How do I place an order?",
      text: `Simply browse our collection, select your preferred hoodie, choose the size and color, and click "Add to Cart." Proceed to checkout and complete your payment.`,
    },
    {
      title: "What payment methods do you accept?",
      text: "We accept all major credit/debit cards, PayPal, bank transfers, and digital wallets like Apple Pay and Google Pay.",
    },
    {
      title: "Can I modify or cancel my order after placing it?",
      text: "Yes, you can modify or cancel your order within 24 hours of placing it by contacting our customer service team - after that window, changes may be limited once processing has begun.",
    },
    {
      title: "What is your return policy?",
      text: "We offer a hassle-free 30-day return policy on all unworn items with original tags attached and in their original packaging.",
    },
    {
      title: "How do I find my size?",
      text: "Check our detailed size guide under each product listing, which includes measurements and fit recommendations to help you choose the perfect size.",
    },
    {
      title: "How long does shipping take?",
      text: "Standard shipping takes 3-5 business days within the US, while express shipping delivers within 1-2 business days - international shipping varies by location.",
    },
    {
      title: "Can I modify or cancel my order?",
      text: "Orders can be modified or cancelled within 2 hours of placement by contacting our customer service team - after that, the order enters processing and cannot be changed.",
    },
    {
      title: "Do you ship internationally?",
      text: "Yes, we ship to over 50 countries worldwide, with delivery times and shipping costs varying by location - enter your country at checkout for specific details.",
    },
    {
      title: "How do I track my order?",
      text: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your package's journey through our website or carrier's platform.",
    },
    {
      title: "Are your clothes true to size?",
      text: "Our clothing generally fits true to size, but we recommend checking the specific size guide and customer reviews for each item as fits can vary by style and brand.",
    },
    {
      title: "Do you offer gift wrapping?",
      text: "Yes, we offer premium gift wrapping services for $5 per item, including a personalized message card - select this option during checkout.",
    },
    {
      title: "What if my item arrives damaged?",
      text: "Contact our customer service team within 48 hours of delivery with photos of the damaged item, and we'll arrange a free return and replacement or refund.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: -80, behavior: "smooth" });
  }, []);

  return (
    <main>
      <MainContainer>
        <div>
          <h3 className="text-[4rem] font-dmsans font-bold  text-color-blue-1 mb-[5rem] text-center">
            Frequently Asked Questions
          </h3>
          <div className="w-[90%] mx-auto">
            {/* <LayoutGroup> */}
            {faqs.map((faq, i) => (
              <FAQITem
                key={i}
                expanded={expanded}
                index={i}
                setExpanded={setExpanded}
                title={faq.title}
                text={faq.text}
              />
            ))}
            {/* </LayoutGroup> */}
          </div>
        </div>
      </MainContainer>
    </main>
  );
};

export default FAQsComp;
