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

## Gradual CSS Linear Gradient
Applying a color on HTML elements is not limited to one flat hue. CSS provides the ability to use color transitions, otherwise known as gradients, on elements. This is accessed through the `background` property's `linear-gradient()` function. Here is the general syntax:

`background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);`

The first argument specifies the direction from which color transition starts - it can be stated as a degree, where 90deg makes a vertical gradient and 45deg is angled like a backslash. The following arguments specify the order of colors used in the gradient.

### Striped Element
The `repeating-linear-gradient()` function is very similar to `linear-gradient()` with the major difference that it repeats the specified gradient pattern. `repeating-linear-gradient()` accepts a variety of values, but for simplicity, you'll work with an angle value and color stop values in this challenge.

The angle value is the direction of the gradient. Color stops are like width values that mark where a transition takes place, and are given with a percentage or a number of pixels.

```css
div{
    background: repeating-linear-gradient(
        90deg,
        yellow 0px,
        blue 40px,
        green 40px,
        red 80px
    );
}
```

In the example, the gradient starts with the color yellow at 0 pixels which blends into the second color blue at 40 pixels away from the start. Since the next color stop is also at 40 pixels, the gradient immediately changes to the third color green, which itself blends into the fourth color value red as that is 80 pixels away from the beginning of the gradient.

For this example, it helps to think about the color stops as pairs where every two colors blend together.

`0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px`

If every two color stop values are the same color, the blending isn't noticeable because it's between the same color, followed by a hard transition to the next color, so you end up with stripes.

## Texture as Subtle Pattern as a Background Image
One way to add texture and interest to a background and have it stand out more is to add a subtle pattern. The key is balance, as you don't want the background to stand out too much, and take away from the foreground. The `background` property supports the `url()` function in order to link to an image of the chosen texture or pattern. The link address is wrapped in quotes inside the parentheses.

```css
body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png")
}
```

## CSS Transform 

### Scale Property to Change the Size of an Element
To change the scale of an element, CSS has the `transform` property, along with its `scale()` function. The following code example doubles the size of all the paragraph elements on the page:

```css
p {
    transform: scale(2);
}
```

### Scale Property to Scale an Element on Hover
The `transform` property has a variety of functions that let you scale, move, rotate, skew, etc., your elements. When used with pseudo-classes such as `:hover` that specify a certain state of an element, the `transform` property can easily add interactivity to your elements.

Here's an example to scale the paragraph elements to 2.1 times their original size when a user hovers over them:
```css
p:hover {
    transform: scale(2.1);
}
```

**Note:** Applying a transform to a div element will also affect any child elements contained in the div.

### `skewX` to Skew an Element Along the X-Axis
The next function of the transform property is skewX(), which skews the selected element along its X (horizontal) axis by a given degree.

The following code skews the paragraph element by -32 degrees along the X-axis.
```css
p {
    transform: skewX(-32deg);
}
```

Skew the element with the id of `bottom` by 24 degrees along the X-axis by using the `transform` property.

### `skewY` to Skew an Element Along the Y-Axis
Given that the skewX() function skews the selected element along the X-axis by a given degree, it is no surprise that the skewY() property skews an element along the Y (vertical) axis.
```css
p {
    transform: skewY(-10deg);
}
```

## Create a Graphic
By manipulating different selectors and properties, you can make interesting shapes. One of the easier ones to try is a crescent moon shape. For this challenge you need to work with the `box-shadow` property that sets the shadow of an element, along with the `border-radius` property that controls the roundness of the element's corners.

You will create a round, transparent object with a crisp shadow that is slightly offset to the side - the shadow is actually going to be the moon shape you see.


In order to create a round object, the border-radius property should be set to a value of 50%.

You may recall from an earlier challenge that the box-shadow property takes values for offset-x, offset-y, blur-radius, spread-radius and a color value in that order. The blur-radius and spread-radius values are optional.
```css
.center {
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
}
```

### Create a More Complex Shape
One of the most popular shapes in the world is the heart shape, and in this challenge you'll create one using pure CSS. But first, you need to understand the `::before` and `::after` pseudo-elements. These pseudo-elements are used to add something before or after a selected element. In the following example, a `::before` pseudo-element is used to add a rectangle to an element with the class heart.

For the `::before` and `::after` pseudo-elements to function properly, they must have a defined `content` property. This property is usually used to add things like a photo or text to the selected element. When the `::before` and `::after` pseudo-elements are used to make shapes, the `content` property is still required, but it's set to an empty string. In the example, the element with the class of `heart` has a `::before` pseudo-element that produces a yellow rectangle with `height` and `width` of 50px and 70px, respectively. This rectangle has round corners due to its 25% border radius and is positioned absolutely at 5px from the `left` and 50px above the `top` of the element.

```css
.heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
}

.heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
}

.heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
}
```

## `@keyframes`
To animate an element, you need to know about the animation properties and the `@keyframes` rule. The animation properties control how the animation should behave and the `@keyframes` rule controls what happens during that animation. There are eight animation properties in total.

`animation-name` sets the name of the animation, which is later used by `@keyframes` to tell CSS which rules go with which animations.

`animation-duration` sets the length of time for the animation.

