/*
  ulList.js
  Originally by Adam Soutar
*/

class ulList {
  constructor (ulObject, options) {
    this.ulObject = ulObject
    this.valueNames = options.valueNames
    this.template = options.template
    this.noItemsTemplate = options.noItemsTemplate
    this.items = (options.items) ? options.items : []
  }

  render (searchString, addedCallback) {
    // Clear existing
    this.ulObject.html('')

    var added = 0

    for (let i of this.items) {
      // Search
      var shouldAdd = (!Boolean(searchString))
      if (searchString) {
        const searchLower = searchString.toLowerCase()
        for (let vN of this.valueNames) {
          shouldAdd = (i[vN].toLowerCase().includes(searchLower))
        }
      }

      if (!shouldAdd) continue

      // Append to DOM
      var toAdd = this.template
      for (let vN of this.valueNames) {
        toAdd = toAdd.replace(new RegExp(`%${vN}%`, "g"), i[vN])
      }
      var addedObj = $(toAdd).appendTo(this.ulObject)
      added++

      if (addedCallback) addedCallback(i, addedObj)
    }

    if (added === 0 && this.noItemsTemplate) {
      this.ulObject.html(this.noItemsTemplate)
    }
  }
}
