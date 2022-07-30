import React from 'react';
import "../styles/formstyle.css";
import InputForm from './InputForm';
import LabelForm from './LabelForm';
import LogoForm from './LogoForm';
import PForm from './PForm';
import TitleForm from './TitleForm';


const LogInForm = () => {

  return (
    <div className='Contenedor-Principal-Log-In-Form'>
      <LogoForm />
      <TitleForm text='Bienvenida Reyna'/>
      <LabelForm text='Usuario'/>
      <InputForm
        atribute = {{
          id: 'Usuario',
          name: 'Usuario',
          placeholder: ' Ingrese su usuario',
          type: 'text',
        }}
      />
      <LabelForm text='Contraseña'/>
      <InputForm
        atribute = {{
          id: 'Contraseña',
          name: 'Contraseña',
          placeholder: ' Ingrese su contraseña',
          type: 'password',
        }}
      />
      <button className='button-form'> Ingresar </button>
      <PForm text='Olvidé mi contraseña'/>
      <PForm text='No estoy registrada'/>
    </div>
  )
}
export default LogInForm;













{/*
  let useState = ''
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  function handleChange (name, value) {
    if (name === 'Usuario') {setUser(value)}
    else {setPassword(value)}
  };

  function handleSubmit () {
    let account = {user, password}
    if (account) { return true }
  };*/}







{/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/}


{/*function LogInForm() {
  return (
    <div className='Contenedor-Principal-RegistroDeIngreso'>
      <div>
        <h4 className='Login-h4'> Log In </h4>
        <div className='Celda-form'>
        <form>
          <label>
            Usuario
            <input type="text" name="Usuario" id='usuario' placeholder=' Usuario'/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        <div className='Celda-form'>
        <form>
          <label>
            <input type="password" name="Contraseña" id="contraseña" placeholder=' Contraseña'/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>

        <div>
          <button className='button-form'>  Ingresar </button>
        </div>
        <p className='p-form'>Olvide mi contraseña</p>
        <p className='p-form'>Aun no estoy registrado</p>
        {/*<p><Link to="#">Olvide mi contraseña</Link></p>
        <p><Link to="#">Aun no estoy registrado</Link></p> /}
      </div>
    </div>
  )
}

export default LogInForm;*/}
