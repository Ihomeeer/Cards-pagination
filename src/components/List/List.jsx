import { useState } from "react";
import { Card } from "../Card/Card";
import api from "../../utils/api/api";
import { v4 as generateUid } from 'uuid';


export const List = ({ data, setCurrentCard }) => {

  return (
    <section className="list__section">
      <ul className="list__items-list">
        {
          data &&
          data?.map((item) => {
            return (
              <Card
                key={generateUid()}
                data={item}
                isDetailsWindow={false}
                setCurrent={setCurrentCard}
              />
            )
          })
        }
      </ul>
    </section>
  )
}