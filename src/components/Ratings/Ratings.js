import { Submit } from '../buttons/submit';
import './Ratings.scss';
import image from './icon-star.svg';


export const Ratings = (props) => {

  const colorSelection = ({target}) => {
    props.getRating(target.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitted(true);
  }

  return (
    <div className=" card--rating">
      <div className='circle' onClick={colorSelection}>
        <img className='center logo' src={image} alt='star'/>
      </div>
      <h1 className="card__title">How did we do?</h1>
      <p className="card__paragraph">
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <ul className="value-container" >
          <li className="card__value circle button" onClick={colorSelection}><p className="center center--up">1</p></li>
          <li className="card__value circle button" onClick={colorSelection}><p className="center center--up">2</p></li>
          <li className="card__value circle button" onClick={colorSelection}><p className="center center--up">3</p></li>
          <li className="card__value circle button" onClick={colorSelection}><p className="center center--up">4</p></li>
          <li className="card__value circle button" onClick={colorSelection}><p className="center center--up">5</p></li>
        </ul>
        <Submit />
      </form>

    </div>
  );
}

