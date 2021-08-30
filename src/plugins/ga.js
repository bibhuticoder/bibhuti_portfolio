const Ga = {
  install: function (Vue, options) {

    options.head.script.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GRIDSOME_GA_TRACKING_ID}`,
      async: true
    })

    if (options.isClient) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', process.env.GRIDSOME_GA_TRACKING_ID);
      window.gtag = gtag;

      window.gtag("event", "page_view", {
        page_path: location.pathname,
        send_to: process.env.GRIDSOME_GA_TRACKING_ID,
      });

      options.router.afterEach((to, from) => {
        window.gtag("event", "page_view", {
          page_path: location.pathname,
          send_to: process.env.GRIDSOME_GA_TRACKING_ID,
        });
      })
    }
  }
}

export default Ga;