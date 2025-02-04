# Руководство по использованию API

#&# Введение #Этот документ описывает, как делать запросы к API. Мы рассмотрим базовые HTTP методы, такие как GET, POST, PUT и DELETE, и приведем примеры для каждого из них.

### Основные HTTP Методы

#### GET #Метод GET используется для получения данных с сервера.

#Пример запроса:

#http #GET /api/v1/resources HTTP/1.1 #Host: example.com #Authorization: Bearer YOUR_ACCESS_TOKEN #

#Пример на JavaScript (fetch):

#javascript #fetch('https://example.com/api/v1/resources', { # method: 'GET', # headers: { # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' # } #}) #.then(response => response.json()) #.then(data => console.log(data)) #.catch(error => console.error('Error:', error)); #

#### POST #Метод POST используется для отправки данных на сервер.

#Пример запроса:

#```http #POST /api/v1/resources HTTP/1.1 #Host: example.com#Content-Type: application/json #Authorization: Bearer YOUR_ACCESS_TOKEN

#{ # "name": "New Resource", # "description": "Description of the new resource" #} #```

#Пример на JavaScript (fetch):

#javascript #fetch('https://example.com/api/v1/resources', { # method: 'POST', # headers: { # 'Content-Type': 'application/json', # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' # }, # body: JSON.stringify({ # name: 'New Resource', # description: 'Description of the new resource' # }) #}) #.then(response => response.json()) #.then(data => console.log(data)) #.catch(error => console.error('Error:', error)); #

#### PUT #Метод PUT используется для обновления существующих данных на сервере.

#Пример запроса:

#```http #PUT /api/v1/resources/1 HTTP/1.1 #Host: example.com#Content-Type: application/json #Authorization: Bearer YOUR_ACCESS_TOKEN

#{ # "name": "Updated Resource", # "description": "Updated description of the resource" #} #```

#Пример на JavaScript (fetch):

#javascript #fetch('https://example.com/api/v1/resources/1', { # method: 'PUT', # headers: { # 'Content-Type': 'application/json', # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' # }, # body: JSON.stringify({ # name: 'Updated Resource', # description: 'Updated description of the resource' # }) #}) #.then(response => response.json()) #.then(data => console.log(data)) #.catch(error => console.error('Error:', error)); #

#### DELETE #Метод DELETE используется для удаления данных с сервера.

#Пример запроса:

#http #DELETE /api/v1/resources/1 HTTP/1.1 #Host: example.com #Authorization: Bearer YOUR_ACCESS_TOKEN #

#Пример на JavaScript (fetch):

#javascript #fetch('https://example.com/api/v1/resources/1', { # method: 'DELETE', # headers: { # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' # } #}) #.then(response => response.json()) #.then(data => console.log(data)) #.catch(error => console.error('Error:', error)); #

### Заключение