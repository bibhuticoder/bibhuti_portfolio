---
title: Scrape Glassdoor data with NodeJs
excerpt: There are multiple ways to scrape data off a webpage...
createdAt: 2022-03-05
tags: NodeJS, Web-Scraping
thumbnail: https://images.unsplash.com/photo-1604403428907-673e7f4cd341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80
caption: Photo by <a href="https://unsplash.com/@markusspiske">Markus Spiske </a> on Unsplash 
time: 3
---

There are multiple ways to scrape data off a webpage. This article explains a smart way to scrape data from Glassdoor using NodeJs script. First, let’s look at the tools we will be using.

[JSDOM](https://github.com/jsdom/jsdom)

- Same logic works on browser’s console and NodeJs. No need to learn extra stuffs for scraping. Personally, I try to scrape data from browser’s console and use same code later on scraper script. Other tools like [cheer.io](https://cheerio.js.org/) can also be an alternative.

[Axios](https://github.com/axios/axios)

- To make HTTP call and fetch webpage’s source(HTML)

## The smart way

Before running any scraping its necessary to analyze the page’s source code; look for patterns that make your job easier. Scraping paginated data is more cumbersome than regular data.

In our case, I will be using this ([https://www.glassdoor.com/Salaries/kathmandu-salary-SRCH_IL.0,9_IM1598.htm](https://www.glassdoor.com/Salaries/kathmandu-salary-SRCH_IL.0,9_IM1598.htm)) url to scrape salary data of Kathmandu city. Browse the url, first thing you get is a stupid “sign up” dialog covering all data. Quickly spin up the developer tools, goto inspector, identify the element (`div#HardsellOverlay`) and remove it.

![Sign-up dialog covering data](https://miro.medium.com/max/1400/0*xA14sEWqfmfxa8Km)

Now the data is visible, looks for patterns that help in identifying the list of salaries data. Luckily we have one. All data have attribute `data-test=”salaries-list-item-XXX”`. 
![Pattern for salary data](https://miro.medium.com/max/1400/0*N5j7qCuW3zVLaP1D)

Exploring further we can see that each data item have similar pattern and we can simply scrape it using query selector from browser console. We will use this same piece of code later when building script.

```js
for (let i = 0; i <= 19; i++) {
	// all salary data are prefixed with 
	let attrPrefix = `salaries-list-item-${i}`;
	console.log("company name", document.querySelector(`[data-test='${attrPrefix}-employer-name'] a`).textContent);
	console.log("company logo", document.querySelector(`[data-test='${attrPrefix}-employer-url'] img`).src);
	console.log("job title", document.querySelector(`[data-test='${attrPrefix}-job-title']`).textContent);
	console.log("salary", document.querySelector(`[data-test='${attrPrefix}-salary-info'] h3`).textContent);
}
```

Ok, now we have the data. What we need next is more data. When we scroll to the bottom we see a pagination there. Next thing to do is: paginate next and scrape 20 data from each page. 

![Pagination. Also note total no. of items](https://miro.medium.com/max/1100/0*PADK6M7dOmafyeA1)

Wait! Maybe there’s another pattern that may make our task easier. As we dig more into it, there’s a pattern on pagination too.

From second page, url has the page number mixed with some weird value.  Also, as we saw earlier there were total 1632 data, 20 on each page. That makes it total 1632/20 = 82 pages.

![pattern in pagination](https://miro.medium.com/max/1400/0*SX0YL1D5tNQQma-o)

## NodeJs script

As we have figured out the way to scrape all those data, it’s time to write a NodeJs script to scrape Glassdoor salary data and save it to JSON file. We will be writing data to file `data.json` after each page is done scraping. Reason: you can pause and continue at any page + you can run the script multiple times in parallel with different page no. range. 

For the sake of simplicity, I will directly paste the script here with as many comments as possible.

```js
const axios = require('axios');
const { JSDOM } = require("jsdom");
const fs = require("fs");

(async () => {
    try {

        // Go from page 1 to 82
        for (let j = 1; j <= 82; j++) {

            // page number mixed with random string
            let page = "IM1598";
            if (j > 1) page = page + "_IP" + j;

            console.log("fetching page", j, "out of", 82);

            // load HTML into JSDOM
            const dom = new JSDOM((await axios.get(`https://www.glassdoor.com/Salaries/kathmandu-salary-SRCH_IL.0,9_${page}.htm`)).data);
            
            // For each 20 data in a page
            for (let i = 0; i <= 19; i++) {
                try {

                    // its same code we used on et data on browser's console
                    let attrPrefix = `salaries-list-item-${i}`;
                    let salaryData = {
                        compan: dom.window.document.querySelector(`[data-test='${attrPrefix}-employer-name'] a`).textContent,
                        logo: dom.window.document.querySelector(`[data-test='${attrPrefix}-employer-url'] img`).src,
                        job: dom.window.document.querySelector(`[data-test='${attrPrefix}-job-title']`).textContent,
                        salary: dom.window.document.querySelector(`[data-test='${attrPrefix}-salary-info'] h3`).textContent,
                    }

                    // Append data to file after each data is received
                    fs.appendFileSync("./data.json", JSON.stringify(salaryData) + ",");

                    console.log("completed", i, "of", j, "out of", 1204);
                } catch (e) { continue; }
            }
        }
    } catch (e) { console.log("Error", e); }
})();
```

After running the script, you will end up with a data.json file containing Glassdoor’s salary data of Kathmandu data. Similarly, you can scrape data of any other city or data on Job listings.

Important message I want to give is: scraping doesn’t have to be brute force, there are always smart ways to minimize the workload.

Hope you like the content. If there are any issues, please feel free to point out.