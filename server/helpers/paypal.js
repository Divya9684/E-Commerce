const paypal = require("paypal-rest-sdk");

// Configure PayPal with environment variables or hardcoded values for testing
paypal.configure({
  mode: process.env.PAYPAL_MODE || 'sandbox',  // 'sandbox' or 'live'
  client_id: process.env.PAYPAL_CLIENT_ID || 'your-client-id',  // Replace with actual client ID
  client_secret: process.env.PAYPAL_CLIENT_SECRET || 'your-client-secret',  // Replace with actual client secret
});

module.exports = paypal;
