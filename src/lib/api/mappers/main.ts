import type { StatItem } from '@/components/organisms/NumbersSection';
import type { PartnerItem } from '@/components/organisms/PartnersSection';
import type { BriefResponse, SemesterPoint, UseProjectResponse } from '../types/cloud';

const BRIEF_STAT_LABELS: Record<string, string> = {
  userCount: '누적 사용자',
  projectCount: '누적 프로젝트 수',
};

const DEFAULT_PARTNER_IMAGE = '/intro/intro_used.png';

const formatSemester = ({ year, semester }: SemesterPoint): string =>
  `${year}-${semester}`;

export const formatUseProjectPeriod = (
  duration?: UseProjectResponse['data'][number]['duration'],
): string | undefined => {
  if (!duration?.from) {
    return undefined;
  }

  const from = formatSemester(duration.from);

  if (duration.to) {
    return `${from} ~ ${formatSemester(duration.to)}`;
  }

  return from;
};

export const mapBriefToStats = (brief: BriefResponse): StatItem[] => {
  const stats: StatItem[] = [];

  for (const [key, label] of Object.entries(BRIEF_STAT_LABELS)) {
    const metric = brief[key];
    if (metric) {
      stats.push({ title: label, value: metric.value, unit: metric.unit });
    }
  }

  const thirdMetricKey = Object.keys(brief).find(
    (key) => !Object.prototype.hasOwnProperty.call(BRIEF_STAT_LABELS, key),
  );
  const thirdMetric = thirdMetricKey ? brief[thirdMetricKey] : undefined;

  if (thirdMetric) {
    stats.push({
      title: '누적 블로그',
      value: thirdMetric.value,
      unit: thirdMetric.unit,
    });
  }

  return stats;
};

export const mapUseProjectsToPartners = (
  response: UseProjectResponse,
): PartnerItem[] =>
  response.data.map((item) => ({
    name: item.teamName,
    description: item.description,
    period: formatUseProjectPeriod(item.duration),
    image: item.projectImage?.url || DEFAULT_PARTNER_IMAGE,
  }));

/** 마퀴 UI용 최소 카드 수 확보 */
export const padPartnersForDisplay = (
  partners: PartnerItem[],
  minCount = 6,
): PartnerItem[] => {
  if (partners.length === 0) {
    return [];
  }

  const padded: PartnerItem[] = [...partners];

  while (padded.length < minCount) {
    padded.push(partners[padded.length % partners.length]);
  }

  return padded;
};
