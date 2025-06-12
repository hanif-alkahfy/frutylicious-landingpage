import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/quicksand'; // Regular
import '@fontsource/quicksand/300.css'; // Light
import '@fontsource/quicksand/700.css'; // Bold
import '@fontsource/jost'; // Regular
import '@fontsource/jost/300.css'; // Light
import '@fontsource/jost/700.css'; // Bold



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
