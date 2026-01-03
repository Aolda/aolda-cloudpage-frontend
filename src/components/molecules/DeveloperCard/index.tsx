import * as S from './style';

export interface DeveloperCardProps {
  /** 개발자 이름 */
  name: string;
  /** 개발자 학과/정보 */
  info: string;
  /** 개발자 아이콘/이미지 (선택) */
  icon?: string;
}

/**
 * 개발자 카드 컴포넌트
 * 
 * 개발진 섹션에서 사용되는 개별 개발자 카드입니다.
 * 
 * @param {DeveloperCardProps} props - 개발자 카드 props
 * @param {string} props.name - 개발자 이름
 * @param {string} props.info - 개발자 학과/정보
 * @param {string} [props.icon] - 개발자 아이콘/이미지 경로
 * 
 * @example
 * <DeveloperCard
 *   name="정우재 크루"
 *   info="소프트웨어 22"
 * />
 * 
 * @returns {JSX.Element} 개발자 카드 요소
 */
const DeveloperCard = ({ name, info, icon }: DeveloperCardProps) => {
  return (
    <S.DeveloperCard>
      <S.DeveloperIcon>
        {icon ? (
          <S.DeveloperImage src={icon} alt={name} />
        ) : (
          <S.DefaultIcon viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#3D90D4" strokeWidth="2" fill="#E3F2FD" />
            <path
              d="M4 20c1.5-3 4.5-5 8-5s6.5 2 8 5"
              stroke="#3D90D4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </S.DefaultIcon>
        )}
      </S.DeveloperIcon>
      <S.DeveloperName>{name}</S.DeveloperName>
      <S.DeveloperInfo>{info}</S.DeveloperInfo>
    </S.DeveloperCard>
  );
};

export default DeveloperCard;

