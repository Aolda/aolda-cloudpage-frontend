import Link from 'next/link';
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
 */
const ServiceCard = ({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) => {
  const content = (
    <S.ServiceCard>
      <S.CardBody>
        <S.IconTitleBlock>
          {icon && <S.Icon src={icon} alt={title} />}
          <S.Title>{title}</S.Title>
        </S.IconTitleBlock>
        {description && <S.Description>{description}</S.Description>}
      </S.CardBody>
      {href && (
        <S.ArrowIcon viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M5.75 3.5L10.25 8L5.75 12.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.ArrowIcon>
      )}
    </S.ServiceCard>
  );

  return (
    <S.ServiceCardWrapper>
      {href ? (
        <S.ServiceLink as={Link} href={href}>
          {content}
        </S.ServiceLink>
      ) : (
        content
      )}
    </S.ServiceCardWrapper>
  );
};

export default ServiceCard;
