# ulList.js
![gzipped size](https://img.badgesize.io/Adybo123/ulList.js/master/dist/ulList.min.js.svg?compression=gzip)

*Using lists shouldn't be so manual, stop using string concatenation!*

### Requirements
All you need is JQuery, and any DOM element, not necessarily a ul.
You could, for example, use ulList as a simple templating system to add items to a nav menu.

### Usage

Create a list:
```js
myList = new ulList($('#myElement'), {
  valueNames: ['name', 'link'],
  template: `<a href='%link%'><li>%name%</li></a>`
})
```

Add items:

_The items object is just a standard array. All methods such as myList.items.concat are available_
```js
myList.items.push({
  name: 'Google',
  link: 'https://www.google.com'
})
```

Render to DOM:
```js
myList.render()
```

Search:

_You can search any and all fields at once. Eg. searchTerm = "https:" or "Goog" will both find Google_
```js
var searchTerm = "Goog"
myList.render(searchTerm)
```

Callback:

_Called once for each item rendered (even if it was there before the re-render)_
```js
myList.render(searchTerm, (item, DOMobject) => {
  console.log(item)
})
```

### Other options

The ulList constructor is in the format ```(element, options)``` where element is a JQuery DOM object, and options is a dictionary object.

The keys you can use for options are:
 - **template** - Required - The string of the element to append, with %propertyName% in place of values
 - **valueNames** - Required - Array of the names of properties inbetween %% in the template string
 - **noItemsTemplate** - Optional - String DOM element to be rendered when no items match the search string
 - **items** - Optional - Array of items like the ones in the ```.push``` examples above, but defined on initialisation
