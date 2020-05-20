module.exports = {
    title: 'Sneaker Store',
    shortTitle: 'SneakerStore',
    description: 'E-Commerce sneakers app created using Gatsby and Stripe',
    author: 'marek3289',
    
    currency: 'USD',

    routes: {
        home: '/',
        success: '/success',
        notFound: '/404'
    },
    socialMedia: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/'
          },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/'
        }
    ],
    colors: {
        gray200: 'hsl(0, 0%, 96%)',
        gray100: 'hsl(300, 4%, 92%)'
    }
}
