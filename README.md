# NTML Website

Official website for **National Trucks Manufacturers Limited (NTML)** built with **Next.js**.

This project showcases the company’s history, products, and services while providing a modern and responsive platform for visitors to learn more about NTML and its role in Nigeria’s automotive industry.

---

## About NTML

**National Trucks Manufacturers Limited (NTML)** is a pioneer in the Nigerian automotive industry specializing in the assembly and manufacturing of **heavy-duty trucks, cargo vehicles, and agricultural tractors**.

Founded in **1975** as a joint venture between the **Federal Government of Nigeria** and **Fiat Iveco of Italy**, NTML has played an important role in supporting Nigeria’s transportation, logistics, and agricultural sectors.

The company is headquartered in **Kano, Nigeria** and continues to contribute to national industrial growth through vehicle manufacturing, employment creation, and technical development.

---

## Features

- Modern **Next.js App Router architecture**
- Responsive layout for desktop and mobile devices
- Multiple informational pages including:
  - Home
  - About
  - Products
  - Company History
  - Contact

- Modular component-based structure
- Optimized for performance and SEO

---

## Tech Stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **JavaScript**
- **Node.js**

---

## Project Structure

```
ntml-website
│
├── public
│
├── src
│   ├── app
│   │   ├── about
│   │   ├── contact
│   │   ├── history
│   │   ├── products
│   │   ├── layout.js
│   │   └── page.js
│   │
│   └── components
│       └── Navbar.js
│
├── package.json
└── next.config.js
```

---

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/ntml-website.git
```

Navigate into the project folder:

```
cd ntml-website
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in your browser:

```
http://localhost:3000
```

---

## Pages

| Page     | Description                                   |
| -------- | --------------------------------------------- |
| Home     | Introduction to NTML and overview of products |
| About    | Company overview and mission                  |
| History  | Background and establishment of NTML          |
| Products | Overview of available trucks and vehicles     |
| Contact  | Company contact details and inquiries         |

---

## Future Improvements

- Product detail pages for each truck model
- Image gallery for vehicles
- Contact form integration
- CMS integration for easier content updates
- Deployment to Vercel

---

## Deployment

This project can be easily deployed using **Vercel**.

```
npm run build
```

Then deploy via:

https://vercel.com
