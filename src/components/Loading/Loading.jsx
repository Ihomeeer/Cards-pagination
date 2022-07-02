// надпись "загрузка" и анимация загрузки

export const Loading = () => {
  return (
    <div className="loading">
      <p className="loading__text">Загрузка</p>
      <div className="loading__spinner"></div>
    </div>
  )
}