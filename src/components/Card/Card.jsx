// компонент карточки
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from "../../utils/api/api";


export const Card = ({ data, isDetailsWindow, setCurrent }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (!data.id) {
      api.getCards()
        .then((res) => {
          const items = res;
          const currentCard = items.find(item => item.id === +id);
          currentCard && setCurrent(currentCard);
        })
    }
  }, [])

  const openDetailsHandler = () => {
    const currentCard = data && data;
    currentCard && setCurrent(currentCard);
    history.push(`/items/${data.id}`)
  }

  const backButtonHandler = () => {
    history.push('/');
  }

  return (
    <>
      {data &&
        <div className={`card-general ${isDetailsWindow ? "card-details" : "card"}`}>
          <h2 className={`card-general__header ${isDetailsWindow ? "card-details__header" : "card__header"}`}>{data.title}</h2>
          <p className={`card-general__text ${isDetailsWindow ? "card-details__text" : "card__text"}`}>{data.body}</p>
          {
            isDetailsWindow
              ?
              <button className="card-general__button card-details__button" onClick={backButtonHandler}>Назад</button>
              :
              <button className="card-general__button card__button" onClick={openDetailsHandler}>Подробнее</button>
          }
        </div>
      }
    </>
  )
}