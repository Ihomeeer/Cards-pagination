import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { List } from '../List/List';
import { Card } from '../Card/Card';
import { Pagination } from '../Pagination/Pagination';
import api from "../../utils/api/api";


function App() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const lastItemIndex = currentPage * itemsPerPage;
  const firsItemIndex = lastItemIndex - itemsPerPage;
  const currentItemsList = cards && cards?.slice(firsItemIndex, lastItemIndex)

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
          <>
            {
              cards &&
              <List
                data={currentItemsList}
                setCurrentCard={setCardHandler}
              />
            }
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={cards && cards.length}
              currentPage={currentPage}
              setPage={setCurrentPage}
            />
          </>

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



