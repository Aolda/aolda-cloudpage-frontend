import { ReactNode } from 'react';
import * as S from './style';

export interface HeroBannerProps {
  /** 배경 이미지 경로 */
  backgroundSrc: string;
  /** 배너 제목 (문자열 또는 ReactNode) */
  title: string | ReactNode;
  /** 배너 설명 (선택) */
  description?: string | ReactNode;
  /** 텍스트 위치 */
  textPosition?: 'left-top' | 'left-center' | 'left-bottom' | 'center' | 'right-top' | 'right-center' | 'right-bottom';
  /** 텍스트 색상 */
  textColor?: string;
  /** 오버레이 투명도 (0-1) */
  overlayOpacity?: number;
  /** 배너 높이 */
}

/**
 * 히어로 배너 컴포넌트
 * 
 * 배경 이미지 위에 텍스트를 오버레이로 표시하는 히어로 섹션 컴포넌트입니다.
 * 
 * @param {HeroBannerProps} props - 히어로 배너 props
 * @param {string} props.backgroundSrc - 배경 이미지 경로
 * @param {string | ReactNode} props.title - 배너 제목
 * @param {string | ReactNode} [props.description] - 배너 설명
 * @param {'left-top' | 'left-center' | 'left-bottom' | 'center' | 'right-top' | 'right-center' | 'right-bottom'} [props.textPosition='left-top'] - 텍스트 위치
 * @param {string} [props.textColor] - 텍스트 색상
 * @param {number} [props.overlayOpacity] - 오버레이 투명도 (0-1)
 * @param {string} [props.height] - 배너 높이
 * 
 * @example
 * <HeroBanner
 *   backgroundSrc="/campus.jpg"
 *   title={
 *     <>
 *       아주인의 꿈을 펼칠
 *       <br />
 *       파란하늘 속 작은구름
 *     </>
 *   }
 *   textPosition="left-top"
 *   textColor="#ffffff"
 * />
 * 
 * @returns {JSX.Element} 히어로 배너 요소
 */
const HeroBanner = ({
  backgroundSrc,
  title,
  description,
  textPosition = 'left-top',
  textColor = '#ffffff',
  overlayOpacity = 0.4,
}: HeroBannerProps) => {
  return (
    <S.HeroContainer>
      <S.BackgroundImage src={backgroundSrc} alt="" aria-hidden />
      <S.Overlay $opacity={overlayOpacity} />
      <S.ContentContainer $position={textPosition}>
        <S.Title $color={textColor}>
            {title}
        </S.Title>
        {description && (
          <S.Description $color={textColor}>
            {description}
          </S.Description>
        )}
      </S.ContentContainer>
    </S.HeroContainer>
  );
};

export default HeroBanner;

