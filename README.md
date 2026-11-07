//Токен доступу для читання API
token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGM3MTU2ODkwNDgzNDJmY2RiYmEyMTE2OWViZGJlMSIsIm5iZiI6MTc5MzcwODIyNi41OTEsInN1YiI6IjZhZTlkMGMyYmZkZDc1MTQ2OWJhNDRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHqcNm98nbsKF_GDc_1ywhLr59yanqNviZxzxtHFvo0

//Ключ API
//70c715689048342fcdbba21169ebdbe1

потрібно увидалити public
.env= по іншому записати

curl --request GET \
--url https://api.themoviedb.org/3/authentication \
--header 'accept: application/json'

язики
curl --request GET \
--url 'https://api.themoviedb.org/3/tv/1399?language=en-US' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGM3MTU2ODkwNDgzNDJmY2RiYmEyMTE2OWViZGJlMSIsIm5iZiI6MTc5MzcwODIyNi41OTEsInN1YiI6IjZhZTlkMGMyYmZkZDc1MTQ2OWJhNDRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHqcNm98nbsKF_GDc_1ywhLr59yanqNviZxzxtHFvo0' \
--header 'accept: application/json'

рейтинг
https://api.themoviedb.org/3/account/{account_id}/rated/movies



https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

props — передаємо інформацію між компонентами.
useState — зберігаємо інформацію, яка може змінюватися внаслідок дій або логіки компонента.
useEffect — виконуємо побічні дії, наприклад завантаження даних з API
useState не обов'язково використовувати для функцій або для API. Він потрібен для зберігання значень, які можуть змінюватися, і коли ці зміни повинні відображатися на сторінці.
потрібен тільки опис — передаємо overview;
потрібен тільки рейтинг — передаємо vote_average;
потрібна вся інформація про фільм — передаємо movie: IMovie.
