'use client';

import Header from '@/components/organisms/Header';
import NumbersSection from '@/components/organisms/NumbersSection';
import ServiceInfoSection from '@/components/organisms/ServiceInfoSection';
import PartnersSection from '@/components/organisms/PartnersSection';
import ValuesSection from '@/components/organisms/ValuesSection';
import MeetSection from '@/components/organisms/MeetSection';
import Footer from '@/components/organisms/Footer';
import IntroSection from '@/components/organisms/IntroSection';
import styled from 'styled-components';
import * as S from '@/pages/Introduction/style';

const Page = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default function HomePage() {
  const sections = [
    {
      id: 'intro',
      content: (
        <S.Section>
          <IntroSection />
        </S.Section>
      ),
    },
    {
      id: 'numbers',
      content: (
        <S.Section>
          <NumbersSection />
        </S.Section>
      ),
    },
    {
      id: 'service',
      content: (
        <S.Section>
          <ServiceInfoSection />
        </S.Section>
      ),
    },
    {
      id: 'partners',
      content: (
        <S.Section>
          <PartnersSection />
        </S.Section>
      ),
    },
    {
      id: 'promise',
      content: (
        <S.Section>
          <ValuesSection />
        </S.Section>
      ),
    },
    {
      id: 'Meet',
      content: (
        <S.Section>
          <MeetSection />
        </S.Section>
      ),
    },
  ];

  return (
    <>
      <Page>
        <Header />
        <main>
          {sections.map((section) => (
            <S.Section id={section.id} key={section.id}>
              {section.content}
            </S.Section>
          ))}
        </main>
      </Page>
      <Footer />
    </>
  );
}

