import React from 'react';

const TermAndConditions = () => {
  return (
    <div className="w-11/12 mx-auto my-10 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">
        Terms and Conditions
      </h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-gray-700 dark:text-gray-300 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to Hot Room. By accessing our website and using our services, you agree to be bound by these terms and conditions.
            Please read them carefully before using the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using this platform, you represent and warrant that you meet this requirement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc list-inside">
            <li>You agree to provide accurate information when creating listings or profiles.</li>
            <li>You must not use the platform for any illegal or unauthorized purpose.</li>
            <li>Respect other users and their privacy.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Listing Policy</h2>
          <p>
            All property listings must comply with our guidelines. Listings containing false, misleading, or offensive content may be removed without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            Hot Room is not liable for any damages or losses resulting from use of the platform. We act only as a listing and communication platform for users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these terms at any time. Continued use of the platform after changes means you accept the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at <strong>support@hotroom.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermAndConditions;
