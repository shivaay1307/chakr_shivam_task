import dashboard from "./assets/images/Icon-dashboard-color.svg";
import customers from "./assets/images/Icon=tabler-icon-users.svg";
import logout from "./assets/images/Icon-logout-color.svg";
import downArrow from "./assets/images/Icon=tabler-icon-chevron-down.svg";
import reports from "./assets/images/Icon=tabler-icon-clipboard-data.svg";
import geo from "./assets/images//Icon=tabler-icon-world.svg";
import conversations from "./assets/images/Icon=tabler-icon-message-circle.svg";
import deals from "./assets/images/Icon=tabler-icon-basket-check.svg";
import exports from "./assets/images/Icon=tabler-icon-database-export.svg";
import settings from "./assets/images/Icon=tabler-icon-settings-2.svg";
import diagonal from "./assets/images/diagonal.svg";
import vertical from "./assets/images/Vector.svg";
import circleGraph from "./assets/images/circleGraph.png";
import first from "./assets/images/first.png";
import second from "./assets/images/second.png";
import third from "./assets/images/third.png";
import fourth from "./assets/images/fourth.png";
import down from "./assets/images/down.svg";
import chat1 from "./assets/images/chat1.png";
import chat2 from "./assets/images/chat2.png";
import chat3 from "./assets/images/chat3.png";
import chat4 from "./assets/images/chat4.png";


export const sideBarTiles = [
  { icon:  dashboard , title: "Dashboard" },
  {
    icon:  customers ,
    icon2:  downArrow ,
    title: "Customers",
  },
  { icon: reports , title: "All reports" },
  { icon: geo  , title: "Geography" },
  { icon: conversations , title: "Conversations" },
  { icon: deals, title: "Deals" },
  { icon: exports , title: "Export" },
];

export const bottomTiles = [
  { icon: settings,  title: "Settings" },
  { icon: logout, title: "Log out" },
];

export const cardData = [
  {
    head: "Revenues",
    numbers: "15%",
    icon1: diagonal ,
    icon2: vertical ,
    subHead: "Increase compared to last week",
    link: "Revenues report",
  },
  {
    head: "Lost deals",
    numbers: "4%",
    icon2: vertical ,
    subHead: "You closed 96 out of 100 deals",
    link: "All deals",
  },
  {
    head: "Quarter goal",
    icon1: circleGraph ,
    icon2: vertical ,
    link: "All goals",
  },
];

export const customerCardData = [
  {
    head: "Customers",
    filters: "Sort by",
    filtersType: "Newest",
    icon5: down,
    icons: [
      {
        icon: first,
        profileName: "Chris Friedkly",
        profileDesignation: "Supermarket Villanova",
      },
      {
        icon: second,
        profileName: "Maggie Johnson",
        profileDesignation: "Oasis Organic Inc.",
        selected: true,
      },
      {
        icon: third,
        profileName: "Gael Harry",
        profileDesignation: "New York Finest Fruits",
      },
      {
        icon: fourth,
        profileName: "Jenna Sullivan",
        profileDesignation: "Walmart",
      },
    ],
    icon2: vertical ,
    link: "All customers",
  },
];

export const chats = [
  { icon: chat1 },
  { icon: chat2 },
  { icon: chat3 },
  { icon: chat4 },
];

export const newDealsData = [
  { title: "Fruit2Go" },
  { title: "Marshall's MKT" },
  { title: "CCNT" },
  { title: "Joana Mini-market" },
  { title: "Little Brazil Vegan" },
  { title: "Target" },
  { title: "Organic Place" },
  { title: "Morello's" },
]