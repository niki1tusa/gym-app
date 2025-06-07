// import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import './assets/styles/index.scss'
function App() {

  return (
    // <BrowserRouter>
    //     <Routes>
    //       <Route/>
    //     </Routes>
    // </BrowserRouter>
    <Layout>
      <Header/>
    </Layout>
  )
}

export default App
