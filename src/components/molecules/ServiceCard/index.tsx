import Card from '../Card';
import * as S from './style';

export interface ServiceCardProps {
  /** 서비스 아이콘 이미지 경로 */
  icon?: string;
  /** 서비스 제목 */
  title: string;
  /** 서비스 설명 */
  description?: string;
  /** 링크 경로 */
  href?: string;
}

/**
 * 서비스 카드 컴포넌트
 * 
 * 제품/서비스를 표시하는 카드입니다. 아이콘, 제목, 설명을 포함합니다.
 * 
 * @param {ServiceCardProps} props - 서비스 카드 props
 * @param {string} [props.icon] - 서비스 아이콘 이미지 경로
 * @param {string} props.title - 서비스 제목
 * @param {string} [props.description] - 서비스 설명
 * @param {string} [props.href] - 링크 경로
 * 
 * @example
 * <ServiceCard
 *   icon="/icon.png"
 *   title="AMDB"
 *   description="10년 이상의 운영 노하우와 서비스를 제공합니다"
 *   href="/service/amdb"
 * />
 * 
 * @returns {JSX.Element} 서비스 카드 요소
 */
const ServiceCard = ({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) => {
  const content = (
    <S.ServiceCard>
      {icon && <S.Icon src={icon} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        {description && <S.Description>{description}</S.Description>}
      </S.Content>
      {href && (
        <S.ArrowIcon viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.ArrowIcon>
      )}
    </S.ServiceCard>
  );

  if (href) {
    return (
      <Card>
        <S.ServiceLink href={href}>
          {content}
        </S.ServiceLink>
      </Card>
    );
  }

  return <Card>{content}</Card>;
};

export default ServiceCard;

