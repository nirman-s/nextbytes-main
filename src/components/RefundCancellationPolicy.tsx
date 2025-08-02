import React from 'react';

const RefundCancellationPolicy: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Refund & Cancellation Policy</h1>
      <p className="text-gray-600 text-sm mb-6 italic">Last Updated: July 23, 2025</p>
      
      <div className="text-gray-700 space-y-6">
        <p>
          At NextBytes Innovations, we take pride in offering reliable and affordable digital services, including website design, development, hosting, and maintenance. This Refund & Cancellation Policy outlines the terms under which cancellations and refunds are processed for services booked through our platform.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">🚫</span> Cancellation Policy
          </h2>
          <div className="space-y-3">
            <p>
              Clients may request a cancellation <strong>within 2 hours of payment</strong>. In such cases, an 80% refund will be processed, and 20% will be retained as administrative and processing charges.
            </p>
            <p>
              Cancellations are not accepted once we begin working on the project or after the 2-hour window has passed.
            </p>
            <p>
              Cancellations made after work has started, or beyond the 2-hour mark, are not eligible for a refund.
            </p>
            <p>
              Cancellations requested within 2 days of payment will be considered only if we fail to initiate the project or are unable to deliver the service due to unforeseen reasons from our end.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">💸</span> Refund Policy
          </h2>
          <div className="space-y-3">
            <p>
              Since we follow a full upfront payment model, refunds are subject to strict timing guidelines.
            </p>
            <p>
              No refunds will be entertained once the website design or development process begins.
            </p>
            <p>
              We do not offer refunds for delays caused due to the client (e.g., not providing necessary content, images, or feedback on time).
            </p>
            <p>
              No refunds will be granted once the website or deliverables are approved or deployed.
            </p>
            <p>
              Refunds, if applicable, will be processed to the original payment method within 7–10 working days.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">📩</span> How to Request a Cancellation or Refund
          </h2>
          <p className="mb-3">
            To request a cancellation or refund (if eligible), please email us at:
          </p>
          <p className="mb-3">
            📧 <a href="mailto:support@nextbytes.in" className="text-blue-600 hover:text-blue-800">support@nextbytes.in</a>
          </p>
          <p>
            Include your name, project/order ID, payment reference, and reason for the request.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">📌</span> Important Notes
          </h2>
          <div className="space-y-3">
            <p>
              All projects are handled with utmost professionalism and clear client communication. Please ensure you review the project scope and clarify expectations before making payment.
            </p>
            <p>
              This policy is applicable only for services offered by NextBytes Innovations and does not cover any third-party tools, domains, or hosting purchased separately.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RefundCancellationPolicy; 