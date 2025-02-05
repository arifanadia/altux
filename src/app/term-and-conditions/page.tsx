import React from "react";

export const metadata = {
    title: "Terms & Conditions",
    description: "Understand the rules and guidelines for using our services. Please review our terms carefully.",
  };
  

const TermAndConditions = () => {
  return (
    <div className="max-w-3xl xl:max-w-6xl mx-auto p-12 xl:p-24 my-32 text-black bg-white">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-sm text-gray-500">Last Updated: 5 February 2025</p>

      <p>
        Welcome to Altux Studio! These Terms and Conditions govern your use of our website and services. 
        By accessing our website or using our services, you agree to be bound by these terms. 
        If you do not agree, please refrain from using our website.
      </p>

      <h2 className="font-semibold mt-4">1. Definitions</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>Company:</strong> "we," "our," or "us" refers to Altux Studio.</li>
        <li><strong>Client:</strong> "you" refers to the individual or entity using our services.</li>
        <li><strong>Services:</strong> Web design, web development, SEO, and related digital services.</li>
      </ul>

      <h2 className="font-semibold mt-4">2. Services Offered</h2>
      <p>
        Altux Studio provides web design, web development, and SEO services based on project requirements.
        The scope of each project will be determined through a mutual agreement between the client and Altux Studio.
      </p>

      <h2 className="font-semibold mt-4">3. Payment Terms</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li>Pricing is based on project scope and client requirements.</li>
        <li>A non-refundable deposit may be required before work begins.</li>
        <li>Full payment is due upon project completion unless otherwise agreed.</li>
      </ul>

      <h2 className="font-semibold mt-4">4. Project Timelines</h2>
      <p>
        Estimated completion times are provided at the start of each project. Delays caused by the client may extend project timelines.
        Altux Studio is not responsible for unforeseen delays.
      </p>

      <h2 className="font-semibold mt-4">5. Intellectual Property</h2>
      <p>
        Upon full payment, the client receives ownership of the final deliverables unless otherwise specified.
        Altux Studio reserves the right to showcase completed projects in our portfolio unless agreed otherwise.
      </p>

      <h2 className="font-semibold mt-4">6. Revisions and Modifications</h2>
      <p>
        Revisions are subject to the terms agreed upon in the project scope. Additional revisions beyond the agreed scope may be subject to extra charges.
      </p>

      <h2 className="font-semibold mt-4">7. Client Responsibilities</h2>
      <p>
        Clients must provide necessary content, feedback, and approvals in a timely manner. 
        Clients must also ensure they have the legal right to use any provided materials, including images, text, and logos.
      </p>

      <h2 className="font-semibold mt-4">8. SEO Services Disclaimer</h2>
      <p>
        While we employ best SEO practices, we do not guarantee specific rankings on search engines. 
        SEO results depend on various external factors beyond our control.
      </p>

      <h2 className="font-semibold mt-4">9. Limitation of Liability</h2>
      <p>
        Altux Studio is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
      </p>

      <h2 className="font-semibold mt-4">10. Termination of Services</h2>
      <p>
        Either party may terminate services with written notice. Termination before project completion may result in partial payment retention for work already performed.
      </p>

      <h2 className="font-semibold mt-4">11. Governing Law</h2>
      <p>
        These Terms and Conditions are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in accordance with the legal provisions of the said jurisdiction.
      </p>

      <h2 className="font-semibold mt-4">12. Changes to Terms and Conditions</h2>
      <p>
        Altux Studio reserves the right to update these terms at any time. Clients will be notified of significant changes.
      </p>

      <h2 className="font-semibold mt-4">13. Contact Us</h2>
      <p>
        For any inquiries regarding these Terms and Conditions, please contact us at{" "}
        <a href="mailto:contact@altuxstudio.com" className="font-semibold underline text-blue-600 hover:text-blue-800">
          📩 contact@altuxstudio.com
        </a>.
      </p>
    </div>
  );
};

export default TermAndConditions;
