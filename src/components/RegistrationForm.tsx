'use client';

import { useEffect, useRef, useState } from 'react';

const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfFl7X-RcCc7MH0BfCjKOHVE5j5WuwEopFFfKCz4TszQhAV0w/viewform?embedded=true';

export function RegistrationForm() {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      // Older browsers retain an explicit way to load the embed.
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: '250px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={container} className="registration-embed">
    {!loaded && <div className="registration-loading" role="status">
      <p>{visible ? 'Loading the registration form…' : 'The registration form will load here.'}</p>
      <p>You can also use “Open the registration form” above.</p>
      {!visible && <button className="text-link" type="button" onClick={() => setVisible(true)}>Load form here</button>}
    </div>}
    {visible && <iframe title="MamaMeds December 29 outreach registration form" src={formUrl} className="registration-form" onLoad={() => setLoaded(true)} />}
  </div>;
}
