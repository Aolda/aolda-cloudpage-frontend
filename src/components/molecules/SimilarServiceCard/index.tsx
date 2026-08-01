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
  description,
  href,
  provider,
}: SimilarServiceCardProps) => {
  const domain = useMemo(() => getDomainFromUrl(href), [href]);

  const logoUrl = useMemo(() => {
    if (logo) return logo;
    return domain ? getFaviconUrl(domain) : '';
  }, [logo, domain]);

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    if (domain && !el.src.includes('google.com/s2/favicons')) {
      el.src = getFaviconUrl(domain);
      return;
    }
    el.style.display = 'none';
  };

  const previewSrc = bannerImage || logoUrl;

  return (
    <S.ServiceCardLink href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <S.ServiceCard>
        {/* Desktop: image-only plane (~276×264) */}
        <S.DesktopPreview>
          {previewSrc ? (
            <S.DesktopPreviewImage src={previewSrc} alt={title} loading="lazy" />
          ) : (
            <S.DesktopPreviewFallback>{title}</S.DesktopPreviewFallback>
          )}
        </S.DesktopPreview>

        {/* Tablet / mobile: rich card (unchanged) */}
        <S.HeaderSection $bannerImage={bannerImage}>
          {!bannerImage && logoUrl && (
            <S.MainLogo
              src={logoUrl}
              alt={provider || domain || title}
              onError={handleLogoError}
              loading="lazy"
            />
          )}
          <S.MenuIcon
            $onBanner={Boolean(bannerImage)}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
          </S.MenuIcon>
        </S.HeaderSection>

        <S.ContentSection>
          <S.ServiceTitle>{title}</S.ServiceTitle>
          <S.ServiceDescription>{description}</S.ServiceDescription>
          <S.ProviderSection>
            {logoUrl && (
              <S.SmallLogo
                src={logoUrl}
                alt=""
                onError={handleLogoError}
                loading="lazy"
              />
            )}
            {provider && <S.ServiceProvider>{provider}</S.ServiceProvider>}
          </S.ProviderSection>
        </S.ContentSection>
      </S.ServiceCard>
    </S.ServiceCardLink>
  );
};

export default SimilarServiceCard;
