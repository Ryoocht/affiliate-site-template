import type { AffiliateSeoResponse } from '../types'

type RemoveUnderscoreFields<T> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K] extends object
    ? RemoveUnderscoreFields<T[K]>
    : T[K]
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function removeUnderscoreFields<T>(metadata: T): RemoveUnderscoreFields<T> {
  if (Array.isArray(metadata)) {
    return metadata.map(item =>
      removeUnderscoreFields(item),
    ) as RemoveUnderscoreFields<T>
  } else if (metadata !== null && typeof metadata === 'object') {
    const result = {} as RemoveUnderscoreFields<T>
    for (const key in metadata) {
      if (!key.startsWith('_')) {
        ;(result as any)[key] = removeUnderscoreFields((metadata as any)[key])
      }
    }
    return result
  }
  return metadata as RemoveUnderscoreFields<T>
}

export default function flattenSeoData(
  data: Ref<GetSeoMetadataResult | null>,
): AffiliateSeoResponse {
  const flattenedData: AffiliateSeoResponse = {
    headInput: null,
    seoMetaInput: null,
    headOptions: null,
    seoMetaOptions: null,
  }

  if (data?.value && data?.value.length > 0 && data?.value[0].seo) {
    const { seo } = data.value[0]

    Object.keys(flattenedData).forEach(key => {
      const seoKey = key as keyof AffiliateSeoResponse
      if (seo[seoKey]) {
        flattenedData[seoKey] = removeUnderscoreFields(
          seo[seoKey]!,
        ) as AffiliateSeoResponse[keyof AffiliateSeoResponse]
      }
    })
  }

  return flattenedData
}
