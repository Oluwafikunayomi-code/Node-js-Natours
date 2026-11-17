const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignupForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.get('/my-tours', authController.protect, viewsController.getMyTours);
router.get(
  '/my-reviews',
  authController.protect,
  viewsController.getMyReviews
);
router.get(
  '/billing',
  authController.protect,
  viewsController.getBilling
);
router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);
router.get(
  '/admin',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminDashboard
);
router.get(
  '/admin/tours',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminTours
);
router.get(
  '/admin/users',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminUsers
);
router.get(
  '/admin/bookings',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminBookings
);
router.get(
  '/admin/reviews',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminReviews
);

module.exports = router;
