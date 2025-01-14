import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'
import Login from './pages/login/Login'

function App() {

  return (
    <>
        <Home titulo='Componente Home' texto ='La casa de papel é uma serie de ação com muita violencia.'/>
        <hr />
      <Contador/>
      <hr />
      <Tarefa/>
      <hr />
      <Login/>
    </>
  )
}

export default App
