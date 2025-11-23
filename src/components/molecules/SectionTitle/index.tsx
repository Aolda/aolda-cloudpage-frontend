import type { ReactNode } from 'react';
import * as S from './style';

/**
 * SectionTitle 컴포넌트의 props 인터페이스
 * 
 * @interface SectionTitleProps
 * @property {string | ReactNode} [title] - 섹션 제목 (문자열 또는 React 요소)
 * @property {string} [description] - 섹션 설명 텍스트
 * @property {'left' | 'center'} [align='left'] - 텍스트 정렬 방향
 * @property {string} [backgroundSrc] - 배경 이미지 경로 (제공 시 이미지 위에 오버레이로 제목 표시)
 * @property {string} [titleColor] - 제목 텍스트 색상
 */
interface SectionTitleProps {
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
  description?: string;
  /** 텍스트 정렬 방향 */
  align?: 'left' | 'center';
  /** 배경 이미지 경로 (제공 시 이미지 위에 오버레이로 제목 표시) */
  backgroundSrc?: string;
  /** 제목 텍스트 색상 */
  titleColor?: string;
}

/**
 * 섹션 제목 컴포넌트
 * 
 * 페이지의 각 섹션에 사용되는 제목 컴포넌트입니다.
 * 배경 이미지가 있으면 이미지 위에 오버레이로 표시하고,
 * 없으면 일반 컨테이너에 표시합니다.
 * 
 * @param {SectionTitleProps} props - 컴포넌트 props
 * @param {string | ReactNode} [props.title] - 섹션 제목 (문자열 또는 React 요소)
 * @param {string} [props.description] - 섹션 설명 텍스트
 * @param {'left' | 'center'} [props.align='left'] - 텍스트 정렬 방향
 * @param {string} [props.backgroundSrc] - 배경 이미지 경로
 * @param {string} [props.titleColor] - 제목 텍스트 색상
 * 
 * @description
 * - backgroundSrc가 제공되면 이미지 위에 오버레이로 제목 표시
 * - backgroundSrc가 없으면 일반 컨테이너에 제목 표시
 * - title은 문자열 또는 React 요소 모두 가능
 * - 일부 텍스트만 강조하려면 title 안에서 직접 <span>으로 스타일링
 * 
 * @example
 * // 기본 사용법 (단순 문자열)
 * <SectionTitle 
 *   title="숫자로 보는 아올다" 
 *   align="center" 
 *   titleColor="rgb(61, 144, 212)"
 * />
 * 
 * @example
 * // JSX 요소 사용 (줄바꿈이 필요한 경우)
 * <SectionTitle
 *   title={
 *     <>
 *       아주인의 꿈을 펼칠
 *       <br />
 *       파란하늘 속 작은구름
 *     </>
 *   }
 *   backgroundSrc="/day1.png"
 *   titleColor="#ffffff"
 * />
 * 
 * @example
 * // 일부 텍스트만 강조
 * <SectionTitle
 *   title={
 *     <>
 *       아올다 클라우드는{' '}
 *       <span style={{ color: 'rgb(219, 51, 51)' }}>무료입니다</span>
 *     </>
 *   }
 *   description="아주대학교 학생을 위한 클라우드 서비스"
 * />
 * 
 * @returns {JSX.Element} 섹션 제목 요소
 */
const SectionTitle = ({
  title,
  description,
  align = 'left',
  backgroundSrc,
  titleColor,
}: SectionTitleProps) => (
  backgroundSrc ? (
    <S.ImageContainer>
      <S.BgImage src={backgroundSrc} alt="" aria-hidden />
      <S.Overlay>
        <S.Title $color={titleColor}>
          {title}
        </S.Title>
      </S.Overlay>
    </S.ImageContainer>
  ) : (
    <S.Container $align={align}>
      <S.Title $color={titleColor}>
        {title}
      </S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.Container>
  )
);

export default SectionTitle;



