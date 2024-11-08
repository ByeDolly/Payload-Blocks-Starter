export const getSpacingClasses = (marginTop?: number, marginBottom?: number) => {
  const topClass = marginTop ? `mt-${marginTop}` : ''
  const bottomClass = marginBottom ? `mb-${marginBottom}` : ''
  
  return `${topClass} ${bottomClass}`.trim()
} 