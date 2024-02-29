import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import compactCameraImage from '../assets/compactCamera.jpg';
import safetyHatImage from '../assets/safetyHat.jpg';
import luminus from '../assets/luminus.jpg';

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  const redirectToFacialLogin = () => {
    history.push('/reconhecimento-facial'); 
  };

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="container-principal">
      <img src={luminus} alt="luminus" className='luminus' />
      
      <div className="container-form">
        <section className="area-login">
          <div className="login">
            <form action="login" method="post" onSubmit={onSubmit}>
              <h1>Login</h1>
              <div className="dados-entrada">
                <label htmlFor="user">Matricula</label>
                <input type="text" id="user" name="user" onChange={onChange} value={values.user} autoFocus />
                
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" onChange={onChange} value={values.password} />
              </div>

              <UIButton type="submit" className="entrada-button" rounded>Entrar</UIButton>
              

              <div className="login-facial">
                <div className="line"></div>
                <div className="texto">ou</div>
                <div className="line"></div>
              </div>
              
              <button className="reconhecimento-facial" onClick={redirectToFacialLogin}>

                <img src={compactCameraImage} alt="camera" className='camera' />
                <div className="facial">
                  Acesso via <strong>Reconhecimento facial</strong>
                </div>
              </button>

            </form>
          </div>
        </section>
      </div>

      <div className="descricao-sistema">
        <img src={safetyHatImage} alt="capacete" className="capacete" />
        <div className="texto">
          <p>Seu sistema de</p>
          <p>monitoramento</p>
          <p>de EPI</p>
        </div>
      </div>
      
    </div>
  );
};

export default UserLogin;
