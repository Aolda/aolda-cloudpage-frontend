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
const ImageCard = ({ image, alt, title, description }: ImageCardProps) => {
  return (
    <S.ImageCard $tone="blue">
      <S.Image src={image} alt={alt || title || ''} />
      {title && <S.ImageTitle>{title}</S.ImageTitle>}
      {description && <S.ImageDescription>{description}</S.ImageDescription>}
    </S.ImageCard>
  );
};

export default ImageCard;

