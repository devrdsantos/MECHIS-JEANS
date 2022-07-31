import React from 'react';
import "../styles/formstyle.css";
import InputForm from './InputForm';
import LabelForm from './LabelForm';
import LogoForm from './LogoForm';
import PForm from './PForm';
import TitleForm from './TitleForm';
import SubtitleForm from './SubtitleForm';


const LogUpForm = () => {

  return (
    <div className='Contenedor-Principal-Log-Up-Form'>
      <LogoForm />
      <TitleForm text='Bienvenida Reyna'/>
      <SubtitleForm text='Completá los siguientes datos por favor'/>
      <LabelForm text='Nombre'/>
      <InputForm
        atribute = {{
          id: 'name',
          name: 'name',
          placeholder: ' Ingrese su nombre',
          type: 'text',
        }}
      />
      <LabelForm text='Apellido'/>
      <InputForm
        atribute = {{
          id: 'apellido',
          name: 'apellido',
          placeholder: ' Ingrese su apellido',
          type: 'text',
        }}
      />
      <LabelForm text='Fecha de nacimiento'/>
      <InputForm
        atribute = {{
          id: 'date',
          name: 'date',
          type: 'date',
        }}
      />
      <LabelForm text='Código postal'/>
      <InputForm
        atribute = {{
          id: 'cp',
          name: 'cp',
          placeholder: ' Ingrese su CP',
          type: 'text',
        }}
      />
      <LabelForm text='Número de contacto'/>
      <InputForm
        atribute = {{
          id: 'telefono',
          name: 'telefono',
          placeholder: ' Ingrese su número de teléfono o celular',
          type: 'text',
        }}
      />
      <LabelForm text='email'/>
      <InputForm
        atribute = {{
          id: 'email',
          name: 'email',
          placeholder: ' Ingrese su email',
          type: 'email',
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
      <LabelForm text='Confirmación de contraseña'/>
      <InputForm
        atribute = {{
          id: 'Confirmacion-Contraseña',
          name: 'confirmacion-Contraseña',
          placeholder: ' repita su contraseña',
          type: 'password',
        }}
      />
      <div className='Contenedor-terminos'>
      <input type='checkbox' id='terminos' name='terminos' onclick=''/>
      <PForm text=' Estoy de acuerdo con los términos y condiciones'/>
      </div>
      <button className='button-form'> Registrarme </button>
    </div>
  )
}
export default LogUpForm;