`@keyframes` is how to specify exactly what happens within the animation over the duration. This is done by giving CSS properties for specific "frames" during the animation, with percentages ranging from 0% to 100%. If you compare this to a movie, the CSS properties for 0% is how the element displays in the opening scene. The CSS properties for 100% is how the element appears at the end, right before the credits roll. Then CSS applies the magic to transition the element over the given duration to act out the scene. Here's an example to illustrate the usage of `@keyframes` and the animation properties:
```css
#anim {
    animation-name: colorful;
    animation-duration: 3s;
}

@keyframes colorful {
    0% {
        background-color: blue;
    }
    100% {
        background-color: yellow;
    }
}
```

For the element with the `anim` id, the code snippet above sets the `animation-name` to `colorful` and sets the` animation-duration` to 3 seconds. Then the `@keyframes` rule links to the animation properties with the name `colorful`. It sets the color to blue at the beginning of the animation (0%) which will transition to yellow by the end of the animation (100%). You aren't limited to only beginning-end transitions, you can set properties for the element for any percentage between 0% and 100%.

### Change the Hover State of a Button
You can use CSS `@keyframes` to change the color of a button in its hover state.

Here's an example of changing the width of an image on hover:
```css
<style>
img:hover {
    animation-name: width;
    animation-duration: 500ms;
}

@keyframes width {
    100% {
        width: 40px;
    }
}
</style>

<img src="https://bit.ly/smallgooglelogo" alt="Google's Logo" />
```

**Note** that ms stands for milliseconds, where 1000ms is equal to 1s.

That's great, but it doesn't work right yet. Notice how the animation resets after `500ms` has passed, causing the button to revert back to the original color. You want the button to stay highlighted.

This can be done by setting the `animation-fill-mode` property to `forwards`. The `animation-fill-mode` specifies the style applied to an element when the animation has finished. You can set it like so:
`animation-fill-mode: forwards;`

### Create Movement
When elements have a specified `position`, such as `fixed` or `relative`, the CSS offset properties `right`, `left`, `top`, and `bottom` can be used in animation rules to create movement.

As shown in the example below, you can push the item downwards then upwards by setting the `top` property of the `50%` keyframe to 50px, but having it set to 0px for the first (`0%`) and the last (`100%`) keyframe.

```css
@keyframes rainbow {
    0% {
        background-color: blue;
        top: 0px;
    }
    50% {
        background-color: green;
        top: 50px;
    }
    100% {
        background-color: yellow;
        top: 0px;
    }
}
```

### Create Visual Direction by Fading an Element from Left to Right
You can change the `opacity` of an animated element so it gradually fades as it reaches the right side of the screen.

In the displayed animation, the round element with the gradient background moves to the right by the 50% mark of the animation per the `@keyframes` rule.

```css
#ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
        35deg,
        #ccffff,
        #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
}

@keyframes fade {
    50% {
        left: 60%;
        opacity: 0.1;
    }
}
```

### Animate Elements Continually Using an Infinite Animation Count
Another animation property is the `animation-iteration-count`, which allows you to control how many times you would like to loop through the animation. Here's an example:
`animation-iteration-count: 3;`

In this case the animation will stop after running 3 times, but it's possible to make the animation run continuously by setting that value to infinite.

Here's one more continuous animation example with the `animation-iteration-count `property that uses the heart.

The one-second long heartbeat animation consists of two animated pieces. The `heart` elements (including the `:before` and `:after` pieces) are animated to change size using the `transform` property, and the background `div` is animated to change its color using the `background` property.
```css
.back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
}

.heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
}

@keyframes backdiv {
    50% {
        background: #ffe6f2;
    }
}

@keyframes beat {
    0% {
        transform: scale(1) rotate(-45deg);
    }
    50% {
        transform: scale(0.6) rotate(-45deg);
    }
}
```

### Change Animation Timing with Keywords
In CSS animations, the `animation-timing-function` property controls how quickly an animated element changes over the duration of the animation. If the animation is a car moving from point A to point B in a given time (your `animation-duration`), the `animation-timing-function` says how the car accelerates and decelerates over the course of the drive.

There are a number of predefined keywords available for popular options. For example, the default value is `ease`, which starts slow, speeds up in the middle, and then slows down again in the end. Other options include `ease-out`, which is quick in the beginning then slows down, `ease-in`, which is slow in the beginning, then speeds up at the end, or `linear`, which applies a constant animation speed throughout.

### Bezier Curves
Instead of `animation-timing-function`, CSS offers an option other than keywords that provides even finer control over how the animation plays out, through the use of Bezier curves.

In CSS animations, Bezier curves are used with the `cubic-bezier` function. The shape of the curve represents how the animation plays out. The curve lives on a 1 by 1 coordinate system. The X-axis of this coordinate system is the duration of the animation (think of it as a time scale), and the Y-axis is the change in the animation.

The `cubic-bezier` function consists of four main points that sit on this 1 by 1 grid: `p0`, `p1`, `p2`, and `p3`. `p0` and `p3` are set for you - they are the beginning and end points which are always located respectively at the origin (0, 0) and (1, 1). You set the x and y values for the other two points, and where you place them in the grid dictates the shape of the curve for the animation to follow. This is done in CSS by declaring the x and y values of the `p1` and `p2` "anchor" points in the form: `(x1, y1, x2, y2)`. Pulling it all together, here's an example of a Bezier curve in CSS code:

`animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);`

In the example above, the x and y values are equivalent for each point (x1 = 0.25 = y1 and x2 = 0.75 = y2), which if you remember from geometry class, results in a line that extends from the origin to point (1, 1). This animation is a linear change of an element during the length of an animation, and is the same as using the `linear` keyword. In other words, it changes at a constant speed.