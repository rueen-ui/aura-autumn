'use client';

import { Scissors, Ruler, Leaf } from 'lucide-react';
import Image from 'next/image';

const pillars = [
  {
    id: 'craft',
    title: 'Craftsmanship',
    description:
      'Precision in every seam, detail, and finish. We believe in the value of skilled work and timeless construction.',
    Icon: Scissors,
  },
  {
    id: 'minimalism',
    title: 'Seasonal Minimalism',
    description:
      'Clean silhouettes and restrained design that evolve with the seasons. Less noise, more intention.',
    Icon: Ruler,
  },
  {
    id: 'sustainable',
    title: 'Sustainable Sourcing',
    description:
      'Thoughtful material choices and responsible partnerships. We aim to reduce impact without compromising quality.',
    Icon: Leaf,
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text-col">
          <h2 className="about-title">Our Philosophy</h2>
          <p className="about-intro">
            At AURA Autumn, we craft seasonal collections where thoughtful design meets enduring quality. 
            Our approach is rooted in three core principles that guide every decision.
          </p>

          <div className="pillars-grid">
            {pillars.map((p) => (
              <div key={p.id} className="pillar-card">
                <span className="pillar-icon">
                  <p.Icon size={28} />
                </span>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-description">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image-col">
          <div className="image-wrapper">
            <Image
              src="/images/2.png"
              alt="AURA Autumn atelier mood"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
