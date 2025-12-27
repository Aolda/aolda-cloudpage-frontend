import Link from 'next/link';
import * as S from './style';

export type ButtonSize = 'md' | 'lg';

export interface ButtonProps {
  /** 버튼에 표시될 텍스트 */
  label: string;
  /** 링크 경로 (제공되면 링크로 동작) */
  href?: string;
  /** 클릭 핸들러 (href가 없을 때만 사용) */
  onClick?: () => void;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 이미지 경로 */
  image?: string;
}

/**
 * 범용 버튼 컴포넌트
 * 
 * @param {ButtonProps} props - 버튼 props
 * @param {string} props.label - 버튼에 표시될 텍스트
 * @param {string} [props.href] - 링크 경로 (제공되면 링크로 동작)
 * @param {Function} [props.onClick] - 클릭 핸들러
 * @param {ButtonSize} [props.size='md'] - 버튼 크기
 * @param {string} [props.image] - 이미지 경로
 * 
 * @example
 * // 기본 버튼
 * <Button label="클릭" onClick={() => console.log('clicked')} />
 * 
 * @example
 * // 링크 버튼
 * <Button label="이동" href="/about" />
 * 
 * @example
 * // 이미지 포함
 * <Button 
 *   label="합류하기" 
 *   href="/join" 
 *   image="/icon.png"
 * />
 */
const Button = ({
  label,
  href,
  onClick,
  size = 'md',
  image,
}: ButtonProps) => {
  const content = (
    <>
      {image && <S.Image src={image} alt={label} />}
      <S.Label>{label}</S.Label>
    </>
  );

  // href가 있으면 Next.js Link로 렌더링
  if (href) {
    return (
      <S.Button
        as={Link}
        href={href}
        $size={size}
        aria-label={label}
      >
        {content}
      </S.Button>
    );
  }

  // href가 없으면 버튼으로 렌더링
  return (
    <S.Button
      type="button"
      onClick={onClick}
      $size={size}
      aria-label={label}
    >
      {content}
    </S.Button>
  );
};

export default Button;

