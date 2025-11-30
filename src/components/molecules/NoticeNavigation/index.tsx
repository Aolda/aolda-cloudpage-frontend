import * as S from './style';

export interface NoticeNavigationProps {
  /** 이전글 제목 */
  prevTitle?: string;
  /** 이전글 링크 */
  prevHref?: string;
  /** 다음글 제목 */
  nextTitle?: string;
  /** 다음글 링크 */
  nextHref?: string;
}

/**
 * 공지사항 네비게이션 컴포넌트
 * 
 * 이전글/다음글 네비게이션을 제공합니다.
 * 
 * @param {NoticeNavigationProps} props - 네비게이션 props
 * @param {string} [props.prevTitle] - 이전글 제목
 * @param {string} [props.prevHref] - 이전글 링크
 * @param {string} [props.nextTitle] - 다음글 제목
 * @param {string} [props.nextHref] - 다음글 링크
 * 
 * @example
 * <NoticeNavigation
 *   prevTitle="이전 공지사항 제목"
 *   prevHref="/notice/23"
 *   nextTitle="다음 공지사항 제목"
 *   nextHref="/notice/25"
 * />
 * 
 * @returns {JSX.Element} 네비게이션 요소
 */
const NoticeNavigation = ({
  prevTitle,
  prevHref,
  nextTitle,
  nextHref,
}: NoticeNavigationProps) => {
  return (
    <S.NavigationContainer>
      <S.NavItem>
        {prevTitle && prevHref ? (
          <S.NavLink href={prevHref}>
            <S.ArrowIcon $direction="up" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </S.ArrowIcon>
            <S.NavLabel>이전글</S.NavLabel>
            <S.NavTitle>{prevTitle}</S.NavTitle>
          </S.NavLink>
        ) : (
          <S.NavEmpty>
            <S.ArrowIcon $direction="up" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </S.ArrowIcon>
            <S.NavLabel>이전글</S.NavLabel>
            <S.NavTitle>이전 글이 없습니다</S.NavTitle>
          </S.NavEmpty>
        )}
      </S.NavItem>
      <S.NavItem>
        {nextTitle && nextHref ? (
          <S.NavLink href={nextHref}>
            <S.ArrowIcon $direction="down" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </S.ArrowIcon>
            <S.NavLabel>다음글</S.NavLabel>
            <S.NavTitle>{nextTitle}</S.NavTitle>
          </S.NavLink>
        ) : (
          <S.NavEmpty>
            <S.ArrowIcon $direction="down" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </S.ArrowIcon>
            <S.NavLabel>다음글</S.NavLabel>
            <S.NavTitle>다음 글이 없습니다</S.NavTitle>
          </S.NavEmpty>
        )}
      </S.NavItem>
    </S.NavigationContainer>
  );
};

export default NoticeNavigation;

