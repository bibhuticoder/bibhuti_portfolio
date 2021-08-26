import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
import CopyPlugin from './plugins/copy';
import FwPlugin from "./plugins/fontawesome";
import Ga from "./plugins/ga";
import './styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Ga, { trackingId: 'UA-97437577-6', isClient, head, router })
  Vue.use(VueDisqus);
  Vue.use(CopyPlugin);
  Vue.use(FwPlugin);
}
