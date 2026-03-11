# danielarackal.com

Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Project Structure

```
danielarackal.com/
├── app/
│   ├── globals.css       # Tailwind + CSS variables
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (composes all sections)
├── components/
│   ├── Navbar.tsx        # Frosted glass nav with scroll-spy
│   ├── Hero.tsx          # Animated hero section
│   ├── About.tsx         # Bio section
│   ├── Experience.tsx    # Card-based experience
│   ├── Projects.tsx      # Featured + other projects
│   ├── Skills.tsx        # Skills grid with icon cards
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer
│   ├── Reveal.tsx        # Scroll animation wrapper
│   └── SectionHeader.tsx # Reusable section header
├── lib/
│   ├── data.ts           # All content (edit this to update site)
│   └── hooks.ts          # Custom React hooks
├── public/
│   ├── da-logo.png       # Your DA logo
│   └── resume.pdf        # Your resume (add this)
└── ...config files
```

## Customization

All site content lives in `lib/data.ts`. Edit that one file to update:
- Experience entries
- Projects
- Skills
- Social links

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com):

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/danielarackal7/danielarackal.com.git
git push -u origin main
```

Then import the repo on Vercel — it auto-detects Next.js and deploys.

## TODO

- [ ] Add LinkedIn URL in `lib/data.ts`
- [ ] Add `da-logo.png` to `public/`
- [ ] Add `resume.pdf` to `public/`
- [ ] Update dip detection model GitHub link when repo is ready
