import SectionTitle from '../SectionTitle';
import ItemCard from '../ItemCard';
import type { ValueIconVariant } from '../ValueIcon';
import * as S from './style';

export type ValueItem = {
  title: string;
  description: string;
  icon?: string;
  iconType?: ValueIconVariant;
};

type ValueItemsProps = {
  title: string | React.ReactNode;
  description?: string;
  items: ValueItem[];
  titleColor?: string;
};

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

