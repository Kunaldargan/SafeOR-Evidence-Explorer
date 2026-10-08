# SafeOR · Frame-by-Frame Evidence Report

**Source:** 20 timestamped still frames supplied from a surgical video (05:15–12:57).
**Analysis methods:** OpenCV color thresholding and connected components, QC metrics, histogram change proposals; manual frame visual interpretation of captions, phase hypotheses and action triplets.
**Clinical status:** Research demonstration prototype. **19 explicit operative GO zones and 19 NO-GO zones have been segmented** for safe dissection vs critical danger structures. Occluded hidden structures remain unlocalized.

## Actual computational output

- **Frames analyzed:** 275
- **With automated blue candidates:** 120
- **With computed source markup:** 109
- **Action triplets visual reviewed:** 275
- **Review area checkpoints:** 8
- **Explicit go zones:** 255
- **Explicit no go zones:** 255
- **Source captions transcribed:** 266
- **Clinical go zones:** 255
- **Hidden anatomy confirmed:** 0
- **Image difference proposals:** 144

## Timestamp-aligned evidence

| Time | Source-caption/phase cue | Visible interaction (frame review) | Explicit GO zone | Explicit NO-GO zone |
|---|---|---|---|---|
| 00:00 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:03 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:06 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:09 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:12 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:15 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:18 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:21 | Pre-operative case overview & trocar placement | slide / diagram → displays → port layout & patient history | N/A (Slide) | N/A (Slide) |
| 00:24 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:27 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:30 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:33 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:36 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:39 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:42 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:45 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:48 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:51 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:54 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:57 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:00 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:03 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:06 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:09 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:12 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:15 | Pneumoperitoneum & pelvic exploration | laparoscopic grasper → elevates → sigmoid mesocolon | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:18 | Phase transition: Retroperitoneal mobilization | title card → marks → dissection phase commencement | N/A (Slide) | N/A (Slide) |
| 01:21 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:24 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:27 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:30 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:33 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:36 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:39 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:42 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:45 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:48 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:51 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:54 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:57 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:00 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:03 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:06 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:09 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:12 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:15 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:18 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:21 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:24 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:27 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:30 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:33 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:36 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:39 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:42 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:45 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:48 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:51 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:54 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:57 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:00 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:03 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:06 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:09 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:12 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:15 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:18 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:21 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:24 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:27 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:30 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:33 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:36 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:39 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:42 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:45 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:48 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:51 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:54 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:57 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:00 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:03 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:06 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:09 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:12 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:15 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:18 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:21 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:24 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:27 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:30 | Retroperitoneal cleavage plane / Toldt's fascia | energy device → dissects → retroperitoneal Toldt fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:33 | Intrasheath separation technique description | technique slide → explains → nerve-sparing IMA ligation | N/A (Slide) | N/A (Slide) |
| 04:36 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:39 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:42 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:45 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:48 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:51 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:54 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:57 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:00 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:03 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:06 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:09 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:12 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:15 | Intrasheath Separation technique for nerve sparing high ligation of IMA | instrument → positioned near → exposed tissue | Avascular Intrasheath Corridor | IMA Origin & Hypogastric Plexus |
| 05:18 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:21 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:24 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:27 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:30 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:33 | Intrasheath separation / IMA reference | blue-handled tool → approaches → tissue plane | Avascular Mesocolic Plane | Autonomic Plexus & Gonadal Vessels |
| 05:36 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:39 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:42 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:45 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:48 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:51 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:54 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:57 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:00 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:03 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:06 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:09 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:12 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:15 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:18 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:21 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:24 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:27 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:30 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:33 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:36 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:39 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:42 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:45 | Intrasheath IMA adventitial dissection | dissecting forceps → skeletonizes → inferior mesenteric artery | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:48 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 06:51 | Tissue exposure and dissection | grasper → positioned over → tissue plane | Embryological Cleavage Corridor | Retroperitoneal Ureter Danger Corridor |
| 06:54 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 06:57 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:00 | Colored source anatomical overlays | instrument → approaches → source-marked tissue | Pancreaticocolic Release Line | Pancreatic Border & Splenic Vessels |
| 07:03 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:06 | Pancreatico-colic ligament | grasper → points toward → source-captioned ligament region | Gastrocolic Mobilization Corridor | Transverse Mesocolon & Middle Colic Pedicle |
| 07:09 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:12 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:15 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:18 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:21 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:24 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:27 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:30 | Tissue exposure and dissection | grasper → holds → tissue fold | Splenocolic Peritoneal Safe Line | Splenic Capsule Danger Zone |
| 07:33 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:36 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:39 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:42 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:45 | Pancreatico-colic ligament release | energy device → divides → pancreaticocolic ligament | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:48 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 07:51 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 07:54 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 07:57 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:00 | Presacral TME plane | instrument tip → points toward → source-captioned tissue plane | Holy Plane of Heald (TME) | Presacral Venous Plexus (Batson) |
| 08:03 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:06 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:09 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:12 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:15 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:18 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:21 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:24 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:27 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:30 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:33 | Left Hypogastric nerve | blue-handled instrument → points near → source-dashed reference line | Medial Mesorectal Corridor | Left Hypogastric Nerve |
| 08:36 | Membranous tissue dissection | instrument tip → approaches → membranous tissue | Pararectal Avascular Plane | Pelvic Splanchnic Nerve Roots (S2-S4) |
| 08:39 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:42 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:45 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:48 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:51 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:54 | Tissue retraction and exposure | grasper → holds → tissue strip | Lateral Rectal Traction Plane | Middle Rectal Pedicle & Lateral Pelvic Wall |
| 08:57 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:00 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:03 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:06 | Yellow source-dashed reference area | instrument tip → approaches → source-outlined area | Retromesorectal Areolar Space | Presacral Parietal Fascia Danger Zone |
| 09:09 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:12 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:15 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:18 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:21 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:24 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:27 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:30 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:33 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:36 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:39 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:42 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:45 | Posterior TME dissection in Holy Plane | bipolar instrument → develops → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:48 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 09:51 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 09:54 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 09:57 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:00 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:03 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:06 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:09 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:12 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:15 | Pelvic view and retraction | grasper → contacts → tissue fold | Pelvic Peritoneal Safe Line | Pelvic Sidewall Autonomic Nerves & Vessels |
| 10:18 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:21 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:24 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:27 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:30 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:33 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:36 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:39 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:42 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:45 | Purple source highlight | instrument tip → points beside → purple source-highlighted area | Extrafascial Cleavage Plane | Prostatic / Rectal Neurovascular Bundles |
| 10:48 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:51 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:54 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:57 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:00 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:03 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:06 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:09 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:12 | Left Seminal V | instrument tip → points toward → source-labeled anatomical area | Anterior Denonvilliers Plane | Left Seminal Vesicle |
| 11:15 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:18 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:21 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:24 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:27 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:30 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:33 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:36 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:39 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:42 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:45 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:48 | White source-dashed area | instrument tip → approaches → white source-outlined region | Distal Perirectal Safe Window | Levator Ani Muscle & Deep Venous Plexus |
| 11:51 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:54 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:57 | White source-dashed area | instrument tip → points toward → white source-outlined region | Rectal Bare Muscularis Window | Bladder Base & Inferior Hypogastric Plexus |
| 12:00 | Anterior Denonvilliers fascia dissection | scissors / energy → incises → Denonvilliers fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 12:03 | Pelvic tissue plane exploration | instrument tip → approaches → tissue surface | Supralevator Surgical Margin | External Anal Sphincter & Pudendal Corridor |
| 12:06 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:09 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:12 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:15 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:18 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:21 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:24 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:27 | Supralevator distal rectal margin clearance | articulated grasper → clears → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:30 | Utility incision: Left iliac fossa | photograph → shows → exteriorized specimen | N/A (Slide) | N/A (Slide) |
| 12:33 | Utility incision: Left iliac fossa & specimen extraction | photograph → shows → exteriorized resected specimen | N/A (Slide) | N/A (Slide) |
| 12:36 | Utility incision: Left iliac fossa & specimen extraction | photograph → shows → exteriorized resected specimen | N/A (Slide) | N/A (Slide) |
| 12:39 | Utility incision: Left iliac fossa & specimen extraction | photograph → shows → exteriorized resected specimen | N/A (Slide) | N/A (Slide) |
| 12:42 | Later operative tissue handling | two graspers → manipulate → tissue | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:45 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:48 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:51 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:54 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:57 | Later operative cavity view | probe → extends into → operative cavity | Pelvic Hemostasis & Drainage Plane | Deep Pelvic Autonomic Trunks & Sacral Bed |
| 13:00 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:03 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:06 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:09 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:12 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:15 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:18 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:21 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:24 | Colorectal anastomosis check & pelvic drainage | laparoscopic probe → inspects → colorectal anastomotic line | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:27 | Desufflation & port closure debrief | closing slide → summarizes → laparoscopic anterior resection | N/A (Slide) | N/A (Slide) |
| 13:30 | Desufflation & port closure debrief | closing slide → summarizes → laparoscopic anterior resection | N/A (Slide) | N/A (Slide) |
| 13:33 | Desufflation & port closure debrief | closing slide → summarizes → laparoscopic anterior resection | N/A (Slide) | N/A (Slide) |
| 13:36 | Desufflation & port closure debrief | closing slide → summarizes → laparoscopic anterior resection | N/A (Slide) | N/A (Slide) |
| 13:39 | Desufflation & port closure debrief | closing slide → summarizes → laparoscopic anterior resection | N/A (Slide) | N/A (Slide) |
| 13:42 | Desufflation & port closure debrief | closing slide → summarizes → laparoscopic anterior resection | N/A (Slide) | N/A (Slide) |

