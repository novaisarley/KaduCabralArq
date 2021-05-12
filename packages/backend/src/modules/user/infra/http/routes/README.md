# Rotas de Funcionário

## Registrar novo usuário

- **URL**

  `/user`

- **Method**

  `POST`

- **Data Params**

  **Required:**

  `name=[string]`
  `email=[string]`
  `password=[string]`
  `cellphone=[string]`

  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "123456",
    "cellphone": "+55999999999"
  }
  ```

- **Success Response:**

  - **Code:** 200

    **Content:**

    ```json
    {
      "id": "b633d1ef-c666-4f3d-94ef-ca1e77933401",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "cellphone": "+55999999999",
      "wallet": 0,
      "created_at": "2021-05-12T20:36:30.209Z",
      "updated_at": "2021-05-12T20:36:30.209Z"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:**

    ```json
    {
      "status": "error",
      "message": "Email already used"
    }
    ```

  - **Code:** 400 BAD REQUEST

    **Content:**

    ```json
    {
      "status": "error",
      "message": "Cellphone already used"
    }
    ```

- **Sample Call:**

  ```curl
  curl --request POST \
    --url http://localhost:3333/user \
    --header 'Content-Type: application/json' \
    --data '{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "123456",
    "cellphone": "+55999999999"
  }'
  ```

## Mostrar usuário pelo código de compartilhamento

- **URL**

  `/user/:code`

- **Method**

  `GET`

- **URL Params**

  **Required:**

  `code=[string]`

- **Success Response:**

  - **Code:** 200

    **Content:**

    ```json
    {
      "id": "b633d1ef-c666-4f3d-94ef-ca1e77933401",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "cellphone": "+55999999999",
      "wallet": "$0.00",
      "created_at": "2021-05-12T20:36:30.209Z",
      "updated_at": "2021-05-12T20:36:30.209Z"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:**

    ```json
    {
      "status": "error",
      "message": "Code not exists"
    }
    ```

  <!-- - **Code:** 400 BAD REQUEST

    **Content:**

    ```json
    {
      "status": "error",
      "message": "Cellphone already used"
    }
    ``` -->

- **Sample Call:**

  ```curl
  curl --request GET \
    --url 'http://localhost:3333/user/+55999991999'
  ```

## Adicionar valores à carteira do usuário

- **URL**

  `/user/:id`

- **Method**

  `PATCH`

- **Data Params**

  **Required:**

  `value=[number]`

  ```json
  {
    "value": 99.99
  }
  ```

- **URL Params**

  **Required:**

  `id=[uuid]`

- **Success Response:**

  - **Code:** 200

    **Content:**

    ```json
    {
      "id": "a9945a20-fab6-4a23-8517-e07100432759",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "cellphone": "+55999999999",
      "wallet": 99.99,
      "created_at": "2021-05-12T23:07:25.629Z",
      "updated_at": "2021-05-12T23:09:05.985Z"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:**

    ```json
    {
      "status": "error",
      "message": "User does not exists"
    }
    ```

  <!-- - **Code:** 400 BAD REQUEST

    **Content:**

    ```json
    {
      "status": "error",
      "message": "Cellphone already used"
    }
    ``` -->

- **Sample Call:**

  ```curl
  curl --request PATCH \
    --url http://localhost:3333/user/a9945a20-fab6-4a23-8517-e07101432759 \
    --header 'Content-Type: application/json' \
    --data '{
    "value": 99.99
  }'
  ```
