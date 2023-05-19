import React from 'react';

const Quizcard = () => {
  return (
    // Add variable for border color of card (Use Redux)
    <div className='quizcard mayo'>
      <div className="quizcard-question">
        Quelle est la couleur du cheval blanc d'Henri IV ?
      </div>
      <div className="quizcard-answers">
        <div className="answer">Réponse 1</div>
        <div className="answer">Réponse 2</div>
        <div className="answer">Réponse 3</div>
        <div className="answer">Réponse 4</div>
      </div>
    </div>
  );
};

export default Quizcard;