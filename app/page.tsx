export default function Home() {
  return (
    <main>
      <h1>hello-sncloud 👋</h1>
      <p>
        This is a reference workload deployed to <strong>SN Cloud</strong>.
      </p>
      <ul>
        <li>Framework: Next.js 14 (App Router)</li>
        <li>Build pack: Railpack</li>
        <li>Deployed from: GitHub repo → HTTPS URL</li>
      </ul>
      <p className="muted">
        If you can read this, the <code>GitHub repo → build → HTTPS URL</code>{' '}
        pipeline worked.
      </p>
    </main>
  );
}
