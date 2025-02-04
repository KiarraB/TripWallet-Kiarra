import ExchangeRatesTable from "./components/ExchangeRatesTable.jsx";
import Header from "./components/Header.jsx"
//import TotalTransactionsChart from "./components/TotalTransactionsChart.jsx"
import {Chart as ChartJS} from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'
import LiveExchangeRates from "./components/LiveExchangeRates.jsx";
import NavBar from "./components/NavBar.jsx";
// import { AuthContextProvider } from "./context/AuthContext.jsx";
// import { Route, Routes } from 'react-router-dom';
// import Login from './Login.jsx'

export default function UserDashboard(props) {return (
    <>
        <NavBar/>
        <br /><br /><br />
        <Header />
        <h1>Live Exchange Rates</h1>
        <ExchangeRatesTable/>

    </>
);}