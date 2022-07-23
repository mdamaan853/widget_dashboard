export const arrayToObject = (array, keySelector) =>
  array.map(item => ({ [item[keySelector]]: item }))

export const groupByObject = (obj, withgroupFieldId) =>
  Object.keys(obj).reduce((acc, key) => {
    const currentObj = obj[key]
    const gropByFieldData = currentObj[withgroupFieldId]
    if (!acc[gropByFieldData]) {
      acc[gropByFieldData] = {}
    }
    acc[gropByFieldData][key] = currentObj

    return acc
  }, {})

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const objectsToSelectList = (objs, labelKey) => {
  // console.log(objs,Object.entries(objs).map(([key,values]) => ({
  //   value: values,
  //   label: values[labelKey],
  // })))
  return Object.entries(objs).map(([key,values]) => ({
   
    label: values[labelKey],
    value: values,
  }))
}


