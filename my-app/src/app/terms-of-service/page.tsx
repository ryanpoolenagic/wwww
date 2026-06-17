export default function TermsOfServicePage() {
  return (
    <div className="dark min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on this website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall we be liable for any damages arising out of the use or inability to use the materials on this website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">5. Product Information</h2>
              <p className="text-muted-foreground">
                Product descriptions and pricing are subject to change without notice. We reserve the right to discontinue any product at any time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us at info@truelegacy.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
