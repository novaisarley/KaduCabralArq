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
