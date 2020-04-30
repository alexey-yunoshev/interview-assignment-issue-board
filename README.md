# Interview Assignment - Issue Board

## Assignment
```
Задание: написать приложение, отображающее данные в табличном виде с возможностью фильтрации.

Должно работать следующим образом:
При заходе на сайт пользователь видит таблицу с данными и тулбар с контролами для фильтрации данных. Данные берутся с сервера с помощью запроса, сформированного на основе ввода пользователя. Состав контролов должен включать выпадающий список и строку поиска.

Данные для отображения - это список багов с именами ответственных пользователей. Они должны собираться из двух коллекций, формируемых на старте приложения:
коллекция users: “id”, “username”,
коллекция bugs: "id", "title", “assignee”

Критерии поиска:
выпадающий список содержит список пользователей, позволяет отфильтровать баги по пользователю
строка поиска позволяет фильтровать баги по всем трем параметрам

Реализация:
Frontend:
ReactJs
Текстовое поле должно поддерживать debounce, реализованный на RxJs
Выпадающий список должен формироваться на основе запроса с сервера
На клиенте данные должны храниться в Redux
Для отправки запросов должна использоваться связка Redux-Saga / Axios
Элементы управления/таблица/верстка - Material-UI
Аккуратная адаптивная верстка
Backend: Node.JS, Python, GoLang - на ваш выбор, база - на ваш выбор
Требования:
- Проект выложен на github или любое другое место, куда есть доступ.
- Сервис должен собираться в Docker-контейнер
- В корне - README.md в котором описаны инструкции, как все собрать, как запустить и что открывать браузером.

P.S. Можно на ангуляре, можно сокращать, оставить redux, redux-saga - сделать законченную вещь по мотивам.
```

## Production
To run the app with production images, in the root directory run `./scripts/start-prod.sh`.
You can open the app in a browser at `localhost:3000`.

## Development
In the root directory run `./scripts/start-dev.sh`.

You can open the app in a browser at `localhost:3000`. For the other
available services see `docker-compose.dev.yaml`.

For API schema open `localhost:3001/schema` (`http://localhost:3000/schema` for production build).

If you need IDE support, you will also need to install dependencies:
```
cd server
npm install
cd ..

cd ui
npm install
```

## Testing
For API integration tests and UI tests run `./scripts/test-api.sh` in the root directory.

## Cleaning
To remove project networks, containers, and volumes run `./scripts/clean.sh`
