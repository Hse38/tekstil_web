export type LocaleKey = 'en' | 'tr';

export type LocalizedString = Record<LocaleKey, string>;

export type Product = {
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  fabricType: LocalizedString;
  usageAreas: Record<LocaleKey, string[]>;
  productionOptions: Record<LocaleKey, string[]>;
  customization: LocalizedString;
  images: string[];
};

export const products: Product[] = [
  {
    slug: 'premium-cotton-poplin',
    title: {
      en: 'Premium Cotton Poplin',
      tr: 'Premium Pamuk Poplin'
    },
    shortDescription: {
      en: 'Crisp, breathable poplin with refined structure for elevated apparel.',
      tr: 'Seçkin giyim için tok duruşlu, nefes alan poplin.'
    },
    description: {
      en: 'Our premium cotton poplin offers a smooth hand-feel, crisp drape, and exceptional performance for shirting and contemporary apparel lines.',
      tr: 'Premium pamuk poplinimiz, yumuşak dokunuşu, tok dökümü ve gömleklik ile modern giyim koleksiyonlarında üstün performansıyla öne çıkar.'
    },
    fabricType: {
      en: '100% long-staple cotton, 110–130 gsm',
      tr: '%100 uzun elyaf pamuk, 110–130 gsm'
    },
    usageAreas: {
      en: ['Shirting', 'Lightweight uniforms', 'Resort wear'],
      tr: ['Gömleklik', 'Hafif üniforma', 'Resort giyim']
    },
    productionOptions: {
      en: ['Piece-dyed', 'Yarn-dyed', 'Digital print'],
      tr: ['Parça boya', 'İplik boya', 'Dijital baskı']
    },
    customization: {
      en: 'Finish, color, and weave customization available.',
      tr: 'Apre, renk ve örgü özelleştirme sunulur.'
    },
    images: [
      '/images/products/poplin-1.svg',
      '/images/products/poplin-2.svg',
      '/images/products/poplin-3.svg'
    ]
  },
  {
    slug: 'luxury-linen-blend',
    title: {
      en: 'Luxury Linen Blend',
      tr: 'Lüks Keten Karışım'
    },
    shortDescription: {
      en: 'Elegant linen blend with a premium texture and relaxed drape.',
      tr: 'Premium doku ve rahat döküm sunan zarif keten karışımı.'
    },
    description: {
      en: 'A balanced linen blend engineered for premium resort and casualwear collections with excellent breathability and tactile depth.',
      tr: 'Üst düzey resort ve casual koleksiyonlar için nefes alabilirlik ve dokunsal zenginlik sunan dengeli keten karışımı.'
    },
    fabricType: {
      en: 'Linen / viscose blend, 140–160 gsm',
      tr: 'Keten / viskon karışımı, 140–160 gsm'
    },
    usageAreas: {
      en: ['Resort wear', 'Dresses', 'Premium separates'],
      tr: ['Resort giyim', 'Elbise', 'Premium parçalar']
    },
    productionOptions: {
      en: ['Garment wash', 'Softener finish', 'Piece-dyed'],
      tr: ['Giysi yıkama', 'Yumuşatıcı apre', 'Parça boya']
    },
    customization: {
      en: 'We can tailor yarn blends and finishes.',
      tr: 'İplik karışımı ve apre seçenekleri özelleştirilebilir.'
    },
    images: [
      '/images/products/linen-1.svg',
      '/images/products/linen-2.svg',
      '/images/products/linen-3.svg'
    ]
  },
  {
    slug: 'performance-stretch-knit',
    title: {
      en: 'Performance Stretch Knit',
      tr: 'Performans Esneme Örme'
    },
    shortDescription: {
      en: 'Four-way stretch knit for dynamic movement and comfort.',
      tr: 'Hareket özgürlüğü ve konfor için dört yöne esneme.'
    },
    description: {
      en: 'Technical knit with enhanced recovery and moisture management, designed for performance-driven apparel programs.',
      tr: 'Yüksek geri kazanım ve nem yönetimi sağlayan teknik örme, performans odaklı koleksiyonlar için geliştirildi.'
    },
    fabricType: {
      en: 'Polyamide / elastane, 180–220 gsm',
      tr: 'Poliamid / elastan, 180–220 gsm'
    },
    usageAreas: {
      en: ['Activewear', 'Travel apparel', 'Uniforms'],
      tr: ['Spor giyim', 'Seyahat giyim', 'Üniformalar']
    },
    productionOptions: {
      en: ['Anti-odor finish', 'Brushed interior', 'UV protection'],
      tr: ['Koku önleyici apre', 'Şardonlu iç yüz', 'UV koruma']
    },
    customization: {
      en: 'Available in multiple gauges and compression levels.',
      tr: 'Farklı kalınlık ve kompresyon seviyelerinde üretilebilir.'
    },
    images: [
      '/images/products/knit-1.svg',
      '/images/products/knit-2.svg',
      '/images/products/knit-3.svg'
    ]
  },
  {
    slug: 'organic-terry',
    title: {
      en: 'Organic Cotton Terry',
      tr: 'Organik Pamuk Havlu'
    },
    shortDescription: {
      en: 'Soft terry fabric for premium loungewear and spa textiles.',
      tr: 'Premium ev ve spa tekstilleri için yumuşak havlu kumaş.'
    },
    description: {
      en: 'High-absorbency organic terry with plush loops and a refined finish for comfort-driven collections.',
      tr: 'Yüksek emiciliğe sahip organik havlu, yumuşak ilmekleri ve rafine dokusuyla konfor odaklı koleksiyonlar için ideal.'
    },
    fabricType: {
      en: 'Organic cotton, 240–320 gsm',
      tr: 'Organik pamuk, 240–320 gsm'
    },
    usageAreas: {
      en: ['Loungewear', 'Hotel textiles', 'Spa & wellness'],
      tr: ['Ev giyimi', 'Otel tekstilleri', 'Spa & wellness']
    },
    productionOptions: {
      en: ['Reactive dye', 'Softener finish', 'Jacquard'],
      tr: ['Reaktif boya', 'Yumuşatıcı apre', 'Jakarlı']
    },
    customization: {
      en: 'Loop height and pile density can be customized.',
      tr: 'İlmek yüksekliği ve hav yoğunluğu özelleştirilebilir.'
    },
    images: [
      '/images/products/terry-1.svg',
      '/images/products/terry-2.svg',
      '/images/products/terry-3.svg'
    ]
  },
  {
    slug: 'technical-shell',
    title: {
      en: 'Technical Softshell',
      tr: 'Teknik Softshell'
    },
    shortDescription: {
      en: 'Durable softshell with weather protection and structure.',
      tr: 'Hava korumalı, dayanıklı ve formu güçlü softshell.'
    },
    description: {
      en: 'A multi-layer softshell engineered for durability and outdoor applications, balancing protection with comfort.',
      tr: 'Dayanıklılık ve outdoor kullanımlar için geliştirilen çok katmanlı softshell; koruma ve konforu dengeler.'
    },
    fabricType: {
      en: 'Polyester with membrane, 250–300 gsm',
      tr: 'Membranlı polyester, 250–300 gsm'
    },
    usageAreas: {
      en: ['Outerwear', 'Corporate uniforms', 'Outdoor gear'],
      tr: ['Dış giyim', 'Kurumsal üniformalar', 'Outdoor ekipman']
    },
    productionOptions: {
      en: ['Water-repellent', 'Windproof', 'Bonded fleece'],
      tr: ['Su itici', 'Rüzgar geçirmez', 'Lamine polar']
    },
    customization: {
      en: 'Membrane specs and finishes tailored to project needs.',
      tr: 'Membran özellikleri ve apreler projeye göre uyarlanır.'
    },
    images: [
      '/images/products/shell-1.svg',
      '/images/products/shell-2.svg',
      '/images/products/shell-3.svg'
    ]
  },
  {
    slug: 'sustainable-denim',
    title: {
      en: 'Sustainable Denim',
      tr: 'Sürdürülebilir Denim'
    },
    shortDescription: {
      en: 'Low-impact denim with modern washes and premium hand-feel.',
      tr: 'Modern yıkamalar ve premium dokunuş sunan düşük etkili denim.'
    },
    description: {
      en: 'Sustainable denim crafted with reduced water usage and certified fibers for responsible denim programs.',
      tr: 'Azaltılmış su kullanımı ve sertifikalı elyaflarla üretilen sürdürülebilir denim.'
    },
    fabricType: {
      en: 'Cotton / recycled cotton, 10–12 oz',
      tr: 'Pamuk / geri dönüştürülmüş pamuk, 10–12 oz'
    },
    usageAreas: {
      en: ['Denimwear', 'Workwear', 'Fashion staples'],
      tr: ['Denim giyim', 'İş kıyafeti', 'Moda temel ürünler']
    },
    productionOptions: {
      en: ['Laser finish', 'Ozone wash', 'Eco pigment'],
      tr: ['Lazer finish', 'Ozon yıkama', 'Eko pigment']
    },
    customization: {
      en: 'Custom weights, washes, and stretch options available.',
      tr: 'Özel gramaj, yıkama ve esneme seçenekleri sunulur.'
    },
    images: [
      '/images/products/denim-1.svg',
      '/images/products/denim-2.svg',
      '/images/products/denim-3.svg'
    ]
  },
  {
    slug: 'microfiber-sateen',
    title: {
      en: 'Microfiber Sateen',
      tr: 'Mikrofiber Saten'
    },
    shortDescription: {
      en: 'Silky surface with premium luster for refined collections.',
      tr: 'Rafine koleksiyonlar için ipeksi yüzey ve premium parlaklık.'
    },
    description: {
      en: 'A smooth microfiber sateen developed for elevated uniforms and hospitality textiles with a clean, luminous finish.',
      tr: 'Üst segment üniformalar ve otel tekstilleri için temiz ve parlak bitişe sahip mikrofiber saten.'
    },
    fabricType: {
      en: 'Polyester microfiber, 120–150 gsm',
      tr: 'Polyester mikrofiber, 120–150 gsm'
    },
    usageAreas: {
      en: ['Hospitality textiles', 'Uniforms', 'Soft furnishings'],
      tr: ['Otel tekstilleri', 'Üniforma', 'Ev tekstili']
    },
    productionOptions: {
      en: ['Piece-dyed', 'Stain-resistant finish', 'Anti-static'],
      tr: ['Parça boya', 'Leke tutmaz apre', 'Anti-statik']
    },
    customization: {
      en: 'Custom sheen levels and softeners available.',
      tr: 'Parlaklık ve yumuşaklık seviyeleri özelleştirilebilir.'
    },
    images: [
      '/images/products/poplin-1.svg',
      '/images/products/poplin-2.svg',
      '/images/products/poplin-3.svg'
    ]
  },
  {
    slug: 'recycled-poly-twill',
    title: {
      en: 'Recycled Poly Twill',
      tr: 'Geri Dönüşümlü Polyester Dimi'
    },
    shortDescription: {
      en: 'Structured twill with recycled content and crisp drape.',
      tr: 'Geri dönüştürülmüş içerikli tok duruşlu dimi.'
    },
    description: {
      en: 'A durable recycled polyester twill engineered for corporate apparel and workwear programs.',
      tr: 'Kurumsal giyim ve iş kıyafetleri için dayanıklı geri dönüştürülmüş polyester dimi.'
    },
    fabricType: {
      en: 'Recycled polyester, 200–240 gsm',
      tr: 'Geri dönüştürülmüş polyester, 200–240 gsm'
    },
    usageAreas: {
      en: ['Workwear', 'Corporate uniforms', 'Outer shirts'],
      tr: ['İş kıyafeti', 'Kurumsal üniforma', 'Üst giyim']
    },
    productionOptions: {
      en: ['Teflon finish', 'Piece-dyed', 'Wrinkle-resistant'],
      tr: ['Teflon apre', 'Parça boya', 'Kırışmaz']
    },
    customization: {
      en: 'We can customize weight and twill angles.',
      tr: 'Gramaj ve dimi açıları özelleştirilebilir.'
    },
    images: [
      '/images/products/shell-1.svg',
      '/images/products/shell-2.svg',
      '/images/products/shell-3.svg'
    ]
  },
  {
    slug: 'breathable-mesh',
    title: {
      en: 'Breathable Mesh',
      tr: 'Nefes Alan Mesh'
    },
    shortDescription: {
      en: 'Lightweight mesh engineered for airflow and comfort.',
      tr: 'Hava geçirgenliği ve konfor için hafif mesh.'
    },
    description: {
      en: 'Performance mesh designed for ventilation zones in activewear and corporate sports uniforms.',
      tr: 'Spor giyim ve kurumsal spor üniformalarında havalandırma bölgeleri için performans mesh.'
    },
    fabricType: {
      en: 'Polyester mesh, 120–160 gsm',
      tr: 'Polyester mesh, 120–160 gsm'
    },
    usageAreas: {
      en: ['Activewear', 'Sports uniforms', 'Technical panels'],
      tr: ['Spor giyim', 'Spor üniforma', 'Teknik paneller']
    },
    productionOptions: {
      en: ['Moisture-wicking', 'Anti-odor', 'Colorfast dyeing'],
      tr: ['Nem yönetimi', 'Koku önleyici', 'Renk haslığı']
    },
    customization: {
      en: 'Mesh density and openness can be tailored.',
      tr: 'Mesh yoğunluğu ve açıklığı ayarlanabilir.'
    },
    images: [
      '/images/products/knit-1.svg',
      '/images/products/knit-2.svg',
      '/images/products/knit-3.svg'
    ]
  },
  {
    slug: 'wool-blend-suiting',
    title: {
      en: 'Wool Blend Suiting',
      tr: 'Yün Karışımlı Takımlık'
    },
    shortDescription: {
      en: 'Elegant suiting fabric with refined drape and depth.',
      tr: 'Zarif döküm ve derinliğe sahip takımlık kumaş.'
    },
    description: {
      en: 'Premium wool blend developed for executive suiting and tailored corporate uniforms.',
      tr: 'Yönetici takımları ve özel dikim kurumsal üniformalar için premium yün karışımı.'
    },
    fabricType: {
      en: 'Wool / polyester blend, 210–260 gsm',
      tr: 'Yün / polyester karışımı, 210–260 gsm'
    },
    usageAreas: {
      en: ['Suiting', 'Blazers', 'Tailored uniforms'],
      tr: ['Takımlık', 'Ceket', 'Özel dikim üniforma']
    },
    productionOptions: {
      en: ['Super finish', 'Wrinkle-resistant', 'Yarn-dyed'],
      tr: ['Super finish', 'Kırışmaz', 'İplik boya']
    },
    customization: {
      en: 'Custom weave patterns and weights available.',
      tr: 'Özel örgü desenleri ve gramaj seçenekleri sunulur.'
    },
    images: [
      '/images/products/linen-1.svg',
      '/images/products/linen-2.svg',
      '/images/products/linen-3.svg'
    ]
  },
  {
    slug: 'flame-retardant-canvas',
    title: {
      en: 'Flame Retardant Canvas',
      tr: 'Alev Geciktirici Kanvas'
    },
    shortDescription: {
      en: 'Protective canvas built for safety-focused applications.',
      tr: 'Güvenlik odaklı uygulamalar için koruyucu kanvas.'
    },
    description: {
      en: 'Heavy-duty FR canvas engineered for industrial uniforms and protective workwear programs.',
      tr: 'Endüstriyel üniformalar ve koruyucu iş kıyafetleri için geliştirilmiş ağır hizmet FR kanvas.'
    },
    fabricType: {
      en: 'Cotton / modacrylic blend, 280–320 gsm',
      tr: 'Pamuk / modakrilik karışımı, 280–320 gsm'
    },
    usageAreas: {
      en: ['Industrial workwear', 'Protective uniforms', 'Safety gear'],
      tr: ['Endüstriyel iş kıyafeti', 'Koruyucu üniforma', 'Güvenlik ekipmanı']
    },
    productionOptions: {
      en: ['FR treatment', 'Antistatic', 'Heavy wash'],
      tr: ['FR işlem', 'Antistatik', 'Ağır yıkama']
    },
    customization: {
      en: 'Compliance specs tailored to standards.',
      tr: 'Standartlara göre uyumlu spesifikasyonlar sunulur.'
    },
    images: [
      '/images/products/denim-1.svg',
      '/images/products/denim-2.svg',
      '/images/products/denim-3.svg'
    ]
  },
  {
    slug: 'water-repellent-taffeta',
    title: {
      en: 'Water-Repellent Taffeta',
      tr: 'Su İtici Tafta'
    },
    shortDescription: {
      en: 'Lightweight taffeta with protective finish.',
      tr: 'Koruyucu apreli hafif tafta.'
    },
    description: {
      en: 'Technical taffeta engineered for lightweight outerwear and lining programs with water-repellent performance.',
      tr: 'Hafif dış giyim ve astar programları için su itici performans sunan teknik tafta.'
    },
    fabricType: {
      en: 'Polyester taffeta, 70–90 gsm',
      tr: 'Polyester tafta, 70–90 gsm'
    },
    usageAreas: {
      en: ['Outerwear', 'Lining', 'Packable jackets'],
      tr: ['Dış giyim', 'Astar', 'Paketlenebilir ceketler']
    },
    productionOptions: {
      en: ['Water-repellent', 'Anti-static', 'Light calendaring'],
      tr: ['Su itici', 'Anti-statik', 'Hafif kalender']
    },
    customization: {
      en: 'Color and finish matched to brand palettes.',
      tr: 'Renk ve apreler marka paletlerine göre eşleştirilir.'
    },
    images: [
      '/images/products/shell-1.svg',
      '/images/products/shell-2.svg',
      '/images/products/shell-3.svg'
    ]
  },
  {
    slug: 'brushed-flannel',
    title: {
      en: 'Brushed Flannel',
      tr: 'Şardonlu Flanel'
    },
    shortDescription: {
      en: 'Warm, soft flannel with rich surface texture.',
      tr: 'Sıcak ve yumuşak, zengin dokulu flanel.'
    },
    description: {
      en: 'A premium brushed flannel for cozy shirting and layered apparel programs.',
      tr: 'Konforlu gömleklik ve katmanlı giyim için premium şardonlu flanel.'
    },
    fabricType: {
      en: 'Cotton / recycled cotton, 170–210 gsm',
      tr: 'Pamuk / geri dönüştürülmüş pamuk, 170–210 gsm'
    },
    usageAreas: {
      en: ['Shirting', 'Layering pieces', 'Lifestyle apparel'],
      tr: ['Gömleklik', 'Katmanlı ürünler', 'Lifestyle giyim']
    },
    productionOptions: {
      en: ['Brushed finish', 'Yarn-dyed checks', 'Peach finish'],
      tr: ['Şardonlu', 'İplik boya ekose', 'Peach finish']
    },
    customization: {
      en: 'Custom checks and seasonal palettes available.',
      tr: 'Özel ekose ve sezon renkleri sunulur.'
    },
    images: [
      '/images/products/poplin-1.svg',
      '/images/products/poplin-2.svg',
      '/images/products/poplin-3.svg'
    ]
  },
  {
    slug: 'pique-jersey',
    title: {
      en: 'Pique Jersey',
      tr: 'Pike Jarse'
    },
    shortDescription: {
      en: 'Textured jersey with a refined surface for polos.',
      tr: 'Polo ürünler için rafine yüzeyli dokulu jarse.'
    },
    description: {
      en: 'Cotton-rich pique jersey engineered for elevated polo and uniform programs.',
      tr: 'Üst düzey polo ve üniforma programları için pamuk ağırlıklı pike jarse.'
    },
    fabricType: {
      en: 'Cotton / elastane, 190–220 gsm',
      tr: 'Pamuk / elastan, 190–220 gsm'
    },
    usageAreas: {
      en: ['Polos', 'Uniform tops', 'Corporate casual'],
      tr: ['Polo', 'Üniforma üst', 'Kurumsal casual']
    },
    productionOptions: {
      en: ['Bio polish', 'Piece-dyed', 'Softener finish'],
      tr: ['Biyo polisaj', 'Parça boya', 'Yumuşatıcı apre']
    },
    customization: {
      en: 'We can match brand colors and hand-feel.',
      tr: 'Marka renkleri ve tutum eşleştirmesi yapılır.'
    },
    images: [
      '/images/products/knit-1.svg',
      '/images/products/knit-2.svg',
      '/images/products/knit-3.svg'
    ]
  },
  {
    slug: 'premium-rib-knit',
    title: {
      en: 'Premium Rib Knit',
      tr: 'Premium Ribana'
    },
    shortDescription: {
      en: 'Structured rib knit with balanced stretch.',
      tr: 'Dengeli esneme sunan yapılandırılmış ribana.'
    },
    description: {
      en: 'A versatile rib knit for trims, necklines, and fitted essentials.',
      tr: 'Biye, yaka ve dar kalıp ürünler için çok yönlü ribana.'
    },
    fabricType: {
      en: 'Cotton / elastane, 240–280 gsm',
      tr: 'Pamuk / elastan, 240–280 gsm'
    },
    usageAreas: {
      en: ['Rib trims', 'Essentials', 'Base layers'],
      tr: ['Ribana biye', 'Temel ürünler', 'İç katman']
    },
    productionOptions: {
      en: ['Compact finish', 'Piece-dyed', 'Soft touch'],
      tr: ['Kompakt finish', 'Parça boya', 'Yumuşak tutum']
    },
    customization: {
      en: 'Rib width and recovery tailored to spec.',
      tr: 'Rib genişliği ve toparlanma özellikleri özelleştirilebilir.'
    },
    images: [
      '/images/products/knit-1.svg',
      '/images/products/knit-2.svg',
      '/images/products/knit-3.svg'
    ]
  },
  {
    slug: 'stretch-woven',
    title: {
      en: 'Stretch Woven',
      tr: 'Esnek Dokuma'
    },
    shortDescription: {
      en: 'Tailored stretch woven for comfort and structure.',
      tr: 'Konfor ve form sunan esnek dokuma.'
    },
    description: {
      en: 'A refined stretch woven designed for tailored bottoms and structured silhouettes.',
      tr: 'Özel dikim alt giyim ve yapılandırılmış siluetler için geliştirilmiş rafine esnek dokuma.'
    },
    fabricType: {
      en: 'Polyester / elastane, 180–220 gsm',
      tr: 'Polyester / elastan, 180–220 gsm'
    },
    usageAreas: {
      en: ['Trousers', 'Uniform bottoms', 'Travel apparel'],
      tr: ['Pantolon', 'Üniforma alt', 'Seyahat giyim']
    },
    productionOptions: {
      en: ['Water-repellent', 'Wrinkle-resistant', 'Piece-dyed'],
      tr: ['Su itici', 'Kırışmaz', 'Parça boya']
    },
    customization: {
      en: 'Stretch ratios adjusted to fit requirements.',
      tr: 'Esneme oranları kalıp ihtiyaçlarına göre ayarlanır.'
    },
    images: [
      '/images/products/shell-1.svg',
      '/images/products/shell-2.svg',
      '/images/products/shell-3.svg'
    ]
  },
  {
    slug: 'signature-jacquard',
    title: {
      en: 'Signature Jacquard',
      tr: 'İmza Jakarlı Kumaş'
    },
    shortDescription: {
      en: 'Custom jacquard patterns for premium branding.',
      tr: 'Premium marka algısı için özel jakar desenler.'
    },
    description: {
      en: 'Jacquard fabric enabling bespoke patterns and tonal texture for luxury programs.',
      tr: 'Lüks programlar için özel desenler ve tonlu doku sunan jakarlı kumaş.'
    },
    fabricType: {
      en: 'Cotton / polyester jacquard, 200–260 gsm',
      tr: 'Pamuk / polyester jakar, 200–260 gsm'
    },
    usageAreas: {
      en: ['Premium apparel', 'Soft furnishings', 'Signature uniforms'],
      tr: ['Premium giyim', 'Ev tekstili', 'İmza üniformalar']
    },
    productionOptions: {
      en: ['Custom patterns', 'Yarn-dyed', 'Piece-dyed'],
      tr: ['Özel desen', 'İplik boya', 'Parça boya']
    },
    customization: {
      en: 'Logo-based motifs and texture mapping available.',
      tr: 'Logo bazlı motif ve doku haritalama yapılır.'
    },
    images: [
      '/images/products/linen-1.svg',
      '/images/products/linen-2.svg',
      '/images/products/linen-3.svg'
    ]
  },
  {
    slug: 'organic-muslin',
    title: {
      en: 'Organic Muslin',
      tr: 'Organik Müslin'
    },
    shortDescription: {
      en: 'Soft, airy muslin with a natural hand-feel.',
      tr: 'Doğal tutuma sahip yumuşak ve hafif müslin.'
    },
    description: {
      en: 'Organic muslin developed for baby, lifestyle, and lightweight apparel programs.',
      tr: 'Bebek, lifestyle ve hafif giyim programları için geliştirilmiş organik müslin.'
    },
    fabricType: {
      en: 'Organic cotton, 90–120 gsm',
      tr: 'Organik pamuk, 90–120 gsm'
    },
    usageAreas: {
      en: ['Baby textiles', 'Summer apparel', 'Accessories'],
      tr: ['Bebek tekstili', 'Yazlık giyim', 'Aksesuar']
    },
    productionOptions: {
      en: ['Natural dye', 'Softener finish', 'Double gauze'],
      tr: ['Doğal boya', 'Yumuşatıcı apre', 'Çift kat gazlı']
    },
    customization: {
      en: 'Color palettes aligned with seasonal stories.',
      tr: 'Sezon hikayelerine uygun renk paletleri sunulur.'
    },
    images: [
      '/images/products/linen-1.svg',
      '/images/products/linen-2.svg',
      '/images/products/linen-3.svg'
    ]
  },
  {
    slug: 'soft-touch-viscose',
    title: {
      en: 'Soft-Touch Viscose',
      tr: 'Yumuşak Dokunuşlu Viskon'
    },
    shortDescription: {
      en: 'Fluid drape viscose with premium softness.',
      tr: 'Premium yumuşaklıkta akışkan dökümlü viskon.'
    },
    description: {
      en: 'A smooth viscose base for elegant dresses and modern corporate silhouettes.',
      tr: 'Zarif elbiseler ve modern kurumsal siluetler için yumuşak viskon.'
    },
    fabricType: {
      en: 'Viscose, 110–140 gsm',
      tr: 'Viskon, 110–140 gsm'
    },
    usageAreas: {
      en: ['Dresses', 'Blouses', 'Light tailoring'],
      tr: ['Elbise', 'Bluz', 'Hafif tailoring']
    },
    productionOptions: {
      en: ['Piece-dyed', 'Matte finish', 'Printed'],
      tr: ['Parça boya', 'Mat finish', 'Baskı']
    },
    customization: {
      en: 'Custom print programs and color matching.',
      tr: 'Özel baskı programları ve renk eşleme.'
    },
    images: [
      '/images/products/poplin-1.svg',
      '/images/products/poplin-2.svg',
      '/images/products/poplin-3.svg'
    ]
  },
  {
    slug: 'antibacterial-lining',
    title: {
      en: 'Antibacterial Lining',
      tr: 'Antibakteriyel Astar'
    },
    shortDescription: {
      en: 'Technical lining with hygienic treatment.',
      tr: 'Hijyenik işlemli teknik astar.'
    },
    description: {
      en: 'A clean lining solution for uniforms and outerwear programs with antimicrobial performance.',
      tr: 'Üniforma ve dış giyim programları için antibakteriyel performanslı astar çözümü.'
    },
    fabricType: {
      en: 'Polyester lining, 60–80 gsm',
      tr: 'Polyester astar, 60–80 gsm'
    },
    usageAreas: {
      en: ['Uniform lining', 'Outerwear', 'Hospitality'],
      tr: ['Üniforma astarı', 'Dış giyim', 'Otelcilik']
    },
    productionOptions: {
      en: ['Antibacterial finish', 'Anti-static', 'Colorfast'],
      tr: ['Antibakteriyel apre', 'Anti-statik', 'Renk haslığı']
    },
    customization: {
      en: 'Performance treatments adjusted to program needs.',
      tr: 'Performans işlemleri program ihtiyacına göre ayarlanır.'
    },
    images: [
      '/images/products/shell-1.svg',
      '/images/products/shell-2.svg',
      '/images/products/shell-3.svg'
    ]
  },
  {
    slug: 'microfiber-suede',
    title: {
      en: 'Microfiber Suede',
      tr: 'Mikrofiber Süet'
    },
    shortDescription: {
      en: 'Elegant suede-like texture with durable performance.',
      tr: 'Dayanıklı performansla şık süet dokusu.'
    },
    description: {
      en: 'Premium microfiber suede developed for accessories, trims, and luxury corporate interiors.',
      tr: 'Aksesuar, detay ve kurumsal iç mekanlar için premium mikrofiber süet.'
    },
    fabricType: {
      en: 'Microfiber polyester, 200–240 gsm',
      tr: 'Mikrofiber polyester, 200–240 gsm'
    },
    usageAreas: {
      en: ['Accessories', 'Upholstery', 'Luxury trims'],
      tr: ['Aksesuar', 'Döşemelik', 'Lüks detaylar']
    },
    productionOptions: {
      en: ['Embossing', 'Stain-resistant', 'Color matching'],
      tr: ['Emboss', 'Leke tutmaz', 'Renk eşleme']
    },
    customization: {
      en: 'Custom textures and embossing options available.',
      tr: 'Özel doku ve emboss seçenekleri sunulur.'
    },
    images: [
      '/images/products/denim-1.svg',
      '/images/products/denim-2.svg',
      '/images/products/denim-3.svg'
    ]
  }
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
