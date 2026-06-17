export default function CookiePolicyPage() {
  return (
    <div className="dark min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies to analyze website traffic, personalize content, and improve our services. We may also use cookies for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors use our website</li>
                <li>Marketing cookies: Used to track visitors across websites</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">4. Managing Cookies</h2>
              <p className="text-muted-foreground">
                You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                We may allow third-party services to place cookies on your device for analytics and marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our Cookie Policy, please contact us at info@truelegacy.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
