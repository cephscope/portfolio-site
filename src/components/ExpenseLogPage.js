import React from 'react';

const ExpenseLogPage = () => {
  return (
    <div className="column">
      <div className="content-header"><h1>Expense Log</h1></div>
      <div className="content-container" id="detail">
        <a href="https://expense--app.herokuapp.com/" target="_blank" className="content-item">
          <img className="content-item__img" id="detail__img" src="./images/ftb.png" />
          <h2 className="title" id="detail__title">give it a spin</h2>
        </a>
        <p id="detail">An application for tracking your expenses.</p>
        <p id="detail">Expense data stored in a user-authenticated database</p>
        <p id="detail">Quick search and filter functionality.</p>
        <a id="detail" href="https://github.com/cephscope/exepense-app" target="_blank">View project on GitHub</a>
      </div>
    </div>
  );
};

export default ExpenseLogPage;