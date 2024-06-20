async function fetchSeoData(client: (a: string, b: unknown) => void) {
  const query = ''
  const params = {}
  const seoData = client(query, params)
  return seoData
}

export async function useAsyncSanity() {
  const sanity = createSanityClient()
  const seoData = await fetchSeoData(() => sanity)
  return seoData
}
