export const isCSR = typeof window !== 'undefined' || process.env.csr
export const csrLang = process.env.lang ?? 'ja'
export const FOOTER_LINKS = [
  { text: 'よくある質問', url: 'http://www.google.com', rel: 'noopener' },
  { text: 'お問い合わせ', url: 'http://www.google.com', rel: 'noopener' },
  {
    text: 'Illustrations by Storyset.',
    url: 'https://storyset.com/work',
    rel: 'noopener',
  },
]
