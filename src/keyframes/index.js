import keyframesList from './keyframesList.js'

export const getKeyframes = (names) => {
  let result = []
  names.forEach(name => {
    if (!!keyframesList[name]) result.push(keyframesList[name])
  })
  return result
}
