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
export const TIME_UNIT = [
  {
    label: '5分毎',
    value: '5',
  },
  {
    label: '10分毎',
    value: '10',
  },
  {
    label: '15分毎',
    value: '15',
  },
  {
    label: '20分毎',
    value: '20',
  },
  {
    label: '30分毎',
    value: '30',
  },
]
export const SUBMIT_FREQUENCY = [
  {
    label: '1週間毎',
    value: '1w',
  },
  {
    label: '2週間毎',
    value: '2w',
  },
  {
    label: '1ヶ月ごと',
    value: '1m',
  },
]
