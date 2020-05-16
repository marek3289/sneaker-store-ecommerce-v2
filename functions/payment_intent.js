import Stripe from "stripe";
const stripe = new Stripe('sk_test_b6xLQUQk7iXnjxz5eIzq4Hbk00XvphFvQQ');

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