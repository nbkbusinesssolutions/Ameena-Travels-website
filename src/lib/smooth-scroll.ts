export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 80; // Approximate navbar height
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const handleAnchorNavigation = (path: string) => {
  // Check if we're on the home page
  if (window.location.pathname === '/') {
    // Handle anchor navigation on home page
    if (path.startsWith('/#')) {
      const elementId = path.replace('/#', '');
      smoothScrollTo(elementId);
    } else if (path.startsWith('#')) {
      const elementId = path.replace('#', '');
      smoothScrollTo(elementId);
    }
  } else {
    // Navigate to home page with hash
    window.location.href = path;
  }
};
