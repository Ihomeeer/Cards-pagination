import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Card } from '../Card/Card';
import api from "../../utils/api/api";
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { ListPage } from '../../pages/ListPage/ListPage';
import { Loading } from '../Loading/Loading';


function App() {
  // все карточки, полученные с сервера
  const [cards, setCards] = useState([]);
  // выбранная карточка для модалки
  const [currentCard, setCurrentCard] = useState({});
  // стейт для отображения загрузки
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setCurrentCard({});
    api.getCards()
      .then((res) => {
        const currentCards = res;
        setCards(currentCards);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  const setCardHandler = (item) => {
    setCurrentCard(item);
  }

  if(isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="App">
      <Switch>

        <Route path="/" exact={true}>
          <ListPage
            data={cards}
            setCardHandler={setCardHandler}
          />
        </Route>

        <Route path="/items/:id" exact={true}>
          {
            currentCard &&
            <Card
              isDetailsWindow={true}
              data={currentCard}
              setCurrent={setCardHandler}
            />
          }
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;



