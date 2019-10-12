export const nameToColor = name => {
  const ascii = name.split('').reduce((acc, val) => {
    return (acc += val.charCodeAt())
  }, 0)

  return '#' + ascii.toString(16).slice(0, 6)
}
