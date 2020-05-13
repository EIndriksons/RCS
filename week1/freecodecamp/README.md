# More Advanced HTML Tips and Tricks

- Comments in HTML ```<!-- -->```
- HTML5 introduces more descriptive HTML tags. These include ```main```, ```header```, ```footer```, ```nav```, ```video```, ```article```, ```section``` and others. This helps with descriptive structure and Search Engine Optimization (SEO).
- All ```img``` elements must have an ```alt``` attribute. The text inside an ```alt``` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.
    * Note: If the image is purely decorative, using an empty ```alt``` attribute is a best practice.
    * Ideally the ```alt``` attribute should not contain special characters unless needed.
    * *Example:* ```<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">```
- ```a``` (anchor) elements can also be used to create internal links to jump to different sections within a webpage by assigning a link's ```href``` attribute to a hash symbol ```#``` plus the value of the ```id``` attribute for the element that you want to internally link to, usually further down the page.
    * ```target="_blank"``` attribute causes the linked document to open in a new window tab.
    * ```href="#"``` creates a dead link.
- ```ul``` is unordered list while ```ol``` is ordered list. ```li``` are list items.
- Make your text ```input``` a ```required``` field, so that your user can't submit the form without completing this field.
- By wrapping an ```input``` element inside of a ```label``` element it will automatically associate the radio button input with the label element surrounding it.
    * All related radio buttons should have the same ```name``` attribute to create a radio button group.
    * It is considered best practice to set a ```for``` attribute on the ```label``` element, with a value that matches the value of the ```id``` attribute of the ```input``` element. This allows assistive technologies to create a linked relationship between the label and the child ```input``` element.