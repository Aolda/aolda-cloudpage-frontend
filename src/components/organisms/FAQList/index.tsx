import Accordion, { type AccordionProps } from '../../molecules/Accordion';
import FAQCategoryFilter from '../FAQCategoryFilter';
import Pagination from '../../molecules/Pagination';
import type { FilterItem } from '../../molecules/TagFilter';
import * as S from './style';

export interface FAQListProps {
  /** FAQ 목록 */
  faqs: AccordionProps[];
  /** 카테고리 옵션 목록 */
  categoryOptions: FilterItem[];
  /** 선택된 카테고리 ID */
  selectedCategory?: string;
  /** 카테고리 선택 변경 핸들러 */
  onCategoryChange?: (categoryId: string) => void;
  /** 현재 페이지 */
  currentPage?: number;
  /** 전체 페이지 수 */
  totalPages?: number;
  /** 페이지 변경 핸들러 */
  onPageChange?: (page: number) => void;
}

/**
 * FAQ 목록 컴포넌트
 * 
 * FAQ 카테고리 필터, FAQ 목록, 페이지네이션을 포함하는 섹션입니다.
 *
 * @param {FAQListProps} props - FAQ 목록 props
 * @param {AccordionProps[]} props.faqs - FAQ 목록
 * @param {Array} props.categoryOptions - 카테고리 옵션 목록
 * @param {string} [props.selectedCategory] - 선택된 카테고리 ID
 * @param {Function} [props.onCategoryChange] - 카테고리 선택 변경 핸들러
 * @param {number} [props.currentPage] - 현재 페이지
 * @param {number} [props.totalPages] - 전체 페이지 수
 * @param {Function} [props.onPageChange] - 페이지 변경 핸들러
 * 
 * @example
 * <FAQList
 *   faqs={[
 *     { title: 'FAQ Question', content: 'Answer text' },
 *   ]}
 *   categoryOptions={[
 *     { id: 'all', label: '카테고리' },
 *   ]}
 *   selectedCategory="all"
 *   onCategoryChange={(id) => console.log(id)}
 *   currentPage={1}
 *   totalPages={7}
 *   onPageChange={(page) => console.log(page)}
 * />
 * 
 * @returns {JSX.Element} FAQ 목록 요소
 */
const FAQList = ({
  faqs,
  categoryOptions,
  selectedCategory,
  onCategoryChange,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: FAQListProps) => {
  return (
    <S.FAQListContainer>
      <FAQCategoryFilter
        categories={categoryOptions}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <S.FAQItems>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            content={faq.content}
            defaultExpanded={faq.defaultExpanded}
          />
        ))}
      </S.FAQItems>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </S.FAQListContainer>
  );
};

export default FAQList;
