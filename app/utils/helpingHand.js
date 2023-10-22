import { MdPeopleOutline, MdGamepad, MdSportsSoccer  } from "react-icons/md";

const logo = "https://firebasestorage.googleapis.com/v0/b/nb-chatroom.appspot.com/o/NBChattenzi.png?alt=media&token=3b5b3dbe-c0f0-4228-bc26-e0e4d0ce93db&_gl=1*gol4sv*_ga*MTU3NTE4NzY2Ny4xNjkzOTEzMDI2*_ga_CW55HF8NVT*MTY5Nzk3MTEwNy4zNC4xLjE2OTc5NzMxMDUuNjAuMC4w";

const rooms = [
    {
        id: 1,
        room: "general",
        icon: <MdPeopleOutline />
    },
    {
        id: 2,
        room: "gaming",
        icon: <MdGamepad />
    },
    {
        id: 3,
        room: "sports",
        icon: <MdSportsSoccer />
    }
]

const myMetadata = {
  title: "NB-Chattenzi",
  description:
    "NB Chattenzi chatroom. Multiple rooms to explore, talking with anyone, about anyting, simply by visiting the page, no need for registration.",
  keywords:
    "NB, NBojan, nbojan, chattenzi, nbchattenzi, work, project, development, focus, chat, rooms, chatroom",
  openGraph: {
    title: "NB-Chattenzi",
    description:
      "NB Chattenzi chatroom. Multiple rooms to explore, talking with anyone, about anyting, simply by visiting the page, no need for registration.",
    url: "https://nb-chatroom.vercel.app/",
    siteName: "NB-Chattenzi",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/nb-chatroom.appspot.com/o/thumbn.png?alt=media&token=8599d7cf-ed3b-4e5e-b18f-a7d4cb2985af&_gl=1*1ki1xb4*_ga*MTU3NTE4NzY2Ny4xNjkzOTEzMDI2*_ga_CW55HF8NVT*MTY5Nzk3MTEwNy4zNC4xLjE2OTc5NzE4MDQuNjAuMC4w",
        width: 1282,
        height: 867,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "NB-Chattenzi",
    site: "NB-Chattenzi",
    description:
      "NB Chattenzi chatroom. Multiple rooms to explore, talking with anyone, about anyting, simply by visiting the page, no need for registration.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/nb-chatroom.appspot.com/o/thumbn.png?alt=media&token=8599d7cf-ed3b-4e5e-b18f-a7d4cb2985af&_gl=1*1ki1xb4*_ga*MTU3NTE4NzY2Ny4xNjkzOTEzMDI2*_ga_CW55HF8NVT*MTY5Nzk3MTEwNy4zNC4xLjE2OTc5NzE4MDQuNjAuMC4w",
        width: 1282,
        height: 867,
      },
    ],
    creator: "NBojan",
    creatorId: "NBojan",
    card: "summary",
  },
};

export { logo, rooms, myMetadata }