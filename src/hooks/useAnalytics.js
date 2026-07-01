import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = 'G-F76EXKMNZ7';

function loadGtag() {
  if (window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
}

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    loadGtag();
  }, []);

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag('event', 'page_view', {
      page_path: location.pathname,
      page_search: location.search,
    });
  }, [location]);
}
