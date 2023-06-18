import { createApp } from 'vue'

import {
  Alert,
  Button,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Form,
  Layout,
  Modal,
  Popover,
  Row,
  Select,
  Skeleton
} from 'ant-design-vue'

import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.use(Alert)
app.use(Button)
app.use(Checkbox)
app.use(Col)
app.use(Divider)
app.use(Dropdown)
app.use(Form)
app.use(Layout)
app.use(Modal)
app.use(Popover)
app.use(Row)
app.use(Select)
app.use(Skeleton)

app.mount('#app')
