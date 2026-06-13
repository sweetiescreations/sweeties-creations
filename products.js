// ==========================================
// SWEETIES CREATIONS - MASTER CONFIGURATION
// ==========================================

const GLOBAL_CONFIG = {
    googleFormUrl: "YOUR_GOOGLE_FORM_URL_HERE",
    whatsappNumber: "919607910411",
    hotlineDisplay: "+91 9607910411",
    copyrightYear: "2026"
};

// 1. HERO CAROUSEL IMAGES & TEXT
const CAROUSEL_SLIDES = [
    {
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1400",
        tag: "Direct Manufacturer Pricing",
        title: "Customize Your Memories With Us",
        description: "High-durability badges, fridge magnets, and custom keychains crafted precisely for milestones, giveaways, and corporate identity.",
        showCtaButton: true,
        ctaText: "View Products",
        ctaLink: "#categories-portal"
    },
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400",
        tag: "Unbeatable Volume Deals",
        title: "Massive Discounts on 500+ Units",
        description: "Pin badges dropping from ₹20 down to ₹12. Get fast turnaround processing speeds across pan-India channels.",
        showCtaButton: true,
        ctaText: "Secure Wholesale Rate",
        ctaLink: "whatsapp" // Special keyword for WhatsApp routing
    }
];

// 2. LIVE CALCULATOR MATRIX (Matches your rate card precisely)
const PRICING_MATRIX = {
    pin44:    { name: "Pin Badges (44mm)",        tiers: [20, 18, 15, 12] },
    pin58:    { name: "Pin Badges (58mm)",        tiers: [30, 28, 25, 22] },
    fridge58: { name: "Fridge Magnet (58mm)",     tiers: [45, 42, 40, 40] },
    key44:    { name: "Keychain (44mm)",          tiers: [35, 32, 30, 30] },
    key58:    { name: "Keychain (58mm)",          tiers: [45, 42, 40, 40] },
    opener58: { name: "Opener Keychain (58mm)",   tiers: [60, 58, 55, 55] },
    tshirt58: { name: "T-shirt Magnet (58mm)",    tiers: [80, 78, 75, 75] }
};

// 3. PRODUCT CATEGORIES & MULTI-IMAGE GALLERIES
// To add more images, just drop the filenames inside the 'images' array below!
const PRODUCT_CATEGORIES = [
    {
        id: "pin-badges-panel",
        key: "pin44", // Binds to pricing calculator
        title: "Premium Matte & Glossy Pin Badges",
        tagline: "Small badge, Big impression!",
        description: "Engineered with absolute safety backing systems. Perfect layout for school functions, brand recognition identity layers, statement clothing pins, and wedding guest keepsakes.",
        lowPrice: "12",
        specs: [
            "Available Diameters: 44mm and 58mm Form Factors",
            "Wholesale Advantage: Drops to ₹12 for high wholesale tiers."
        ],
        images: [
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500", // Image 1 (Main default display)
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500", // Image 2
            "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500", // Image 3
            "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500", // Image 4
            "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500", // Image 5
            "https://images.unsplash.com/photo-1593510987185-1ec2256148a3?w=500"  // Image 6
        ]
    },
    {
        id: "fridge-magnets-panel",
        key: "fridge58",
        title: "Custom Classic & Acrylic Fridge Magnets",
        tagline: "Brighten your fridge, cherish your memories!",
        description: "Features heavy-grade scratch-free backings. Display vibrant family photography landscapes or memorable save-the-date invitations cleanly over kitchen appliances.",
        lowPrice: "40",
        specs: [
            "Available Specs: 58mm Classic Round Layouts & Acrylic Frames",
            "Wholesale Tier: Scaled flat to ₹40 on commercial quantities."
        ],
        images: [
            "https://images.unsplash.com/photo-1593510987185-1ec2256148a3?w=500",
            "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
            "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500",
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500"
        ]
    },
    {
        id: "keychains-panel",
        key: "key44",
        title: "Custom Keychains & Integrated Bottle Openers",
        tagline: "Carry your memories, wherever you go!",
        description: "Reinforced double-sided protective acrylic rings combined with real heavy-duty steel links. Excellent giveaways for bike groups, company asset keys, and bar merchandise.",
        lowPrice: "30",
        specs: [
            "Available Dimensions: 44mm & 58mm Keychains / 58mm Bottle Opener Combinations",
            "Wholesale Advantage: As low as ₹30 per unit."
        ],
        images: [
            "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500",
            "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=500",
            "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500",
            "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
            "https://images.unsplash.com/photo-1593510987185-1ec2256148a3?w=500"
        ]
    },
    {
        id: "tshirt-magnets-panel",
        key: "tshirt58",
        title: "Premium High-Strength T-Shirt Magnets",
        tagline: "Wear your attitude, share your message!",
        description: "No puncture pins required. Attaches to shirts via extra-strong magnetic locks that keep fabrics safe and secure. Perfect for corporate trade shows and formal events.",
        lowPrice: "75",
        specs: [
            "Specification Size: Premium 58mm Structural Shell",
            "Wholesale Value: Drops directly from ₹80 to ₹75 for wholesale slots."
        ],
        images: [
            "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
            "https://images.unsplash.com/photo-1593510987185-1ec2256148a3?w=500",
            "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
            "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500",
            "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=500"
        ]
    }
];