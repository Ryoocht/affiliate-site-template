import type { SwiperContainer } from 'swiper/element'

export default function calculateVisibleSlides(
  container: Ref<SwiperContainer | null>,
): number | undefined {
  if (!container.value?.swiper) return undefined

  const swiperInstance = container.value.swiper
  const visibleSlides = swiperInstance.slides.filter(slide => {
    const slideLeft = slide.offsetLeft
    const slideRight = slideLeft + slide.offsetWidth
    const swiperLeft = swiperInstance.el.scrollLeft
    const swiperRight = swiperLeft + swiperInstance.el.offsetWidth
    return (
      (slideLeft >= swiperLeft && slideRight <= swiperRight) ||
      (slideLeft < swiperRight && slideRight > swiperLeft)
    )
  })
  return visibleSlides.length
}
