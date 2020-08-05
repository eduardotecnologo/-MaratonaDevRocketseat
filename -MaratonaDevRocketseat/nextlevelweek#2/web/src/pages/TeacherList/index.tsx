import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/mestre-logo.svg';


function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Professores" />
        </div>

        <div className="header-content">
          <strong>Esses são os mestres disponíveis.</strong>
        </div>
      </header>
    </div>
  )
}

export default TeacherList;