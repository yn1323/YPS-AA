import React from 'react'

export const replaceWithBrTag = (str: string) => {
  const strArray = str.split('\n')
  const retArray: (string | JSX.Element)[] = []
  strArray.forEach((text, i) => {
    retArray.push(text)
    if (strArray[i + 1]) {
      retArray.push(<br key={i + 1} />)
    }
  })
  return retArray
}

export const injectStringInArray = (array: any[], replaceText: string) => {
  const retArray: any[] = []
  array.forEach((something, i) => {
    retArray.push(something)
    if (array[i + 1]) {
      retArray.push(replaceText)
    }
  })
  return retArray
}
