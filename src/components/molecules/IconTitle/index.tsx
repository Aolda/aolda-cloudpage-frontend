import Image from 'next/image';
import * as S from './style';

export interface IconTitleProps {
  /** 아이콘 이미지 경로 */
  icon: string;
  /** 제목 텍스트 */
  title: string;
  /** 아이콘 대체 텍스트 */
  alt?: string;
  /** 정렬 (left | center) */
  align?: 'left' | 'center';
  /** 아이콘 크기 (px, 기본 24) */
  iconSize?: number;
}

/**
 * 아이콘 제목 컴포넌트
 *
 * 아이콘과 제목을 한 줄로 표시하는 섹션 헤더입니다.
 * 제품 상세 페이지의 제품개요, 문제점, 해결책, 개발진, 유사서비스 등에 사용합니다.
 *
 * @param {IconTitleProps} props - 아이콘 제목 props
 * @param {string} props.icon - 아이콘 이미지 경로
 * @param {string} props.title - 제목 텍스트
 * @param {string} [props.alt] - 아이콘 대체 텍스트
 * @param {'left' | 'center'} [props.align='left'] - 정렬
 * @param {number} [props.iconSize=24] - 아이콘 크기(px)
 *
 * @example
 * <IconTitle icon="/product/product_detail/main_title_icon.png" title="제품 개요" />
 * <IconTitle icon="/product/product_detail/title_icon1.png" title="문제점" iconSize={24} />
 */
const IconTitle = ({
  icon,
  title,
  alt,
  align = 'left',
  iconSize = 29,
}: IconTitleProps) => {
  return (
    <S.Container $align={align}>
      <S.IconTitleRow>
        <S.IconWrapper $size={iconSize}>
          <Image src={icon} alt={alt ?? title} width={iconSize} height={iconSize} />
        </S.IconWrapper>
        <S.TitleText>{title}</S.TitleText>
      </S.IconTitleRow>
    </S.Container>
  );
};

export default IconTitle;
