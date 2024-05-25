import type { ImgAdUnit } from './ImgAdUnit.vue'
import type { AsideLeadCaptureForm } from './AsideLeadCaptureForm.vue'
import type { LeadCaptureForm } from './LeadCaptureForm.vue'

/*
 *TODO: change advertisementTypes to make it generic type
 * This type is used in AsideAdsList component which takes fetched data
 */
export type AdvertisementTypes =
  | ImgAdUnit
  | AsideLeadCaptureForm
  | LeadCaptureForm
