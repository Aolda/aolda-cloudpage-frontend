import * as S from './style';

export interface ImageCardProps {
  /** 이미지 경로 */
  image: string;
  /** 이미지 대체 텍스트 */
  alt?: string;
  /** 카드 제목 */
  title?: string;
  /** 카드 설명 */
  description?: string;
  /** 배경 이미지 모드 (이미지 위에 텍스트 오버레이) */
  isBackground?: boolean;
}

/**
 * 이미지 카드 컴포넌트
 * 
 * 이미지와 함께 제목, 설명을 표시하는 카드입니다.
 * 
 * @param {ImageCardProps} props - 카드 props
 * @param {string} props.image - 이미지 경로
 * @param {string} [props.alt] - 이미지 대체 텍스트
 * @param {string} [props.title] - 카드 제목
 * @param {string} [props.description] - 카드 설명
 * 
 * @example
 * <ImageCard
 *   image="/example.jpg"
 *   alt="예시 이미지"
 *   title="이미지 제목"
 *   description="이미지 설명"
 * />
 * 
 * @returns {JSX.Element} 이미지 카드 요소
 */
const ImageCard = ({ image, alt, title, description, isBackground = false }: ImageCardProps) => {
  return (
    <S.ImageCard $tone="blue" $isBackground={isBackground}>
      <S.Image src={image} alt={alt || title || ''} $isBackground={isBackground} />
      {isBackground && <S.Overlay $isBackground={isBackground} />}
      {title && <S.ImageTitle $isBackground={isBackground}>{title}</S.ImageTitle>}
      {description && !isBackground && <S.ImageDescription>{description}</S.ImageDescription>}
    </S.ImageCard>
  );
};

export default ImageCard;

