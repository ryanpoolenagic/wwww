export default function PrivacyPolicyPage() {
  return (
    <div className="dark min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you fill out a contact form, request information about our products, or communicate with us. This may include your name, email address, phone number, and other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to communicate with you, provide the products and services you request, improve our offerings, and send you marketing communications if you have consented to receive them.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at Ryanpool9@yahoo.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
