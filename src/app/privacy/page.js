export const metadata = {
  title: "Privacy Policy — Niki Fereidooni",
  description: "What data this site collects and why.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <p className="font-mono text-sm text-ink-faint mb-2">/* privacy.md */</p>
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-8 text-ink-muted leading-relaxed">
        <p>
          Last updated: August 23, 2026. This is a personal portfolio site. Here&apos;s what
          happens when you visit it.
        </p>

        <section>
          <h2 className="text-ink font-semibold text-lg mb-2">Analytics</h2>
          <p>
            This site uses{" "}
            <a
              href="https://posthog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-code hover:underline underline-offset-4"
            >
              PostHog
            </a>{" "}
            to understand how people use the site, like which pages get visited and which
            links get clicked. This helps me improve it over time.
          </p>
          <p className="mt-3">PostHog may collect:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Pages you visit and links you click on this site</li>
            <li>Approximate location, device, and browser type (derived from IP address)</li>
            <li>Referring site (how you got here)</li>
          </ul>
          <p className="mt-3">
            This site does not use analytics to identify you personally, and I don&apos;t sell
            or share this data with third parties beyond PostHog itself, which processes it on
            my behalf.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-semibold text-lg mb-2">Cookies</h2>
          <p>
            PostHog sets a cookie in your browser to distinguish you from other visitors across
            sessions. No cookies are used for advertising or tracking you across other websites.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-semibold text-lg mb-2">Your choices</h2>
          <p>
            Most browsers let you block cookies or send a Do Not Track signal. You can also use
            an ad/tracker blocker, which will typically prevent PostHog from loading at all.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-semibold text-lg mb-2">Contact</h2>
          <p>
            Questions about this policy? Reach out via{" "}
            <a
              href="https://linkedin.com/in/nfereidooni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-code hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
