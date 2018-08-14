import React from 'react';

const SpacejpgPage = () => {
  return (
    <div className="column">
      <div className="content-header"><h1>@spacejpg</h1></div>
      <div className="content-container" id="detail">
        <a href="https://twitter.com/spacejpg/" target="_blank" className="content-item">
          <img className="content-item__img" id="detail__img" src="./images/space.jpg" />
          <h2 className="title" id="detail__title">take a look</h2>
        </a>
        <p id="detail">Stargazing bot fetching random images from the hubble space telescope image archive and posting them to twitter</p>
        <a id="detail" href="https://github.com/cephscope/twit--bot" target="_blank">View project on GitHub</a>
      </div>
    </div>
  );
};

export default SpacejpgPage;