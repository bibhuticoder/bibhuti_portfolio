// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './styles/main.scss'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faEnvelope, faCode, faRocket, faCalendarAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub);
library.add(faLinkedin);
library.add(faMediumM);
library.add(faHeart);
library.add(faEnvelope);
library.add(faCode);
library.add(faRocket);
library.add(faCalendarAlt);
library.add(faBars);

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css'
  })

  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-97437577-6',
    async: true
  })


  if (process.isClient) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-97437577-6');
    window.gtag = gtag;
  }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
