'use client';

import BaseTemplate from '../BaseTemplate';
import IntroSection from '../../organisms/IntroSection';
import NumbersSection from '../../organisms/NumbersSection';
import ServiceInfoSection from '../../organisms/ServiceInfoSection';
import PartnersSection from '../../organisms/PartnersSection';
import InconveniencesSection from '../../organisms/InconveniencesSection';
import PromisesSection from '../../organisms/PromisesSection';
import MeetSection from '../../organisms/MeetSection';
import * as S from './style';

/**
 * 메인 페이지 템플릿 컴포넌트
 * 
 * 홈페이지 메인 화면을 구성하는 템플릿입니다.
 * Hero Section, Statistics, Service Info, Partners, 
 * Inconveniences, Promises, CTA 섹션을 포함합니다.
 * 
 * @returns {JSX.Element} 메인 페이지 템플릿 요소
 */
const MainPageTemplate = () => {
  return (
    <BaseTemplate>
      <S.BackgroundDecorations />
      <S.Ellipse9 />
      <S.Ellipse10 />
      <S.Ellipse11 />
      <S.Ellipse12 />
      <S.MainContent>
        <S.SectionWrapper>
          <IntroSection />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <NumbersSection />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <ServiceInfoSection />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <PartnersSection />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <InconveniencesSection />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <PromisesSection />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <MeetSection />
        </S.SectionWrapper>
      </S.MainContent>
    </BaseTemplate>
  );
};

export default MainPageTemplate;

