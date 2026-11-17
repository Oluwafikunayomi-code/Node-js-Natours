import axios from 'axios';
import { showAlert } from './alerts';

const deleteButtons = document.querySelectorAll('.btn--delete-tour');

if (deleteButtons) {
  deleteButtons.forEach(button => {
    button.addEventListener('click', async e => {
      const tourId = e.target.dataset.tourId;

      if (!confirm('Are you sure you want to delete this tour?')) return;

      try {
        await axios({
          method: 'DELETE',
          url: `/api/v1/tours/${tourId}`
        });

        showAlert('success', 'Tour deleted successfully!');

        e.target.closest('.admin-tour').remove();
      } catch (err) {
  showAlert(
    'error',
    (err.response &&
      err.response.data &&
      err.response.data.message) ||
      'Could not delete this tour.'
  );
}
    });
  });
}