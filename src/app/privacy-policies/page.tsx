import React from 'react';

const PrivacyPolicies = () => {
  return (
    <section className="max-w-3xl xl:max-w-6xl mx-auto my-32 bg-white text-black p-12 xl:p-24 rounded-md">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-400">Last Updated: 5 Feb 2025</p>

      <p className="mt-4">
        At <strong>Altux Studio</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we
        collect, use, and safeguard your personal information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
      <ul className="list-disc pl-6">
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other details provided when you contact us or use our services.</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device information, and other data collected automatically when you visit our website.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website and services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul className="list-disc pl-6">
        <li>To provide and improve our services.</li>
        <li>To communicate with you regarding inquiries, support, and service updates.</li>
        <li>To analyze website performance and user experience.</li>
        <li>To comply with legal requirements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to enhance your browsing experience and collect analytical data. You can adjust your browser settings to disable cookies if you prefer.</p>

      <h2 className="text-2xl font-semibold mt-6">4. Third-Party Services</h2>
      <p>We may use third-party service providers for analytics, payments, or other business functions. These third parties are obligated to protect your data in accordance with their policies.</p>

      <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
      <p>We take reasonable measures to protect your personal data from unauthorized access, loss, or misuse. However, no online transmission is 100% secure, and we cannot guarantee absolute security.</p>

      <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul className="list-disc pl-6">
        <li>Access, update, or delete your personal data.</li>
        <li>Opt out of marketing communications.</li>
        <li>Request data portability.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">7. Children’s Privacy</h2>
      <p>Our services are not intended for children under the age of 13, and we do not knowingly collect their data.</p>

      <h2 className="text-2xl font-semibold mt-6">8. Changes to This Policy</h2>
      <p>We reserve the right to update this Privacy Policy at any time. Significant changes will be communicated via our website.</p>

      <h2 className="text-2xl font-semibold mt-6">9. Contact Us</h2>
      <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
      <a href='mailto:contact@altuxstudio.com' className="font-semibold underline decoration-blue-500">📩 contact@altuxstudio.com</a>
    </section>
  );
};

export default PrivacyPolicies;
