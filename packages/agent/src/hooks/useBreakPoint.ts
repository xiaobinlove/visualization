const a = 1
const useBreakPoint = () => {
  const breakPoints = [
    {
      min: 0,
      max: 576,
      name: 'xs'
    },
    {
      min: 576,
      max: 768,
      name: 'sm'
    },
    {
      min: 768,
      max: 992,
      name: 'md'
    },
    {
      min: 992,
      max: 1200,
      name: 'lg'
    },
    {
      min: 1200,
      max: 1600,
      name: 'xl'
    },
    {
      min: 1600,
      max: Infinity,
      name: 'xxl'
    }
  ]
  const getBreakPoint = (width: number) => {
    for (let i = 0; i < breakPoints.length; i++) {
      const breakPoint = breakPoints[i]
      if (width >= breakPoint.min && width < breakPoint.max) {
        return breakPoint.name
      } else if (i === breakPoints.length - 1) {
        return breakPoint.name
      }
    }
    return 'xs'
  }
  return {
    getBreakPoint
  }
}
export default useBreakPoint
