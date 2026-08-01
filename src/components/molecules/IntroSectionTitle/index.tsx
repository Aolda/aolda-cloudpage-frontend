import type { ReactNode } from 'react';
import * as S from './style';

/**
 * IntroSectionTitle 컴포넌트의 props 인터페이스
 *
 * @interface IntroSectionTitleProps
 * @property {string | ReactNode} [title] - 섹션 제목 (문자열 또는 React 요소)
 * @property {string | ReactNode} [description] - 섹션 설명 텍스트
 * @property {'left' | 'center'} [align='left'] - 텍스트 정렬 방향
 * @property {string} [backgroundSrc] - 배경 이미지 경로 (제공 시 이미지 위에 오버레이로 제목 표시)
 * @property {string} [titleColor] - 제목 텍스트 색상
 * @property {boolean} [showTopBar] - 상단 bar 표시 여부
 */
interface IntroSectionTitleProps {
  /**
   * 섹션 제목 (문자열 또는 React 요소)
   *
   * @description
   * - 단순 문자열: title="숫자로 보는 아올다"
   * - 줄바꿈 포함 문자열: title="첫 줄\n두 번째 줄" (white-space: pre-line으로 처리)
   * - JSX 요소: title={<><br />태그나 <span>스타일링</span> 등</>}
   *
   * @example
   * // 단순 문자열
   * title="숫자로 보는 아올다"
   *
   * @example
   * // 줄바꿈이 필요한 경우 (JSX 사용)
   * title={
   *   <>
   *     아주인의 꿈을 펼칠
   *     <br />
   *     파란하늘 속 작은구름
   *   </>
   * }
   *
   * @example
   * // 일부 텍스트만 강조 (title 안에서 직접 스타일링)
   * title={
   *   <>
   *     아올다 클라우드는{' '}
   *     <span style={{ color: 'rgb(219, 51, 51)' }}>무료입니다</span>
   *   </>
   * }
   */
  title?: string | ReactNode;
  /** 섹션 설명 텍스트 */
  description?: string | ReactNode;
  /** 텍스트 정렬 방향 */
  align?: 'left' | 'center';
  /** 배경 이미지 경로 (제공 시 이미지 위에 오버레이로 제목 표시) */
  backgroundSrc?: string;
  /** 제목 텍스트 색상 */
  titleColor?: string;
  /** 설명 텍스트 색상 */
  descriptionColor?: string;
  /** 상단 bar 표시 여부 */
  showTopBar?: boolean;
  /** 태블릿 상단 bar와 제목 사이 간격 (px) */
  topBarGap?: number;
}

/**
 * 섹션 제목 컴포넌트
 *
 * 페이지의 각 섹션에 사용되는 제목 컴포넌트입니다.
 * 배경 이미지가 있으면 이미지 위에 오버레이로 표시하고,
 * 없으면 일반 컨테이너에 표시합니다.
 *
 * @param {IntroSectionTitleProps} props - 컴포넌트 props
 * @returns {JSX.Element} 섹션 제목 요소
 */
const IntroSectionTitle = ({
  title,
  description,
  align = 'left',
  backgroundSrc,
  titleColor,
  descriptionColor,
  showTopBar = false,
  topBarGap,
}: IntroSectionTitleProps) => (
  backgroundSrc ? (
    <S.ImageContainer>
      <S.BgImage src={backgroundSrc} alt="" aria-hidden />
      <S.Overlay>
        {showTopBar && <S.TopBar $align={align} $gap={topBarGap} />}
        <S.Title $color={titleColor} $hasDescription={Boolean(description)}>
          {title}
        </S.Title>
        {description && <S.Description $color={descriptionColor}>{description}</S.Description>}
      </S.Overlay>
    </S.ImageContainer>
  ) : (
    <S.Container $align={align}>
      {showTopBar && <S.TopBar $align={align} $gap={topBarGap} />}
      <S.Title $color={titleColor} $hasDescription={Boolean(description)}>
        {title}
      </S.Title>
      {description && <S.Description $color={descriptionColor}>{description}</S.Description>}
    </S.Container>
  )
);

export { AccentBlue, AccentRed } from './style';
export default IntroSectionTitle;
