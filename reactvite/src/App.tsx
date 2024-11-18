import './App.css'
import Product from './ComponentClass/Product'

function App() {

  return (
    <>
      <Product product={{name:"Amir", title:"IRE", price:"2000"}} available={true}/>
    </>
  )
}

export default App
