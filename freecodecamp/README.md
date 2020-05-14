# More Advanced HTML Tips and Tricks

- Comments in HTML ```<!-- -->```
- HTML5 introduces more descriptive HTML tags. These include ```main```, ```header```, ```footer```, ```nav```, ```video```, ```article```, ```section``` and others. This helps with descriptive structure and Search Engine Optimization (SEO).
- ```a``` (anchor) elements can also be used to create internal links to jump to different sections within a webpage by assigning a link's ```href``` attribute to a hash symbol ```#``` plus the value of the ```id``` attribute for the element that you want to internally link to, usually further down the page.
    * ```target="_blank"``` attribute causes the linked document to open in a new window tab.
    * ```href="#"``` creates a dead link.
- ```ul``` is unordered list while ```ol``` is ordered list. ```li``` are list items.
- Make your text ```input``` a ```required``` field, so that your user can't submit the form without completing this field.
- By wrapping an ```input``` element inside of a ```label``` element it will automatically associate the radio button input with the label element surrounding it.
    * All related radio buttons should have the same ```name``` attribute to create a radio button group.
    * It is considered best practice to set a ```for``` attribute on the ```label``` element, with a value that matches the value of the ```id``` attribute of the ```input``` element. This allows assistive technologies to create a linked relationship between the label and the child ```input``` element.
    * Add ```checked``` to designate the checkbox or radio as the default option for the user.

## Applied Accessibility
"Accessibility" generally means having web content and a user interface that can be understood, navigated, and interacted with by a broad audience. This includes people with visual, auditory, mobility, or cognitive disabilities.

- Add a Text Alternative to Images for Visually Impaired Accessibility
    * Your ```img``` tag should have an ```alt``` attribute and it should not be empty.
    * Note: If the image is purely decorative, using an empty ```alt``` attribute is a best practice.
    * *Example:* ```<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">```
- Use Headings (```h1``` to ```h6```) to Show Hierarchical Relationships of Content
    * Screen readers can be set to read only the headings on a page so the user gets a summary. This means it is important for the heading tags in your markup to have *semantic* meaning and relate to each other, not be picked merely for their size values. Semantic meaning means that the tag you use around content indicates the type of information it contains.
    * Headings with equal (or higher) rank start new implied sections, headings with lower rank start subsections of the previous one.
    * Each page should always have one (and only one) ```h1``` element, which is the main subject of your content.
        + This and the other headings are used in part by search engines to understand the topic of the page.
- Jump Straight to the Content Using the ```main``` Element. Other tags include ```header```, ```footer```, ```nav```, ```article```, and ```section```, among others.
- Wrap Content in the ```article``` Element
    * ```article``` is another one of the new HTML5 elements that adds *semantic* meaning to your markup. ```article``` is a sectioning element, and is used to wrap independent, self-contained content. The tag works well with blog entries, forum posts, or news articles.
    * The ```section``` element is also new with HTML5, and has a slightly different *semantic* meaning than article. An ```article``` is for standalone content, and a ```section``` is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the ```article```, then each chapter is a ```section```. When there's no relationship between groups of content, then use a ```div```.
        + ```<div>``` - groups content
        + ```<section>``` - groups related content
        + ```<article>``` - groups independent, self-contained content
- Make Screen Reader Navigation Easier with the ```header```. It's used to wrap introductory information or navigation links for its parent tag and works well around content that's repeated at the top on multiple pages.
- Make Screen Reader Navigation Easier with the ```nav```. This tag is meant to wrap around the main navigation links in your page.
- Make Screen Reader Navigation Easier with the ```footer```. It's primarily used to contain copyright information or links to related documents that usually sit at the bottom of a page.
- Improve Accessibility of Audio Content with the ```audio``` Element
    * HTML5's ```audio``` element gives semantic meaning when it wraps sound or audio stream content in your markup. Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.
    * The ```audio``` tag supports the ```controls``` attribute. This shows the browser default play, pause, and other controls, and supports keyboard functionality. This is a boolean attribute, meaning it doesn't need a value, its presence on the tag turns the setting on.
        + You might have to add more than one ```source``` for the same audio file, as some browsers might not support some file types
- Improve Chart Accessibility with the ```figure``` Element
    * HTML5 introduced the ```figure``` element, along with the related ```figcaption```. Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption. This gives a two-fold accessibility boost by both semantically grouping related content, and providing a text alternative that explains the ```figure```.
- Improve Form Field Accessibility with the label Element