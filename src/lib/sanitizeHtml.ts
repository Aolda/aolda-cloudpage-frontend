import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } });
}

export function isProbablyHtmlString(value: string): boolean {
  const t = value.trim();
  return t.startsWith('<') && /<\/?[a-z][\s\S]*>/i.test(t);
}
