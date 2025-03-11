import { ShoppingItem } from "@/types/shoppingItem";
import topSellingImg1 from "../assets/home/top-selling-1.png";
import topSellingImg2 from "../assets/home/top-selling-2.png";
import topSellingImg3 from "../assets/home/top-selling-3.png";
import topSellingImg4 from "../assets/home/top-selling-4.png";
import topSellingImg5 from "../assets/home/top-selling-5.png";
import topSellingImg6 from "../assets/home/top-selling-6.png";
import topSellingImg7 from "../assets/home/top-selling-7.png";
import topSellingImg8 from "../assets/home/top-selling-8.png";

// "xx-small",
// "x-small",
// "medium",
// "large",
// "x-large",
// "xx-large",
// "3x-large",
// "4x-large",

export const collections: ShoppingItem[] = [
  {
    id: "1",
    image: topSellingImg1,
    name: "Velor Hoodie",
    price: 120,
    discount: 0,
    soldOut: true,
    type: "t-shirt",
    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "zara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "2",
    image: topSellingImg2,
    name: "Knit Hoodie",
    price: 260,
    discount: 20,
    type: "t-shirt",
    soldOut: false,
    material: "cotton",
    brand: "zara",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],
    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "3",
    image: topSellingImg3,
    name: "Baja Hoodie",
    price: 180,
    discount: 0,
    soldOut: true,
    type: "shorts",
    material: "cotton",
    brand: "zara",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],
    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "4",
    image: topSellingImg4,
    name: "Oversize Hoodie",
    price: 160,
    discount: 30,
    type: "shirts",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "zara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "5",
    image: topSellingImg5,
    name: "Fleece Hoodie",
    price: 120,
    discount: 0,
    type: "jeans",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "zara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: " 6",
    image: topSellingImg6,
    name: "Cow neck Hoodie",
    price: 260,
    discount: 20,
    type: "hoodie",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "zara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "7",
    image: topSellingImg7,
    name: "Neoprene Hoodie",
    price: 180,
    discount: 0,
    soldOut: true,
    type: "hoodie",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "zara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "8",
    image: topSellingImg8,
    name: "SLEEVE STRIPED T-SHIRT",
    price: 380,
    discount: 40,
    type: "jeans",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "zara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "9",
    image: topSellingImg1,
    name: "Velor Hoodie",
    price: 120,
    discount: 0,
    soldOut: true,
    type: "t-shirt",
    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "nike",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "10",
    image: topSellingImg2,
    name: "Knit Hoodie",
    price: 260,
    discount: 20,
    type: "t-shirt",
    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "nike",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "11",
    image: topSellingImg3,
    name: "Baja Hoodie",
    price: 180,
    discount: 0,
    soldOut: true,
    type: "shorts",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "nike",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "12",
    image: topSellingImg4,
    name: "Oversize Hoodie",
    price: 160,
    discount: 30,
    type: "shirts",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "nike",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "13",
    image: topSellingImg5,
    name: "Fleece Hoodie",
    price: 120,
    discount: 0,
    type: "jeans",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "nike",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "14",
    image: topSellingImg6,
    name: "Cow neck Hoodie",
    price: 260,
    discount: 20,
    type: "hoodie",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "nike",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "15",
    image: topSellingImg7,
    name: "Neoprene Hoodie",
    price: 180,
    discount: 0,
    soldOut: true,
    type: "hoodie",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "nike",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "16",
    image: topSellingImg8,
    name: "SLEEVE STRIPED T-SHIRT",
    price: 380,
    discount: 40,
    type: "jeans",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "klaire",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "17",
    image: topSellingImg1,
    name: "Velor Hoodie",
    price: 120,
    discount: 0,
    soldOut: true,
    type: "t-shirt",
    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "klaire",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "18",
    image: topSellingImg2,
    name: "Knit Hoodie",
    price: 260,
    discount: 20,
    type: "t-shirt",
    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "klaire",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "19",
    image: topSellingImg3,
    name: "Baja Hoodie",
    price: 180,
    discount: 0,
    soldOut: true,
    type: "shorts",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "klaire",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "20",
    image: topSellingImg4,
    name: "Oversize Hoodie",
    price: 160,
    discount: 30,
    type: "shirts",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "klaire",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "21",
    image: topSellingImg5,
    name: "Fleece Hoodie",
    price: 120,
    discount: 0,
    type: "jeans",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "kiara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "22",
    image: topSellingImg6,
    name: "Cow neck Hoodie",
    price: 260,
    discount: 20,
    type: "hoodie",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "kiara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "23",
    image: topSellingImg7,
    name: "Neoprene Hoodie",
    price: 180,
    discount: 0,
    soldOut: true,
    type: "hoodie",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    material: "cotton",
    brand: "kiara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
  {
    id: "24",
    image: topSellingImg8,
    name: "SLEEVE STRIPED T-SHIRT",
    price: 380,
    discount: 40,
    type: "jeans",

    reviews: [
      {
        id: "knekfn",
        reviewer: "Samantha D.",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        dateCreated: new Date("August 14, 2023").toDateString(),
        stars: 4,
      },
      {
        id: "spkajfpwk",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("March 2, 2024").toDateString(),
        stars: 5,
      },
      {
        id: "ljmkqowdn",
        reviewer: "Alex M.",
        comment:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        dateCreated: new Date("June 19, 2024").toDateString(),
        stars: 3,
      },
      {
        id: "lqodnd",
        reviewer: "Ethan R.",
        comment:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        dateCreated: new Date("September 1, 2024").toDateString(),
        stars: 4,
      },
      {
        id: "lmsodnwo",
        reviewer: "Olivia P.",
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        dateCreated: new Date("December 22, 2024").toDateString(),
        stars: 2,
      },
      {
        id: "smdkcdo",
        reviewer: "Liam K.",
        comment:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        dateCreated: new Date("January 14, 2025").toDateString(),
        stars: 5,
      },
    ],
    sizes: [
      {
        size: "xx-small",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "medium",
        colors: [
          {
            color: "blue",
            quantity: 7,
          },
          {
            color: "green",
            quantity: 7,
          },
        ],
      },
      {
        size: "large",
        colors: [
          {
            color: "purple",
            quantity: 7,
          },
          {
            color: "grey",
            quantity: 7,
          },
        ],
      },
    ],
    soldOut: false,
    material: "cotton",
    brand: "kiara",
    shortDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    longDescription: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    ],

    otherImages: [
      topSellingImg1,
      topSellingImg2,
      topSellingImg3,
      topSellingImg4,
    ],
  },
];

// "xx-small",
// "x-small",
// "medium",
// "large",
// "x-large",
// "xx-large",
// "3x-large",
// "4x-large",
