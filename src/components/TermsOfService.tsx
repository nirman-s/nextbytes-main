import React from 'react';

const TermsOfService: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms of Service</h1>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p><strong>Effective Date:</strong> July 23, 2025</p>
        <p><strong>Website:</strong> <a href="https://nextbytes.in" className="text-blue-600 hover:text-blue-800">https://nextbytes.in</a></p>
        <p><strong>Email:</strong> <a href="mailto:support@nextbytes.in" className="text-blue-600 hover:text-blue-800">support@nextbytes.in</a></p>
      </div>

      <div className="text-gray-700 space-y-6">
        <p>
          Welcome to NextBytes! These Terms and Conditions ("Terms") govern your use of our website and our services. By accessing or using our website or services, you agree to be bound by these Terms.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Introduction</h2>
          <p>
            NextBytes ("we", "our", "us") is a digital service business based in Odisha, India. We currently offer affordable website creation services and plan to expand into SEO, hosting, and maintenance. All services are rendered on a freelance or contractual basis. We are not a registered company or GST entity at this time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Services Provided</h2>
          <p className="mb-3">We offer:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Website creation (static and dynamic)</li>
            <li>Optional add-ons such as maintenance, domain setup, hosting, and SEO (to be introduced)</li>
            <li>Recurring services for updates or management (monthly/yearly)</li>
          </ul>
          <p>We reserve the right to modify or discontinue services at any time, with or without notice.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Payments</h2>
          <div className="space-y-3">
            <p>All payments must be made in full before project delivery unless otherwise agreed in writing.</p>
            <p>We use Razorpay as our official payment gateway. Any transaction made outside Razorpay is at the client's own risk.</p>
            <p>Recurring services (like hosting or maintenance) must be renewed timely to avoid suspension.</p>
            <p>Payments are non-refundable once the service has been initiated or delivered.</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Delivery Timelines</h2>
          <p className="mb-3">We commit to transparent communication regarding delivery timelines. However, delivery may vary based on:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Client responsiveness</li>
            <li>Scope changes during the project</li>
            <li>Technical or external dependencies</li>
          </ul>
          <p>Delays caused by client-side inactivity are not our responsibility.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Client Responsibilities</h2>
          <p className="mb-3">Clients must:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Provide accurate information during onboarding</li>
            <li>Supply timely content and feedback</li>
            <li>Pay dues as agreed</li>
            <li>Avoid misuse or unethical use of the website created by NextBytes</li>
          </ul>
          <p>Failure to meet these may delay or void service delivery.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Ownership & Usage Rights</h2>
          <p className="mb-3">Upon full payment, clients receive rights to use the delivered website and its contents.</p>
          <p>NextBytes retains the right to showcase completed projects in its portfolio or on its website unless the client explicitly requests otherwise in writing.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Warranties & Liabilities</h2>
          <div className="space-y-3">
            <p>We do not guarantee specific business results (e.g., traffic, sales, or rankings) from our services.</p>
            <p>We are not liable for any loss, damages, or disputes arising from the use of our websites or third-party tools/platforms (e.g., hosting providers).</p>
            <p>All services are delivered "as-is" and "as available."</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">8. Termination of Service</h2>
          <p className="mb-3">We reserve the right to terminate or refuse service to any client:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Who breaches these terms</li>
            <li>Whose project involves illegal or unethical content</li>
            <li>Who fails to make payments on time</li>
          </ul>
          <p>No refunds will be given in such cases.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">9. Intellectual Property</h2>
          <p>Unless specified, all templates, design assets, and source code created by NextBytes are custom-developed for the client. Pre-made assets (e.g., plugins, stock images) are subject to their respective licenses.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">10. Communication</h2>
          <p className="mb-3">All official communication shall take place via our official email:</p>
          <p className="mb-3">📧 <a href="mailto:support@nextbytes.in" className="text-blue-600 hover:text-blue-800">support@nextbytes.in</a></p>
          <p>We are not responsible for messages or instructions given through unofficial channels such as DMs, WhatsApp, or personal contacts.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">11. Privacy</h2>
          <p>We respect your privacy. We do not sell or share client data with third parties. We only collect necessary information for project delivery and support.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">12. Governing Law</h2>
          <p>These Terms shall be governed by the laws of India. Any disputes shall be resolved in the courts located in Bhubaneswar, Odisha.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">13. Updates to Terms</h2>
          <p>We reserve the right to update or modify these Terms at any time. It is your responsibility to review them periodically. Continued use of our website or services implies your acceptance of the changes.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Contact Us</h2>
          <p>If you have any questions about these Terms, reach out to:</p>
          <p className="mt-2">📧 <a href="mailto:support@nextbytes.in" className="text-blue-600 hover:text-blue-800">support@nextbytes.in</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService; 