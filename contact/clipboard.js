const notification = document.querySelector('.notification');

const emailAddress = 'thomas.daniel.galligan@ibm.com';

const shareEmail = () => {
  try {
    navigator.share(emailAddress);
  } catch (e) {
    navigator.clipboard.writeText(emailAddress);
    notification.style.display = 'flex';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000);
  }
};
