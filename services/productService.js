const PRODUCTS = [
    {
        id: 101,
        name: 'Canon EOS 5D',
        catId: 1,
        price: 3350,
        image: require('../assets/products/product-100.jpg'),
        description: "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned with marketing talk this particular statement is clearly pretty accurate."
    },
    {
        id: 102,
        name: 'Panasonic HC-X',
        catId: 1,
        price: 6200,
        image: require('../assets/products/product-101.jpg'),
        description: 'Professional shooting everywhere: HC-X2000 packs advanced functions in a well-balanced body to excel both in functionality and mobility.'
    },
    {
        id: 103,
        name: 'SONY ALPHA 7',
        catId: 1,
        price: 2760,
        image: require('../assets/products/product-102.jpg'),
        description: 'Autofocus performance has been improved by optimally applying the same autofocus innovations as the a9. So as soon as the a7 III captures subjects with unpredictable movements.'
    },
    {
        id: 104,
        name: 'Panasonic DC-FZ82',
        catId: 1,
        price: 1500,
        image: require('../assets/products/product-103.jpg'),
        description: 'Autofocus performance has been improved by optimally applying the same autofocus innovations as the a9. So as soon as the a7 III captures subjects with unpredictable movements.'
    },
    {
        id: 105,
        name: 'Fujifilm X-A5 4007137',
        catId: 1,
        price: 4500,
        image: require('../assets/products/product-104.jpg'),
        description: "Fujifilm's core business is the provision of healthcare products and services (medical systems, consumer healthcare, pharmacology, Bio CDMO and regenerative medicine)."
    },
    {
        id: 106,
        name: 'Samsung FHD S24R35AFHU',
        catId: 2,
        price: 3350,
        image: require('../assets/products/product-106.jpg'),
        description: "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned with marketing talk this particular statement is clearly pretty accurate."
    },
    {
        id: 107,
        name: 'Philips 273V7QDAB',
        catId: 2,
        price: 6200,
        image: require('../assets/products/product-107.jpg'),
        description: 'Professional shooting everywhere: HC-X2000 packs advanced functions in a well-balanced body to excel both in functionality and mobility.'
    },
    {
        id: 108,
        name: 'KOORUI FHD 24',
        catId: 2,
        price: 2760,
        image: require('../assets/products/product-108.jpg'),
        description: 'Autofocus performance has been improved by optimally applying the same autofocus innovations as the a9. So as soon as the a7 III captures subjects with unpredictable movements.'
    },
    {
        id: 109,
        name: 'BenQ 9H.LHXLB',
        catId: 2,
        price: 1500,
        image: require('../assets/products/product-109.jpg'),
        description: 'Autofocus performance has been improved by optimally applying the same autofocus innovations as the a9. So as soon as the a7 III captures subjects with unpredictable movements.'
    },
    {
        id: 110,
        name: 'Dell S2721DGFA 27',
        catId: 2,
        price: 4500,
        image: require('../assets/products/product-110.jpg'),
        description: "Fujifilm's core business is the provision of healthcare products and services (medical systems, consumer healthcare, pharmacology, Bio CDMO and regenerative medicine)."
    },
    {
        id: 111,
        name: 'Google Pixel 6 128GB',
        catId: 3,
        price: 2513,
        image: require('../assets/products/product-111.jpg'),
        description: "Pixel's very own powerhouse. Google's new custom chip helps keep your phone fast, game rich and personal information safe"
    },
    {
        id: 112,
        name: 'Samsung Galaxy M33 5G',
        catId: 3,
        price: 1258,
        image: require('../assets/products/product-112.jpg'),
        description: "Samsung Galaxy M33 5G, No Contract Android Smartphone, 6.6 Inch Infinity-O TFT Display, 5000mAh Battery, 6GB RAM 128GB Memory, Dual-SIM, Brown"
    },
    {
        id: 113,
        name: 'Sony WH-1000XM4 ANC',
        catId: 4,
        price: 1278,
        image: require('../assets/products/product-113.jpg'),
        description: "They reduce noise better than all of our previous models and block out mid- and high-frequency sounds better in airplanes, cafes and more. QN1 HD noise reduction processor, processes data from two microphones in real time, detects and corrects music and noise signals and acoustics between the transducer in the headphones and the ear 700 times per second"
    },
    {
        id: 114,
        name: 'Bose QuietComfort SE',
        catId: 4,
        price: 999,
        image: require('../assets/products/product-114.jpg'),
        description: "Noise canceling wireless headphones: the perfect balance between silence, comfort and sound. Bose uses tiny microphone arrays that measure, compare and respond to outside noise by suppressing it with opposing signals."
    },
    {
        id: 115,
        name: "Soundpeats CyberGear",
        catId: 4,
        price: 1100,
        image: require('../assets/products/product-115.jpg'),
        description: "SoundPEATS CyberGear earbuds and charging case look full of tech sense and gaming style. Fantastic Cyberpunk Design: Black Gear Box Shape + Cool Breathable RGB Lighting Effects. You can enjoy more than four kinds of light switches at your disposal, and the Light Faith Blessings, bright and colorful, will help you enter the battle state at any time and open the game's most important moment."
    },
    {
        id: 116,
        name: "JBL JBLT110BLK",
        catId: 4,
        price: 59,
        image: require('../assets/products/product-116.jpg'),
        description: "JBL Pure Bass Sound technology produces deep and powerful bass. The headphones convince with a light, attractive design and the highest quality of workmanship"
    },
    {
        id: 117,
        name: "HP HP DeskJet 3760",
        catId: 5,
        price: 359,
        image: require('../assets/products/product-117.jpg'),
        description: "Print from smartphone, tablet and HP Snapshots app. Save up to 70% of ink and conveniently deliver it to your home. Including 4 trial months for testing. 15-page HP Instant Ink tariff. Print speed: up to 8 sec. / min (black/white), up to 5.5 sec. / min (color)"
    },
    {
        id: 118,
        name: "Canon PIXMA MG2550S",
        catId: 5,
        price: 320,
        image: require('../assets/products/product-118.jpg'),
        description: "Easy document and photo printing, supported operating systems: Windows 10, Windows 8.1 (including Windows 8.1 upgrade), Windows 8, Windows 7, Windows 7 SP1, Windows Vista SP2, Windows XP SP3 (32 bit only)"
    },
    {
        id: 119,
        name: "Brother DCPL3550CDWG1",
        catId: 5,
        price: 2760,
        image: require('../assets/products/product-119.jpg'),
        description: "Print speed: 18 pages per minute. Average power consumption (in operation) 400 W. Noise level 48 dB"
    },
    {
        id: 120,
        name: "Hp Scanjet Pro 3000",
        catId: 6,
        price: 2342,
        image: require('../assets/products/product-120.jpg'),
        description: "Item Packing Quality: 1 Model Number: 6FW07A#B19 Country of Origin:- China Package weight: 4.21 kg"
    },
    {
        id: 121,
        name: "Epson Perfection V39",
        catId: 6,
        price: 650,
        image: require('../assets/products/product-121.jpg'),
        description: "High-resolution 4800 dpi scanning: High-quality scanning of photos and documents. Powered and connected via micro USB: No powered AC adapter or separate power cable required"
    },
    {
        id: 122,
        name: "HP 1 15.6",
        catId: 7,
        price: 3889,
        image: require('../assets/products/product-122.jpg'),
        description: "Intel Core i5-1235U (up to 4.4 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads). Windows 11 Home. 39.6 cm (15.6) touch display. Intel Iris X Graphics Card. 8GB memory, 512GB SSD storage"
    },
    {
        id: 123,
        name: "Lenovo IdeaPad 5 Laptop",
        catId: 7,
        price: 3843,
        image: require('../assets/products/product-123.jpg'),
        description: "AMD Ryzen 5 5625U mobile processor (up to 4.3 GHz) with Radeon graphics. 14 inch FHD IPS display. Eye protection: TÜV Eyesafe display and TÜV Hardware Low Blue Light certification. Stereo speaker with Dolby Audio. Secure login with facial recognition, backlit keyboard"
    },
    {
        id: 124,
        name: "Apple MacBook Air 2022",
        catId: 7,
        price: 7999,
        image: require('../assets/products/product-124.jpg'),
        description: "ULTRA-SLIM DESIGN - The redesigned MacBook Air is even more portable and weighs only 1.24 kg. It's a super-versatile laptop to work, play and create anything you want. Wherever you dream. TURBO-CHARGED M2 CHIP - Next-generation CPU with 8 cores, up to 10-core GPU and 8GB of unified RAM let you do more in less time."
    },
    {
        id: 125,
        name: "Android 12 Touch Tablet",
        catId: 8,
        price: 799,
        image: require('../assets/products/product-125.jpg'),
        description: "6GB (+4GB RAM) + 128GB, Blackview Tab7 Pro's expandable storage is 6GB + 4GB extra virtual RAM, 128GB internal storage, and the storage can be expanded to 1TB with a TF card (not included) kit), allowing you to store more of your favorite music, photos and apps. It is certified by Google GMS, you can easily download popular software and apps from Google Play, such as: Netflix, Facebook, Instagram, Youtube, Tiktok, etc."
    },
    {
        id: 126,
        name: "Lenovo Tab M10 Full HD",
        catId: 8,
        price: 919,
        image: require('../assets/products/product-126.jpg'),
        description: "Processor: MediaTek Helio P22T Octa-Core (4x 2.3 GHz and 4x 1.8 GHz) Front-facing stereo speakers with Dolby Atmos, elegant narrow display edges. Individual family accounts, safe child mode 4.0 with eye protection and healthy posture control"
    },
    {
        id: 127,
        name: "2022 Apple iPad 10.9 inch",
        catId: 8,
        price: 2685,
        image: require('../assets/products/product-127.jpg'),
        description: "A striking 10.9-inch Liquid Retina display with True Tone technology. A14 Bionic chip with 6-core CPU and 4-core GPU. 12MP ultra wide-angle front camera on the long side of the device with Spotlight feature"
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

export function getProductsByCategory(catId) {
    return PRODUCTS.filter((item) => (item.catId == catId));
}