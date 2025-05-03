import FAQSection from "@/components/faq/FAQSection";
import faqsApi from "@/services/faqs/faqs.service";

export default async function FAQPage({
  params,
}: {
  params: { slug: string };
}) {
  const faqPages = await faqsApi.getFAQPages();
  const faqPage = faqPages.data.find(
    (pages) => pages.slug === `/${params.slug}`
  );

  return (
    <>
      <main>
        <FAQSection sections={faqPages.data} />
        <section className="flex flex-col">
          <h2>{faqPage?.title}</h2>
          <div>
            {faqPage?.body?.map((block, i) => (
              <p key={i}>
                {block.children.map((child, j) => (
                  <span
                    key={j}
                    style={{
                      fontWeight: child.bold ? "bold" : "normal",
                      fontStyle: child.italic ? "italic" : "normal",
                    }}
                  >
                    {child.text}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
