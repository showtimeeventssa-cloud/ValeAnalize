# ValeAnalize V20 — REAL GP-50 PRST ENGINE

Clean GitHub Pages package. Legacy artwork files, old logo files, duplicate icons, and macOS metadata have been removed because the artwork is embedded in `index.html` and only the current PWA icons are needed at runtime.

## GP-50 preset export
- Imports and validates a real 552-byte Valeton GP-50 `.prst` file.
- Uses the supplied COUNTRY26 patch as a validated real-device template.
- `Export ANALYZED .prst` builds a real GP-50 binary from the analyzed reference and selected guitar profile, then recalculates CRC and validates the binary before download.
- `Export Edited .prst` exports the exact binary represented by the manual editor.
- Manual editing exposes module ON/OFF, model ID/category, 80 float parameter slots, chain order and footswitch values.

## Accuracy note
The exported file is an actual GP-50-compatible `.prst` container. Audio analysis cannot prove the hidden original studio preset of a mastered song. ValeAnalize therefore generates a measured candidate and is designed to be refined by recording the real GP-50 output and running empirical calibration.

Valeton documents the GP-50 as supporting 100 patch slots, up to 9 simultaneous modules, 20 IR slots, 80 NAM slots, USB audio/re-amp and USB MIDI.
