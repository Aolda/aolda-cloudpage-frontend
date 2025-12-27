import Link from 'next/link';
import * as S from './style';

export interface InPageNavigationProps {
  /** 이전 항목 제목 */
  prevTitle?: string;
  /** 이전 항목 링크 */
  prevHref?: string;
  /** 다음 항목 제목 */
  nextTitle?: string;
  /** 다음 항목 링크 */
  nextHref?: string;
}

/**
 * 콘텐츠 내 탐색 컴포넌트
 * 
 * 사용자가 본문의 구조를 훑어보고 원하는 콘텐츠로 빠르게 이동할 수 있도록 하는 탐색 컴포넌트입니다.
 * 이전/다음 항목으로 이동할 수 있는 네비게이션을 제공합니다.
 * 
 * @param {InPageNavigationProps} props - 콘텐츠 내 탐색 props
 * @param {string} [props.prevTitle] - 이전 항목 제목
 * @param {string} [props.prevHref] - 이전 항목 링크
 * @param {string} [props.nextTitle] - 다음 항목 제목
 * @param {string} [props.nextHref] - 다음 항목 링크
 * 
 * @example
 * <InPageNavigation
 *   prevTitle="이전 공지사항 제목"
 *   prevHref="/notice/23"
 *   nextTitle="다음 공지사항 제목"
 *   nextHref="/notice/25"
 * />
 * 
 * @returns {JSX.Element} 콘텐츠 내 탐색 요소
 */
const InPageNavigation = ({
  prevTitle,
  prevHref,
  nextTitle,
  nextHref,
}: InPageNavigationProps) => {
  return (
    <S.NavigationContainer>
      <S.NavItem>
        {prevTitle && prevHref ? (
          <S.NavLink as={Link} href={prevHref}>
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
          <S.NavLink as={Link} href={nextHref}>
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

export default InPageNavigation;

