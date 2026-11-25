SURFACE PENCIL — Multilingual showcase

1. In your existing surface-pencil-showcase repository, replace index.html and tour.html.
2. Add i18n.js alongside both HTML files. Keep assets/ui.png unchanged.
3. Add your six animated WebP files to the ROOT video directory (not assets/video):
   video/video1.webp — Four scatter modes
   video/video2.webp — Edge controls
   video/video3.webp — Transform and variation
   video/video4.webp — Face Camera
   video/video5.webp — Elevation and box preview (formerly Ground Cover video6)
   video/video6.webp — Linked-instance file-size comparison
4. Commit and Push. Use GitHub Pages main / root.
5. Copy SUPERHIVE_EMBED.html into the Superhive Product Description Code View. Keep the URL without any version parameters.

Translations are local in i18n.js. The main page sends the chosen language to the same-origin tour iframe. The original UI screenshot and video pixels cannot be translated by HTML. The small English text outside the outer iframe is for Superhive's minimum native description length.

The outer iframe is non-scrolling; the tour iframe retains its 720px independent native scroll. The outer height uses a generous responsive fallback plus frame-sizing:content-height where supported. If Superhive removes the responsive sizing CSS or if there is extra space/clipping on a specific device, adjust the iframe height in the embed. Do not modify the height of the inner tour iframe to fix the outer height.

No GitHub API, no manifest, no external translation service. Actual video assets are not included. The few-kilobyte and 30% figures are the creator's demonstration results, not universal performance guarantees. Linked mesh geometry is not duplicated; scatter metadata and viewport evaluation still have costs.
