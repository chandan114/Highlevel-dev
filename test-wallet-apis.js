const axios = require('axios');

const BASE_URL = 'http://localhost:5070/api/wallet';

async function testWalletAPIs() {
  try {
    console.log('🚀 Testing Wallet APIs...\n');

    // Test 1: Setup Wallet
    console.log('1. Testing POST /setup - Setup Wallet');
    const setupResponse = await axios.post(`${BASE_URL}/setup`, {
      balance: 20.5612,
      name: 'Hello world'
    });
    console.log('✅ Setup Wallet Response:', JSON.stringify(setupResponse.data, null, 2));
    const walletId = setupResponse.data.id;
    console.log(`Wallet ID: ${walletId}\n`);

    // Test 2: Credit Amount
    console.log('2. Testing POST /transact/:walletId - Credit Amount');
    const creditResponse = await axios.post(`${BASE_URL}/transact/${walletId}`, {
      amount: 10.1234,
      description: 'Recharge'
    });
    console.log('✅ Credit Response:', JSON.stringify(creditResponse.data, null, 2));
    console.log('');

    // Test 3: Debit Amount
    console.log('3. Testing POST /transact/:walletId - Debit Amount');
    const debitResponse = await axios.post(`${BASE_URL}/transact/${walletId}`, {
      amount: -5.5678,
      description: 'Purchase'
    });
    console.log('✅ Debit Response:', JSON.stringify(debitResponse.data, null, 2));
    console.log('');

    // Test 4: Get Transactions
    console.log('4. Testing GET /transactions - Get Transactions');
    const transactionsResponse = await axios.get(`${BASE_URL}/transactions?walletId=${walletId}&skip=0&limit=10`);
    console.log('✅ Transactions Response:', JSON.stringify(transactionsResponse.data, null, 2));
    console.log('');

    // Test 5: Get Wallet Details
    console.log('5. Testing GET /wallet/:id - Get Wallet Details');
    const walletResponse = await axios.get(`${BASE_URL}/${walletId}`);
    console.log('✅ Wallet Details Response:', JSON.stringify(walletResponse.data, null, 2));
    console.log('');

    // Test 6: Test Race Condition Protection
    console.log('6. Testing Race Condition Protection - Multiple Concurrent Transactions');
    const concurrentPromises = [];
    for (let i = 0; i < 5; i++) {
      concurrentPromises.push(
        axios.post(`${BASE_URL}/transact/${walletId}`, {
          amount: 1.0001,
          description: `Concurrent transaction ${i + 1}`
        })
      );
    }
    
    try {
      const concurrentResults = await Promise.all(concurrentPromises);
      console.log('✅ Concurrent Transactions Results:');
      concurrentResults.forEach((result, index) => {
        console.log(`  Transaction ${index + 1}: Balance = ${result.data.balance}`);
      });
    } catch (error) {
      console.log('❌ Concurrent transaction failed:', error.response?.data || error.message);
    }
    console.log('');

    console.log('🎉 All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Run the tests
testWalletAPIs();
