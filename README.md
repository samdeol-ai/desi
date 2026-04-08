# Desi Theatre — GitHub Pages Website

## File Structure

```
/ (repository root)
├── index.html        ← Homepage
├── shows.html        ← Current show + past productions
├── about.html        ← Our story, vision, mission, timeline
├── team.html         ← Meet the company
├── join.html         ← Volunteer + auditions
├── contact.html      ← Contact form, venue, donate
├── css/
│   ├── style.css     ← All shared styles (edit colours/fonts here)
│   └── shared.js     ← Auto-injects nav + footer into every page
└── images/           ← Drop image assets here (see below)
```

## Deploying to GitHub Pages

### Option A — New repository
1. Create a new GitHub repository (e.g. `desitheater`)
2. Upload ALL files from this zip, preserving the folder structure
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose branch `main`, folder `/ (root)`
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/desitheater/`

### Option B — Existing repository
1. Make sure you're on the `main` branch
2. Drag and drop all files into the repo root (keep the `css/` folder together)
3. Commit the changes
4. Enable Pages in **Settings → Pages** if not already on

### Option C — GitHub Desktop
1. Clone your repo locally
2. Copy all these files into the cloned folder
3. Commit and push via GitHub Desktop

---

## Why This Structure Works on GitHub Pages

All HTML files live in the **root** of the repository. Every path reference uses the same relative format:

```html
<link rel="stylesheet" href="css/style.css" />   <!-- works from root -->
<script src="css/shared.js"></script>              <!-- works from root -->
<a href="shows.html">Shows</a>                    <!-- works from root -->
```

Because every HTML file is at the same depth, `css/style.css` resolves correctly from any page. No `../` traversal needed.

---

## Adding Images

Place images in the `/images/` folder and reference them like:

```html
<img src="images/hoover-theater.jpg" alt="Historic Hoover Theater" />
```

Recommended images to add:
- `images/show-poster.jpg` — Current show poster (used in hero)
- `images/team-photo.jpg` — Founding team group photo
- `images/hoover-theater.jpg` — Venue exterior
- `images/og-image.jpg` — 1200×630px social share image

---

## Editing Content

| What to change | Where |
|---|---|
| Show dates & times | `shows.html` — `.showtime-row` blocks |
| Show title & crew | `shows.html` — `.show-crew` section |
| Team members | `team.html` — `.team-member-card` blocks |
| Ticket booking link | `shows.html` — search `desitheatre.com/buy-ticket` |
| Donate link | `contact.html` & footer in `css/shared.js` |
| Colours & fonts | `css/style.css` — `:root` variables at the top |
| Nav & footer links | `css/shared.js` |

---

## Customising Colours

Open `css/style.css` and edit the `:root` block at the top:

```css
:root {
  --saffron:       #E8600A;   /* Primary brand colour */
  --saffron-light: #FEF0E4;   /* Light tint for backgrounds */
  --saffron-dark:  #7A3002;   /* Dark shade for text on light */
  --cream:         #FDF8F2;   /* Page background */
  --ink:           #1A1208;   /* Headings & dark text */
  --muted:         #7A6A55;   /* Body text */
}
```

Change `--saffron` to any hex and the whole site updates.
