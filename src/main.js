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
  faX,
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
library.add(faCoffee, faGooglePlus, faList, faTable, faTableCells, faX)

// 註冊元件
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
