# ValeAnalize V26 — Scroll + Guitar Target Fix

V26 keeps the approved V25 branding/artwork and GP-50 functionality, and fixes two workflow issues:

- The document no longer uses body/page scrolling. The app shell is locked to the viewport and the `<main>` area is the only scroll container, preventing the Home page from scrolling far beyond its content on iPhone Safari.
- Import explicitly selects an **Electric Guitar** or **Acoustic Guitar** target family. The selected family is carried into analysis and preset generation rather than allowing the audio classifier to silently switch families.
- **Guitar Track / Stem Priority** mode is explicitly labelled. When a clean guitar stem is supplied, that stem is the primary analysis source; the full-song mode remains available for mixed references.

Branding is unchanged from V25 and remains embedded/self-contained.
