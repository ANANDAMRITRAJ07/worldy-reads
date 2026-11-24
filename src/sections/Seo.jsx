const SITE = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
const INDEXABLE = import.meta.env.VITE_INDEXABLE === 'true'

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title
    ? `${title} | Worldy Reads`
    : 'Worldy Reads | Understanding the World Through Its Past'

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE}${path}`} />
      {!INDEXABLE && <meta name="robots" content="noindex, nofollow" />}
    </>
  )
}