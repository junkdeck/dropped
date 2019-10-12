export const nameToColor = name => {
  const ascii = name.split('').reduce((acc, val) => {
    return (acc += val.charCodeAt())
  }, 0)

  return (
    '#' +
    Math.abs((ascii * 0x888888) >> 0)
      .toString(16)
      .slice(0, 6)
  )
}
