export default function Loading() {
  return (
    <div
      style={{
        padding: '3rem',
        textAlign: 'center',
        color: '#666',
        fontFamily: 'system-ui, sans-serif',
      }}
      aria-busy="true"
      aria-live="polite"
    >
      로딩 중...
    </div>
  );
}
