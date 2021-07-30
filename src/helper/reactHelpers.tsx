import React from 'react'

export const replaceWithBrTag = (str: string) => {
  const strArray = str.split('\n')
  const retArray: (string | JSX.Element)[] = []
  strArray.forEach((str, i) => {
    retArray.push(str)
    if (strArray[i + 1]) {
      retArray.push(<br key={i + 1} />)
    }
  })
  return retArray
}
