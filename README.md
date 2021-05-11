The CSS box model is used to arrange elements on a page. Each HTML element has its own box model, which affects layout. 

It is visualised as a rectangle made up of four parts: content, padding, border and margin. Each part is also visualised as a rectangle surrounding the previous one, from content on the inside to margin on the outside.

The content area is determined by the content of the element, and properties which control the height and width of the element. The padding, border and margin are determined by properties of the same name.

The effect these parts have on layout depends on the display property of the element and of its parent elements. The browser has a default display value for each HTML element, which can be overridden by setting the display property. The box model is most applicable to block level elements, although inline elements can also have these properties.

Padding and margin are transparent, and take width as a value. The border property may specify a width, style and color.

The background property of the element applies to padding and border, but not margin.

Margin can also take a negative value, which may draw the element closer to other elements, while border width and padding cannot.

Padding, border and margin can all have different values on all four sides.

By default, properties which control the height and width of the element apply only to the content area. In some situations, it may be preferable to include padding and border in the height and width calculations by setting the box-sizing property to border-box.

Another thing to be aware of is margin collapse. The margin between two elements may collapse to be the larger of the two in certain situations.

Both Google Chrome and Firefox helpfully provide a visualisation of the box model of an element inside dev tools.