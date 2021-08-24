---
title: Migrate vue-i18n to poeditor
excerpt: A Vue.js filter is simply a function that takes an input, processes it and gives an output...
createdAt: 2020-09-23
tags: VueJs
thumbnail: https://miro.medium.com/max/560/1*PtHOZdErZMOnUTeAI61DJQ.png
---

<g-image src="https://miro.medium.com/max/560/1*PtHOZdErZMOnUTeAI61DJQ.png" />

Internationalization is a basic feature for web apps having users from different corners of the world. vue-i18n makes the process very smooth to implement internationalization into VueJs web apps. Poeditor is another tool that provides a smooth translation workflow.

Recently I ‘d a chance to migrate the Vue application (with local translation data) to make it work with Poeditor’s API.
In case you don’t know about poeditor. It provides a smooth translation workflow. And also

- Translators can manage your translations
- It gives simple REST API to access the data
- 
For more details visit poeditor.

- The technique mentioned in this article works for this particular scenario:
- You already have translation working from local translation files
- You don’t want to change any of the current workflow
- You want to take advantage of all the cool features of poeditor

This article suggests an architecture that perfectly fulfills the above requirements.

<g-image src="https://miro.medium.com/max/560/1*2dN1-agqlB3ucl-KHFjWjw.png" />

The first step would be to import the existing vue-i18n’s JSON translation file to poeditor.

<g-image src="https://miro.medium.com/max/560/1*io_WVXNN1G0YtWC6R3Rgbg.png" />

As you may have noticed, the import process flattens the nested JSON object. If your translation data is only 1 level deep, this shouldn’t be an issue. In case of nested data, note the context below translation terms. It will be used later to gain the original nested structure.

---

Now lets look at the changes in Vue application. This solution is a derived version of vue-i18n’s Lazy Loading guide.

This is how default i18n file looks like, before the change.

<g-image src="https://miro.medium.com/max/560/1*_FjT8BF11yb8Br4n6_v0lQ.png" />

The current structure needs to be changed in order to fetch data from the API. And it needs to export two things
- the i18n instance
- `loadLanguageAsync` function
- 
The `loadLanguageAsync` function loads translation data from the server and sets the data and locale accordingly. `setI18nLanguage` sets i18n's `locale` and updates `lang` attribute of html tag with new translation. 
`silentTranslationWarn` property enables/disables console warnings.

i18n.js file after the required changes:
<g-image src="https://miro.medium.com/max/560/1*LKCwBepkHWN3j6zAhgDBOA.png" />

When we have the functions ready we need to decide a best place to call the function. If your language depends on the URL, you should probably follow the vue-i18n’s Lazy loading guide; it asynchronously loads the translation before each route change according to route params.

For our case, we need to get the translation only once when the app loads. So App.vue seems to be the best place to call this function.

<g-image src="https://miro.medium.com/max/357/1*YacBhfBRwifL8Sef4eLBJA.png" />

Inside the created function new translations are loaded. The loading computed property tells whether the translation has been loaded or not. You can use this property to show loading message until the translation loads.

<g-image src="https://miro.medium.com/max/354/1*cvd2C0HrE2hWPX4s5FZXKw.png" />

That should take care of everything on the front end.

---

## Backend Proxy

For back-end I have chosen NodeJS and Express as it allows to create API very quickly.

The server will be responsible for:
- Request data from poeditor
- Format locale data to match vue-i18n structure
  
The reason for using proxy: Poeditor REST API is protected with CORS. So it doesn’t allow frontend application to request data. Moreover, the data needs to be formatted which can be an overhead on the browser. Formatting on the server is faster and it can be cached too.

The main `server.js` file contains the logic to fetch data from poeditor API inside `/translations` route.

<g-image src="https://miro.medium.com/max/560/1*cqJLaRIaeiajuka5gZEeUA.png" />

The logic to format the data is inside `/helpers/poeditor.js` file. It makes use of loadash to construct nested objects out of flattened data. If your data is already flat, it will give the output accordingly.

As mentioned earlier, to format the data into its original structure it makes use of ‘content’ property from poeditor’s API response.

<g-image src="https://miro.medium.com/max/437/1*Cgdn3pKUaXjK77_iA6ojhw.png" />

All of these setup should be enough. Now spin up the NodeJS and vue development server, it will work like magic.

The beautiful code snippets for this article are generated using RamroCode.