---
title: Manually setup Google analytics on GridSome sites
excerpt: As we all know analytics is an essential part of any website. Google analytics is the best free tool..
createdAt: 2021-08-24
tags: JavaScript, Gridsome, GoogleAnalytics, VueJs
thumbnail: https://miro.medium.com/max/1400/1*eVj9bCkqK2hX08hI_xsqUg.jpeg
caption: Photo by <a href="https://unsplash.com/@markuswinkler">Markus Winkler</a> on Unsplash
time: 2
---

As we all know analytics is an essential part of any website. Google analytics is the best free tool out there. This article illustrate how google analytics can be added to a GridSome site.

> I was trying to use this [plugin](https://gridsome.org/plugins/@gridsome/plugin-google-analytics), but it doesn't work as expected. So, I had to add it manually. If you are stuck in same place or you want to customize the analytics on your website(beyond the plugin), follow along.

## Create Universal tracking on Google analytics

Goto [google Analytics](https://analytics.google.com)

Navigate to Admin section (Click on small gear icon at bottom left) then "Create Property"

<g-image src="https://miro.medium.com/max/560/1*IZ175QMTM_NwVes4FfEIBg.png" />

Fill up the form. Since we are collecting analytics for website, make sure you enable **“Create a Universal Analytics property”**

<g-image src="https://miro.medium.com/max/560/1*IxsTjuD3zDjK3k1pPU2JzA.png" />

Finish the setup and you will be redirected to page containing setup scripts and your `tracking ID`.

<g-image src="https://miro.medium.com/max/560/1*BQBDvO8UgxeEI68CSK40xw.png" />

## Setup GridSome site to send analytics data

Go to main.js file and paste the following code. Make sure you include your tracking id.

```javascript
export default function (Vue, { router, head, isClient }) {	
	//----
	
  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID',
    async: true
  })

  if (process.isClient) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');
  }

  //------
}
```
> Note: check for **process.isClient** is needed because **window** won't work during build.

Reload your site and you should see increase in "Active users" on google Analytics dashboard.

For counting page views of specific page or blog post, simply paste this code(filling necessary details) on respective component's lifecycle hook.

```javascript
//eg: include this code on component's "created" hook
gtag('event', 'page_view', {
  page_title: '<Page Title>',
  page_location: '<Page Location>',
  page_path: '<Page Path>',
  send_to: '<TRACKING_ID>'
})
```

Counting only pageviews may not be suffecient, for more events visit [Google analytics documentation](https://developers.google.com/analytics/devguides/collection/gtagjs/pages).