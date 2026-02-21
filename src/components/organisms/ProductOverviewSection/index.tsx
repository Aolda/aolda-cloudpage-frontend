import Image from 'next/image';
import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import * as S from './style';

export interface ProductOverviewSectionProps {
  /** 제품 개요 내용 */
  content?: string;
}

/**
 * 제품 개요 섹션 컴포넌트
 * 
 * 제품 상세 페이지의 개요 섹션입니다.
 *
 * @param {ProductOverviewSectionProps} props - 제품 개요 섹션 props
 * @param {string} [props.content] - 제품 개요 내용
 * 
 * @example
 * <ProductOverviewSection content="제품 개요 내용" />
 * 
 * @returns {JSX.Element} 제품 개요 섹션 요소
 */
const ProductOverviewSection = ({ content }: ProductOverviewSectionProps) => {
  return (
    <S.OverviewSection>
      <IntroSectionTitle
        title={
          <>
            <S.OverviewIcon>
              <Image
                src="/product/product_detail/main_title_icon.png"
                alt="제품 개요"
                width={35}
                height={35}
              />
            </S.OverviewIcon>
            제품 개요
          </>
        }
        align="left"
      />
      {content && <S.OverviewContent>{content}</S.OverviewContent>}
    </S.OverviewSection>
  );
};

export default ProductOverviewSection;
