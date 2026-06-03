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
}

/**
 * 이미지 카드 컴포넌트
 * 
 * 이미지와 함께 제목, 설명을 표시하는 카드입니다.
 * 
 * @param {ImageCardProps} props - 카드 props
 * @param {string} [props.image] - 이미지 경로 (`solidThumbnail`이면 생략)
 * @param {string} [props.alt] - 이미지 대체 텍스트
 * @param {string} [props.title] - 카드 제목
 * @param {string} [props.description] - 카드 설명
 * @param {string} [props.period] - 기간 정보
 * @param {boolean} [props.isBackground] - 배경 이미지 모드
 * @param {boolean} [props.solidThumbnail] - 단색 썸네일(파트너 카드 등)
 * 
 * @example
 * <ImageCard
 *   image="/example.jpg"
 *   alt="예시 이미지"
 *   title="아주대학교 총학생회"
 *   description="총학생회 공식홈페이지 운영"
 *   period="2024-1 ~ 2025-1"
 * />
 * 
 * @returns {JSX.Element} 이미지 카드 요소
 */
const ImageCard = ({
  image,
  alt,
  title,
  description,
  period,
  isBackground = false,
  solidThumbnail = false,
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
    <S.ImageCard $tone="blue" $isBackground={isBackground} $solidThumbnail={solidThumbnail}>
      <S.ImageContainer>
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
      <S.TextContainer>
        {title && <S.ImageTitle $isBackground={isBackground}>{title}</S.ImageTitle>}
        {description && <S.ImageDescription>{description}</S.ImageDescription>}
        <br></br>
        {period && <S.ImagePeriod>{period}</S.ImagePeriod>}
      </S.TextContainer>
    </S.ImageCard>
  );
};

export default ImageCard;

