import { useMemo } from 'react';
import * as S from './style';

export interface SimilarServiceCardProps {
  logo?: string;
  bannerImage?: string;
  title: string;
  description: string;
  href: string;
  provider?: string;
}

const getDomainFromUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return '';
  }
};

const getFaviconUrl = (domain: string): string => {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
};

const SimilarServiceCard = ({
  logo,
  bannerImage,
  title,
  href,
}: SimilarServiceCardProps) => {
  const logoUrl = useMemo(() => {
    if (logo) return logo;
    const domain = getDomainFromUrl(href);
    return domain ? getFaviconUrl(domain) : '';
  }, [logo, href]);

  const previewSrc = bannerImage || logoUrl;

  return (
    <S.ServiceCardLink href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <S.PreviewCard>
        {previewSrc ? (
          <S.PreviewImage src={previewSrc} alt={title} loading="lazy" />
        ) : (
          <S.PreviewFallback>
            <span>{title}</span>
          </S.PreviewFallback>
        )}
      </S.PreviewCard>
    </S.ServiceCardLink>
  );
};

export default SimilarServiceCard;
