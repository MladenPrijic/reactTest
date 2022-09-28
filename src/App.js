import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main>
        <article className="layout">
          <aside className="sidebar sidebar-left">
            <div className="sidebar-header">
              <p>Blockchain foundations</p>
              <div className="progress-bar">
                <span style={{ width: '70%' }}></span>
              </div>
            </div>

            <ul className="list">
              <li>
                <div className="list-top">
                  <span className="unit">Unit</span>
                  <span className="status">Completed</span>
                </div>

                <div className="list-bottom">
                  <span className="title">
                    <span>1.</span> Blockchain
                  </span>
                  <span className="time">12:33</span>
                </div>
              </li>
              <li>
                <div className="list-top">
                  <span className="unit">Unit</span>
                  <span className="status">Completed</span>
                </div>
                <div className="list-bottom">
                  <span className="title">
                    <span>1.</span> Blockchain
                  </span>
                  <span className="time">12:33</span>
                </div>
              </li>

              <li>
                <div className="list-top">
                  <span className="unit">Unit</span>
                  <span className="status">Completed</span>
                </div>
                <div className="list-bottom">
                  <span className="title">
                    <span>1.</span> Blockchain
                  </span>
                  <span className="time">12:33</span>
                </div>
              </li>

              <li>
                <div className="list-top">
                  <span className="unit">Unit</span>
                  <span className="status">Completed</span>
                </div>
                <div className="list-bottom">
                  <span className="title">
                    <span>1.</span> Blockchain
                  </span>
                  <span className="time">12:33</span>
                </div>
              </li>

              <li>
                <div className="list-top">
                  <span className="unit">Unit</span>
                  <span className="status">Completed</span>
                </div>
                <div className="list-bottom">
                  <span className="title">
                    <span>1.</span> Blockchain
                  </span>
                  <span className="time">12:33</span>
                </div>
              </li>
              <li>
                <div className="list-top">
                  <span className="unit">Unit</span>
                  <span className="status">Completed</span>
                </div>
                <div className="list-bottom">
                  <span className="title">
                    <span>1.</span> Blockchain
                  </span>
                  <span className="time">12:33</span>
                </div>
              </li>

              <li>
                <div className="list-top">
                  <span className="unit">Unit</span>
                  <span className="status">Completed</span>
                </div>
                <div className="list-bottom">
                  <span className="title">
                    <span>1.</span> Blockchain
                  </span>
                  <span className="time">12:33</span>
                </div>
              </li>
            </ul>
          </aside>

          <div className="wrapper">
            <section className="section section-hero">
              <h1>Blockchain smart contracts</h1>

              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </section>
            <section className="section section-comment"></section>
          </div>
        </article>
      </Main>
    </div>
  );
};

export default App;
