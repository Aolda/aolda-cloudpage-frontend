import Link from 'next/link';
import * as S from './style';

export interface DeveloperCardProps {
  /** 크루 이름 */
  name: string;
  /** 학과/전공 */
  department: string;
  /** 학번/연도 */
  year: string;
  /** 캐릭터 이미지 경로 (선택) */
  icon?: string;
  /** 링크 경로 (선택) */
  href?: string;
}

/**
 * 개발자 카드 컴포넌트 (크루 카드)
 * 
 * 크루 정보를 표시하는 카드 형태의 컴포넌트입니다.
 * 
 * @param {DeveloperCardProps} props - 카드 props
 * @param {string} props.name - 크루 이름
 * @param {string} props.department - 학과/전공
 * @param {string} props.year - 학번/연도
 * @param {string} [props.icon] - 캐릭터 이미지 경로
 * @param {string} [props.href] - 링크 경로
 * 
 * @example
 * <DeveloperCard
 *   name="정우재"
 *   department="소프트웨어"
 *   year="22"
 *   icon="/product/product_detail/product_detail_developerCard.png"
 *   href="/crew/jeongwoojae"
 * />
 * 
 * @returns {JSX.Element} 개발자 카드 요소
 */
const DeveloperCard = ({ name, department, year, icon, href }: DeveloperCardProps) => {
  const content = (
    <S.DeveloperCard>
      <S.CharacterContainer>
        <S.CharacterImage src={icon} alt={`${name} 크루`} />
      </S.CharacterContainer>
      <S.CrewName>
        {name} <S.CrewNameSuffix>크루</S.CrewNameSuffix>
      </S.CrewName>
      <S.CrewInfo>{department} {year}</S.CrewInfo>
    </S.DeveloperCard>
  );

  if (href) {
    return (
      <S.DeveloperCardLink as={Link} href={href}>
        {content}
      </S.DeveloperCardLink>
    );
  }

  return content;
};

export default DeveloperCard;
