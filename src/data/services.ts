export interface Service {
  slug: string;
  title: string;
  desc: string;
  image: string;
  gallery: string[];
}

export const services: Service[] = [
  {
    slug: 'screen-printing',
    title: 'Screen Printing',
    desc: 'High-quality prints with vibrant colors, perfect for tee shirts, hoodies, and more.',
    image: 'https://images.unsplash.com/photo-1558704164-ab7a0016c1f3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1602524814837-29b139f8194b?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1492724441997-5dc865305da8?auto=format&fit=crop&w=800&q=60'
    ],
  },
  {
    slug: 'embroidery',
    title: 'Embroidery',
    desc: 'Premium stitching for hats, polos, jackets, and uniforms that stand the test of time.',
    image: 'https://images.unsplash.com/photo-1657668282135-b620193e7801?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581291518835-1cfb0d126e6e?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1610396543376-7c473faee1c6?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1558611848-73f7eb4001e7?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1610395212598-774279b8e7da?auto=format&fit=crop&w=800&q=60'
    ],
  },
  {
    slug: 'digitizing-vectorizing',
    title: 'Digitizing & Vectorizing',
    desc: 'Convert artwork into clean, production-ready embroidery files or print-ready vectors.',
    image: 'https://images.unsplash.com/photo-1580894908361-0296b93b6ce1?auto=format&fit=crop&w=1200&q=60',
    gallery: [
      'https://images.unsplash.com/photo-1533575250569-dc1a7d4295a4?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1607083201299-72dc48393466?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1630494184114-06a55d3b6d2f?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800&q=60'
    ],
  },
]; 