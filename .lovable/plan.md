

# Replace Timeline Section with UniQ AI Education Workflow

## Overview

Replace the 3 placeholder "Adept AI" timeline steps and the bottom card with content that reflects the actual UniQ AI platform workflow:

1. **Step 1 - Fetch Course & Curriculum** (replacing "End-to-end workflows")
2. **Step 2 - Fetch Study Materials** (replacing "Locate")
3. **Step 3 - Notify & Discover** (replacing "Web VQA")
4. **Bottom Card** - Platform evolution message (replacing "Your business evolves...")

---

## Step-by-Step Changes

### Step 1: Section3aCard.tsx - "Fetch Course & Curriculum"

**Left side:**
- Icon: `BookOpen` from lucide (replacing `AlignJustify`)
- Title: "Fetch Course & Curriculum"
- Description: "Automatically sync and structure your university's course catalog, syllabi, and curriculum modules into an organized learning path."

**Right side (interactive card mockup):**
- A card showing a university selector (UW logo + "University of Washington")
- Program dropdown showing "MSIS"
- A list of 3 course codes (MSIS 521 B, MSIS 522 B, MSIS 549 B) with small checkmarks
- Cursor label: "UniQ **Sync**"
- EVAL card: "UniQ Curriculum Sync" score 96

### Step 2: Section3bCard.tsx - "Fetch Study Materials"

**Left side:**
- Icon: `Search` or `Library` from lucide (replacing "x,y")
- Title: "Fetch Study Materials"
- Description: "Curate textbooks, GitHub repos, video lectures, research papers, and hands-on projects from multiple sources for each module."

**Right side (interactive card mockup):**
- User bubble: "Generate study guide for Advanced ML"
- A list showing resource categories being fetched: Core Books, GitHub Repos, Video Lectures, Research Papers, Online Courses
- Each with a small progress/check indicator
- Cursor label: "UniQ **Research**"
- EVAL card: "UniQ Study Guide" score 93

### Step 3: Section3cCard.tsx - "Notify & Discover"

**Left side:**
- Icon: `Send` or `Mail` from lucide (replacing browser/eye SVG)
- Title: "Notify & Discover"
- Description: "Email professors about your progress, get personalized job recommendations on LinkedIn, and stay connected with your academic journey."

**Right side (interactive card mockup):**
- Two action cards side by side or stacked:
  - "Notify Professor" card with an email preview (To: professor, Subject: Course completion - MSIS 549 B)
  - "Job Recommendations" card with a LinkedIn-style job listing mockup (e.g., "ML Engineer - Amazon")
- Cursor label: "UniQ **Connect**"
- EVAL card: "UniQ Engagement" score 91

### Step 4: Section3dCard.tsx - Bottom Card

**Right side text:**
- Title: "Your learning evolves. Your AI should too."
- Description: "Every update to your curriculum shouldn't require manual searching or outdated PDFs. UniQ enables continuous learning with real-time resource curation, so students always have access to the best materials."
- Button: "Explore Platform"

**Left side images:** Replace the business-themed images (marathon, insurance, car, woman) with education-themed mockup cards showing:
- A syllabus card snippet
- A study guide preview
- A notification/email card
- A job recommendation card

These will be CSS-styled cards (no new image assets needed) to match the existing visual language.

---

## Technical Details

### Files Modified

| File | Change |
|------|--------|
| `src/components/timeline/Section3aCard.tsx` | Replace Adept workflow content with curriculum fetch UI |
| `src/components/timeline/Section3bCard.tsx` | Replace Adept locate content with study material fetch UI |
| `src/components/timeline/Section3cCard.tsx` | Replace Adept VQA content with notify/discover UI |
| `src/components/Section3dCard.tsx` | Replace business content with education evolution message |

### Design Approach
- Keep the exact same card structure, grid pattern backgrounds, user bubble styling, cursor labels, and EVAL card format
- Only change the text content, icons, and mockup visuals to reflect UniQ AI's education workflow
- No new dependencies or assets required -- all mockups built with existing Tailwind + lucide icons
- Color scheme remains consistent (grayscale cards, dark cursor labels, orange accent on feature name)

