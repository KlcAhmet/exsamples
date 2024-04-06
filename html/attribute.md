# Input

## Accept Attribute

You can use the  `accept`  attribute with the  `<input>`  element (only for file type) to specify the types of files a server can accept.

> <input type="file" accept=".jpg, .jpeg, .png">

## Autocomplete Attribute

You can use the  `autocomplete`  attribute with the  `<form>`,  `<input>`  and  `<textarea>`  elements to control the browser’s autocomplete feature.

    <input type="text" name="name" autocomplete="on" />

# Contenteditable Attribute

You can use the  `contenteditable`  attribute to specify whether the element’s content is editable or not. It allows users to modify the content within the element.

This is a global attribute which means you can use this attribute with all HTML elements.

    <div contenteditable="true">You can edit this content.</div>

    <p contenteditable="true">You can edit this content.</p>

## Download Attribute

You can use the  `download`  attribute with the  `<a>`  element to specify that when a user clicks the link, the linked resource should be downloaded rather than navigated to.

    <a href="document.pdf" download="document.pdf">Download PDF</a>
    

 - <a href="document.pdf" download="document.pdf">Download PDF</a>

# Poster Attribute

You can use the  `poster`  attribute with the  `<video>`  element to display an image until the user plays the video.

    <video controls poster="image.png" width="500">  
       <source src="video.mp4" type="video/mp4" />  
    </video>

# Srcset Attribute

You can use the  `srcset`  attribute with the  `<img>`  and  `<source>`  (in  `<picture>`) elements to provide a list of image sources. This helps the browser to select different images for different screen sizes.

    <img  src="image.jpg"  srcset="image.jpg, image-2x.jpg, image-3x.jpg">
    
    <picture>
      <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
      <source media="(min-width:465px)" srcset="img_white_flower.jpg">
      <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
    </picture>

# Asynchronous Loading
Enhance network bandwidth utilization by loading JavaScript asynchronously. Use the async and defer attributes to 
control the downloading and execution order of your scripts, preventing delays or blocks in HTML parsing and rendering.

Example:
```
<script async defer src="bundle.js"></script>
```
> Benefit of Using async and defer Together:
> 
> - `async` loads the script asynchronously, allowing HTML parsing to continue without waiting for the script to download.
> 
> - `defer` ensures that the script executes in order after HTML parsing is complete.