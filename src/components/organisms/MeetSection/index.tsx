import Button from '../../atoms/Button';
import IntroSectionTitle from '../../molecules/IntroSectionTitle';
import * as S from './style';

const MeetSection = () => (
  <S.Section>
    <S.Divider />
    <IntroSectionTitle
      title="아올다, 이제 한번\n만나볼까요?"
      align="center"
      titleColor="rgb(35, 126, 211)"
    />

    <S.Grid>
      <S.Col>
        <S.Caption>아올다로 <br /> 꿈을 담아내고고 싶다면?</S.Caption>
        <Button label="콘솔로 이동" href="https://console.aoldacloud.com/" size="lg" />
      </S.Col>
      <S.Col>
        <S.Caption>아올다를 <br /> 함께 만들어가고 싶다면?</S.Caption>
        <Button
          label="팀 아올다 합류하기"
          href="https://www.notion.so/aolda-workspace/AHP-Aolda-Homepage-Project-2-27e808f2c44e80cfb59ef2276bae2e47?p=285808f2c44e80eb9af0e505159ac97e&pm=s"
        />
      </S.Col>
    </S.Grid>
  </S.Section>
);

export default MeetSection;

