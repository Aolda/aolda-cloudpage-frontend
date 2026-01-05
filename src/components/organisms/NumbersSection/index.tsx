import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import StatCard from '../../molecules/StatCard';
import * as S from './style';

export type StatItem = { title: string; value: string;};

type NumbersSectionProps = {
  stats?: StatItem[];
};

const defaultStats: StatItem[] = [
  { title: '누적 사용자', value: '30+ 명' },
  { title: '누적 프로젝트 수', value: '10+ 개' },
  { title: '누적 블로깅', value: '200+ 개' },
];

const NumbersSection = ({ stats = defaultStats }: NumbersSectionProps) => (
  <>
    <IntroSectionTitle title="숫자로 보는 아올다" align="center" titleColor="rgb(61, 144, 212)"/>
    <S.Grid>
      {stats.map((s) => (
        <StatCard key={s.title} title={s.title} value={s.value} />
      ))}
    </S.Grid>
  </>
);

export default NumbersSection;

