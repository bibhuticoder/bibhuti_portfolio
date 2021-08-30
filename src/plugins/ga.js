const Ga = {
  install: function (Vue, options) {

    options.head.script.push({
      src: 'https://www.googletagmanager.com/gtag/js?id=' + options.trackingId,
      async: true
    })

    if (options.isClient) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', options.trackingId);
      options.router.afterEach((to, from) => {
        gtag("event", "page_view", {
          page_path: location.pathname,
          send_to: options.trackingId,
        });
        console.info("GA: pageview", location.pathname);
      })
    }
  }
}

export default Ga;