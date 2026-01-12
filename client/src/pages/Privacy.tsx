export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">1. Introduction</h2>
        <p>
          Welcome to CliqRise ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at privacy@cliqrise.ai.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">2. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name and Contact Data. We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
          <li>Credentials. We collect passwords, password hints, and similar security information used for authentication and account access.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">3. How We Use Your Information</h2>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">4. Sharing Your Information</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">5. Data Security</h2>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">6. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us at privacy@cliqrise.ai.
        </p>
      </div>
    </div>
  );
}
