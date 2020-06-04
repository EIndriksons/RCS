# Applied Accessibility
"Accessibility" generally means having web content and a user interface that can be understood, navigated, and interacted with by a broad audience. This includes people with visual, auditory, mobility, or cognitive disabilities.

## Show Hierarchical Relationships of Content
You can achieve this by using any of the newly added HTML5 tags like ```main```, ```header```, ```footer```, ```nav```, ```article```, and ```section```, among others.

- **Make Screen Reader Navigation Easier with:**
    * ```header``` used to wrap introductory information or navigation links for its parent tag and works well around content that's repeated at the top on multiple pages.
    * ```nav``` is meant to wrap around the main navigation links in your page.
    * ```footer``` primarily used to contain copyright information or links to related documents that usually sit at the bottom of a page.
- **Use Headings (```h1``` to ```h6```)**
    * Screen readers can be set to read only the headings on a page so the user gets a summary. This means it is important for the heading tags in your markup to have *semantic* meaning and relate to each other, not be picked merely for their size values. Semantic meaning means that the tag you use around content indicates the type of information it contains.
    * Headings with equal (or higher) rank start new implied sections, headings with lower rank start subsections of the previous one.
    * Each page should always have one (and only one) ```h1``` element, which is the main subject of your content.
        + This and the other headings are used in part by search engines to understand the topic of the page.
- **Wrap Content in the ```article``` Element**
    * ```article``` is another one of the new HTML5 elements that adds *semantic* meaning to your markup. ```article``` is a sectioning element, and is used to wrap independent, self-contained content. The tag works well with blog entries, forum posts, or news articles.
    * The ```section``` element is also new with HTML5, and has a slightly different *semantic* meaning than article. An ```article``` is for standalone content, and a ```section``` is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the ```article```, then each chapter is a ```section```. When there's no relationship between groups of content, then use a ```div```.
        + ```<div>``` - groups content
        + ```<section>``` - groups related content
        + ```<article>``` - groups independent, self-contained content

## Improve navigation
- **Make Links Navigable with HTML Access Keys**
    * HTML offers the `accesskey` attribute to specify a shortcut key to activate or bring focus to an element. This can make navigation more efficient for keyboard-only users. HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls.
        + Example: ```<button accesskey="b">Important Button</button>```
