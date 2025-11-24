# Invictus Landing Page - Component Structure

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Top navigation with logo and CTA
│   ├── Hero.jsx                # Hero section with headline and lead form
│   ├── ValueProps.jsx          # Three key value propositions
│   ├── RecentWorks.jsx         # Portfolio showcase grid
│   ├── Testimonials.jsx        # Client testimonials
│   ├── ClientLogoStrip.jsx     # Infinite scrolling client logos
│   ├── Pricing.jsx             # Pricing tiers
│   ├── Timeline.jsx            # 2-day delivery timeline
│   ├── ComparisonTable.jsx     # Comparison with competitors
│   ├── TargetAudience.jsx      # Target customer types
│   ├── ProcessSteps.jsx        # 4-step onboarding process
│   ├── FAQ.jsx                 # Accordion FAQ section
│   ├── UrgencyTimer.jsx        # Countdown timer sticky bar
│   └── Footer.jsx              # Footer with social links
└── index.jsx                   # Main landing page assembly
```

## 🎨 Component Overview

### **Navbar**
- Sticky navigation bar
- Logo with hover animation
- WhatsApp contact link
- CTA button to scroll to form

### **Hero**
- Main headline and value proposition
- Scarcity tracker (7 spots left)
- Lead capture form with validation
- Grid background animation

### **ValueProps**
- Three benefit cards
- Icon animations on hover
- Customization, Speed, Mobile/SEO focus

### **RecentWorks**
- 6 portfolio project cards
- Image hover effects (grayscale to color)
- Links to live projects

### **Testimonials**
- 3 client reviews
- 5-star ratings
- Avatar initials

### **ClientLogoStrip**
- Infinite horizontal scroll animation
- Client brand names
- Text stroke effect

### **Pricing**
- 3 pricing tiers (Starter, Business, Premium)
- Feature lists with checkmarks
- "Most Popular" badge on Business tier

### **Timeline**
- 2-day delivery breakdown
- Day 1: Design & Structure
- Day 2: Build & Launch

### **ComparisonTable**
- Comparison with Freelancers and Agencies
- 6 feature rows
- Highlighted Invictus column

### **TargetAudience**
- 6 customer type cards
- Icons for each industry
- Hover animations

### **ProcessSteps**
- 4-step onboarding flow
- Numbered steps with descriptions

### **FAQ**
- 8 common questions
- Accordion expand/collapse
- Smooth transitions

### **UrgencyTimer**
- Fixed bottom countdown timer
- Live countdown (demo: 3h 12m 15s)
- CTA button to claim offer

### **Footer**
- Company branding
- Social media links
- Copyright notice

## 🚀 Usage

Import the main component:

```jsx
import LandingPage from './src/index.jsx';

function App() {
  return <LandingPage />;
}
```

## 🎨 Design System

### Colors
- **Primary Green**: `#00DC82`
- **Background Dark**: `#050505`
- **Card Background**: `#1a1a1a`
- **Border**: `rgba(255,255,255,0.05)`

### Typography
- **Font Family**: Inter (sans-serif)
- **Display Font**: Space Grotesk

### Animations
- Hover scale transforms
- Color transitions
- Pulse effects on CTAs
- Smooth accordion animations

## 📦 Dependencies

- React
- lucide-react (for icons)
- Tailwind CSS (for styling)

## 🔧 Customization

Each component is self-contained and can be:
- Reordered in `index.jsx`
- Customized independently
- Removed if not needed
- Duplicated for variations

## 📱 Responsive Design

All components are fully responsive with:
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`
- Grid layouts that adapt
- Touch-friendly interactions
