const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (req, res, callback) => {
    return { req, res, callback }
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