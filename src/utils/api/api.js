//Класс содержит всю логику для работы с API
class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  //проверка состояния промиса
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получение информации о карточках с сервера
  getCards() {
    return fetch(`${this._baseUrl}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => this._checkStatus(res))
  }
};

const api = new Api("https://jsonplaceholder.typicode.com");
export default api;