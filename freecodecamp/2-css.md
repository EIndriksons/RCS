# More Advanced CSS Tips and Tricks

## Use Attribute Selectors to Style Elements
You can use the `[attr=value]` attribute selector to style the checkboxes. This selector matches and styles elements with a specific attribute value. For example, the below code changes the margins of all elements with the attribute `type` and a corresponding value of `radio`:
```css
[type='radio'] {
    margin: 20px 0px 20px 0px;
}
```

## Understand Absolute versus Relative Units
The two main types of length units are absolute and relative. Absolute units tie to physical units of length. For example, `in` and `mm` refer to inches and millimeters, respectively. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on a screen's resolution.

Relative units, such as `em` or `rem`, are relative to another length value. For example, `em` is based on the size of an element's font. If you use it to set the `font-size` property itself, it's relative to the parent's `font-size`.

## Inheritance
- You can also style `html` and `body` elements, as well as use `*` to select "all" elements.
- Children elements will inherit their Parent element styles.
- More specific Children element declarations will override Parent element style.
    * *Example - h1 will be pink, instead of green*
    ```css
    body {
        color: green;
    }

    h1 {
        color: pink;
    }
    ```
- `id` will override `class` styles.
    * *Example - h1 will be orange, instead of blue*
    ```css
    h1 {
        color: blue;
    }

    #orange-text {
        color: orange;
    }
    ```
- `style` attribute inside element will override other CSS
    * *Example - h1 will be green, instead of orange*
    ```css
    <style>
    #orange-text {
        color: orange;
    }
    </style>

    <h1 id="orange-text" style="color: green;">Hello World!</h1>
    ```
- Finally, `!important` is the nuclear option which will override any other CSS
    * *Example - h1 will be pink, instead of white*
    ```css
    <style>
    .pink-text {
        color: pink !important;
    }
    </style>

    <h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
    ```
- Additionally, browsers read CSS from top to bottom in order of their declaration. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last.
    * *Example - blue color will be used, instead of pink*
    ```css
    h1 {
        color: pink;
    }

    h1 {
        color: blue;
    }
    ```
- [Cheat Sheet](https://specifishity.com/) for all combinations

## CSS Variables
CSS Variables are a powerful way to change many CSS style properties at once by changing only one value.

The variables have to be declared inside an element, which defines its scope. Therefore a common best practice is to define custom properties on the
`:root` pseudo-class:
```css
:root {
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
}
```

After you create your variable, you can assign its value to other CSS properties by referencing the name you gave it:
```css
.example {
    background: var(--penguin-skin);
}
```

You can attach a fallback value that your browser will revert to if the given variable is invalid:
```css
.example {
    background: var(--penguin-skin, black, white);
}
```

## Compatibility with Browser Fallbacks
When working with CSS you will likely run into browser compatibility issues at some point. This is why it's important to provide browser fallbacks to avoid potential problems.

When your browser parses the CSS of a webpage, it ignores any properties that it doesn't recognize or support. For example, if you use a CSS variable to assign a background color on a site, Internet Explorer will ignore the background color because it does not support CSS variables. In that case, the browser will use whatever value it has for that property. If it can't find any other value set for that property, it will revert to the default value, which is typically not ideal.

This means that if you do want to provide a browser fallback, it's as easy as providing another more widely supported value immediately before your declaration. That way an older browser will have something to fall back on, while a newer browser will just interpret whatever declaration comes later in the cascade.

Notice the two `background: red;` in the example below. In newer browsers the variable `background: var(--red-color);` will be used, in older browsers, it will just fall back to red variable.
```css
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>

```

## Media Queries
When your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.
```css
@media (max-width: 350px) {
    :root {
        --penguin-size: 200px;
        --penguin-skin: black;
    }
}
```