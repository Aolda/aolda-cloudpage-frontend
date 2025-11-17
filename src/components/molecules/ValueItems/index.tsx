import SectionTitle from '../SectionTitle';
import PromiseCard from '../PromiseCard';
import type { ValueIconVariant } from '../ValueIcon';
import * as S from './style';

export type ValueItem = {
  title: string;
  description: string;
  icon?: string;
  iconType?: ValueIconVariant;
};

type ValueItemsProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: ValueItem[];
  variant?: 'positive' | 'alert';
  titleColor?: string;
  richTitle?: React.ReactNode;
};

const ValueItems = ({
  eyebrow,
  title,
  richTitle,
  description,
  items,
  variant = 'positive',
  titleColor,
}: ValueItemsProps) => (
  <>
    <SectionTitle
      eyebrow={eyebrow}
      title={title}
      richTitle={richTitle}
      description={description}
      align="left"
      titleColor={titleColor}
    />
    <S.PromiseGrid>
      {items.map((item) => (
        <PromiseCard key={item.title} variant={variant} icon={item.icon ?? ''} iconType={item.iconType} title={item.title} description={item.description} />
      ))}
    </S.PromiseGrid>
  </>
);

export default ValueItems;

