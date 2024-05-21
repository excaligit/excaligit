import './App.css'
import Layout from './layout/Layout'
import { LanguagesController } from './settings/LanguagesController'

function App() {
  LanguagesController()

  return (
    <>
      <Layout />
    </>
  )
}

export default App
