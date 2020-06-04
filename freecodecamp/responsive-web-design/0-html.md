# More Advanced HTML Tips and Tricks

- Comments in HTML ```<!-- -->```
- Newly added tags in HTML5. They help with descriptive structure and Search Engine Optimization (SEO).
    * `main` - main content of the website
    * `header` - header of the website
    * `footer` - footer of the website
    * `nav` - defines navigation links
    * `aside` - defines content aside from the page content
    * `datalist` - defines a dropdown list
    * `details` - defines details of an element (additional attributes: `open`)
    * `dialog` - defines a dialog (conversation)
    * `source` - defines media sources (additional attributes: `media`, `src`, `type`)
    * `video` - defines a video (additional attributes: `autobuffer`, `autoplay`, `controls`, `height`, `loop`, `src`, `width`)
    * `audio` - defines audio (additional attributes: `autobuffer`, `autoplay`, `controls`, `src`)
    * `article` - defines an article (additional attributes: `cite`, `pubdate`)
    * `section` - defines a section for grouping thematically related content, like `article` (additional attributes: `cite`)
    * `figure` - defines a group of media content, and their caption
    * `canvas` - defines graphics (additional attributes: `height`, `width`)
    * `meter` - defines measurement within a predefined range (additional attributes: `high`, `low`, `max`, `min`, `optimum`, `value`)
    * `output` - defines some types of output (additional attributes: `for`, `form`, `name`)
- ```a``` (anchor) elements can be used to create internal links to jump to different sections within a webpage by assigning a link's ```href``` attribute to a hash symbol ```#``` plus the value of the ```id``` attribute for the element that you want to internally link to, usually further down the page.
    * ```target="_blank"``` attribute causes the linked document to open in a new window tab.
    * ```href="#"``` creates a dead link.
- ```ul``` is unordered list while ```ol``` is ordered list. ```li``` are list items.
- Make your ```input``` a ```required``` field, so that your user can't submit the form without completing this field.
- By wrapping an ```input``` element inside of a ```label``` element it will automatically associate the radio button input with the label element surrounding it.
    * All related radio buttons should have the same ```name``` attribute to create a radio button group.
    * It is considered best practice to set a ```for``` attribute on the ```label``` element, with a value that matches the value of the ```id``` attribute of the ```input``` element. This allows assistive technologies to create a linked relationship between the label and the child ```input``` element.
    * Add ```checked``` to designate the checkbox or radio as the default option for the user.