import React from 'react';

const Droidify = () => {
  return (
    <div className="column">
      <div className="content-header"><h1>Droidify</h1></div>
      <div className="content-container" id="detail">
        <a href="https://droidify.roycathey.org/" target="_blank" className="content-item">
          <img className="content-item__img" id="detail__img" src="./images/droidify.png" />
          <h2 className="title" id="detail__title">take a look</h2>
        </a>
        <p id="detail">Modern, mobile-friendly landing page for a new product.*</p>
        <p id="detail">* Product is in this case fictional.</p>
        <a id="detail" href="https://github.com/cephscope/mock-landing-page" target="_blank">View project on GitHub</a>
      </div>
    </div>
  );
};

export default Droidify;