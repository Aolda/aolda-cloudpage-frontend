import * as S from './style';

export interface StatCardProps {
  /** 카드 제목 */
  title: string;
  /** 카드 값 */
  value: string;
}

/**
 * 통계 카드 컴포넌트
 * 
 * 숫자와 라벨을 표시하는 통계 카드입니다.
 * 
 * @param {StatCardProps} props - 카드 props
 * @param {string} props.title - 카드 제목
 * @param {string} props.value - 카드 값
 * 
 * @example
 * <StatCard title="누적 사용자" value="30+ 명" />
 * 
 * @returns {JSX.Element} 통계 카드 요소
 */
const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <S.StatCard>
      <S.StatLabel>{title}</S.StatLabel>
      <S.StatValue>{value}</S.StatValue>
    </S.StatCard>
  );
};

export default StatCard;

