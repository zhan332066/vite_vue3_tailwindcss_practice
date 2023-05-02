import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
// 必要引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 根據 icon 的種類引用
import {
  faCoffee,
  faList,
  faTable,
  faTableCells,
  faSearch,
  faComputer,
  faX,
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {
  faGooglePlus,
  faFacebook,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faCoffee,
  faGooglePlus,
  faComputer,
  faList,
  faTable,
  faTableCells,
  faX,
  faFacebook,
  faInstagram,
  faPinterest,
  faSearch
)

// 註冊元件
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
