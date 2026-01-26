/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // .tsx, .jsx 파일만 페이지로 인식하도록 설정 (.ts는 스타일 파일용)
  pageExtensions: ['tsx', 'jsx'],
};

module.exports = nextConfig;

