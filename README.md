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

https://api.themoviedb.org/3/collection/{collection_id}/images


https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
