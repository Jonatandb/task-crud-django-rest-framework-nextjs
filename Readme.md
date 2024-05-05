
  # [Django Rest Framework + NextJS - Tasks CRUD](https://www.youtube.com/watch?v=2yvbLC9Fxkk)

  Python backend, Javascript frontend.


  ## Installation

  Install backend with pip:

  ```bash
    cd backend
    pip install -r requirements.txt
  ```

  Install frontend with npm:

  ```bash
    cd frontend
    pnpm install
  ```

  ## Usage

  Start backend server:

  ```bash
    cd backend
    py manage.py runserver
  ```

  Start frontend server:

  ```bash
    cd frontend
    npm run dev
  ```

  Visit Django REST framework backend website:

  - http://127.0.0.1:8000

  Visit NextJS frontend website:

  - http://localhost:3000

---

  ## [Django REST framework ViewSet](https://www.django-rest-framework.org/api-guide/viewsets/)

  ViewSet es un concepto específico de Django REST framework
  que implicitamente es un conjunto de vistas.

  Cada vez que se crea una ruta a un recurso, utilizando su ViewSet, Django REST framework crea completamente el CRUD.

---

  ## [Django REST framework Actions](https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing)

  Un _action_ es una ruta específica que se genera y configura para realizar una 'acción' específica diferente (mas compleja o completa) de lo que se hace con las rutas standard provistas por REST.

  Se crea dentro de la clase ViewSet del recurso, es un método que tiene que tener el decorador _@action_, el cual entre otras cosas admite que se especifique los métodos HTTP por medio de los cuales se puede ejecutar esta _acción_, por ej. 'POST'.
  Dentro, este método, posee la lógica para realizar con el recurso lo que sea necesario, por ej. _Pasar el valor de un campo booleano a otro estado._
  Para utilizar/ejecutar este _action_, se debe hacer un POST a la ruta del recurso, poniendo en la URL el nombre del action creado, por ej. _'http://127.0.0.1:8000/api/tasks/1/done/'_. (_**La barra al final es obligatoria.**_)
