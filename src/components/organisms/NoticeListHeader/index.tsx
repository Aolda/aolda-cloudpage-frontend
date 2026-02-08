import Button from '../../atoms/Button';
import * as S from './style';

export interface NoticeListHeaderProps {
  /** 전체 공지사항 개수 */
  totalCount: number;
  /** 작성하기 버튼 클릭 핸들러 */
  onWriteClick?: () => void;
}

/**
 * 공지사항 목록 헤더 컴포넌트
 * 
 * 공지사항 목록의 헤더 영역으로, 총 개수와 작성하기 버튼을 표시합니다.
 *
 * @param {NoticeListHeaderProps} props - 헤더 props
 * @param {number} props.totalCount - 전체 공지사항 개수
 * @param {Function} [props.onWriteClick] - 작성하기 버튼 클릭 핸들러
 * 
 * @example
 * <NoticeListHeader
 *   totalCount={24}
 *   onWriteClick={() => console.log('write')}
 * />
 * 
 * @returns {JSX.Element} 공지사항 목록 헤더 요소
 */
const NoticeListHeader = ({ totalCount, onWriteClick }: NoticeListHeaderProps) => {
  return (
    <S.Header>
      <S.Count>총 {totalCount}개</S.Count>
      <Button
        label="작성하기"
        onClick={onWriteClick}
      />
    </S.Header>
  );
};

export default NoticeListHeader;

