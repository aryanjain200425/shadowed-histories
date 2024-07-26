// src/components/PrivacyPolicy.js

import React from "react";
import { Taskbar } from "./Taskbar";

export const PrivacyPolicy = () => {
  return (
    <div className=" mt-[-4rem]">
      <Taskbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className=" p-8 rounded-lg shadow-2xl w-full max-w-4xl mt-11">
          <h1 className="text-3xl font-bold mb-6 ">Privacy Policy</h1>
          <p className="mb-4">
            Welcome to Shadow Histories. We are committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, and
            protect your information when you use our website.
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
          <p className="mb-4">
            We collect the full name and email address that you provide through
            the contact form on our website. This information is used solely for
            the purpose of responding to your inquiries and suggestions.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Data Usage</h2>
          <p className="mb-4">
            The information collected is used only to communicate with you
            regarding your inquiries or suggestions for our blog. We do not
            store or share your information with any third parties.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Data Protection</h2>
          <p className="mb-4">
            Although we do not store your personal data, we ensure that any
            communication through our contact form is handled securely.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. User Rights</h2>
          <p className="mb-4">
            You have the right to contact us at any time to inquire about the
            data we have collected from you. Since we do not store your data, we
            do not provide options for data access, correction, or deletion.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
          <p className="mb-4">
            We do not use cookies or other tracking technologies at this time.
            However, this may change in the future as we integrate advertising
            services.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
          <p className="mb-4">
            In the future, we plan to integrate ads on our website with Ezoic.
            Please refer to Ezoic's privacy policy for more information on how
            they handle user data.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            7. Changes to the Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review this
            policy periodically.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us through the contact form on our website.
          </p>
        </div>
      </div>
    </div>
  );
};
