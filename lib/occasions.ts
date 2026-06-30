export interface Occasion {
  name: string;
  slug: string;
  desc: string;
  image: string;
  bgColor: string;
  flowers: string[];
}

export const occasions: Occasion[] = [
  { name: 'Birthday', slug: 'birthday', desc: 'Make their special day unforgettable with a burst of color and joy.', image: '/1_card.png', bgColor: '#FFF0E6', flowers: ['Sunny Tulips', 'Pink Roses', 'Mixed Gerberas'] },
  { name: 'Wedding', slug: 'wedding', desc: 'Celebrate timeless love with elegant bridal bouquets and altar arrangements.', image: '/2_card.png', bgColor: '#FFF5F7', flowers: ['White Orchids', 'Blush Peonies', 'Calla Lilies'] },
  { name: 'Anniversary', slug: 'anniversary', desc: 'Cherish every moment together with luxurious and romantic blooms.', image: '/3_card.png', bgColor: '#FFF0F0', flowers: ['Red Roses', 'Lavender', 'Dusty Miller'] },
  { name: 'Sympathy', slug: 'sympathy', desc: 'Express your heartfelt condolences with peaceful, elegant arrangements.', image: '/4_card.png', bgColor: '#F0F0FF', flowers: ['White Lilies', 'Blue Hydrangeas', 'Baby Breath'] },
  { name: 'Thank You', slug: 'thank-you', desc: 'Show your gratitude with a cheerful bouquet that says it all.', image: '/5_card.png', bgColor: '#FFFBF0', flowers: ['Sunflowers', 'Yellow Roses', 'Alstroemeria'] },
  { name: 'Just Because', slug: 'just-because', desc: 'Surprise someone special with a sweet arrangement for no reason at all.', image: '/6_card.png', bgColor: '#F0FFF5', flowers: ['Rainbow Mix', 'Pink Carnations', 'Freesia'] },
];

export function getOccasionBySlug(slug: string): Occasion | undefined {
  return occasions.find(o => o.slug === slug);
}
