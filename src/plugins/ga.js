const Ga = {
  install: function (Vue, options) {

    options.head.script.push({
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-97437577-6',
      async: true
    })

    if (options.isClient) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', options.trackingId);
      window.gtag = gtag;
    }

    options.router.beforeEach((to, from, next) => {
      gtag("event", "page_view", {
        page_path: location.href,
        send_to: options.trackingId,
      });
      next();
    })
  }
}

export default Ga;