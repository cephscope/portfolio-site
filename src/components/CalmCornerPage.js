import React from 'react';

const CalmCornerPage = () => {
  return (
    <div className="column">
      <div className="content-header"><h1>Calm Corner</h1></div>
      <div className="content-container" id="detail">
        <a href="https://calm.roycathey.org" target="_blank" className="content-item">
          <img className="content-item__img" id="detail__img" src="./images/calmcornerss.png" />
          <h2 className="title" id="detail__title">give it a spin</h2>
        </a>
        <p id="detail">A synthesizer in your browser.</p>
        <p id="detail">Every sound and sequence custom-programmed using the Tone.js API.</p>
        <p id="detail">Animations drawn and audio-synced using the P5.js API.</p>
        <a id="detail" href="https://github.com/cephscope/noise" target="_blank">View project on GitHub</a>
      </div>
    </div>
  );
};

export default CalmCornerPage;