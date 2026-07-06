import { ReactNode } from 'react';
import * as S from './style';

export interface ImageCardProps {
  /** 이미지 경로 (`solidThumbnail`이면 생략 가능) */
  image?: string;
  /** 이미지 대체 텍스트 */
  alt?: string;
  /** 카드 제목 */
  title?: string | ReactNode;
  /** 카드 설명 */
  description?: string;
  /** 기간 정보 */
  period?: string;
  /** 배경 이미지 모드 (이미지 위에 텍스트 오버레이) */
  isBackground?: boolean;
  /** true면 썸네일을 이미지 대신 단색 사각형으로 표시 */
  solidThumbnail?: boolean;
  /** 모바일 파트너 카드 — 텍스트 전용 컴팩트 레이아웃 */
  compact?: boolean;
}

const ImageCard = ({
  image,
  alt,
  title,
  description,
  period,
  isBackground = false,
  solidThumbnail = false,
  compact = false,
}: ImageCardProps) => {
  if (isBackground) {
    return (
      <S.ImageCard $tone="blue" $isBackground={isBackground}>
        <S.Image src={image!} alt={alt || (typeof title === 'string' ? title : '') || ''} $isBackground={isBackground} />
        <S.Overlay $isBackground={isBackground} />
        {title && <S.ImageTitle $isBackground={isBackground}>{title}</S.ImageTitle>}
      </S.ImageCard>
    );
  }

  return (
    <S.ImageCard $tone="blue" $isBackground={isBackground} $solidThumbnail={solidThumbnail} $compact={compact}>
      <S.ImageContainer $compact={compact}>
        {solidThumbnail ? (
          <S.SolidThumbnail aria-hidden />
        ) : (
          <S.Image
            src={image!}
            alt={alt || (typeof title === 'string' ? title : '') || ''}
            $isBackground={isBackground}
          />
        )}
      </S.ImageContainer>
      <S.TextContainer $compact={compact}>
        {title && <S.ImageTitle $isBackground={isBackground} $compact={compact}>{title}</S.ImageTitle>}
        {period && <S.ImagePeriod $compact={compact}>{period}</S.ImagePeriod>}
        {description && <S.ImageDescription $compact={compact}>{description}</S.ImageDescription>}
      </S.TextContainer>
    </S.ImageCard>
  );
};

export default ImageCard;
