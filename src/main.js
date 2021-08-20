// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './styles/main.scss'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faEnvelope, faCode, faRocket, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub);
library.add(faLinkedin);
library.add(faMediumM);
library.add(faHeart);
library.add(faEnvelope);
library.add(faCode);
library.add(faRocket);
library.add(faCalendarAlt);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
