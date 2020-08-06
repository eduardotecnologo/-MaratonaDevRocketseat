import React from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os mestres disponíveis.">
          <form id="search-teachers">
            <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
            </div>

          <div className="input-block">
            <label htmlFor="wek_day">Dia da Semana</label>
            <input type="text" id="wek_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
          </form>
      </PageHeader>
      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/8800014?s=460&u=e6a80a3eed5eabab17714818b0fd8c03a663a3ee&v=4" alt="Eduardo Alexandre"/>
            <div>
              <strong>Eduardo Alexandre</strong>
              <span>Front-end</span>
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
              <img src={whatsappIcon} alt="Whatsapp!"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;