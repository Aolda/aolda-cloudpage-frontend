import ReactMarkdown from 'react-markdown';
import { isProbablyHtmlString, sanitizeHtml } from '@/lib/sanitizeHtml';
import Button from '../../atoms/Button';
import InPageNavigation from '../../molecules/InPageNavigation';
import * as S from './style';

export interface NoticeDetailData {
  /** 공지사항 번호 */
  number: number;
  /** 제목 */
  title: string;
  /** 작성자 */
  author: string;
  /** 날짜 */
  date: string;
  /** 조회수 */
  views: number;
  /** 첨부파일 목록 */
  attachments?: Array<{ name: string; url: string }>;
  /** 본문 내용 */
  content: string | React.ReactNode;
  /** 이전글 제목 */
  prevTitle?: string;
  /** 이전글 링크 */
  prevHref?: string;
  /** 다음글 제목 */
  nextTitle?: string;
  /** 다음글 링크 */
  nextHref?: string;
}

export interface NoticeDetailContentProps {
  /** 공지사항 상세 데이터 */
  data: NoticeDetailData;
  /** 목록 버튼 클릭 핸들러 */
  onListClick?: () => void;
}

/**
 * 공지사항 상세 내용 컴포넌트
 * 
 * 공지사항의 제목, 메타데이터, 본문, 첨부파일, 네비게이션을 표시합니다.
 *
 * @param {NoticeDetailContentProps} props - 상세 내용 props
 * @param {NoticeDetailData} props.data - 공지사항 상세 데이터
 * @param {Function} [props.onListClick] - 목록 버튼 클릭 핸들러
 * 
 * @example
 * <NoticeDetailContent
 *   data={{
 *     number: 24,
 *     title: "공지사항 제목",
 *     author: "작성자",
 *     date: "2001.01.28",
 *     views: 128,
 *     content: "본문 내용...",
 *   }}
 *   onListClick={() => navigate('/notice')}
 * />
 * 
 * @returns {JSX.Element} 상세 내용 요소
 */
const NoticeDetailContent = ({
  data,
  onListClick,
}: NoticeDetailContentProps) => {
  return (
    <S.DetailContainer>
      <S.Header>
        <S.Title>{data.title}</S.Title>
        <S.Meta>
          <S.MetaItem>
            <span>작성자</span>
            <span>{data.author}</span>
          </S.MetaItem>
          <S.MetaSeparator>|</S.MetaSeparator>
          <S.MetaItem>
            <span>작성일</span>
            <span>{data.date}</span>
          </S.MetaItem>
          <S.MetaSeparator>|</S.MetaSeparator>
          <S.MetaItem>
            <span>조회수</span>
            <span>{data.views}</span>
          </S.MetaItem>
        </S.Meta>
        {data.attachments && data.attachments.length > 0 && (
          <S.AttachmentList>
            {data.attachments.map((file, index) => (
              <S.AttachmentItem key={index} href={file.url}>
                <S.AttachmentIcon viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </S.AttachmentIcon>
                {file.name}
              </S.AttachmentItem>
            ))}
          </S.AttachmentList>
        )}
      </S.Header>

      <S.Content>
        {typeof data.content === 'string' ? (
          isProbablyHtmlString(data.content) ? (
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.content),
              }}
            />
          ) : (
            <ReactMarkdown>{data.content}</ReactMarkdown>
          )
        ) : (
          data.content
        )}
      </S.Content>

      <S.Footer>
        <S.NavigationWrapper>
          <InPageNavigation
            prevTitle={data.prevTitle}
            prevHref={data.prevHref}
            nextTitle={data.nextTitle}
            nextHref={data.nextHref}
          />
        </S.NavigationWrapper>
        <S.ListButtonWrapper>
          <Button label="목록" onClick={onListClick} size="lg" />
        </S.ListButtonWrapper>
      </S.Footer>
    </S.DetailContainer>
  );
};

export default NoticeDetailContent;

