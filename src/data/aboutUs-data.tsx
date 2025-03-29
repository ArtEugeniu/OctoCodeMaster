import { v4 } from "uuid";

interface AboutItem {
  id: string,
  name: string,
  position: string,
  image: string
}

interface AboutData {
  aboutUs: AboutItem[]
}

const aboutUs: AboutData = {
  aboutUs: [
    {
      id: v4(),
      name: "Alen",
      position: "Project Manager & Founder",
      image: "/OctoCodeMaster/images/team/alen.jpg",
    },
    {
      id: v4(),
      name: "David",
      position: "Lead Developer",
      image: "/OctoCodeMaster/images/team/david.jfif",
    },
    {
      id: v4(),
      name: "Alexander",
      position: "Marketing Expert",
      image: "/OctoCodeMaster/images/team/alex.jpg",
    }
  ]
}

export default aboutUs;