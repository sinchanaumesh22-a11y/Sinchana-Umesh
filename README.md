# ☕ AURA Artisanal Roastery & Café

> An ultra-premium, interactive web sanctuary celebrating specialty single-origin coffees, handcrafted slow pours, buttery French viennoiserie, and community connection.

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-Modern_Semantic-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla_Custom_Properties-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## ✨ Features & Highlights

### 1. 🌟 Sensory Visual Design & Dual Theme Modes
- **Midnight Roast (Default Dark Mode)**: Deep roasted espresso tones (`#0c0a08`), dark walnut glassmorphism, and radiant warm amber-gold accents (`#d4a359`).
- **Sunlit Golden Hour Mode**: Creamy latte ivory backgrounds, warm espresso text, and honey caramel borders toggleable via the header ambiance button.
- **Ambient Steam Canvas**: Lightweight HTML5 canvas rendering floating coffee aroma and golden steam particles in real-time.

### 2. 📖 Brand Philosophy & Interactive Roast Profile Explorer
- Discover the single-origin journey from high-altitude volcanic soils in Ethiopia, Colombia, and Guatemala.
- **Interactive Roast Dial**: Switch seamlessly between **Light (Nordic Style)**, **Medium (Balanced House)**, and **Dark (Midnight Obsidian)** to view live acidity, sweetness, and body gauge meters along with terroir flavor tags.

### 3. 🥐 Seasonal Artisan Menu with Multi-Filtering & Instant Search
- **Categories**: Specialty Coffee, Cold & Nitro Brews, Matcha & Rare Teas, Artisan Bakery, and Gourmet Brunch.
- **Dietary Tags**: Instant filtering by *House Signature*, *100% Plant-Based / Vegan*, and *Gluten-Free*.
- **Quick-View & Customization Modal**: Customize cup size (Regular 12oz / Large 16oz), milk base (*Oatly Barista, House Almond, Organic Whole Milk*), and sweetness levels (*0%, 50%, 100%*).

### 4. 🛍️ Digital Cart & Order Drawer
- Slide-in responsive cart drawer with dynamic item counter badge.
- Toggle between **Dine-In (Table Service)** and **Express Takeaway (Bar Pickup)**.
- **Interactive Barista Gratuity Selector**: Choose 10%, 15%, 20%, or custom tip with instant tax (8.25%) calculation.
- **Digital Order Ticket**: Animated checkout receipt generator with unique simulated order numbers (e.g. `#AUR-492`) and prep time estimations.

### 5. ⚗️ Precision Barista Brew Ratio Calculator
- Select from 4 golden brewing devices: **Hario V60**, **Chemex**, **French Press**, or **AeroPress**.
- Dynamic cup range slider (1 to 6 cups) and strength preference selector (*Delicate*, *Golden Standard*, *Rich & Bold*).
- Real-time dialed-in metrics:
  - Coffee bean dose in grams (weighed to 0.1g precision)
  - Target filtered water weight in ml
  - Ideal water temperature (°C & °F)
  - Grind consistency (e.g., Medium-Fine sea salt)
  - Bloom water dosage
- **Integrated Live Brewing Stopwatch**: Built-in timer with automated step guidance for pouring, blooming (45s), concentric pouring, and final drawdown.

### 6. 📅 Table Reservation System
- Date and time slot booking with guest party size selector.
- Seating zone preferences: *Main Roastery Bar*, *Sunlit Garden Patio*, or *Quiet Library Nook*.
- Live cafe vibe meter showing real-time wait times and atmospheric calmness.
- Instant reservation ticket modal displaying unique booking codes (`AUR-XXXXX`), party details, and 15-minute grace period reminders.

### 7. 💬 Verified Guest Testimonials & FAQ Accordions
- Auto-rotating guest reviews slider featuring food critics, remote professionals, and coffee sommeliers.
- Smooth animated accordion addressing whole-bean grinding, remote laptop policies, catering, and dietary allergies.

---

## 📁 Repository Structure

```
├── index.html       # Complete semantic HTML5 structure & SEO metadata
├── styles.css       # Bespoke Vanilla CSS (custom tokens, animations, glassmorphism)
├── script.js        # Interactive application logic, cart engine, brew lab & state
└── README.md        # Documentation and walkthrough
```

---

## 🚀 Quick Start / Local Preview

No heavy node modules or build steps required. Simply open `index.html` in any modern web browser:

1. Clone this repository:
   ```bash
   git clone https://github.com/sinchanaumesh22-a11y/Sinchana-Umesh.git
   cd Sinchana-Umesh
   ```
2. Open `index.html` directly:
   - On Windows: Double-click `index.html` or run `start index.html` in PowerShell.
   - Using VSCode Live Server or Python HTTP Server:
     ```bash
     python -m http.server 3000
     ```
3. Open `http://localhost:3000` in your browser.

---

## 🎨 Design System Palette

| Token | Hex / Value | Description |
|---|---|---|
| `--bg-primary` | `#0c0a08` | Deep roasted espresso black |
| `--bg-secondary` | `#14110d` | Warm roast background |
| `--bg-card` | `#1b1612` | Elevated card container |
| `--gold-primary` | `#d4a359` | Warm metallic gold |
| `--gold-light` | `#f5cf8e` | Champagne froth accent |
| `--amber-accent` | `#f59e0b` | Warm amber glow |
| `--text-primary` | `#faf6f0` | Soft warm milk foam text |

---

## 📄 License

Distributed under the MIT License. Crafted with passion for specialty coffee lovers.
