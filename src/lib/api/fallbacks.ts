import type { AccordionProps } from '@/components/molecules/Accordion';
import type { NoticeItemProps } from '@/components/molecules/NoticeItem';
import type { FilterItem as CheckboxFilterItem } from '@/components/molecules/CheckboxFilter';
import type { FilterItem as TagFilterItem } from '@/components/molecules/TagFilter';
import type { NoticeDetailData } from '@/components/organisms/NoticeDetailContent';
import type { StatItem } from '@/components/organisms/NumbersSection';
import type { PartnerItem } from '@/components/organisms/PartnersSection';
import type { ProductDetailRecord } from '@/lib/data/products';
import { getNoticeById } from '@/lib/data/notices';
import { getProductById } from '@/lib/data/products';

export const FALLBACK_STATS: StatItem[] = [
  { title: '누적 사용자', value: 12345, unit: '명' },
  { title: '누적 프로젝트 수', value: 1234, unit: '개' },
  { title: '누적 블로그', value: 1234, unit: '개' },
];

export const FALLBACK_PARTNERS: PartnerItem[] = [
  {
    name: '아주대학교 총학생회',
    description: '총학생회 공식홈페이지 운영',
    period: '2024-1 ~ 2025-1',
    image: '/intro/intro_used.png',
  },
  {
    name: '파란학기제',
    description: '파란학기 프로젝트 서비스 배포지원',
    image: '/intro/intro_used.png',
  },
  {
    name: 'APIA',
    description: 'ajou.app 서비스 운영',
    image: '/intro/intro_used.png',
  },
];

export const FALLBACK_FAQ_CATEGORIES: TagFilterItem[] = [
  { id: 'all', label: '전체' },
  { id: 'CAT_GENERAL', label: '일반' },
  { id: 'CAT_BILLING', label: '요금 및 결제' },
];

export const FALLBACK_FAQS: AccordionProps[] = [
  {
    title: '서비스 가입은 어떻게 하나요?',
    content: '홈페이지에서 신청서를 제출하시면 담당자가 안내드립니다.',
  },
  {
    title: '요금은 어떻게 청구되나요?',
    content: '프로젝트 사용량 기반으로 월 단위 정산됩니다.',
  },
];

export const FALLBACK_NOTICES: NoticeItemProps[] = [
  {
    number: 2,
    category: '공지',
    title: '정기 점검 안내',
    date: '2025.02.01',
    href: '/notice/2',
  },
  {
    number: 1,
    category: '운영',
    title: '클라우드 사용 가이드 업데이트',
    date: '2025.01.15',
    href: '/notice/1',
  },
];

export const FALLBACK_PRODUCT_CATEGORIES: CheckboxFilterItem[] = [
  { id: 'CAT_PLATFORM', label: '플랫폼' },
  { id: 'CAT_ANALYTICS', label: '데이터 분석' },
];

export const FALLBACK_PRODUCT_SERVICES = [
  {
    icon: '/product/product_serviceCard.png',
    title: 'Aolda Console',
    description: '클라우드 자원과 프로젝트를 통합 관리하는 콘솔입니다.',
    href: '/product/1',
    category: 'CAT_PLATFORM',
  },
  {
    icon: '/product/product_serviceCard.png',
    title: 'Insight Hub',
    description: '대시보드 기반 분석 리포트를 제공합니다.',
    href: '/product/2',
    category: 'CAT_ANALYTICS',
  },
];

export function getFallbackNoticeDetail(id: string): NoticeDetailData | undefined {
  return getNoticeById(id);
}

export function getFallbackProductDetail(id: string): ProductDetailRecord {
  return getProductById(id);
}
