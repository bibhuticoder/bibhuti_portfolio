---
title: Add "Copy to clipboard" button on any HTML element
excerpt: It will work for all of type of frontend frameworks(including SSR and JAM-stack)...
createdAt: 2021-08-26
tags: VueJS, JavaScript
thumbnail: https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80
caption: Photo by <a href="https://unsplash.com/@markuswinkler">Markus Winkler</a> on Unsplash 
time: 3
---

This post will guide to add "Copy" button to a html element. It will work for all of type of frontend frameworks(including SSR and JAM-stack);
core idea will be same but implementation may differ across frameworks.

Lets start will the core logic i.e. copying a piece of text to clipboard.

```js
const copy = async (text) => await navigator.clipboard.writeText(text);
```

That's it !

This 1-liner will copy any piece of text from a webpage to clipboard. Its not limited to text though, you can copy any arbitrary data eg. images to clipboard. More info along with its limitations & browser support can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard).

Lets look at some of the use cases on how this 1-liner can be used on real world scenarios.

## Copy code from webpage

Lets say you have a webpage containing lots of code and it needs copy button on every instance.

Typically code are written inside `<code>` tag wrapper by` <pre>` tag, which may end up something like this.

```html
<pre>
	<code>
		var message = "Hello world";
		console.log(message);
	</code>
</pre>
```

To place a copy button on every `<pre>` tag, we can use the following logic.

```javascript
function enableCopy(selector = "pre", childSelector = "code", btnText = "Copy Me", btnTextSuccess = "Copied", activeClass = "--copy") {
    document.querySelectorAll(`${selector}:not(.${activeClass})`).forEach(node => {

        // create a "copy" button
        let copyBtn = document.createElement("button");
        copyBtn.innerText = btnText;
        copyBtn.classList.add(activeClass); // activeClass acts as flag so we don't add another copy button by mistake 
        node.appendChild(copyBtn);

        copyBtn.addEventListener("click", async () => {

            // copy to clipboard
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(node.querySelector(childSelector).innerText);
            }

            // change text of button after copying
            copyBtn.innerText = btnTextSuccess;

            // change text back to normal after ### ms
            setTimeout(() => icon.innerText = btnText, 2000);
        })
    })
}
```

What it does is, it will insert a `<button>` on each` <pre>` tag. When its clicked, required text gets copied to clipboard.

In order to use it in our case, just call the method without params; default parameters will work.

Regardless of which tool/library/framework you use, this approach will work.

## Implementation as VueJs plugin

Since I come from VueJs background, I will implement the same logic as a VueJS plugin. Core logic will be same but the best way to implement may be different. In case of VueJS we can make use of plugins and lifecycle hooks to ease the process.

This is the case where [Shiki](https://shiki.matsu.io/) has been used for code highlighting. It doesn't come with "copy code" feature though. The way it wraps code is

```html
<pre class="shiki">
	<code>
		var message = "Hello world";
		console.log(message);
	</code>
</pre>
```

 

To add copy button to above code, using same approach as above, the Vuejs plugin is written like this

```javascript
// copyPlugin.js

const CopyPlugin = {

	// run this method when plugin installs
    install: function (Vue) {
				
		// create a Vue mixin
        Vue.mixin({

			// on each mounted lifecycle hook, run this code
            mounted: function () {
				enableCopy("pre.shiki"); // same function we used above
            }
        })
    }
}

export default CopyPlugin;
```

Its then imported and used in `main.js` file.

```javascript
import Vue from "vue";
import CopyPlugin from "./copyPlugin";

Vue.use(CopyPlugin);
```

This will do the job. Only extra stuff on this approach is wrapping the core logic inside Vuejs Plugin system. Same applies for react, angular or any other tools. After all, whatever tool we use, it all boils down to regular html, css & js.

This approch can be further extended to copy text of any HTML tag. And the text can be dynamic(from server) too. 

The blog post you are reading right now is highlighted with [Shiki](https://shiki.matsu.io/) & **copy** button is placed by the same Vuejs-plugin code mentioned above ☝🏻