- **Use `tabindex` to Add Keyboard Focus to an Element**
    * The HTML `tabindex` attribute has three distinct functions relating to an element's keyboard focus. When it's on a tag, it indicates that element can be focused on. The value (an integer that's positive, negative, or zero) determines the behavior.
    * Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It's in the same order as the elements come in the HTML source markup. This same functionality can be given to other elements, such as `div`, `span`, and `p`, by placing a ```tabindex="0"``` attribute on them.
        + Example: ```<div tabindex="0">I need keyboard focus!</div>```
        + A negative `tabindex` value (typically -1) indicates that an element is focusable, but is not reachable by the keyboard. This method is generally used to bring focus to content programmatically (like when a `div` used for a pop-up window is activated).
        + **Bonus** - using `tabindex` also enables the CSS pseudo-class `:focus` to work on the `p` tag.
- **Use `tabindex` to Specify the Order of Keyboard Focus for Several Elements**
    * Setting a `tabindex="1"` will bring keyboard focus to that element first. Then it cycles through the sequence of specified `tabindex` values (2, 3, etc.), before moving to default and `tabindex="0"` items.
    * It's important to note that when the tab order is set this way, it overrides the default order (which uses the HTML source). This may confuse users who are expecting to start navigation from the top of the page. This technique may be necessary in some circumstances, but in terms of accessibility, take care before applying it.

## Add Text Alternative for Visually Impaired Accessibility
- **Your ```img``` tag should have an ```alt``` attribute and it should not be empty.**
    * Note: If the image is purely decorative, using an empty ```alt``` attribute is a best practice.
    * *Example:* ```<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">```
- Optionally you can also add `alt` attribute to `input` and `area` tags.
- **Give Links `a` Meaning by Using Descriptive Link Text**
    * Screen reader users have different options for what type of content their device reads. This includes skipping to (or over) landmark elements, jumping to the main content, or getting a page summary from the headings. Another option is to only hear the links available on a page. Screen readers do this by reading the link text, or what's between the anchor `a` tags. Having a list of "click here" or "read more" links isn't helpful. Instead, you should use brief but descriptive text within the a tags to provide more meaning for these users.
- **Improve Accessibility of Audio Content with the ```audio``` Element**
    * HTML5's ```audio``` element gives semantic meaning when it wraps sound or audio stream content in your markup. Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.
    * The ```audio``` tag supports the ```controls``` attribute. This shows the browser default play, pause, and other controls, and supports keyboard functionality. This is a boolean attribute, meaning it doesn't need a value, its presence on the tag turns the setting on.
        + You might have to add more than one ```source``` for the same audio file, as some browsers might not support some file types
- **Improve Chart Accessibility with the ```figure``` Element**
    * HTML5 introduced the ```figure``` element, along with the related ```figcaption```. Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption. This gives a two-fold accessibility boost by both semantically grouping related content, and providing a text alternative that explains the ```figure```.
- **Improve Form Field Accessibility with the ```label``` Element**
    * The ```label``` tag wraps the text for a specific form control item, usually the name or label for a choice. This ties meaning to the item and makes the form more readable. The ```for``` attribute on a ```label``` tag explicitly associates that ```label``` with the form control and is used by screen readers.
        + The value of the ```for``` attribute must be the same as the value of the ```id``` attribute of the form control.
- **Wrap Radio Buttons in a `fieldset` Element for Better Accessibility**
    * The `fieldset` tag surrounds the entire grouping of radio buttons to achieve this. It often uses a `legend` tag to provide a description for the grouping, which is read by screen readers for each choice in the `fieldset` element.
        + The `fieldset` wrapper and `legend` tag are not necessary when the choices are self-explanatory, like a gender selection. Using a `label` with the `for` attribute for each radio button is sufficient.
- **Standardize Times with the HTML5 datetime Attribute**
    * HTML5 also introduced the `time` element along with a `datetime` attribute to standardize times. This is an inline element that can wrap a date or time on a page. A valid format of that date is held by the `datetime` attribute. This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time, even if it's written in an informal or colloquial manner in the text.
        + Example: ```<time datetime="2013-02-13">last Wednesday</time>```

## Make Elements Only Visible to a Screen Reader by Using Custom CSS
CSS's magic can also improve accessibility on your page when you want to visually hide content meant only for screen readers. This happens when information is in a visual format (like a chart), but screen reader users need an alternative presentation (like a table) to access the data. CSS is used to position the screen reader-only elements off the visual area of the browser window.

```css
.sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
}
```

### Improve Readability with High Contrast Text
Low contrast between the foreground and background colors can make text difficult to read. Sufficient contrast improves the readability of your content, but what exactly does "sufficient" mean?

The **Web Content Accessibility Guidelines (WCAG)** recommend at least a **4.5 to 1 contrast ratio for normal text**. The ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the strongest contrast. There are many contrast checking tools available online that calculate this ratio for you.

### Avoid Colorblindness Issues

#### by Using Sufficient Contrast
Color is a large part of visual design, but its use introduces two accessibility issues. First, color alone should not be used as the only way to convey important information because screen reader users won't see it. Second, foreground and background colors need sufficient contrast so colorblind users can distinguish them.

Colorblind users have trouble distinguishing some colors from others - usually in hue but sometimes lightness as well. You may recall the contrast ratio is calculated using the relative luminance (or lightness) values of the foreground and background colors. In practice, the 4.5:1 contrast ratio can be reached by shading (adding black to) the darker color and tinting (adding white to) the lighter color. Darker shades on the color wheel are considered to be shades of blues, violets, magentas, and reds, whereas lighter tinted colors are oranges, yellows, greens, and blue-greens.

#### by Carefully Choosing Colors that Convey Information
There are various forms of colorblindness. These can range from a reduced sensitivity to a certain wavelength of light to the inability to see color at all. The most common form is a reduced sensitivity to detect greens.

For example, if two similar green colors are the foreground and background color of your content, a colorblind user may not be able to distinguish them. Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information. Some online color picking tools include visual simulations of how colors appear for different types of colorblindness. These are great resources in addition to online contrast checking calculators.