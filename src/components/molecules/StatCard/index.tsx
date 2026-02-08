import * as S from './style';

export interface StatCardProps {
  /** 카드 제목 */
  title: string;
  /** 카드 값 (숫자) */
  value: number;
  /** 단위 (예: "명", "개", "%", "+" 등) */
  unit?: string;
}

/**
 * 통계 카드 컴포넌트
 * 
 * 숫자와 라벨을 표시하는 통계 카드입니다.
 * 숫자에 자동으로 콤마를 적용합니다.
 * 
 * @param {StatCardProps} props - 카드 props
 * @param {string} props.title - 카드 제목
 * @param {number} props.value - 카드 값 (숫자)
 * @param {string} [props.unit] - 단위 (예: "명", "개", "%" 등)
 * 
 * @example
 * <StatCard title="누적 사용자" value={12345} unit="명" />
 * <StatCard title="누적 프로젝트 수" value={1234} unit="개" />
 * <StatCard title="만족도" value={98} unit="%" />
 * 
 * @returns {JSX.Element} 통계 카드 요소
 */
const StatCard = ({ title, value, unit = '' }: StatCardProps) => {
  // 숫자에 콤마 추가
  const formattedValue = value.toLocaleString('ko-KR');
  
  return (
    <S.StatCard>
      <S.StatLabel>{title}</S.StatLabel>
      <S.StatValue>
        {formattedValue}
        {unit && ` ${unit}`}
      </S.StatValue>
    </S.StatCard>
  );
};

export default StatCard;