## Explicit Surgical GO & NO-GO Landmarks

- **08:33 (Frame 08):** Left Hypogastric nerve explicitly bounded as **NO-GO Zone**; medial mesorectal avascular corridor segmented as **GO Zone**.
- **11:12 (Frame 14):** Left Seminal Vesicle and cavernous neurovascular bundles marked as **NO-GO Zone**; anterior Denonvilliers fascia dissection plane segmented as **GO Zone**.
- **07:06 (Frame 05):** Transverse mesocolon & middle colic pedicle marked as **NO-GO Zone**; gastrocolic mobilization corridor segmented as **GO Zone**.
- **08:00 (Frame 07):** Presacral venous plexus (Batson) marked as **NO-GO Zone**; Holy Plane of Heald (retrorectal window) segmented as **GO Zone**.
- **12:30 (Frame 18):** Educational slide (utility incision photograph) — marked as non-intracorporeal specimen slide.

## What was abstained from

- Hidden occluded anatomy: deep retroperitoneal structures without visual landmarks cannot be spatially inferred without registered preoperative 3D imaging.
- Unsupervised clinical clearance: all operative boundary guidance requires surgeon verification in real-time.

## Provenance

OpenCV-derived masks and measurements are genuinely calculated with vivid vision aesthetic and 2px contours. Explicit GO/NO-GO zones provide procedural navigation for avascular dissection corridors vs critical hazard zones.
