import Link from 'next/link';
import * as S from './style';

/**
 * 메인 메뉴 항목 인터페이스
 * 
 * @interface MainMenuItem
 * @property {string} label - 메뉴에 표시될 텍스트 라벨
 * @property {string} href - 링크 경로
 *   - 페이지 경로: '#sectionId' 형태는 '/sectionId'로 변환됩니다 (예: '#about' → '/about')
 *   - 외부 링크: 전체 URL (예: 'https://example.com')
 *   - 루트 경로: '/' 형태
 * 
 * @example
 * // 페이지 경로로 이동 (#about은 /about으로 변환됨)
 * const item: MainMenuItem = {
 *   label: '소학회 소개',
 *   href: '#about'
 * };
 * 
 * @example
 * // 외부 링크
 * const item: MainMenuItem = {
 *   label: '홈',
 *   href: '/'
 * };
 */
export interface MainMenuItem {
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
 * 메인 메뉴 컴포넌트의 props 인터페이스
 * 
 * @interface MainMenuProps
 */
interface MainMenuProps {
  /** 메인 메뉴 항목 배열 */
  items: MainMenuItem[];
}

/**
 * 메인 메뉴 컴포넌트
 * 
 * 사용자가 페이지를 탐색할 때, 가장 많이 사용하는 유형의 메뉴입니다.
 * 일반적으로 헤더와 함께 거의 모든 페이지에 제공되며, 사용자가 자주 방문하거나 중요도가 높은 페이지로 이동할 수 있는 링크가 포함되어 있습니다.
 * 
 * @param {MainMenuItem[]} items - 메인 메뉴 항목 배열
 * 
 * @description
 * - #으로 시작하는 href는 /로 시작하는 경로로 변환됩니다 (예: '#about' → '/about')
 * - 외부 링크는 일반 <a> 태그로, 내부 링크는 Next.js Link로 렌더링됩니다.
 * 
 */
const MainMenu = ({ items }: MainMenuProps) => {
  return (
    <S.MainMenu>
      {items.map((item, index) => {
        // 외부 링크인지 확인 (http:// 또는 https://로 시작)
        const isExternal = item.href.startsWith('http://') || item.href.startsWith('https://');
        
        if (isExternal) {
          return (
            <S.MenuItem
              key={item.href || index}
              as="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </S.MenuItem>
          );
        }
        
        return (
          <S.MenuItem
            key={item.href || index}
            as={Link}
            href={item.href}
          >
            {item.label}
          </S.MenuItem>
        );
      })}
    </S.MainMenu>
  );
};

export default MainMenu;

