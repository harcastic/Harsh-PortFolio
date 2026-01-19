# CSS Grid Layout Structure - Visual Guide

## Main Layout Architecture

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    .hero                           ┃
┃  (min-height: 100vh, display: flex)                ┃
┃                                                    ┃
┃  ┌──────────────────────────────────────────────┐ ┃
┃  │         .bgBlob .blob1                       │ ┃
┃  │    (absolute, animated background)          │ ┃
┃  └──────────────────────────────────────────────┘ ┃
┃                                                    ┃
┃  ┌──────────────────────────────────────────────┐ ┃
┃  │         .bgBlob .blob2                       │ ┃
┃  │    (absolute, animated background)          │ ┃
┃  └──────────────────────────────────────────────┘ ┃
┃                                                    ┃
┃  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓   ┃
┃  ┃       .heroContainer (CSS GRID)           ┃   ┃
┃  ┃   (max-width: 1400px, display: grid)     ┃   ┃
┃  ┃                                           ┃   ┃
┃  ┃  ┌─────────────────┬─────────────────┐   ┃   ┃
┃  ┃  │   1fr Column    │   1fr Column    │   ┃   ┃
┃  ┃  │      (LEFT)     │     (RIGHT)     │   ┃   ┃
┃  ┃  │      gap: 3rem  │                 │   ┃   ┃
┃  ┃  │                 │                 │   ┃   ┃
┃  ┃  │  .heroContent   │ .splineContainer│   ┃   ┃
┃  ┃  │                 │                 │   ┃   ┃
┃  ┃  └─────────────────┴─────────────────┘   ┃   ┃
┃  ┃                                           ┃   ┃
┃  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛   ┃
┃                                                    ┃
┃  ┌──────────────────────────────────────────────┐ ┃
┃  │      .scrollIndicator                        │ ┃
┃  │  (absolute, bottom: 2rem)                    │ ┃
┃  └──────────────────────────────────────────────┘ ┃
┃                                                    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Desktop Layout (> 1024px)

```
┌────────────────────────────────────────────────────────────┐
│  max-width: 1400px                                         │
│  display: grid                                             │
│  grid-template-columns: 1fr 1fr                            │
│  gap: 3rem (48px)                                          │
│                                                            │
│  ┌──────────────────────────┬──────────────────────────┐  │
│  │ .heroContent             │ .splineContainer         │  │
│  │ max-width: 550px         │ max-width: 500px         │  │
│  │ text-align: left         │ height: 500px            │  │
│  │                          │                          │  │
│  │ • Hi, I'm Harsh Raj      │ ┌────────────────────┐  │  │
│  │ • Cloud Engineer...      │ │                    │  │  │
│  │ • Building scalable...   │ │  Spline 3D Model   │  │  │
│  │ • [Social Links]         │ │  (Canvas/iframe)   │  │  │
│  │ • [View My Work]         │ │                    │  │  │
│  │                          │ └────────────────────┘  │  │
│  └──────────────────────────┴──────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘

COLUMN RATIO: 1:1 (Equal width after gap)
ALIGNMENT: Items centered vertically
CONTENT: Left-aligned text, centered 3D model
```

---

## Tablet Layout (768px - 1024px)

```
┌──────────────────────────────────────────────┐
│  max-width: 1400px                           │
│  display: grid                               │
│  grid-template-columns: 1fr 1fr              │
│  gap: 2rem (32px)                            │
│                                              │
│  ┌──────────────┬──────────────┐             │
│  │ .heroContent │ .splineContainer             │
│  │ max-width:   │ max-width: 400px           │
│  │   450px      │ height: 400px              │
│  │              │                            │
│  │ • Hi, I'm    │ ┌──────────────┐           │
│  │   Harsh      │ │              │           │
│  │ • Cloud...   │ │  3D Model    │           │
│  │ • Building   │ │              │           │
│  │ • [Social]   │ └──────────────┘           │
│  │ • [CTA]      │                            │
│  │              │                            │
│  └──────────────┴──────────────┘             │
│                                              │
└──────────────────────────────────────────────┘

OPTIMIZATION: Reduced sizes, maintained 2-column
SPACING: Tighter gap and smaller boxes
```

---

## Mobile Layout (< 768px)

```
┌──────────────────────────────┐
│  max-width: 100%             │
│  display: grid               │
│  grid-template-columns: 1fr  │
│  gap: 2rem                   │
│                              │
│  ┌────────────────────────┐  │
│  │ .heroContent           │  │
│  │ (order: 1)             │  │
│  │ text-align: center     │  │
│  │ max-width: 100%        │  │
│  │                        │  │
│  │  Hi, I'm Harsh Raj     │  │
│  │                        │  │
│  │  Cloud Engineer &      │  │
│  │  Full Stack Developer  │  │
│  │                        │  │
│  │  Building scalable...  │  │
│  │                        │  │
│  │  [Social Links]        │  │
│  │                        │  │
│  │  [View My Work]        │  │
│  │                        │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │ .splineContainer       │  │
│  │ (order: 2)             │  │
│  │ width: 100%            │  │
│  │ height: 350px          │  │
│  │                        │  │
│  │ ┌──────────────────┐   │  │
│  │ │   3D Model       │   │  │
│  │ │  (Interactive)   │   │  │
│  │ └──────────────────┘   │  │
│  │                        │  │
│  └────────────────────────┘  │
│                              │
└──────────────────────────────┘

LAYOUT: Vertical stack
ORDER: Content first (order: 1), Model second (order: 2)
ALIGNMENT: Center-aligned content, full-width model
INTERACTION: Touch-friendly sizing
```

