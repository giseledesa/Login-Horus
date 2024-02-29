import React from 'react';
import './LoginFacial.css'; 
import luminus from '../../assets/luminus.jpg';

const LoginFacial = () => {
    return (
        <div className="container">
            <img src={luminus} alt="luminus" className='luminus' />
      
            <div className='container-rec'><form action="login" method="post">
                <div className='texto-reconhecimento'>Olhe diretamente para a câmera e aguarde o reconhecimento</div>
            </form> </div>
        </div>
    );
};

export default LoginFacial;
