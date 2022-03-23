import 'normalize.css'
import './styles/variables.css'
import './styles/base.css'

import PLink from './components/PLink.vue'
import PMount from './components/PMount.vue'
import PPage from './components/PPage.vue'
import App from './App.vue'

export default {
  Layout: App,
  enhanceApp({ app }: { app: any }) {
    app.component('PLink', PLink)
    app.component('PMount', PMount)
    app.component('PPage', PPage)
  }
}
