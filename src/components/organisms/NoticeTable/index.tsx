import NoticeItem, { type NoticeItemProps } from '../../molecules/NoticeItem';
import * as S from './style';

export interface NoticeTableProps {
  /** 공지사항 목록 */
  notices: NoticeItemProps[];
}

/**
 * 공지사항 테이블 컴포넌트
 * 
 * 공지사항 목록을 테이블 형태로 표시합니다.
 *
 * @param {NoticeTableProps} props - 공지사항 테이블 props
 * @param {NoticeItemProps[]} props.notices - 공지사항 목록
 * 
 * @example
 * <NoticeTable
 *   notices={[
 *     {
 *       number: 24,
 *       category: "문의요청",
 *       title: "문의요청과 관련된 공지사항 타이틀이에요",
 *       date: "2001.01.28",
 *       href: "/notice/24"
 *     }
 *   ]}
 * />
 * 
 * @returns {JSX.Element} 공지사항 테이블 요소
 */
const NoticeTable = ({ notices }: NoticeTableProps) => {
  // 강제로 10개만 표시
  const limitedNotices = notices.slice(0, 10);
  
  return (
    <S.NoticeTable>
      <S.TableBody>
        {limitedNotices.map((notice, index) => (
          <div key={notice.number}>
            <NoticeItem {...notice} />
            {index < limitedNotices.length - 1 && <S.Separator />}
          </div>
        ))}
      </S.TableBody>
    </S.NoticeTable>
  );
};

export default NoticeTable;

