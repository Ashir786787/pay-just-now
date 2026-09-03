export interface BlogPost {
  title: string;
  categories: string[];
  author: string;
  date: string;
  readTime: string;
  image?: string;
  video?: boolean;
  videoThumb?: string;
}

export function postHref(title: string) {
  return `/press#${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

export interface BlogCategory {
  id: string;
  label: string;
  icon: string;
}

export const categories: BlogCategory[] = [
  {
    id: "26",
    label: "Accessories",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px.svg",
  },
  {
    id: "27",
    label: "Case Study",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-1.svg",
  },
  {
    id: "28",
    label: "Customer Stories",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-2.svg",
  },
  {
    id: "29",
    label: "Electronics",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-3.svg",
  },
  {
    id: "30",
    label: "Eyewear",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-4.svg",
  },
  {
    id: "31",
    label: "Fashion",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-5.svg",
  },
  {
    id: "32",
    label: "Footwear",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-6.svg",
  },
  {
    id: "33",
    label: "Health/Beauty",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-7.svg",
  },
  {
    id: "34",
    label: "Home",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-8.svg",
  },
  {
    id: "35",
    label: "In-Store",
    icon: "https://payjustnow.com/wp-content/uploads/2025/02/24px-9.svg",
  },
];

export const categoryTiles: BlogCategory[] = [
  {
    id: "42",
    label: "How it works",
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/howitworks-cat.svg",
  },
  {
    id: "43",
    label: "Pay in 12",
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/pay-in-12-category-icon.svg",
  },
  {
    id: "44",
    label: "Pay in 3",
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/pay-in-3-category-icon.svg",
  },
  {
    id: "40",
    label: "Insurance",
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/insurance-category-icon.svg",
  },
  {
    id: "41",
    label: "Finance",
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/finance-category-icon.svg",
  },
];

export const featuredPost: BlogPost = {
  title: "5 Clever Ways to Shop Smarter with PayJustNow’s Pay in 3",
  categories: ["Misc"],
  author: "By Robyn Speelman",
  date: "August 2025",
  readTime: "3min",
  video: true,
  image:
    "https://payjustnow.com/wp-content/uploads/2025/03/Frame-427319738-1.jpg",
  videoThumb:
    "https://payjustnow.com/wp-content/uploads/2025/12/Screenshot-2025-12-09-at-08.49.jpg",
};

export const mostPopularPosts: BlogPost[] = [
  {
    title:
      "PayJustNow & Takealot New Customer Promotion Terms & Conditions",
    categories: ["Misc"],
    author: "By Zinhle Khambule",
    date: "Aug 2026",
    readTime: "6min",
  },
  {
    title: "Affordable Accredited Online Courses.",
    categories: ["Misc"],
    author: "By Zinhle Khambule",
    date: "Apr 2026",
    readTime: "2min",
    image:
      "https://payjustnow.com/wp-content/uploads/2026/04/2-App-Banner_500x375px-2.jpg",
  },
  {
    title: "TFG Win Your Basket Back Terms & Conditions",
    categories: ["Fashion", "Misc"],
    author: "By Zinhle Khambule",
    date: "Mar 2026",
    readTime: "9min",
    image: "https://payjustnow.com/wp-content/uploads/2023/11/industry-260x300.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title:
      "PayJustNow & Takealot New Customer Promotion Terms & Conditions",
    categories: ["Misc"],
    author: "By Zinhle Khambule",
    date: "Aug 2026",
    readTime: "6min",
  },
  {
    title: "Affordable Accredited Online Courses.",
    categories: ["Misc"],
    author: "By Zinhle Khambule",
    date: "Apr 2026",
    readTime: "2min",
    image:
      "https://payjustnow.com/wp-content/uploads/2026/04/2-App-Banner_500x375px-2.jpg",
  },
  {
    title: "TFG Win Your Basket Back Terms & Conditions",
    categories: ["Fashion", "Misc"],
    author: "By Zinhle Khambule",
    date: "Mar 2026",
    readTime: "9min",
    image:
      "https://payjustnow.com/wp-content/uploads/2023/11/industry-260x300.jpg",
  },
  {
    title: "Pay in 12 survey competition T&C’s",
    categories: ["Misc"],
    author: "By Robyn Speelman",
    date: "Feb 2026",
    readTime: "4min",
  },
  {
    title: "5 Clever Ways to Shop Smarter with PayJustNow’s Pay in 3",
    categories: ["Misc"],
    author: "By Robyn Speelman",
    date: "Aug 2025",
    readTime: "3min",
    video: true,
    image:
      "https://payjustnow.com/wp-content/uploads/2025/03/Frame-427319738-1.jpg",
    videoThumb:
      "https://payjustnow.com/wp-content/uploads/2025/12/Screenshot-2025-12-09-at-08.49.jpg",
  },
  {
    title: "FinChoice Accident Cover",
    categories: ["Misc"],
    author: "By Robyn Speelman",
    date: "Mar 2025",
    readTime: "1min",
    image: "https://payjustnow.com/wp-content/uploads/2025/03/FC-Accident.jpg",
  },
  {
    title: "FinChoice Funeral Cover from R49 pm",
    categories: ["Misc"],
    author: "By Robyn Speelman",
    date: "Mar 2025",
    readTime: "1min",
    image: "https://payjustnow.com/wp-content/uploads/2025/03/FC-Funeral.jpg",
  },
  {
    title: "FinChoice Personal Loans for life’s bigger expenses.",
    categories: ["Misc"],
    author: "By Robyn Speelman",
    date: "Mar 2025",
    readTime: "1min",
    image:
      "https://payjustnow.com/wp-content/uploads/2025/03/FC-Term-Loan.jpg",
  },
];

export const sponsorAd = {
  title: "Get R250 off",
  text: "Get R250 off at Edgars when you spend R1000 or more. Use code: 406890 when you checkout using PayJustNow (T&C's apply).",
  image: "https://payjustnow.com/wp-content/uploads/2025/02/Card-1.jpg",
};