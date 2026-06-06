import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import StatCard from '../../molecules/StatCard';
import * as S from './style';

export type StatItem = { title: string; value: number; unit: string;};

type NumbersSectionProps = {
  stats?: StatItem[];
};

const defaultStats: StatItem[] = [
  { title: '누적 사용자', value: 12345, unit: '명' },
  { title: '누적 프로젝트 수', value: 1234, unit: '개' },
  { title: '누적 블로그', value: 1234, unit: '개' },
];

const NumbersSection = ({ stats = defaultStats }: NumbersSectionProps) => (
  <S.Section>
    <IntroSectionTitle
      title="숫자로 보는 아올다"
      align="center"
      showTopBar={true}
      titleColor="#232527"
    />
    <S.Grid>
      {stats.map((s) => (
        <StatCard key={s.title} title={s.title} value={s.value} unit={s.unit} />
      ))}
    </S.Grid>
  </S.Section>
);

export default NumbersSection;

