// ============================================================================
// IEEE INNOVATEX 2026 - OFFICIAL ASSETS REPOSITORY
// ============================================================================
//
// Provided URLs from specification:
// 1. IEEE: https://kommodo.ai/i/EtJRryiEBiWtEZ0P6uI5
// 2. IEEE IAS: https://kommodo.ai/i/fZX7Oap2QzKzLWLJFr96
// 3. IEEE RAS: https://kommodo.ai/i/HMDQxvrIYT1iYhYlSRr5
// 4. Footer Asset: https://kommodo.ai/i/MrRh7jqDYuucqnLeiKzM
//
// Local bundled assets are provided below to guarantee high reliability,
// zero CORS failures, and instant rendering in production and offline environments.
// ============================================================================

import ieeeLogoImg from './ieee-logo.jpg';
import ieeeIasLogoImg from './ieee-ias-logo.png';
import ieeeIasLogoWhiteImg from './ieee-ias-logo-white.png';
import ieeeRasLogoImg from './ieee-ras-logo.jpg';
import footerAssetImg from './footer-asset.jpg';

export const ASSETS = {
  ieee: {
    src: ieeeLogoImg,
    alt: 'IEEE - Institute of Electrical and Electronics Engineers',
    title: 'IEEE',
    kommodoUrl: 'https://kommodo.ai/i/EtJRryiEBiWtEZ0P6uI5',
    directCdnUrl: 'https://plain-apac-prod-public.komododecks.com/202609/17/EtJRryiEBiWtEZ0P6uI5/image.jpg',
  },
  ias: {
    src: ieeeIasLogoWhiteImg, // White variant is optimized for the "Dark Technical Future" aesthetic
    srcDefault: ieeeIasLogoImg,
    alt: 'IEEE Industry Applications Society (IAS)',
    title: 'IEEE IAS',
    kommodoUrl: 'https://kommodo.ai/i/fZX7Oap2QzKzLWLJFr96',
    chapterName: 'IEEE IAS Chapter',
    institution: 'MITS Gwalior',
  },
  ras: {
    src: ieeeRasLogoImg,
    alt: 'IEEE Robotics and Automation Society (RAS)',
    title: 'IEEE RAS',
    kommodoUrl: 'https://kommodo.ai/i/HMDQxvrIYT1iYhYlSRr5',
    directCdnUrl: 'https://plain-apac-prod-public.komododecks.com/202609/17/HMDQxvrIYT1iYhYlSRr5/image.jpg',
    chapterName: 'IEEE RAS Chapter',
    institution: 'MITS Gwalior',
  },
  footer: {
    src: footerAssetImg,
    alt: 'IEEE InnovateX 2026 Official Footer Graphic',
    kommodoUrl: 'https://kommodo.ai/i/MrRh7jqDYuucqnLeiKzM',
    directCdnUrl: 'https://plain-apac-prod-public.komododecks.com/202609/17/MrRh7jqDYuucqnLeiKzM/image.jpg',
  },
};

export default ASSETS;
