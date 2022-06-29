import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { List } from '../List/List';
import { Card } from '../Card/Card';
import api from "../../utils/api/api";


function App() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => {
    setCurrentCard({});
    api.getCards()
      .then((res) => {
        const currentCards = res;
        setCards(currentCards);
      })
  }, [])

  const setCardHandler = (item) => {
    setCurrentCard(item);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}>
          {
            cards &&
            <List
              data={cards}
              setCurrentCard={setCardHandler}
            />
          }
        </Route>
        <Route path="/:id" exact={true}>
          {
            currentCard &&
            <Card
              isDetailsWindow={true}
              data={currentCard}
              setCurrent={setCardHandler}
            />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;