---

## Small Mobile Layout (< 480px)

```
┌────────────────────────┐
│  padding: 1rem         │
│  display: grid         │
│  grid-template-columns │
│    : 1fr (single col)  │
│  gap: 1.5rem           │
│                        │
│  ┌──────────────────┐  │
│  │ .heroContent     │  │
│  │ padding: 1.5rem  │  │
│  │                  │  │
│  │ Hi, I'm          │  │
│  │ Harsh Raj        │  │
│  │                  │  │
│  │ Cloud Eng...     │  │
│  │                  │  │
│  │ [Social]         │  │
│  │ [CTA]            │  │
│  │                  │  │
│  └──────────────────┘  │
│                        │
│  ┌──────────────────┐  │
│  │ .splineContainer │  │
│  │ height: 300px    │  │
│  │                  │  │
│  │ ┌──────────────┐ │  │
│  │ │ 3D (Compact) │ │  │
│  │ └──────────────┘ │  │
│  │                  │  │
│  └──────────────────┘  │
│                        │
└────────────────────────┘

OPTIMIZATIONS:
- Reduced padding
- Smaller font sizes
- Reduced gap
- Smaller 3D model height
- All text still readable
- Buttons still tappable
```

---

## CSS Grid Reference

### Grid Property Breakdown

```css
.heroContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;    /* Two equal columns */
  gap: 3rem;                          /* Space between columns */
  align-items: center;                /* Vertical centering */
  justify-items: center;              /* Horizontal centering */
  position: relative;                 /* For z-index */
  z-index: 1;                         /* Above background blobs */
  width: 100%;                        /* Full container width */
  max-width: 1400px;                  /* Max desktop size */
  margin: 0 auto;                     /* Center container */
}
```

### Left Column (.heroContent)

```css
.heroContent {
  max-width: 550px;                   /* Content width */
  width: 100%;                        /* Fill grid cell */
  text-align: left;                   /* Left-align text */
  padding: 3rem;                      /* Internal spacing */
  background: linear-gradient(...);   /* Neumorphic style */
  border-radius: 32px;                /* Rounded corners */
  box-shadow: 22px 22px... -18px -18px...;  /* Soft shadow */
}
```

### Right Column (.splineContainer)

```css
.splineContainer {
  max-width: 500px;                   /* Model width */
  height: 500px;                      /* Fixed height */
  width: 100%;                        /* Fill grid cell */
  overflow: hidden;                   /* Clip content */
  border-radius: 32px;                /* Match content box */
  background: linear-gradient(...);   /* Neumorphic style */
  box-shadow: 22px 22px... -18px -18px...;  /* Matching shadow */
}

.splineContainer iframe,
.splineContainer canvas {
  width: 100% !important;             /* Ensure full width */
  height: 100% !important;            /* Ensure full height */
}
```

---

## Responsive Breakpoints

```
┌─────────────────────────────────────────────────┐
│  Desktop (>1024px)                              │
│  grid-template-columns: 1fr 1fr                 │
│  gap: 3rem                                      │
│  Full two-column experience                     │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│  Tablet (768px - 1024px)                        │
│  grid-template-columns: 1fr 1fr (maintained)    │
│  gap: 2rem (reduced)                            │
│  Reduced sizing for fit                         │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│  Mobile (<768px)                                │
│  grid-template-columns: 1fr (stacked)           │
│  gap: 2rem                                      │
│  Vertical layout with proper order              │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│  Small Mobile (<480px)                          │
│  grid-template-columns: 1fr (stacked)           │
│  gap: 1.5rem (tighter)                          │
│  Further optimizations                          │
└─────────────────────────────────────────────────┘
```

---

## Z-Index Stacking Order

```
Level 3: .scrollIndicator
         (Foreground animation)

Level 2: .heroContainer (z-index: 1)
         ├─ .heroContent
         └─ .splineContainer

Level 1: .bgBlob (animated background)
         ├─ .blob1
         └─ .blob2

Level 0: Body/Background
```

---

## Flexbox vs Grid (Why Grid?)

### Why Grid Was Chosen

```
Flexbox (Old approach - centering):
┌─────────────────────────────────────────┐
│           [Large box centered]          │
│                                         │
│  ├─ Heading                            │
│  ├─ Subtitle                           │
│  ├─ Description                        │
│  ├─ Social links                       │
│  └─ CTA Button                         │
│                                         │
└─────────────────────────────────────────┘

Grid (New approach - two-column):
┌──────────────────────────────────────────┐
│  [Left box]          [Right box]         │
│                                          │
│  ├─ Text content  ┌─ 3D Model           │
│  └─ Interactive   └─ Responsive         │
│                                          │
└──────────────────────────────────────────┘
```

**Benefits of Grid:**
- ✅ Natural two-column structure
- ✅ Equal-width columns (1fr 1fr)
- ✅ Better control over child alignment
- ✅ Responsive via single media query
- ✅ Cleaner responsive behavior

---

## Animation Flow

```
Timeline:
0ms ─── .heroContent fadeInUp (duration: 1s)
       └─ Enters smoothly from bottom
       
200ms ─ .splineContainer fadeInUp (delay: 0.2s, duration: 1s)
       └─ Follows content with slight delay
       
+ ongoing background animations
  ├─ .bgBlob float (20s infinite)
  └─ .scrollIndicator bounce (2s infinite)
```

---

**This architecture ensures:**
✅ Professional two-column layout
✅ Responsive at all breakpoints
✅ Content and 3D model properly aligned
✅ Clean visual hierarchy
✅ Performance optimized
✅ Maintainable structure

