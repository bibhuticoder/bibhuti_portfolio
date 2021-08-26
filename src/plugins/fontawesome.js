import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faEnvelope, faCode, faRocket, faCalendarAlt, faBars, faTimes, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const FwPlugin = {
    install: function (Vue) {
        library.add(faGithub);
        library.add(faLinkedin);
        library.add(faMediumM);
        library.add(faHeart);
        library.add(faEnvelope);
        library.add(faCode);
        library.add(faRocket);
        library.add(faCalendarAlt);
        library.add(faBars);
        library.add(faTimes);
        library.add(faCopy);

        Vue.component('font-awesome-icon', FontAwesomeIcon)
    }
}

export default FwPlugin;