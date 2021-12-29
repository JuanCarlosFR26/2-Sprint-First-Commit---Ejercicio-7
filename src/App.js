import Header from './components/Header';
import './App.css';
import './serch.fct';

function App() {
  return (
    <div className="App">
      <form className='form'>
        <Header />
        <div className='inputs'>
          <label htmlFor='name'>Nombre y Apellidos</label>
          <input type='text' name='name' id='name' placeholder='Nombre Alumno'/>
          <label htmlFor='tel'>NºTeléfono</label>
          <input type='tel' name='tel' id='tel' placeholder='+34 654 85 52 48'/>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' placeholder='hcliment@gmail.com'/>
          <label htmlFor='pais'>Pais</label>
          <select name='pais'>
            <option selected>España</option>
            <option>Francia</option>
            <option>Colombia</option>
            <option>Argentina</option>
            <option>Italia</option>
            <option>portugal</option>
          </select>
          <label htmlFor='ciudad'>Ciudad</label>
          <select name='ciudad'>
            <option selected>Valencia</option>
            <option>Madrid</option>
            <option>Jerez</option>
            <option>Barcelona</option>
            <option>Sevilla</option>
            <option>Granada</option>
          </select>
          <label htmlFor='traslado'>Traslado</label>
          <select name='traslado'>
            <option selected>No</option>
            <option>Sí</option>
          </select>
          <label htmlFor='presencialidad'>Presencialidad</label>
          <select name='presencialidad'>
            <option selected>En remoto</option>
            <option>Presencial</option>
          </select>
          <label htmlFor='documento'>Documento CV</label>
          <input type='submit' value='     Subir de nuevo' name='documento' id='documento' className='fas fa-cloud-upload-alt'/>
          <button id='btn'><i className="fas fa-trash-alt"></i> Borrar</button>
          <label htmlFor='etiquetas'>Etiquetas</label>
          <input type='search' name='etiquetas' id='etiquetas' placeholder='Escribe para buscar...'/>
          <div className='ticks' id='tickets'>
            <p>HTML&CSS <i className="fas fa-times cross"></i></p>
            <p>React <i className="fas fa-times cross"></i></p>
            <p>Angular <i className="fas fa-times cross"></i></p>
          </div>
          
          

        </div>
      </form>
      
    </div>
    
  );
}


export default App;
