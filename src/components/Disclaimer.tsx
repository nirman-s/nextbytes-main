import React from 'react';

const Disclaimer: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Disclaimer</h1>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="font-semibold text-gray-800">NextBytes Innovations</p>
        <p className="text-gray-600 text-sm">Last Updated: 23/07/2025</p>
      </div>

      <div className="text-gray-700 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">1. General Disclaimer</h2>
          <p className="mb-3">
            Welcome to NextBytes. The information, tools, and services provided on this website (<a href="https://www.nextbytes.in" className="text-blue-600 hover:text-blue-800">www.nextbytes.in</a>) are intended for general informational and service-related purposes only. While we endeavor to provide accurate and up-to-date content, NextBytes makes no guarantees about the completeness, reliability, or accuracy of any information found on this site.
          </p>
          <p>
            By using our website, you accept and agree to be bound by this Disclaimer and our Privacy Policy and Terms of Use. If you do not agree, please refrain from using our website or services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Service Use and Limitations</h2>
          <p className="mb-3">
            All services provided by NextBytes — including but not limited to website development, automation setup, content creation, or integrations — are designed based on client requirements and available tools. We do not guarantee specific business results (such as traffic, sales, or rankings) unless explicitly mentioned in a signed agreement.
          </p>
          <p className="mb-3">
            <strong>Tool & Tech Limitations:</strong> Many of our processes use third-party tools, automation platforms, and web frameworks. We are not responsible for the performance, pricing changes, or policy shifts made by these third-party services.
          </p>
          <p>
            <strong>Responsibility of Clients:</strong> It is the responsibility of clients to provide accurate project details, ownership permissions for any images or content, and timely feedback during the project.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">3. No Professional Advice</h2>
          <p className="mb-3">
            All content on this website, including blogs, examples, tutorials, and documentation, is provided for informational purposes only and does not constitute professional legal, financial, or technical advice.
          </p>
          <p>
            Users should consult with a qualified professional before making decisions based on any information provided by NextBytes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Liability Disclaimer</h2>
          <p className="mb-3">
            NextBytes and its team will not be held liable for any direct, indirect, incidental, or consequential damages, including but not limited to data loss, business interruption, or financial losses, resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Use of or inability to use our website or services</li>
            <li>Unauthorized access to client data</li>
            <li>Delay or failure in performance due to third-party platforms</li>
            <li>Any reliance placed on information provided on this website</li>
          </ul>
          <p>
            Use of our services is entirely at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Third-Party Links & Tools</h2>
          <p>
            Our website may contain links to external websites, software, or platforms that are not provided or maintained by NextBytes. These links are for convenience only. NextBytes does not endorse and is not responsible for the content, policies, or practices of any third-party websites or tools.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Intellectual Property</h2>
          <p>
            All content, logos, branding, and intellectual property displayed on this website are the property of NextBytes or respective creators, unless otherwise stated. Unauthorized use, reproduction, or distribution of our content is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Changes to this Disclaimer</h2>
          <p>
            NextBytes reserves the right to update, modify, or remove any part of this disclaimer at any time without prior notice. It is your responsibility to check this page periodically for changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">8. Contact Us</h2>
          <p className="mb-3">
            If you have any questions about this Disclaimer or need clarification regarding our services, feel free to reach out:
          </p>
          <div className="space-y-2">
            <p>📧 Email: <a href="mailto:admin@nextbytes.in" className="text-blue-600 hover:text-blue-800">admin@nextbytes.in</a></p>
            <p>📍 Location: Bhubaneswar, India</p>
            <p>🌐 Website: <a href="https://www.nextbytes.in" className="text-blue-600 hover:text-blue-800">www.nextbytes.in</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Disclaimer; 