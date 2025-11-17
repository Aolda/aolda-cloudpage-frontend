import * as S from './style';

type IntroMenuProps = {
  title: string;
  actionLabel: string;
  href: string;
};

const IntroMenu = ({ title, actionLabel, href }: IntroMenuProps) => {
  return (
    <S.Card>
      <S.Title>
        {title.split('\n').map((line, index, array) => (
          <span key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </span>
        ))}
      </S.Title>
      <S.Link href={href}>
        {actionLabel}
      </S.Link>
    </S.Card>
  );
};

export default IntroMenu;
