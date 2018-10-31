# ulList.js
*Using lists shouldn't be so manual, stop using string concatenation!*

### Requirements
All you need is JQuery, and any DOM element, not necessarily a ul.
You could, for example, use ulList as a simple templating system to add items to a nav menu.

### Usage

Create a list:
```js
myList = new ulList($('#myElement'), {
  valueNames: [
    'name',
    'link'
  ],
  template: `<a href='%link%'><li>%name%</li></a>`,
  noItemsTemplate: `Nothing to show.`
});
```

Add items:

_The items object is just a standard array. All methods such as myList.items.concat are available_
```js
myList.items.push({
  name: 'Google',
  link: 'https://www.google.com'
});
```

Render to DOM:
```js
myList.render();
```

Search:

_You can search any and all fields at once. Eg. searchTerm = "https:" or "Goog" will both find Google_
```js
var searchTerm = "Goog";
myList.render(searchTerm);
```

Callback:

_Called once for each item rendered (even if it was there before the re-render)_
```js
myList.render(searchTerm, (item, DOMobject) => {
  console.log(item);
});
```
