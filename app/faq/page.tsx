import FAQPageTemplate from '@/components/templates/FAQPageTemplate';
import { getFaqPageData } from '@/lib/api/faq';

export default async function FAQPage() {
  const { categoryOptions, faqs } = await getFaqPageData();

  return (
    <FAQPageTemplate
      faqs={faqs}
      categoryOptions={categoryOptions}
    />
  );
}
