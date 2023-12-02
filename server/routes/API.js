var express = require('express');
var router = express.Router();

const {DailyTransactions,DailyTransactionsAll} = require("../controllers/dailyentryController")
const {OnlineOfflineMonthlySales} = require("../controllers/dashboardController")
const {PersonsWithDue} = require("../controllers/khatabookController")



router.get('/OnlineOfflineMonthlySales',OnlineOfflineMonthlySales);

router.get('/PersonsWithDue',PersonsWithDue);

router.post('/DailyTransactions',DailyTransactions);
router.get('/DailyTransactions/all',DailyTransactionsAll);


module.exports = router;
