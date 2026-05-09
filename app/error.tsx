'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '1.25rem' }}>문제가 발생했습니다</h2>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>
        {error.message || '일시적인 오류일 수 있습니다.'}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '6px',
          background: '#fff',
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
