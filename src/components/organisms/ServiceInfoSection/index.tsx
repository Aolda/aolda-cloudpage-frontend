import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import Image from 'next/image';
import * as S from './style';

const ServiceInfoSection = () => (
  <S.Container>
    <IntroSectionTitle
      title={
        <>
          <span style={{ color: '#232527' }}>아올다 클라우드는</span>
          <br />
          <span style={{ color: '#1A8EE5' }}>아주대학교 학생</span>
          <span style={{ color: '#232527' }}>을 위한</span>
          <br />
          <span style={{ color: '#1A8EE5' }}>무료 클라우드 서비스</span>
          <span style={{ color: '#232527' }}>입니다.</span>
        </>
      }
      align="left"
      showTopBar={true}
    />
    <S.ContentRow>
      <S.LeftPanel>
        <S.ImageWrapper>
          <Image
            src="/intro/intro_servicenfo_1.png"
            alt="학생들이 공부하는 모습"
            fill
            style={{ objectFit: 'cover' }}
          />
        </S.ImageWrapper>
        <S.Description>
          개발자를 꿈꾸는 대학생에게 클라우드는 프로젝트를 위해 꼭 필요한 서비스입니다.
          <br />
          하지만 비용이 만만치 않고, 무료용량은 너무 작습니다.
          <br />
          관련 비용을 학교에서 지원해주지만, 써야 할 보고서는 늘어나고 챙겨야 할 증빙자료도 많아집니다.
          <br />
          <br />
          아올다 클라우드는 이런 문제를 해결하기 위해 2022년부터 시작된
          <br />
          아주대학교 학생들을 위한 클라우드 서비스입니다.
        </S.Description>
      </S.LeftPanel>
      <S.RightPanel>
        <Image
          src="/intro/intro_serviceinfo_2.png"
          alt="클라우드 일러스트"
          fill
          style={{
            objectFit: 'cover',
            // 구름이 가운데 오도록 위치 조정 (예시)
            objectPosition: '80% 25%', // 가로 50%(가운데), 세로 35%
          }}
        />
      </S.RightPanel>
    </S.ContentRow>
  </S.Container>
);

export default ServiceInfoSection;
