// страница со списком карточек и пагинацией

import { useState } from "react";
import { List } from "../../components/List/List"
import { Pagination } from "../../components/Pagination/Pagination";


export const ListPage = ({ data, setCardHandler }) => {
  // активная страница
  const [currentPage, setCurrentPage] = useState(1);
  // количество элементов на странице
  const [itemsPerPage] = useState(9);

  const lastItemIndex = currentPage * itemsPerPage;
  const firsItemIndex = lastItemIndex - itemsPerPage;
  const currentItemsList = data && data?.slice(firsItemIndex, lastItemIndex)

  return (
    <>
      {
        data &&
        <List
          data={currentItemsList}
          setCurrentCard={setCardHandler}
        />
      }
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data && data.length}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </>
  )
}