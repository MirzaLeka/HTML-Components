# Drop Items To Next Line

Using Flexbox, items can automatically drop into next line when they run out of space

This can be done using ```flex-flow: wrap``` property.

If you're using rows, make sure to unset height and limit the width. If parent element is not wide enough, child items will drop down to next row.

You can also play around,

```css
  flex-flow: column;
  flex-flow: row-reverse;
  flex-flow: row-reverse wrap-reverse;
```

For more info, visit [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
