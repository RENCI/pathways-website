import { createRoot } from 'react-dom/client'
import { App } from './components/app'
import './styles/index.scss'
import 'antd/dist/reset.css'

const root = createRoot(document.getElementById("root"));
root.render(<App />)