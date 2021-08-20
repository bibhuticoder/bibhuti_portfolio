// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './styles/main.scss'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faMediumM, faQuora } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub);
library.add(faLinkedin);
library.add(faMediumM);
library.add(faQuora);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
