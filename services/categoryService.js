const CATEGORIES = [
    { 
        id: 1, 
        name: 'Cameras', 
        icon: 'camera',
        image: require('../assets/categories/category-1.jpg')
    },
    { 
        id: 2, 
        name: 'Monitors', 
        icon: 'monitor',
        image: require('../assets/categories/category-2.jpg')
    },
    { 
        id: 3, 
        name: 'Mobiles', 
        icon: 'phone',
        image: require('../assets/categories/category-3.jpg')
    },
    { 
        id: 4, 
        name: 'Headphones', 
        icon: 'headphones',
        image: require('../assets/categories/category-4.jpg')
    },
    { 
        id: 5, 
        name: 'Printers', 
        icon: 'printer',
        image: require('../assets/categories/category-5.jpg')
    },
    { 
        id: 6, 
        name: 'Scanners', 
        icon: 'scanner',
        image: require('../assets/categories/category-6.jpg')
    },
    { 
        id: 7, 
        name: 'Laptops', 
        icon: 'laptop',
        image: require('../assets/categories/category-7.jpg')
    },
    { 
        id: 8, 
        name: 
        'Tablets', 
        icon: 'tablet',
        image: require('../assets/categories/category-8.jpg')
    }
];

export function getCategories() {
    return CATEGORIES;
}