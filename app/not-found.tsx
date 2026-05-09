import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>페이지를 찾을 수 없습니다</h1>
      <p style={{ color: '#666', margin: 0 }}>
        주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
      </p>
      <p style={{ margin: 0 }}>
        <Link href="/" style={{ color: '#3d90d4', textDecoration: 'underline' }}>
          홈으로 돌아가기
        </Link>
      </p>
    </main>
  );
}
