import * as S from './style';

/**
 * 네비게이션 메뉴 항목 인터페이스
 * 
 * @interface NavigationItem
 * @property {string} label - 메뉴에 표시될 텍스트 라벨
 * @property {string} href - 링크 경로
 *   - 페이지 경로: '#sectionId' 형태는 '/sectionId'로 변환됩니다 (예: '#about' → '/about')
 *   - 외부 링크: 전체 URL (예: 'https://example.com')
 *   - 루트 경로: '/' 형태
 * 
 * @example
 * // 페이지 경로로 이동 (#about은 /about으로 변환됨)
 * const item: NavigationItem = {
 *   label: '소학회 소개',
 *   href: '#about'
 * };
 * 
 * @example
 * // 외부 링크
 * const item: NavigationItem = {
 *   label: '홈',
 *   href: '/'
 * };
 */
export interface NavigationItem {
  /** 메뉴에 표시될 텍스트 라벨 */
  label: string;
  /**
   * 링크 경로
   * - 페이지 경로: '#sectionId' 형태는 '/sectionId'로 변환됩니다 (예: '#about' → '/about')
   * - 외부 링크: 전체 URL (예: 'https://example.com')
   * - 루트 경로: '/' 형태
   */
  href: string;
}

/**
 * 네비게이션 컴포넌트의 props 인터페이스
 * 
 * @interface NavigationProps
 */
interface NavigationProps {
  /** 네비게이션 메뉴 항목 배열 */
  items: NavigationItem[];
}

/**
 * 네비게이션 메뉴 컴포넌트
 * 
 * @param {NavigationItem[]} items - 네비게이션 메뉴 항목 배열
 * 
 * @description
 * - #으로 시작하는 href는 /로 시작하는 경로로 변환됩니다 (예: '#about' → '/about')
 * - 라우터는 추후 구현 예정이며, 현재는 기본 링크 동작을 사용합니다.
 * 
 */
const Navigation = ({ items }: NavigationProps) => {
  return (
    <S.Nav>
      {items.map((item, index) => (
        <S.NavButton
          key={item.href || index}
          as="a"
          href={item.href}
        >
          {item.label}
        </S.NavButton>
      ))}
    </S.Nav>
  );
};

export default Navigation;

