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

## Float
`float` elements are removed from the normal flow of a document and pushed to either the `left` or `right` of their containing parent element. It's commonly used with the `width` property to specify how much horizontal space the floated element requires.

## Margin
Another positioning technique is to center a block element horizontally. One way to do this is to set its `margin` to a value of `auto`.

This method works for images, too. Images are inline elements by default, but can be changed to block elements when you set the `display` property to `block`.

## Z-Index
When elements are positioned to overlap (i.e. using `position: absolute | relative | fixed | sticky`), the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the `z-index` property can specify the order of how elements are stacked on top of one another. It must be an integer (i.e. a whole number and not a decimal), and higher values for the `z-index` property of an element move it higher in the stack than those with lower values.

**Note:** [Funny article](https://psuter.net/2019/07/07/z-index) of the highest ever found z-index of number 9 repeated 1242 times.

# Visual Design

## Colors

### Complementary Colors
On a website, color can draw attention to content, evoke emotions, or create visual harmony. Using different combinations of colors can really change the look of a website, and a lot of thought can go into picking a color palette that works with your content.

The color wheel is a useful tool to visualize how colors relate to each other - it's a circle where similar hues are neighbors and different hues are farther apart. When two colors are opposite each other on the wheel, they are called complementary colors. They have the characteristic that if they are combined, they "cancel" each other out and create a gray color. However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast.

Some examples of complementary colors with their hex codes are:
- red (`#FF0000`) and cyan (`#00FFFF`)
- green (`#00FF00`) and magenta (`#FF00FF`)
- blue (`#0000FF`) and yellow (`#FFFF00`)

This is different than the outdated RYB color model that many of us were taught in school, which has different primary and complementary colors. Modern color theory uses the additive RGB model (like on a computer screen) and the subtractive CMY(K) model (like in printing). Read [here](https://en.wikipedia.org/wiki/Color_model) for more information on this complex subject.

There are many color picking tools available online that have an option to find the complement of a color.

**Note:** For all color challenges: Using color can be a powerful way to add visual interest to a page. However, color alone should not be used as the only way to convey important information because users with visual impairments may not understand that content.

### Tertiary Colors
Computer monitors and device screens create different colors by combining amounts of red, green, and blue light. This is known as the RGB additive color model in modern color theory. Red (R), green (G), and blue (B) are called primary colors. Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). You saw these colors in the Complementary Colors challenge. These secondary colors happen to be the complement to the primary color not used in their creation, and are opposite to that primary color on the color wheel. For example, magenta is made with red and blue, and is the complement to green.

Tertiary colors are the result of combining a primary color with one of its secondary color neighbors. For example, within the RGB color model, red (primary) and yellow (secondary) make orange (tertiary). This adds six more colors to a simple color wheel for a total of twelve.

There are various methods of selecting different colors that result in a harmonious combination in design. One example that can use tertiary colors is called the split-complementary color scheme. This scheme starts with a base color, then pairs it with the two colors that are adjacent to its complement. The three colors provide strong visual contrast in a design, but are more subtle than using two complementary colors.

Here are three colors created using the split-complement scheme:
- orange (`#FF7F00`)
- cyan (`#00FFFF`)
- raspberry (`#FF007F`)

## Adjust the Color of Various Elements to Complementary Colors
Complementary Colors showed that opposite colors on the color wheel can make each other appear more vibrant when placed side-by-side. However, the strong visual contrast can be jarring if it's overused on a website, and can sometimes make text harder to read if it's placed on a complementary-colored background. In practice, one of the colors is usually dominant and the complement is used to bring visual attention to certain content on the page.

For example a page can use a shade of teal (`#09A7A1`) as the dominant color, and its orange (`#FF790E`) complement to visually highlight sign-up buttons.

## Adjust the Hue of a Color
Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the `hsl()` property as an alternative way to pick a color by directly stating these characteristics.

**Hue** is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In `hsl()`, hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between `0` and `360`.

**Saturation** is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with `100%` being fully saturated.

**Lightness** is the amount of white or black in a color. A percentage is given ranging from `0%` (black) to `100%` (white), where `50%` is the normal color.

Here are a few examples of using `hsl()` with fully-saturated, normal lightness colors:
- red `hsl(0, 100%, 50%)`
- yellow `hsl(60, 100%, 50%)`
- green	`hsl(120, 100%, 50%)`
- cyan `hsl(180, 100%, 50%)`
- blue `hsl(240, 100%, 50%)`
- magenta `hsl(300, 100%, 50%)`

The `hsl()` option in CSS also makes it easy to adjust the tone of a color. Mixing white with a pure hue creates a tint of that color, and adding black will make a shade. Alternatively, a tone is produced by adding gray or by both tinting and shading. Recall that the 's' and 'l' of `hsl()` stand for saturation and lightness, respectively. The saturation percent changes the amount of gray and the lightness percent determines how much white or black is in the color. This is useful when you have a base hue you like, but need different variations of it.