// встраница 404
import { Link } from "react-router-dom"


export const NotFoundPage = () => {
  return (
    <section className="notFound">
      <h2 className="notFound__title">Страница 404</h2>
      <p className="notFound__text">Ничего не найдено</p>
      <Link className="notFound__link" to="/">На главный экран</Link>
    </section>
  )

}