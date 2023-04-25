# QuickQueryLatest
 
This project is a web application built using Node.js and React. It uses the Express framework for the backend and MongoDB as the database.

## Source Code

The source code for this project is divided into two parts: the backend and the frontend.

### Backend

The backend code is located in the `backend` folder. It contains the Express server and the API endpoints. The API endpoints are:

1. `/api/low-income-bmw-mercedes-users` - Returns a list of users with income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. `/api/male-users-phone-price-greater-than-10000` - Returns a list of male users with phone price greater than 10,000.
3. `/api/users-quote-starts-with-m` - Returns a list of users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. `/api/users-cars-brand-bmw-mercedes-audi-email-no-digit` - Returns a list of users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. `/api/top-10-cities-users-highest-number-average-income` - Returns the data of top 10 cities which have the highest number of users and their average income.

### Frontend

The frontend code is located in the `frontend` folder. It contains the React application which fetches data from the backend API and displays it in a table format.

## Host Name and URL

The application is hosted locally on the machine and the host name is `localhost`. The URLs for the API endpoints are:

1. `http://localhost:3000/api/low-income-bmw-mercedes-users`
2. `http://localhost:3000/api/male-users-phone-price-greater-than-10000`
3. `http://localhost:3000/api/users-quote-starts-with-m`
4. `http://localhost:3000/api/users-cars-brand-bmw-mercedes-audi-email-no-digit`
5. `http://localhost:3000/api/top-10-cities-users-highest-number-average-income`

To view the frontend application, open a web browser and enter the URL `http://localhost:3000/`. This will display the dashboard page which contains a table with the data fetched from the API.

## App Perview 

Low Income BMW or Mercedes Users

![Alt Text](https://github.com/SoniPratham/QuickQuery/blob/main/dashboard/images/Low%20Income%20BMW%20or%20Mercedes%20Users.png)

Male Users with High Phone Price

![Alt Text](https://github.com/SoniPratham/QuickQuery/blob/main/dashboard/images/Male%20Users%20with%20High%20Phone%20Price.png)
