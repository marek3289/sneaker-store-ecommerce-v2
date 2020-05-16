import Stripe from "stripe";
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (req, res) => {
    try {
        // const { amount } = req.body;
        const amount = 1000;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd"
        });

        return {
            statusCode: 200,
            body: paymentIntent.client_secret
        }
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
}