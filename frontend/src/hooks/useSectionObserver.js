import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import { setActiveSection } from '../store/slices/uiSlice'

// Hook to track which section is in view and update Redux
export function useSectionObserver(sectionId) {
  const dispatch = useDispatch()
  const { ref, inView } = useInView({
    threshold: 0.4, // section is "active" when 40% visible
  })

  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(sectionId))
    }
  }, [inView, sectionId, dispatch])

  return ref
}
