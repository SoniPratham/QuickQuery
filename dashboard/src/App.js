import React, { useEffect, useState } from 'react';
import { getLowIncomeBMWorMercedesUsers, getMaleUsersWithHighPhonePrice, getLastNameMUsersWithQuoteLengthGreaterThan15, getCarBrandAndNonDigitEmailUsers, getTop10CitiesWithHighestNumberOfUsers } from './api';
import Table from './components/Table.js';

const App = () => {
  const [lowIncomeBMWorMercedesUsers, setLowIncomeBMWorMercedesUsers] = useState([]);
  const [maleUsersWithHighPhonePrice, setMaleUsersWithHighPhonePrice] = useState([]);
  const [lastNameMUsersWithQuoteLengthGreaterThan15, setLastNameMUsersWithQuoteLengthGreaterThan15] = useState([]);
  const [carBrandAndNonDigitEmailUsers, setCarBrandAndNonDigitEmailUsers] = useState([]);
  const [top10CitiesWithHighestNumberOfUsers, setTop10CitiesWithHighestNumberOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const lowIncomeBMWorMercedesUsersData = await getLowIncomeBMWorMercedesUsers();
      setLowIncomeBMWorMercedesUsers(lowIncomeBMWorMercedesUsersData);

      const maleUsersWithHighPhonePriceData = await getMaleUsersWithHighPhonePrice();
      setMaleUsersWithHighPhonePrice(maleUsersWithHighPhonePriceData);

      const lastNameMUsersWithQuoteLengthGreaterThan15Data = await getLastNameMUsersWithQuoteLengthGreaterThan15();
      setLastNameMUsersWithQuoteLengthGreaterThan15(lastNameMUsersWithQuoteLengthGreaterThan15Data);

      const carBrandAndNonDigitEmailUsersData = await getCarBrandAndNonDigitEmailUsers();
      setCarBrandAndNonDigitEmailUsers(carBrandAndNonDigitEmailUsersData);

      const top10CitiesWithHighestNumberOfUsersData = await getTop10CitiesWithHighestNumberOfUsers();
      setTop10CitiesWithHighestNumberOfUsers(top10CitiesWithHighestNumberOfUsersData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <center><h1>Dashboard</h1></center>
      <h2>Low Income BMW or Mercedes Users</h2>
      <Table data={lowIncomeBMWorMercedesUsers} />

      <h2>Male Users with High Phone Price</h2>
      <Table data={maleUsersWithHighPhonePrice} />

      <h2>Last Name M Users with Quote Length Greater Than 15</h2>
      <Table data={lastNameMUsersWithQuoteLengthGreaterThan15} />

      <h2>Car Brand and Non-Digit Email Users</h2>
      <Table data={carBrandAndNonDigitEmailUsers} />

      <h2>Top 10 Cities with Highest Number of Users</h2>
      <Table data={top10CitiesWithHighestNumberOfUsers} />
    </div>
  );
};

export default App;
