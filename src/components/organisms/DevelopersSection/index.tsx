import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import DeveloperCard from '../../molecules/DeveloperCard';
import * as S from './style';

export interface Developer {
  /** 개발자 이름 */
  name: string;
  /** 개발자 학과/정보 */
  info: string;
  /** 개발자 아이콘/이미지 (선택) */
  icon?: string;
}

export interface DevelopersSectionProps {
  /** 개발자 목록 */
  developers: Developer[];
}

/**
 * 개발진 섹션 컴포넌트
 * 
 * 제품 상세 페이지의 개발진 섹션입니다.
 *
 * @param {DevelopersSectionProps} props - 개발진 섹션 props
 * @param {Developer[]} props.developers - 개발자 목록
 * 
 * @example
 * <DevelopersSection
 *   developers={[
 *     { name: "정우재 크루", info: "소프트웨어 22" },
 *     { name: "이동훈 크루", info: "사이버보안 21" }
 *   ]}
 * />
 * 
 * @returns {JSX.Element} 개발진 섹션 요소
 */
const DevelopersSection = ({ developers }: DevelopersSectionProps) => {
  return (
    <S.DevelopersSection>
      <IntroSectionTitle
        title={
          <>
            <S.DeveloperIcon viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#3D90D4" strokeWidth="2" />
              <path
                d="M4 20c1.5-3 4.5-5 8-5s6.5 2 8 5"
                stroke="#3D90D4"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </S.DeveloperIcon>
            개발진
          </>
        }
        align="left"
      />
      <S.DevelopersGrid>
        {developers.map((developer, index) => {
          // "소프트웨어 22" 형식의 info를 department와 year로 분리
          const parts = developer.info.split(' ');
          const department = parts[0] || '';
          const year = parts[1] || '';
          // "정우재 크루" 형식의 name에서 "크루" 제거
          const nameWithoutCrew = developer.name.replace(' 크루', '');
          
          return (
            <DeveloperCard
              key={index}
              name={nameWithoutCrew}
              department={department}
              year={year}
              icon={developer.icon || '/product/product_detail/product_detail_developerCard.png'}
            />
          );
        })}
      </S.DevelopersGrid>
    </S.DevelopersSection>
  );
};

export default DevelopersSection;

