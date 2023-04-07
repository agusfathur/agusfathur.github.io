
const navActive = () => {
  const link = window.location.href;
  const linkSplit = link.split('/');
  const linkName = linkSplit[linkSplit.length - 1].split('.')[0];
  let active = '';
  if (linkName === 'index' || linkName === '') {
    active = 'home';
  } else {
    active = link.split('/')[3].split('.')[0];
  }

  const navLink = document.querySelectorAll('.nav-link');
  navLink.forEach(e => {
    if (e.textContent.toLowerCase() === active) {
      e.classList.add('active');
    }
  })
};

navActive();

