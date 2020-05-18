const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = async (event, context, callback) => {
    if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body);

        try {
            const { amount } = data;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'usd'
            });

            return {
                statusCode,
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


// exports.handler = async (req, res, callback) => {
//     try {
//         const amount = 1000

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: "usd"
//         });

//         return {
//             statusCode: 200,
//             body: paymentIntent.client_secret
//         }
//     } catch (err) {
//         return { statusCode: 500, body: err.toString() };
//     }
// }

// exports.handler = async (req, res) => {
//     if (req.method === 'POST') {
//         const { amount } = req.body;

//         try {
//             const paymentIntent = await stripe.paymentIntents.create({
//                 amount,
//                 currency: "usd"
//             });

//             res.status(200).json(paymentIntent)
//         } catch (err) {
//             res.status(500).json({ statusCode: 500, message: err.message })
//         }
//     } else {
//         res.setHeader('Allow', 'POST');
//         res.status(405).end('Method Not Allowed');
//     }
// }