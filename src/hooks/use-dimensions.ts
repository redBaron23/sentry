import { useEffect, useState } from 'react'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: '',
    isMobile: false,
    isDesktop: false,
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let size = ''

      if (width < breakpoints.sm) {
        size = 'xs'
      } else if (width < breakpoints.md) {
        size = 'sm'
      } else if (width < breakpoints.lg) {
        size = 'md'
      } else if (width < breakpoints.xl) {
        size = 'lg'
      } else if (width < breakpoints['2xl']) {
        size = 'xl'
      } else {
        size = '2xl'
      }

      setDimensions({
        width: size,
        isMobile: width < breakpoints.md,
        isDesktop: width >= breakpoints.lg,
        isXs: size === 'xs',
        isSm: size === 'sm',
        isMd: size === 'md',
        isLg: size === 'lg',
        isXl: size === 'xl',
        is2xl: size === '2xl',
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return dimensions
}

export default useDimensions
