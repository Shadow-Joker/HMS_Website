---
description: Extract design inspiration and generate UI design guidelines
argument-hint: [output-filename]
---
# Ideate Design: Generate UI Guidelines from Inspiration

## Purpose

Analyze provided design inspiration (screenshots, markup, and optional source files) and extract clear, actionable UI design guidelines for the product being built.

This command focuses on **faithful extraction first**, with **minimal and justified extrapolation only when necessary**.

---

## Required Input

- **At least one inspiration image is required**
  - Screenshots of reference websites, apps, or UI sections
- Optional inputs:
  - Additional screenshots
  - Scraped or reference source files (e.g., `.html`, `.css`)
  - Short textual notes describing what the user likes or dislikes

If no images are provided, stop and request at least one screenshot.

---

## Output File

Write the output to: `ui-guidelines.md` (or `$ARGUMENTS` if provided)

---

## Analysis Instructions

### 1. Input Review (Mandatory)

- Enumerate all provided inputs:
  - Number of images
  - Type of images (full page, section, component)
  - Presence of source code files
- Confirm all inputs were successfully analyzed before proceeding

Do not skip or ignore any provided input.

---

### 2. Visual Design Extraction (Primary Focus)

From the inspiration material, **explicitly identify and document**:

#### Color & Theme

- Primary, secondary, and accent colors
- Background colors and surface hierarchy
- Gradients (direction, color stops, intensity)
- Contrast patterns (light/dark usage)

#### Typography

- Font families (or closest equivalents if unknown)
- Font weights and hierarchy
- Heading vs body text treatment
- Line height and spacing behavior
- Text emphasis styles (links, highlights, muted text)

#### Layout & Structure

- Grid system (columns, spacing, alignment)
- Section padding and margins
- Content density and whitespace usage
- Page flow and visual hierarchy

#### Components & UI Elements

- Buttons (shape, size, color, states if visible)
- Inputs and form elements
- Cards, containers, dividers
- Navigation elements
- Icons and icon style

#### Visual Style

- Border radius usage
- Shadows and elevation
- Depth vs flat design
- Overall aesthetic (minimal, bold, playful, serious, etc.)

---

### 3. Interaction & Motion (If Observable)

- Hover effects (color change, underline, elevation, etc.)
- Active / focus states
- Transitions or animations (speed, subtlety)

Only document interactions that are **visible or strongly implied** by the inputs.

---

### 4. Minimal Extrapolation (Strictly Limited)

If a **necessary UI behavior** is missing from the provided inspiration (e.g., hover state, focus style, disabled state):

- Propose a **minimal, conservative guideline**
- Base it directly on the existing visual language
- Clearly label it as an inferred guideline

Do **not** invent new styles, themes, or aesthetics.

This section should never dominate the document.

---

## Output Structure (`ui-guidelines.md`)

The generated file must include:

1. **Overview**

   - What kind of design language this represents
   - What the inspiration suggests overall
2. **Design Tokens**

   - Colors
   - Typography
   - Spacing
   - Border radius
   - Shadows
3. **Layout Guidelines**

   - Grid and spacing rules
   - Section structure
4. **Component Guidelines**

   - Buttons
   - Inputs
   - Cards
   - Navigation
   - Other recurring elements
5. **Interaction Guidelines**

   - Hover
   - Focus
   - Active states
   - Motion principles (if applicable)
6. **Inferred Guidelines (If Any)**

   - Clearly marked
   - Minimal
   - Justified

---

## Style & Discipline Rules

- Be **descriptive, not prescriptive**
- Do not redesign — only extract and translate
- Avoid generic UI advice
- Avoid dominance of inferred ideas
- Use clean markdown formatting
- Use bullet points and sub-sections for scannability

---

## Output Confirmation

After generating the guidelines:

1. Confirm the output file path
2. List all analyzed inputs
3. Explicitly mention if any inferred guidelines were added
4. State whether the design language is consistent or mixed

---

## Notes

- This command is for **design understanding and translation**, not implementation
- The goal is to create a **single source of truth** for UI decisions
- Faithfulness to inspiration is more important than creativity
