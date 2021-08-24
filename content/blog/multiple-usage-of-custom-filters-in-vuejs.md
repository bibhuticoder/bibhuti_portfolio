---
title: Multiple usage of custom filters in Vue.js
excerpt: A Vue.js filter is simply a function that takes an input, processes it and gives an output...
createdAt: 2021-06-25
tags: VueJs
thumbnail: https://miro.medium.com/max/1400/1*x8NzrnRLNmIeSEa9SbgFLg.png
---

<g-image src="https://miro.medium.com/max/1400/1*x8NzrnRLNmIeSEa9SbgFLg.png" />

A Vue.js filter is simply a function that takes an input, processes it and gives an output. Inside a Vue template it is written after a single pipe and can also be followed by its arguments.

But there can be some particular case where the filter functions are required to be used outside directive and mustaches. This article will show a simple mechanism to tackle the problem.
A custom filter can be registered either globally or inside components. Since we are doing it the best way, we will be registering it globally.

If you have many filters, its best to keep it on a separate folder inside separate files. For this particular case, I have kept it inside /src/filters.js

Now lets take a look inside filters.js file.

As you may have noticed, the FILTERS object contains all of your filter functions. The key serves as filterId and the value as filter function
The file exports two things
FILTERS object
registerFilters function
That’s the main point. The registerFilters function registers all of the filter functions globally so that it can be used on any Vue component. The method is called inside the main.js file.

Another cool thing about this approach is the ability to import those filter functions and use inside JavaScript logic.

In many cases filter functions need to be used outside of directive and mustaches. This approach works best to handle this particular scenario. Moreover, it groups the filter functions at one place and makes a clear separation of logic inside vue application.

Like the code snippets used in this article. It’s generated using this awesome tool RamroCode 👌
Happy Coding !