import type { Metadata } from 'next';
import Image from 'next/image';
import { CalendarDays, MapPin, Mail } from 'lucide-react';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import { RegistrationForm } from '@/components/RegistrationForm';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PreviewBar } from '@/components/layout/PreviewBar';
import { getWebsite } from '@/lib/cms/read';
import { site } from '@/lib/site';

const title = 'Register for free antenatal medicine | MamaMeds | 29 December 2026';
const description = 'Register for free antenatal medicine on 29 December 2026 at 9am, St Nicholas Hospital, Surulere, Lagos. Only 250 places.';
const flyer = '/images/december-2026-outreach.webp';
const flyerAlt = 'MamaMeds free antenatal medicine outreach, 29 December 2026, St Nicholas Hospital, Surulere.';
const shareText = 'Free antenatal medicine for pregnant women, 29 December, St Nicholas Hospital Surulere. Register here: mamamedsng.com/register';

export const metadata: Metadata = {
  title, description, alternates: { canonical: '/register' },
  openGraph: { type: 'website', title, description, url: `${site.url}/register`, images: [{ url: flyer, width: 1024, height: 1280, alt: flyerAlt }] },
  twitter: { card: 'summary_large_image', title, description, images: [flyer] },
};

export default async function RegisterPage() {
  const { website, preview } = await getWebsite();
  return <>
    {preview && <PreviewBar />}
    <Header website={website} registrationPage />
    <main id="main-content" tabIndex={-1} className="registration-page page-container">
      <div className="registration-intro">
        <Image src={flyer} alt={flyerAlt} width={1024} height={1280} sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 100vw" preload className="registration-flyer" />
        <section aria-labelledby="registration-title" className="registration-details">
          <p className="eyebrow">December outreach · Lagos</p>
          <h1 id="registration-title">Free antenatal medicine for pregnant women</h1>
          <p className="registration-lead">Three months of antenatal medicine, at no cost to you.</p>
          <div className="event-detail"><CalendarDays aria-hidden="true" size={22} /><p><strong>Tuesday, 29 December 2026</strong><br />9:00am (Lagos time)</p></div>
          <div className="event-detail"><MapPin aria-hidden="true" size={22} /><p><strong>St Nicholas Hospital</strong><br />1 James Robertson Road, Surulere, Lagos<br /><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=St%20Nicholas%20Hospital%2C%201%20James%20Robertson%20Road%2C%20Surulere%2C%20Lagos">View on Google Maps</a></p></div>
          <p className="availability-note">Only 250 places. Register early.</p>
          <a className="primary-link" href="#registration-form">Register for the outreach</a>
        </section>
      </div>
      <section className="registration-kit" aria-labelledby="kit-title">
        <h2 id="kit-title">What you will receive</h2>
        <p>The MamaMeds Essential Antenatal Kit, free, with 3 months of:</p>
        <ul>
          <li><strong>Folic acid and vitamin B12:</strong> helps your baby grow well</li>
          <li><strong>Iron:</strong> helps prevent weakness and tiredness</li>
          <li><strong>Calcium:</strong> helps keep your bones and blood pressure healthy</li>
          <li><strong>Vitamin C:</strong> helps your body fight sickness</li>
        </ul>
        <p><strong>How to take them:</strong> once every day, or as your health worker advises, with food and clean water.</p>
        <p>You will also receive information on how to stay safe during and after delivery.</p>
        <p><strong>Please bring your antenatal card if you have one.</strong></p>
        <p className="small-note">This kit does not replace hospital care. Please keep attending antenatal clinic visits.</p>
      </section>
      <section id="registration-form" className="registration-form-section" aria-labelledby="form-title">
        <h2 id="form-title">Register for your place</h2>
        <p>Filling this for a pregnant woman? Answer for her.<br />If na you dey help another woman fill am, answer for her.</p>
        <p>After you submit, a confirmation message will appear on the form.</p>
        <p className="small-note">Prefer to open the form directly? Use the button below.</p>
        <a className="primary-link" href="https://forms.gle/qDE5EjzjBcGNjPY68">Open the registration form</a>
        <RegistrationForm />
      </section>
      <section className="registration-share" aria-labelledby="share-title">
        <h2 id="share-title">Know a pregnant woman?</h2><p>Help her register, or share this outreach with her.</p>
        <a className="primary-link" href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}><SiWhatsapp size={20} aria-hidden="true" />Share on WhatsApp</a>
        <p className="registration-questions"><Mail size={18} aria-hidden="true" />Questions? <a href="mailto:kasite@mamamedsng.com">Email kasite@mamamedsng.com</a></p>
      </section>
    </main>
    <Footer website={website} />
  </>;
}
