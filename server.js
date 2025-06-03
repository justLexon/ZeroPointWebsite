require('dotenv').config();

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Zero Point Tee',
          },
          unit_amount: 2500, // $25.00 in cents
        },
        quantity: 1,
      },
    ],
    success_url: 'http://localhost:4242/success.html',
    cancel_url: 'http://localhost:4242/',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Server running on http://localhost:4242'));
