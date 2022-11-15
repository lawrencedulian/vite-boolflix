/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons' // ES Module "as" syntax
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

library.add(fasFaStar, farFaStar)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
