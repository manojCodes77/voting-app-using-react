import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="box grid h-screen">
      <Header />
      <div className="py-3 down grid overflow-y-scroll ">
        <Outlet/>
        <Footer />
      </div>
    </div>
  )
}
export default App;