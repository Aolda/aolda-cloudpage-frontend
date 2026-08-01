import type { StatItem } from '@/components/organisms/NumbersSection';
import type { PartnerItem } from '@/components/organisms/PartnersSection';
import { getCloudBrief, getCloudUseProjects } from './cloud';
import {
  FALLBACK_PARTNERS,
  FALLBACK_STATS,
} from './fallbacks';
import {
  mapBriefToStats,
  mapUseProjectsToPartners,
  padPartnersForDisplay,
} from './mappers/main';

export interface MainPageData {
  stats: StatItem[];
  partners: PartnerItem[];
}

export async function getMainPageData(): Promise<MainPageData> {
  const [briefResult, useProjectResult] = await Promise.allSettled([
    getCloudBrief(),
    getCloudUseProjects(),
  ]);

  const stats =
    briefResult.status === 'fulfilled'
      ? mapBriefToStats(briefResult.value)
      : FALLBACK_STATS;

  const partners =
    useProjectResult.status === 'fulfilled'
      ? padPartnersForDisplay(mapUseProjectsToPartners(useProjectResult.value))
      : padPartnersForDisplay(FALLBACK_PARTNERS);

  if (process.env.NODE_ENV === 'development') {
    if (briefResult.status === 'rejected') {
      console.warn('[main] GET /cloud/brief failed, using fallback:', briefResult.reason);
    }
    if (useProjectResult.status === 'rejected') {
      console.warn(
        '[main] GET /cloud/use_project failed, using fallback:',
        useProjectResult.reason,
      );
    }
  }

  return { stats, partners };
}
