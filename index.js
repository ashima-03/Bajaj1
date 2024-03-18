const axios = require('axios');

// Step 1: Create Investment Account
const createAccount = async () => {
    try {
        const accountCreationUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount";
        const accountCreationPayload = {
            name: "Ashima",
            email: "ashima0311.be21@chitkara.edu.in",
            rollNumber: 2110990311,
            phone: 7056791608
        };
        const headers = {
            "Content-Type": "application/json"
        };

        const response = await axios.post(accountCreationUrl, accountCreationPayload, { headers });

        if (response.status === 200) {
            const accountData = response.data;
            const accountNumber = accountData.accountNumber;
            console.log("Investment account created successfully. Account Number:", accountNumber);
            return accountNumber;
        } else {
            console.log("Failed to create investment account. Status code:", response.status);
            return null;
        }
    } catch (error) {
        console.error("Error creating investment account:", error.message);
        return null;
    }
};

// Step 2: Research Bajaj Finserv
// You can use any method to get the current stock price and recent performance of Bajaj Finserv

// Example: Assume current stock price and recent performance are obtained from some source
const bajajFinservStockPrice = 5000.00; // Example value, replace with actual value
const recentPerformance = "Stable"; // Example value, replace with actual value

// Step 3: Buy Stocks in Bajaj Finserv
const buyStocks = async (accountNumber) => {
    try {
        const buyStocksUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks";
        const buyStocksPayload = {
            company: "Bajaj Finserv",
            currentPrice: bajajFinservStockPrice,
            accountNumber: accountNumber,
            githubRepoLink: "https://github.com/ashima-03"
        };
        const headers = {
            "content-type": "application/json",
            "bfhl-auth": "2110990311".toString()
        };

        const response = await axios.post(buyStocksUrl, buyStocksPayload, { headers });

        if (response.status === 200) {
            console.log("Successfully invested in Bajaj Finserv stocks.");
        } else {
            console.log("Failed to invest in Bajaj Finserv stocks. Status code:", response.status);
        }
    } catch (error) {
        console.error("Error buying stocks:", error.message);
    }
};

const main = async () => {
    const accountNumber = await createAccount();
    if (accountNumber) {
        await buyStocks(accountNumber);
    } else {
        console.log("Failed to proceed due to errors in account creation.");
    }
};


main();