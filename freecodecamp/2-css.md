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