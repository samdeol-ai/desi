Test Git Commit

==============================================
CSS COLOR & FONT REFERENCE
==============================================

--- COLORS ---

Burgundy Scale (--burg-*)
  --burg-950: #0F0309   (darkest)
  --burg-900: #1C0610
  --burg-800: #2E0D1C
  --burg-700: #4A1528
  --burg-600: #6B1F38
  --burg-500: #8C2748   (primary accent)
  --burg-400: #B03C5E
  --burg-300: #D4748E
  --burg-200: #EAB4C2
  --burg-100: #F5D5DF   (lightest)

Red Scale (--red-*)
  --red-700: #7F0000
  --red-600: #9B1212
  --red-500: #B71C1C
  --red-400: #C62828
  --red-300: #E53935
  --red-200: #EF9A9A

Black Scale (--black-*)
  --black:   #0A0A0A   (page background)
  --black-2: #111111
  --black-3: #1A1A1A
  --black-4: #242424

Text Colors (--txt-*)
  --txt-primary:   #FFFFFF
  --txt-secondary: rgba(255,255,255,0.75)
  --txt-muted:     rgba(255,255,255,0.48)
  --txt-subtle:    rgba(255,255,255,0.28)

--- FONTS ---

Font Families
  --serif: 'Cormorant Garamond', Georgia, serif   (headings)
  --sans:  'Outfit', 'Segoe UI', sans-serif       (body, UI)

Google Fonts Import
  Cormorant Garamond: weights 400, 600, 700 (normal + italic)
  Outfit: weights 300, 400, 500, 600

Usage
  body / buttons / inputs / labels  →  var(--sans)
  h1, h2, h3, h4, h5, h6            →  var(--serif)

Heading Sizes (fluid via clamp)
  h1: clamp(36px, 6vw, 80px)
  h2: clamp(26px, 4vw, 52px)
  h3: clamp(20px, 3vw, 34px)
  h4: clamp(17px, 2.5vw, 24px)
  p:  16px, line-height 1.75
