import type { Metadata } from 'next';
import Image from 'next/image';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
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
        <section id="registration-form" aria-labelledby="registration-title" className="registration-details">
          <h1 id="registration-title">Register for your place</h1>
          <p>Filling this for a pregnant woman? Answer for her.<br />If na you dey help another woman fill am, answer for her.</p>
          <p>After you submit, a confirmation message will appear on the form.</p>
          <a className="primary-link" href="https://forms.gle/qDE5EjzjBcGNjPY68">Open the registration form</a>
        </section>
      </div>
      <section className="registration-kit" aria-labelledby="kit-title">
        <h2 id="kit-title">What you will receive</h2>
        <p>Each MamaMeds Essential Antenatal kit includes a 3 month supply of:</p>
        <ol>
          <li>Folic acid and vitamin B12</li>
          <li>Iron</li>
          <li>Calcium</li>
          <li>Vitamin C</li>
        </ol>
        <p className="small-note">This kit does not replace hospital care</p>
      </section>
      <section className="registration-share" aria-labelledby="share-title">
        <h2 id="share-title">Know a pregnant woman?</h2><p>Help her register, or share this outreach with her.</p>
        <a className="primary-link" href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}><SiWhatsapp size={20} aria-hidden="true" />Share on WhatsApp</a>
        <p className="registration-questions">Questions? <a href="mailto:kasite@mamamedsng.com">Email kasite@mamamedsng.com</a></p>
      </section>
    </main>
    <Footer website={website} />
  </>;
}
