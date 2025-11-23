import MenuCard from '../MenuCard';

/**
 * IntroMenu 컴포넌트 (하위 호환성을 위한 래퍼)
 * 
 * @deprecated MenuCard 컴포넌트를 직접 사용하는 것을 권장합니다.
 * 
 * @example
 * // 기존 사용법 (여전히 작동)
 * <IntroMenu 
 *   title="아올다,\n처음이신가요?"
 *   Label="사용 설명서 >"
 *   href="/useinfo"
 * />
 * 
 * @example
 * // 새로운 사용법 (권장)
 * <MenuCard
 *   title="아올다,\n처음이신가요?"
 *   actionLabel="사용 설명서 >"
 *   href="/useinfo"
 * />
 */
const IntroMenu = (props: {
  title: string;
  Label: string;
  href: string;
}) => {
  return <MenuCard {...props} actionLabel={props.Label} />;
};

export default IntroMenu;
