import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split('/').filter(Boolean);
  if (
    segments.length >= 1 &&
    segments[0].toLowerCase() === 'faq' &&
    segments[0] !== 'faq'
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/' + ['faq', ...segments.slice(1)].join('/');
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
