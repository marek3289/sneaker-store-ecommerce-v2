const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body);

        try {
            const { amount } = data;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'usd'
            });

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(paymentIntent.client_secret)
            }

        } catch (err) {
            return {
                statusCode: 500,
                headers,
                body: err.message.toString()
            }
        }

    } else {
        return {
            statusCode: 405,
            headers,
            body: 'Method Not Allowed'
          };
    }
}