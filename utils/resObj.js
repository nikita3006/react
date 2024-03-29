let resObj = [
  {
    id: "1",
    title: "KFC",
    cuisine: "Fast Food",
    rating: "4.2",
    time: "30",
    location: "123 Main St",
    deliveryCost: "$2.99",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: true,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$10 per person",
    contactNumber: "+123-456-7890",
    website: "https://www.kfc.com"
  },
  {
    id: "2",
    title: "McDonald's",
    cuisine: "Fast Food",
    rating: "4.0",
    time: "25",
    location: "456 Elm St",
    deliveryCost: "$1.99",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$8 per person",
    contactNumber: "+123-789-4567",
    website: "https://www.mcdonalds.com"
  },
  {
    id: "3",
    title: "Pizza Hut",
    cuisine: "Italian",
    rating: "4.5",
    time: "35",
    location: "789 Oak St",
    deliveryCost: "$3.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$12 per person",
    contactNumber: "+123-234-5678",
    website: "https://www.pizzahut.com"
  },
  {
    id: "4",
    title: "Subway",
    cuisine: "Sandwiches",
    rating: "4.3",
    time: "20",
    location: "321 Pine St",
    deliveryCost: "$1.50",
    vegetarianOptions: true,
    veganOptions: true,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$7 per person",
    contactNumber: "+123-567-8901",
    website: "https://www.subway.com"
  },
  {
    id: "5",
    title: "Domino's Pizza",
    cuisine: "Pizza",
    rating: "4.4",
    time: "40",
    location: "567 Maple St",
    deliveryCost: "$2.00",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$11 per person",
    contactNumber: "+123-678-9012",
    website: "https://www.dominos.com"
  },
  {
    id: "6",
    title: "Burger King",
    cuisine: "Burgers",
    rating: "4.1",
    time: "30",
    location: "987 Cedar St",
    deliveryCost: "$2.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$9 per person",
    contactNumber: "+123-789-0123",
    website: "https://www.burgerking.com"
  },
  {
    id: "7",
    title: "Starbucks",
    cuisine: "Coffee",
    rating: "4.6",
    time: "15",
    location: "654 Walnut St",
    deliveryCost: "$0.50",
    vegetarianOptions: true,
    veganOptions: true,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$5 per person",
    contactNumber: "+123-890-1234",
    website: "https://www.starbucks.com"
  },
  {
    id: "8",
    title: "Taco Bell",
    cuisine: "Mexican",
    rating: "4.0",
    time: "25",
    location: "234 Elm St",
    deliveryCost: "$1.99",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$8 per person",
    contactNumber: "+123-901-2345",
    website: "https://www.tacobell.com"
  },
  {
    id: "9",
    title: "Wendy's",
    cuisine: "Fast Food",
    rating: "3.9",
    time: "20",
    location: "789 Pine St",
    deliveryCost: "$1.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$7 per person",
    contactNumber: "+123-012-3456",
    website: "https://www.wendys.com"
  },
  {
    id: "10",
    title: "Panda Express",
    cuisine: "Chinese",
    rating: "4.2",
    time: "35",
    location: "345 Oak St",
    deliveryCost: "$2.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$10 per person",
    contactNumber: "+123-345-6789",
    website: "https://www.pandaexpress.com"
  },
  {
    id: "11",
    title: "Chick-fil-A",
    cuisine: "Chicken",
    rating: "4.7",
    time: "20",
    location: "890 Maple St",
    deliveryCost: "$2.00",
    vegetarianOptions: false,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$9 per person",
    contactNumber: "+123-456-7890",
    website: "https://www.chick-fil-a.com"
  },
  {
    id: "12",
    title: "Dunkin'",
    cuisine: "Donuts",
    rating: "4.0",
    time: "15",
    location: "456 Cedar St",
    deliveryCost: "$0.99",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$5 per person",
    contactNumber: "+123-567-8901",
    website: "https://www.dunkindonuts.com"
  },
  {
    id: "13",
    title: "Chipotle Mexican Grill",
    cuisine: "Mexican",
    rating: "4.3",
    time: "30",
    location: "789 Walnut St",
    deliveryCost: "$2.99",
    vegetarianOptions: true,
    veganOptions: true,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$11 per person",
    contactNumber: "+123-678-9012",
    website: "https://www.chipotle.com"
  },
  {
    id: "14",
    title: "Panera Bread",
    cuisine: "Bakery",
    rating: "4.5",
    time: "25",
    location: "234 Pine St",
    deliveryCost: "$1.50",
    vegetarianOptions: true,
    veganOptions: true,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$8 per person",
    contactNumber: "+123-789-0123",
    website: "https://www.panerabread.com"
  },
  {
    id: "15",
    title: "Krispy Kreme",
    cuisine: "Donuts",
    rating: "4.6",
    time: "20",
    location: "567 Cedar St",
    deliveryCost: "$1.99",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$6 per person",
    contactNumber: "+123-890-1234",
    website: "https://www.krispykreme.com"
  },
  {
    id: "16",
    title: "Olive Garden",
    cuisine: "Italian",
    rating: "4.2",
    time: "40",
    location: "890 Oak St",
    deliveryCost: "$3.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$15 per person",
    contactNumber: "+123-901-2345",
    website: "https://www.olivegarden.com"
  },
  {
    id: "17",
    title: "Red Lobster",
    cuisine: "Seafood",
    rating: "4.1",
    time: "35",
    location: "123 Elm St",
    deliveryCost: "$3.99",
    vegetarianOptions: false,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$20 per person",
    contactNumber: "+123-012-3456",
    website: "https://www.redlobster.com"
  },
  {
    id: "18",
    title: "Buffalo Wild Wings",
    cuisine: "American",
    rating: "4.0",
    time: "30",
    location: "456 Walnut St",
    deliveryCost: "$2.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$15 per person",
    contactNumber: "+123-234-5678",
    website: "https://www.buffalowildwings.com"
  },
  {
    id: "19",
    title: "Popeyes Louisiana Kitchen",
    cuisine: "Chicken",
    rating: "4.3",
    time: "25",
    location: "789 Pine St",
    deliveryCost: "$2.00",
    vegetarianOptions: false,
    veganOptions: false,
    halalOptions: true,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$12 per person",
    contactNumber: "+123-345-6789",
    website: "https://www.popeyes.com"
  },
  {
    id: "20",
    title: "Dairy Queen",
    cuisine: "Ice Cream",
    rating: "4.4",
    time: "15",
    location: "234 Cedar St",
    deliveryCost: "$1.99",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$6 per person",
    contactNumber: "+123-456-7890",
    website: "https://www.dairyqueen.com"
  },
  {
    id: "21",
    title: "Five Guys",
    cuisine: "Burgers",
    rating: "4.5",
    time: "20",
    location: "567 Walnut St",
    deliveryCost: "$2.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$10 per person",
    contactNumber: "+123-567-8901",
    website: "https://www.fiveguys.com"
  },
  {
    id: "22",
    title: "Denny's",
    cuisine: "American",
    rating: "4.0",
    time: "30",
    location: "890 Pine St",
    deliveryCost: "$3.00",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$13 per person",
    contactNumber: "+123-678-9012",
    website: "https://www.dennys.com"
  },
  {
    id: "23",
    title: "In-N-Out Burger",
    cuisine: "Burgers",
    rating: "4.7",
    time: "25",
    location: "123 Oak St",
    deliveryCost: "$2.50",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$11 per person",
    contactNumber: "+123-789-0123",
    website: "https://www.in-n-out.com"
  },
  {
    id: "24",
    title: "Jack in the Box",
    cuisine: "Fast Food",
    rating: "3.9",
    time: "35",
    location: "456 Elm St",
    deliveryCost: "$2.00",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: false,
    averageCost: "$9 per person",
    contactNumber: "+123-901-2345",
    website: "https://www.jackinthebox.com"
  },
  {
    id: "25",
    title: "Cinnabon",
    cuisine: "Bakery",
    rating: "4.6",
    time: "15",
    location: "789 Cedar St",
    deliveryCost: "$1.99",
    vegetarianOptions: true,
    veganOptions: false,
    halalOptions: false,
    kosherOptions: false,
    glutenFreeOptions: true,
    averageCost: "$5 per person",
    contactNumber: "+123-012-3456",
    website: "https://www.cinnabon.com"
  }
];

export default resObj;
