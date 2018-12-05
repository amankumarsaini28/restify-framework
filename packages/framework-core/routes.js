/**
 * contains mapping for routes & controller functions
 * routes can contain nested routes to nth level
 * all the routes will be flattened out when supplied to the restify
 */
const { userController } = require('./packages');
const { HttpMethods } = require('./constants/http-methods');

const applicationRoutes = [
    {
        path: '/user/profile',
        method: HttpMethods.GET,
        controller: userController.fetchUserProfile,
        children: [
            {
                path: '/hello',
                method: HttpMethods.GET,
                controller: userController.fetchUserProfile
            }
        ]
    }
];

module.exports = {
    applicationRoutes
};
