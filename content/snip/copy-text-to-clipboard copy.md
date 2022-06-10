---
title: Count no. of words in a sentence
excerpt: Run this command in browsers console.
createdAt: 2021-08-26
tags: JavaScript
---

```javascript 

// change selector acording to your needs
document.querySelectorAll("p").forEach(p => {
    let sentences = p.textContent.trim().split(". ");
    for (let i = 0; i < sentences.length; i++) {
        if (!sentences[i].length) continue;

        let wordCount = sentences[i].split(' ').length;
        sentences[i] += `<span style="color: red; font-weight: bold"> [${wordCount}] </span>`
    }

    let paragraph = sentences.join('. ');
    p.innerHTML = paragraph;
});
```