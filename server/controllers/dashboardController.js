// const OnlineOfflineMonthlySalesData = [
//     { Month: "Jan", OnlineSales: 131230 , OfflineSales:9904},
//     { Month: "Feb", OnlineSales: 132950 , OfflineSales:16817},
//     { Month: "Mar", OnlineSales: 142105 , OfflineSales:18233},
//     { Month: "Apr", OnlineSales: 15172, OfflineSales:17767},
//     { Month: "May", OnlineSales: 171400 , OfflineSales:18282},
//     { Month: "Jun", OnlineSales: 157360 , OfflineSales:26743},
//     { Month: "Jul", OnlineSales: 118630 , OfflineSales:15199},
//     { Month: "Aug", OnlineSales: 149030 , OfflineSales:22444},
//     { Month: "Sep", OnlineSales: 133430 , OfflineSales:25801},
//     { Month: "Oct", OnlineSales: 145745 , OfflineSales:25191},
//     { Month: "Nov", OnlineSales: 133430 , OfflineSales:25801},
//     { Month: "Dec", OnlineSales: 145745 , OfflineSales:100000},
//   ];

//@desc Get all OnlineOfflineMonthlySales
//@route GET /api/OnlineOfflineMonthlySales
//@access public

// const  OnlineOfflineMonthlySalesModel = require('../model/onlineOfflineMontlySales')

const  DailyTransactionModel = require('../model/dailyTransaction')

const OnlineOfflineMonthlySales = async (req, res) => {
  
};


module.exports = {OnlineOfflineMonthlySales};


// const  DailyTransactionModel = require('../model/dailyTransaction')

// //@desc add DailyTransactions to database
// //@route POST /api/DailyTransactions
// //@access public
// const DailyTransactions = async (req, res) => {
//   try {
//     const postData = req.body;
//     const newTransaction = new DailyTransactionModel(postData);
//     await newTransaction.save();
//     res.status(201).json({ success: true, data: newTransaction });
//   } catch (error) {
//     console.error('Error adding DailyTransaction:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// };



// //@desc Get all DailyTransactions on frontend
// //@route GET /api/DailyTransactions/all
// //@access public

// const DailyTransactionsAll = async (req, res) => {
//   try {
//     const allTransactions = await DailyTransactionModel.find();

//     res.status(200).json(allTransactions);
//   } catch (error) {
//     console.error('Error fetching all DailyTransactions:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// };

// module.exports = { DailyTransactions, DailyTransactionsAll };
