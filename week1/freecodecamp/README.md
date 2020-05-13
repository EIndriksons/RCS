# More Advanced HTML Tips and Tricks

- Comments in HTML ```<!-- -->```
- HTML5 introduces more descriptive HTML tags. These include ```main```, ```header```, ```footer```, ```nav```, ```video```, ```article```, ```section``` and others. This helps with descriptive structure and Search Engine Optimization (SEO).
- All ```img``` elements must have an ```alt``` attribute. The text inside an ```alt``` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.
    * Note: If the image is purely decorative, using an empty ```alt``` attribute is a best practice.
    * Ideally the ```alt``` attribute should not contain special characters unless needed.
    * *Example:* ```<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">```