export interface Product {
  id: number;
  name: string;
  category: string;
  tab: string;
  price: string;
  tag?: string;
  desc: string;
  occasion?: string;
}

export const products: Product[] = [
  { id: 0,  name: 'Blushing Romance', category: 'Roses & Peonies',     tab: 'Roses',    price: 'PKR 2,500', tag: 'Best Seller',     desc: 'Pastel pink garden roses, blush peonies, and silver dollar eucalyptus.',          occasion: 'birthday'      },
  { id: 1,  name: 'Midnight Velvet',  category: 'Orchids & Lilies',    tab: 'Orchids',  price: 'PKR 3,500', tag: 'Limited Edition', desc: 'Mystical calla lilies, deep purple orchids, and dramatic dark dahlias.',          occasion: 'birthday'      },
  { id: 2,  name: 'Spring Serenade',  category: 'Tulips & Hydrangeas', tab: 'Tulips',   price: 'PKR 2,800', tag: 'Seasonal',        desc: 'Fresh tulips, blue hydrangeas, and fragrant white freesias.',                    occasion: 'birthday'      },
  { id: 3,  name: 'Golden Hour',      category: 'Roses & Sunflowers',  tab: 'Roses',    price: 'PKR 2,200', tag: 'Popular',         desc: 'Warm golden roses, sunflowers, and rustic dried pampas grass.',                  occasion: 'birthday'      },
  { id: 4,  name: 'Snow White',       category: 'Lilies & Orchids',    tab: 'Lilies',   price: 'PKR 3,200', tag: 'Premium',         desc: 'Pure white oriental lilies, phalaenopsis orchids, and eucalyptus.',              occasion: 'wedding'       },
  { id: 5,  name: 'Crimson Tide',     category: 'Roses & Carnations',  tab: 'Roses',    price: 'PKR 1,900', tag: 'Romantic',        desc: 'Deep red roses, burgundy carnations, and black-eyed susans.',                   occasion: 'anniversary'   },
  { id: 6,  name: 'Sunny Delight',    category: 'Tulips & Daisies',    tab: 'Tulips',   price: 'PKR 1,600', tag: 'Budget Friendly', desc: 'Bright yellow tulips, white daisies, and green button poms.',                   occasion: 'thank-you'     },
  { id: 7,  name: 'Purple Reign',     category: 'Orchids & Irises',    tab: 'Orchids',  price: 'PKR 4,500', tag: 'Luxury',          desc: 'Rare purple orchids, Dutch irises, and velvet ribbon accents.',                  occasion: 'anniversary'   },
  { id: 8,  name: 'Garden Party',     category: 'Mixed Bouquet',       tab: 'Roses',    price: 'PKR 2,800', tag: 'Best Seller',     desc: 'A curated mix of seasonal blooms in a hand-tied garden style.',                 occasion: 'just-because'  },
  { id: 9,  name: 'Lavender Dreams',  category: 'Bouquet',             tab: 'Lilies',   price: 'PKR 2,200', tag: 'New Arrival',     desc: 'Calming lavender stems paired with soft white asters and silvery eucalyptus.', occasion: 'sympathy'      },
  { id: 10, name: 'Sunflower Bliss',  category: 'Arrangement',         tab: 'Seasonal', price: 'PKR 2,500', tag: 'Best Seller',     desc: 'Bold sunflowers with rustic dried grasses in a warm ceramic vase.',             occasion: 'thank-you'     },
  { id: 11, name: 'White Lily Grace', category: 'Bouquet',             tab: 'Lilies',   price: 'PKR 3,500', tag: 'Premium',         desc: 'Elegant white Oriental lilies with fragrant freesia and fern fronds.',          occasion: 'wedding'       },
  { id: 12, name: 'Peony Paradise',   category: 'Arrangement',         tab: 'Peonies',  price: 'PKR 4,200', tag: 'Limited Edition', desc: 'Lush blush peonies with trailing ivy in a hand-thrown pottery vessel.',         occasion: 'wedding'       },
  { id: 13, name: 'Daisy Fresh',      category: 'Bouquet',             tab: 'Seasonal', price: 'PKR 1,500', tag: 'Fresh Pick',      desc: 'Cheerful white daisies with bright yellow solidaster in kraft paper wrap.',     occasion: 'thank-you'     },
  { id: 14, name: 'Cherry Blossom',   category: 'Seasonal',            tab: 'Seasonal', price: 'PKR 4,500', tag: 'Seasonal',        desc: 'Delicate cherry blossom branches with moss and Japanese ranunculus.',            occasion: 'wedding'       },
  { id: 15, name: 'Tulip Garden',     category: 'Bouquet',             tab: 'Tulips',   price: 'PKR 2,800', tag: 'Popular',         desc: 'A rainbow of Dutch tulips wrapped in tissue with a personalized note.',          occasion: 'just-because'  },
];

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  const sameTab = products.filter(p => p.id !== product.id && p.tab === product.tab);
  if (sameTab.length >= count) return sameTab.slice(0, count);
  const others = products.filter(p => p.id !== product.id && p.tab !== product.tab);
  return [...sameTab, ...others].slice(0, count);
}

export function getProductImage(id: number): string {
  if (id === 0) return '/bouquet.png';
  return `/bouquet${id + 1}.png`;
}

export function getProductBackground(id: number): string {
  const backgrounds: Record<number, string> = {
    0:  'linear-gradient(135deg, #FFE4EE 0%, #FFC8DD 100%)',
    1:  'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)',
    2:  'linear-gradient(135deg, #E8F4F8 0%, #D4EAF7 100%)',
    3:  'linear-gradient(135deg, #FFF0F0 0%, #FFE4E4 100%)',
    4:  'linear-gradient(135deg, #E8F5E9 0%, #D4EDDA 100%)',
    5:  'linear-gradient(135deg, #FFE4E8 0%, #FECDD3 100%)',
    6:  'linear-gradient(135deg, #FFF8E7 0%, #FFF0C8 100%)',
    7:  'linear-gradient(135deg, #F0FFF4 0%, #DCFCE7 100%)',
    8:  'linear-gradient(135deg, #FFF5F8 0%, #FFE8EF 100%)',
    9:  'linear-gradient(135deg, #FFFBEB 0%, #FEF9C3 100%)',
    10: 'linear-gradient(135deg, #F0FFF4 0%, #DCFCE7 100%)',
    11: 'linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%)',
    12: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)',
    13: 'linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)',
    14: 'linear-gradient(135deg, #FDF4FF 0%, #FAE8FF 100%)',
    15: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
  };
  return backgrounds[id] || backgrounds[0];
}

export function parsePrice(price: string): number {
  return parseInt(price.replace(/PKR\s*|,/g, ''), 10);
}
