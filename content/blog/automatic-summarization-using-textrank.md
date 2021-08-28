---
title: Automatic summarization using Text Rank
excerpt: Automatic summarization is the technique of shortening a text document with computer program to create a summary with the major ideas...
createdAt: 2018-01-06
tags: Algorithm, JavaScript
thumbnail: https://images.unsplash.com/photo-1520970014086-2208d157c9e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
caption: Photo by <a href="https://unsplash.com/@kellysikkema">Kelly Sikkema</a> on Unsplash
time: 3
---

Automatic summarization is the technique of shortening a text document with computer program to create a summary with the major ideas of the original content.

## Example of what we are building: [SummaryJs demo 🔗](https://bibhuticoder.github.io/summaryjs/) 

There are two types of automatic summarization: extraction and abstraction. Extractive methods work by selecting some existing words, phrases, or sentences from the original text to form the summary. On the other hand abstractive use natural language processing techniques to create a summary that is similar to what a human being can generate.

The basic steps are:
- Split content into paragraphs.
- From each paragraph choose the most suitable sentence i.e. sentence having highest rank.
- Join all top ranked sentences to form the summary.

Let’s look at each step in detail.

## Split content into paragraph

As all words in a sentences are separated by whitespace and new lines by ‘\n’, the paragraphs are separated by double new lines ‘\n\n’.

```javascript
function split_into_sentences(s){
  return s.split('.');
}
```

## From each paragraph choose the most suitable sentence

So what is the most suitable sentence? Well, it the one with the highest rank. The sentence with highest rank is the one which has more common words in that paragraphs.

E.g.
His name is Bibhuti. And he is a person who writes code. Also, he writes a blog. I code in Java Script too.

Here, the second sentence has the highest rank because it has more similar words i.e. “a”, “is”, “code”, “writes”.

To determine the rank, a dictionary (hash table) for each paragraph is needed. Its key will be the sentence itself and the value will be the count the intersection between the sentence and other sentences in the paragraphs.

The intersection is counted as:

```javascript
function sentences_insersection(sent1, sent2) {
  var s1 = set(sent1.split(" "));
  var s2 = set(sent2.split(" "));
  if(s1.length + s2.length === 0) return 0;
  return(intersection(s1, s2)/((s1.length+s2.length)/2));
}
```

But first let’s make a 2D array which will store the intersections for each paragraph with each other.

```javascript
var sentences = split_into_sentences(content);
  var len = sentences.length;  
  var values = [];
  for(var i=0; i<len; i++){
    values.push([]);
    for(var j=0; j<len; j++){
      values[i].push(null);
      values[i][j] = sentences_insersection(sentences[i], sentences[j]);
    }    
  }
```

Then convert the 2d array into dictionary. Here the code i == j is for escaping the repetitions. The score is calculated by summing all intersections of a sentence with other sentence of the paragraph.

```javascript
var dict = {};
for(var i=0; i<len; i++) {   
    var score = 0; 
    for(var j=0; j<len; j++) {
        if(i === j) continue;
        score += values[i][j]; 
    }
    dict[format_sentence(sentences[i])] = score;
}
```

The dictionary for the above example looks like:

```
Alsohewriteablog:0.5666666666666667
Andheisapersonwhowritescode:0.8205128205128205
HisnameisBibhuti:0.15384615384615385
IcodeinJavaScript:0.43333333333333335
```

From the dictionary choose the sentence which has the maximum rank. i.e. 
**And he is a person who writes code.**

```javascript
function get_best_sentence(paragraph, dict) {
  var sentences = split_into_sentences(paragraph);
  //ignore short sentences
  if(sentences.length < 2) return "";
  //get best sentences according to sentence dictonary
  var best_sentence = "";
  var max_value = 0;
  for(var i = 0; i<sentences.length; i++){
    var s = sentences[i];
    var strip = format_sentence(s);
    if(dict[strip] > max_value){
      max_value = dict[strip];
      best_sentence = s;
    }
  }
  return best_sentence;
}
```

In similar manner all top ranked sentences can be chosen from all paragraphs to form a summary. The finished application is [here](https://bibhuticoder.github.io/summaryjs/).
The source code is on github at [https://github.com/bibhuticoder/summaryjs](https://github.com/bibhuticoder/summaryjs).