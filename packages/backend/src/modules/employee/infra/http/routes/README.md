# Rotas de Funcionário

## Registrar novo funcionário

- **URL**

  `/employee`

- **Method**

  `POST`

- **Data Params**

  **Required:**

  `name=[string]`
  `email=[string]`
  `password=[string]`
  `isAdmin=[boolean]`

  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "123456",
    "isAdmin": false
  }
  ```

- **Success Response:**

  - **Code:** 200

    **Content:**

    ```json
    {
      "id": "6d28203b-1a90-4e12-8618-a91a9f223b8d",
      "name": "John Dow",
      "email": "johndoe@example.com",
      "isAdmin": false,
      "created_at": "2021-05-11T23:58:26.996Z",
      "updated_at": "2021-05-11T23:58:26.996Z"
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

- **Sample Call:**

  ```curl
  curl --request POST \
    --url http://localhost:3333/employee \
    --header 'Content-Type: application/json' \
    --data '{
    "name": "Pedro Henrique Souza Araujo",
    "email": "pedroaraujo1952@hotmail.com",
    "password": "ph261202",
    "isAdmin": false
  }'
  ```
