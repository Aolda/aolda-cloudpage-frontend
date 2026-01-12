import * as S from './style';

export interface ImageTitleProps {
  /** 아이콘 이미지 경로 */
  icon: string;
  /** 제목 텍스트 */
  title: string;
  /** 아이콘 대체 텍스트 */
  alt?: string;
}

/**
 * 이미지 제목 컴포넌트
 * 
 * 아이콘과 함께 제목을 표시하는 컴포넌트입니다.
 * 
 * @param {ImageTitleProps} props - 이미지 제목 props
 * @param {string} props.icon - 아이콘 이미지 경로
 * @param {string} props.title - 제목 텍스트
 * @param {string} [props.alt] - 아이콘 대체 텍스트
 * 
 * @example
 * <ImageTitle
 *   icon="/icons/product-overview.png"
 *   title="제품 개요"
 *   alt="제품 개요 아이콘"
 * />
 * 
 * @returns {JSX.Element} 이미지 제목 요소
 */
const ImageTitle = ({ icon, title, alt }: ImageTitleProps) => {
  return (
    <S.ImageTitleContainer>
      <S.IconImage src={icon} alt={alt || title} />
      <S.TitleText>{title}</S.TitleText>
    </S.ImageTitleContainer>
  );
};

export default ImageTitle;

