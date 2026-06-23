import MainPageTemplate from '@/components/templates/MainPageTemplate';
import { getMainPageData } from '@/lib/api/main';

export default async function HomePage() {
  const { stats, partners } = await getMainPageData();

  return <MainPageTemplate stats={stats} partners={partners} />;
}
