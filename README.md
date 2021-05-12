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

const sumOfPrice = () => {
    let total = 0;
    sales.forEach(sale => total += sale.price)
    return parseFloat(total.toFixed(2));
}

sumOfPrice();

const soldIn2017 = () => {
    const salesCopy = sales.filter(sale => sale.dateSold.slice(0, 4) === "2017")
    return salesCopy;
}

soldIn2017();

const itemsSold = () => {
    const salesCopy = sales.map(sale => sale.itemSold).sort()
    return salesCopy;
}

itemsSold();

const findSaleFromId = (id) => {
    return sales.find(sale => sale.id === id);
}

findSaleFromId("j_123");

https://jackrhumphrey.github.io/Assignment/

I coded the layout in plain HTML for simplicity. I mostly used CSS grid to have the most control over the layout. I used normalize.css to add sensible defaults. I used semantic HTML to make it more responsive.

I introduced a max width for it to be more readable on large screens.

I used Sass variables for colours and the max page width, so I could edit them easily in one place. I also used nesting for multiple selectors.

I used Untitled Sans by Klim Type Foundary because it is a good basic font. I also used Material Design for the search icon.

I used black text on a white background, but I decreased the opacity of the text colour slightly to make it easier on the eyes. I used a light grey for the sidebar to seperate it from the content, but keep it subtle. I used the blue sparingly to make it more interesting. I didn't want any blue on the sidebar because it would pull focus.

I thought the sidebar would probably include navigation, so I added page anchors. I used position sticky to make the page anchors more useful as you scroll down the page. This wouldn't work well if the sidebar had too much content. In this case, it would be better to keep the sidebar inline, or have it be able to scroll independently.

I added a break point to put the sidebar at the bottom when the content becomes too narrow, which is not great for the page anchors. I added another break point to put the search box on a new line on very small screens.

I didn't make the width of the sidebar responsive because I wanted it to ensure it was a sensible width.

I made the search box line up with the sidebar, but this isn't strictly necessary so I didn't use a variable.