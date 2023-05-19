import React, { useEffect } from 'react';

const Quizcard = () => {

  useEffect(() =>{
    const answers = Array.from(document.getElementsByClassName('answer'));
    answers.forEach(element => {
      element.addEventListener('click', () =>{
        element.style.background = 'blue';
        // Ajouter un useState 'checked' - si checked background bleu sinon reste en gris
      })
    });
  })

  return (
    // Add variable for border color of card (Use Redux)
    <div className='quizcard mayo'>
      <div className="quizcard-question">
      Une seule de ces affirmations est vraie, laquelle ?
      </div>
      <div className="quizcard-answers">
        <div className="answer">Richard Nixon a traversé la douane avec une mallette pleine de weed pour Louis Armstrong.</div>
        <div className="answer">John F. Kennedy a traversé la douane avec une mallette pleine de coke pour Elvis Presley.</div>
        <div className="answer">Barack Obama a traversé la douane avec une mallette pleine de LSD pour Jay-Z.</div>
        <div className="answer">Donald Trump a traversé la douane pour raccompagner un mexicain chez lui.</div>
      </div>
    </div>
  );
};

export default Quizcard;