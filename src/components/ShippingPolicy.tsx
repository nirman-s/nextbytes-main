import React from 'react';

const ShippingPolicy: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Shipping Policy</h1>
      <p className="text-gray-600 text-sm mb-6 italic">Last updated on July 23rd, 2025</p>
      
      <div className="text-gray-700 space-y-4">
        <p>
          At NextBytes, we are a digital-first service provider based in Odisha, India, offering web development, hosting, and digital solutions. As we specialize in digital products and services, shipping of physical goods is not applicable to our business.
        </p>
        
        <p>
          All deliverables such as websites, hosting details, or related digital assets are delivered electronically via email, customer dashboard, or other online communication channels. You will receive your service updates and final outputs within the delivery timeline agreed upon during the order or as per the package purchased.
        </p>
        
        <p>
          There is no physical shipment involved. Therefore, no shipping charges, tracking numbers, or courier services are applicable to any of our offerings.
        </p>
        
        <p>
          If you face any delay in receiving your digital assets, please reach out to us at:<br/>
          📩 <a href="mailto:support@nextbytes.in" className="text-blue-600 hover:text-blue-800">support@nextbytes.in</a>
        </p>
        
        <p className="font-medium">
          We're committed to timely digital delivery and are here to help!
        </p>
      </div>
    </div>
  </div>
);

export default ShippingPolicy; 