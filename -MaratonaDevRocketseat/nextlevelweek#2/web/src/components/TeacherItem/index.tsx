import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'


function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/8800014?s=460&u=e6a80a3eed5eabab17714818b0fd8c03a663a3ee&v=4" alt="Eduardo Alexandre" />
        <div>
          <strong>Eduardo Alexandre</strong>
          <span>Ferroviário</span>
        </div>
      </header>
      <p>Sislog Operator at MRS Logística, Desenvolvedor FullStack na empresa Eazy Digital <br />
        <br />Apaixonado por programação e viciado em café, entusiasta Filosofia Hacker
          </p>
      <footer>
        <p>
          Preço /hora:
              <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp!" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}
export default TeacherItem;