// Renders schema.org structured data. `<` is escaped to prevent the JSON
// from closing the script tag (XSS-safe, per Next.js JSON-LD guide).
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
