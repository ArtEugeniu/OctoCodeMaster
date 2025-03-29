import { v4 as uuidv4 } from 'uuid';

interface ServiceItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
}

interface servicesData {
  service: ServiceItem[]
}


const ServicesData: servicesData = {
  "service": [
    {
      "id": uuidv4(),
      "title": "Web Application Development",
      "price": "from 299€",
      "duration": "from 5 days",
      "description": "Development of reliable and scalable web applications with a tailored approach.",
    },
    {
      "id": uuidv4(),
      "title": "Application Development",
      "price": "from 899€",
      "duration": "from 22 days",
      "description": "Creation of powerful and comprehensive applications for mobile and desktop platforms.",
    },
    {
      "id": uuidv4(),
      "title": "SEO Promotion",
      "price": "from 199€ / month",
      "duration": "monthly subscription",
      "description": "Comprehensive promotion of your website in search engines to increase visibility.",
    },
    {
      "id": uuidv4(),
      "title": "Social Media Promotion",
      "price": "from 149€ / month",
      "duration": "monthly subscription",
      "description": "Comprehensive promotion of your business on social media to increase outreach.",
    },
    {
      "id": uuidv4(),
      "title": "Landing Page Development",
      "price": "from 299€",
      "duration": "from 5 days",
      "description": "Creation of a landing page for lead collection and client conversion.",
    },
    {
      "id": uuidv4(),
      "title": "Comprehensive Service",
      "price": "from 1499€",
      "duration": "from 30 days",
      "description": "Full cycle of development: website creation, SEO promotion, application development, and social media promotion — all in one package.",
    }
  ]
}

export default ServicesData;