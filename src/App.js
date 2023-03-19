import FormacaoAcademica from "./pages/FormacaoAcademica";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";


function App() {
  return (
    <div className="App">
      <section id="menu">
        <Menu/>
      </section>
      <section id="main">
        <Main/>
      </section>
      <section id="sobre">
        <Sobre/>
      </section>
      <section id="formacaoAcademica">
        <FormacaoAcademica/>
      </section>
      <section id="projetos">
        <Projetos/>
      </section>
      <section id="habilidade">
        <Habilidades/>
      </section>

      
    </div>
    

  );
}

export default App;
