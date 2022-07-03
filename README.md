# Cards-pagination

## Описание
Небольшой проект для верстки списков с пагинацией

## Стек 
HTML, CSS, React, React-Router

## Особенности
1. Адаптивная верстка;
2. Пагинация с автоматическим рассчетом количества страниц;
3. Спиннер загрузки, если долго грузятся данные с API;
4. Подгрузка карточки при обновлении страницы с подробностями;

На gh-pages не выложен, потому что присутствует роутинг, с которым gh-pages не дружит

В качестве API использовался https://jsonplaceholder.typicode.com/

## Скриншоты:

### Список с адаптивом:
<p align="center">
  <img src="screenshots/1.jpg" height="400" width="600"/>
  <img src="screenshots/3.jpg" height="400" width="450"/>
  <img src="screenshots/2.jpg" height="400" width="450"/>
</p>

### Отдельная карточка:
<p align="center">
  <img src="screenshots/4.jpg" height="400" width="600"/>
</p>



## Управление
### `npm start`
Runs the app in the development mode.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
