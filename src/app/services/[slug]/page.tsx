import { services } from '../../../data/services';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export default function ServiceGallery({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-brand mb-10 text-center">
        {service.title} Gallery
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {service.gallery.map((src, i) => (
          <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-card">
            <Image src={src} alt={`${service.title} sample ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
} 