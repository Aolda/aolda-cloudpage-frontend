import Link from 'next/link';
import * as S from './style';

export interface BreadcrumbItem {
  /** 라벨 */
  label: string;
  /** 링크 경로 */
  href?: string;
}

export interface BreadcrumbProps {
  /** Breadcrumb 항목 목록 */
  items: BreadcrumbItem[];
}

const ChevronIcon = () => (
  <S.Chevron
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M5.75 3.5L10.25 8L5.75 12.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </S.Chevron>
);

/**
 * Breadcrumb 컴포넌트
 *
 * 페이지 경로를 표시하는 네비게이션 컴포넌트입니다.
 */
const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <S.Breadcrumb>
      {items.map((item, index) => (
        <S.BreadcrumbItem key={index}>
          {item.href ? (
            <S.BreadcrumbLink as={Link} href={item.href}>
              {item.label}
            </S.BreadcrumbLink>
          ) : (
            <S.BreadcrumbText>{item.label}</S.BreadcrumbText>
          )}
          {index < items.length - 1 && (
            <S.Separator>
              <ChevronIcon />
            </S.Separator>
          )}
        </S.BreadcrumbItem>
      ))}
    </S.Breadcrumb>
  );
};

export default Breadcrumb;
