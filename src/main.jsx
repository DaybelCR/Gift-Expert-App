import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './index.css'
// import { FirstApp } from './FirstApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp/>
    {/* <FirstApp title="Este es el título" subTitle="Subtitle" name="name"/> */}
  </StrictMode>,
)
