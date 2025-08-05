import React from 'react';

const AboutUs: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">About Us</h1>
      
      <div className="text-gray-700 space-y-6 leading-relaxed">
        <p>
          NextBytes Innovations was founded on 23rd July 2025 with one clear mission — to deliver high-quality digital services at affordable prices, and with lightning-fast turnaround.
        </p>
        
        <p>
          Born from a passion for technology and AI, we're a startup built by creators who understand the modern demands of businesses, brands, and individuals who need a powerful online presence — without breaking the bank or waiting for weeks.
        </p>
        
        <p>
          We specialize in web design and development, offering everything from domain setup, hosting, and SEO integration, to full-fledged websites with up to 10 pages and same-day delivery. Whether you're launching your first site or scaling up your digital game, we make it easy, fast, and budget-friendly.
        </p>
        
        <p>
          NextBytes isn't just a one-time service — we're building an ecosystem. We're soon expanding into SEO, website hosting, and monthly maintenance plans, offering end-to-end solutions to keep your online presence running smooth and strong.
        </p>
        
        <p>
          We're a small but growing team committed to making high-quality tech accessible to everyone.
        </p>
        
        <p className="font-medium text-gray-800">
          Join us on this journey — we move fast, we build smart, and we deliver value.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
