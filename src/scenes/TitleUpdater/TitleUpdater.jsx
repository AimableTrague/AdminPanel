import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let title = 'MalosFlix';

    if (location.pathname === '/') {
      title = "Malos Core - Dashboard";
    } else if (location.pathname === '/team') {
      title = 'Manage Team';
    }  else if (location.pathname === '/contacts') {
        title = 'Contacts Info';
    }  else if (location.pathname === '/invoices') {
        title = 'INVOICE Balance';
    }  else if (location.pathname === '/form') {
      title = 'Contact Form';
    }
     else if (location.pathname === '/calendar') {
        title = 'Calendar';
    } else if (location.pathname === '/faq') {
        title = 'FAQ Page';
    } else if (location.pathname === '/pie') {
      title = 'PIE Chart';
    } else if (location.pathname === '/line') {
      title = 'LINE Chart';
    } else if (location.pathname === '/bar') {
      title = 'BAR Chart';
    } else if (location.pathname === '/geography') {
      title = 'Geographical Chart';
    } else {
        title = '404 Page Not Found'
    }


    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;