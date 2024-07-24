const hamburgerBtn = document.querySelector('header .icon');
const headerLinks = document.querySelector('header>nav>ul');
const mobileMenu = document.querySelector('.mobile-nav');
const alerts = document.querySelector('.alerts');
const alert_template = document.querySelector('#example_alert');

const GIST_LINK =
  'https://gist.githubusercontent.com/gal/562044476f86a1a20609ab86b321a8db/raw/';
const fetchEvents = async () => {
  const response = await fetch(GIST_LINK, {
    mode: 'cors',
    cache: 'no-cache',
  });

  const gistText = await response.text();

  let announcements = gistText.split('---\n');
  announcements = announcements.filter(
    (announcement) => announcement.trim() !== ''
  );

  console.log({ announcements });

  announcements.forEach((announcement) => {
    const newNode = alert_template.cloneNode(true);
    newNode.id = '';

    title = newNode.querySelector('.alert_title');
    desc = newNode.querySelector('.alert_desc');

    title.textContent = announcement.split('\n')[0];
    desc.textContent = announcement.split('\n').slice(1).join('\n');

    newNode.querySelector('.close_btn').addEventListener('click', function () {
      newNode.remove();
    });

    alerts.appendChild(newNode);
  });

  // const activeIssues = issues.filter((issue) => {
  //   return (
  //     issue.title.startsWith('!') &&
  //     issue.state == 'open' &&
  //     GITHUB_AUTHORS.includes(issue.user.login) // ensure the submitter can't be someone random
  //   );
  // });

  // activeIssues.forEach((issue) => {
  //   const newNode = alert_template.cloneNode(true);
  //   newNode.id = '';

  //   const title = newNode.querySelector('.alert_title');
  //   const desc = newNode.querySelector('.alert_desc');

  //   title.textContent = issue.title ? issue.title.slice(1) : '';
  //   desc.textContent = issue.body ? issue.body : '';
  //   // Add event listener to the close button
  //   newNode.querySelector('.close_btn').addEventListener('click', function () {
  //     newNode.remove();
  //   });

  //   alerts.appendChild(newNode);
  // });
};

/**
 * Toggle desktop / mobile view
 */
const fixWidths = () => {
  const width = window.innerWidth;

  if (width <= 900) {
    hamburgerBtn.style.display = 'inline-block';
    headerLinks.style.display = 'none';
  } else {
    hamburgerBtn.style.display = 'none';
    headerLinks.style.display = 'inline-block';
  }
};

const showVerticalMobileMenu = () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
};

const closeMobileMenu = () => {
  mobileMenu.style.display = 'none';
};

// Startup
window.addEventListener('resize', fixWidths);
fixWidths();

(async () => await fetchEvents())();

// await fetchEvents();
