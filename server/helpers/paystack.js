const Paystack = require('paystack-node');

const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY || 'sk_test_your_test_key', 'test');

module.exports = paystack;
