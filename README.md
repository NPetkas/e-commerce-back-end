# e-commerce-back-end

## Description

  E-Commerce Back-End application was created to simulate how a real world back-end retail database will act with 
  functionalities such as product update, category deletion, and product tag creation. For reference, this build 
  demonstrates how to setup model requirements, seeding a database, creation of multiple standard routes, and the 
  use of 3rd party application `Insomnia` to test route requests. 




## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Demo](#demo)
- [Questions](#questions)



## Installation

1. Clone the repository `git clone git@github.com:NPetkas/e-commerce-back-end.git`.
2. Navigate to the project directory in terminal.
3. Install dependencies `npm i`.
4. Run `mysql -u root -p` to start MYSQL.
5. inside mysql, source schema`SOURCE db/schema.sql`.
6. `Exit` mysql.
7. Run `npm run seed` to seed database with 'data'. 



## Usage

1. Start app in terminal by running `npm start`.
2. Open `Insomnia` application.
3. Select `E-commerce-back-end` request collection.
4. Choose from `Category`, `Product`, or `Tag` request sections.
5. Run the following request options: `Get All`, `Get One`, `Create`, `Update`, `Delete`.
6. Click `Send` after request option is chosen.
7. Continue with each action as desired.
3. When finished, navigate to terminal, and exit server by typing `control(^) + 'c'`.



## Technologies

- DotEnv
- MYSQL
- Express
- Sequelize



## Contributing

To contribute:

1. Create a new branch
2. Make your changes
3. Submit a pull request



## Demo

[E-Commerce Back End Demo][def]

[def]: https://drive.google.com/file/d/1QOWWJ_r6xUFfatZEAVlaGEr6NHFu1GJ4/view?usp=sharing




## Questions

Contact information for any questions:

Github Profile: [https://github.com/NPetkas](https://github.com/NPetkas)

Link to Repo: [https://github.com/NPetkas/e-commerce-back-end](https://github.com/NPetkas/e-commerce-back-end)

Email: [nicopetkas@gmail.com](nicopetkas@gmail.com)