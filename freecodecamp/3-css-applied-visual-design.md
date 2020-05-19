# Applied Visual Design
Visual Design in web development is a broad topic. It combines typography, color theory, graphics, animation, and page layout to help deliver a site's message. The definition of good design is a well-discussed subject, with many books on the theme.

At a basic level, most web content provides a user with information. The visual design of the page can influence its presentation and a user's experience. In web development, HTML gives structure and semantics to a page's content, and CSS controls the layout and appearance of it.

## HTML style tags
- `<strong>` applies `font-weight: bold;` to the text
- `<u>` applies `text-decoration: underline;` to the text
- `<em>` applies `font-style: italic;` to the text
- `<s>` applies `text-decoration: line-through;` to the text
- `<hr>` adds a horizontal line across the width of its containing element

## Colors
- `rgb()` where r - red, g - green, b - blue
- `rgba()` where r - red, g - green, b - blue and a - alpha/level of opacity
- hex codes like `#000000` (for black) or `#000` (short version for black)

## Shadows
The `box-shadow` property applies one or more shadows to an element.

The box-shadow property takes values for
- `offset-x` (how far to push the shadow horizontally from the element)
- `offset-y` (how far to push the shadow vertically from the element)
- `blur-radius` (optional)
- `spread-radius` (optional)
- `color`

Multiple box-shadows can be created by using commas to separate properties of each `box-shadow` element.

## Other tags
- `opacity` property in CSS is used to adjust the opacity, or conversely, the transparency for an item.
    * `1` - opaque, `0.5` - half see-through, `0` - completely transparent
- `text-transform` property in CSS is used to change the appearance of text. It's a convenient way to make sure text on a webpage appears consistently, without having to change the text content of the actual HTML elements.
    * `lowercase`, `uppercase`, `capitalize`, `initial`, `inherit`, `none` (default)
- `font-weight` property sets how thick or thin characters are in a section of text.
    * from `100` to `900` where generally `400` is regular and `700` is bold
- `font-size` property sets the size of the font
- `line-height` property to change the height of each line in a block of text. As the name suggests, it changes the amount of vertical space that each line of text gets.

## Pseudo Classes
A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.

- `:hover` matches when the user interacts with an element with a pointing device, but does not necessarily activate it.
    * Example - changes color to red when the link `a` is hovered over:
    ```css
    a:hover {
        color: red;
    }
    ```

## Position
CSS treats each HTML element as its own box, which is usually referred to as the CSS **Box Model**. Block-level items automatically start on a new line (think `headings`, `paragraphs`, and `divs`) while inline items sit within surrounding content (like `images` or `spans`). The default layout of elements in this way is called the normal flow of a document, but CSS offers the position property to override it.

### `relative`
When the position of an element is set to `relative`, it allows you to specify how CSS should move it relative to its current position in the normal flow of the page. It pairs with the CSS offset properties of `left` or `right`, and `top` or `bottom`. These say how many pixels, percentages, or ems to move the item away from where it is normally positioned.

![CSS Offset](https://cdn-media-1.freecodecamp.org/imgr/eWWi3gZ.gif)

**Note:** Positioning gives you a lot of flexibility and power over the visual layout of a page. It's good to remember that no matter the position of elements, the underlying HTML markup should be organized and make sense when read from top to bottom. This is how users with visual impairments (who rely on assistive devices like screen readers) access your content.

### `absolute`
`absolute` locks the element in place relative to its parent container. Unlike the `relative` position, this removes the element from the normal flow of the document, so surrounding items ignore it. The CSS offset properties (top or bottom and left or right) are used to adjust the position.

One nuance with absolute positioning is that it will be locked relative to its closest *positioned* ancestor. If you forget to add a position rule to the parent item, (this is typically done using position: `relative`;), the browser will keep looking up the chain and ultimately default to the body tag.

### `fixed`
`fixed` is a type of absolute positioning that locks an element relative to the browser window. Similar to absolute positioning, it's used with the CSS offset properties and also removes the element from the normal flow of the document. Other items no longer "realize" where it is positioned, which may require some layout adjustments elsewhere.

One key difference between the `fixed` and absolute positions is that an element with a fixed position won't move when the user scrolls. This is particularly useful for `navbar` implementations.