import SectionTitle from '../../molecules/SectionTitle';
import ItemCard from '../../molecules/ItemCard';
import type { IconVariant } from '../../atoms/Icon';
import * as S from './style';

export type ValueItem = {
  title: string;
  description: string;
  icon?: string;
  iconType?: IconVariant;
};

type ValueItemsProps = {
  title: string | React.ReactNode;
  description?: string;
  items: ValueItem[];
  titleColor?: string;
};

/**
 * 가치 아이템 섹션 컴포넌트
 * 
 * SectionTitle과 ItemCard를 조합한 섹션입니다.
 * 
 * @param {ValueItemsProps} props - 가치 아이템 props
 * @param {string | ReactNode} props.title - 섹션 제목
 * @param {string} [props.description] - 섹션 설명
 * @param {ValueItem[]} props.items - 아이템 목록
 * @param {string} [props.titleColor] - 제목 색상
 * 
 * @example
 * <ValueItems
 *   title="불편함 3가지"
 *   description="설명"
 *   items={[
 *     { title: '제목', description: '설명', iconType: 'free' },
 *   ]}
 * />
 * 
 * @returns {JSX.Element} 가치 아이템 섹션 요소
 */
const ValueItems = ({
  title,
  description,
  items,
  titleColor,
}: ValueItemsProps) => (
  <>
    <SectionTitle
      title={title}
      description={description}
      align="left"
      titleColor={titleColor}
    />
    <S.PromiseGrid>
      {items.map((item) => (
        <ItemCard 
          key={item.title} 
          icon={item.iconType || item.icon} 
          title={item.title} 
          description={item.description} 
        />
      ))}
    </S.PromiseGrid>
  </>
);

export default ValueItems;

