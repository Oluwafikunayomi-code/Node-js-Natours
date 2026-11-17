import axios from 'axios';
import { showAlert } from './alerts';

export const createReview = async (tourId, review, rating) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `/api/v1/tours/${tourId}/reviews`,
      data: {
        review,
        rating
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Your review has been submitted!');
      window.setTimeout(() => window.location.reload(), 1500);
    }
  } catch (err) {
    const message =
      err.response && err.response.data && err.response.data.message;

    showAlert('error', message || 'Could not submit your review.');
  }
};