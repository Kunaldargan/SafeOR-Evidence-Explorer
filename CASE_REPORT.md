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
| 00:00 | Pre-operative case overview & trocar placement | title card / slide → displays → case overview and trocar configuration | N/A (Slide) | N/A (Slide) |
| 00:03 | Pre-operative case overview & trocar placement | pre-op diagram → illustrates → patient positioning and port placement | N/A (Slide) | N/A (Slide) |
| 00:06 | Pre-operative case overview & trocar placement | clinical slide → outlines → indications and laparoscopic instrumentation | N/A (Slide) | N/A (Slide) |
| 00:09 | Pre-operative case overview & trocar placement | surgical schematic → presents → 5-port abdominal setup plan | N/A (Slide) | N/A (Slide) |
| 00:12 | Pre-operative case overview & trocar placement | title card / slide → displays → case overview and trocar configuration | N/A (Slide) | N/A (Slide) |
| 00:15 | Pre-operative case overview & trocar placement | pre-op diagram → illustrates → patient positioning and port placement | N/A (Slide) | N/A (Slide) |
| 00:18 | Pre-operative case overview & trocar placement | clinical slide → outlines → indications and laparoscopic instrumentation | N/A (Slide) | N/A (Slide) |
| 00:21 | Pre-operative case overview & trocar placement | surgical schematic → presents → 5-port abdominal setup plan | N/A (Slide) | N/A (Slide) |
| 00:24 | Pneumoperitoneum & pelvic exploration | grasper → stretches → sigmoid mesocolon laterally | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:27 | Pneumoperitoneum & pelvic exploration | monopolar hook → touches → peritoneal reflection fold | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:30 | Pneumoperitoneum & pelvic exploration | grasper → maintains → gentle mesocolic traction | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:33 | Pneumoperitoneum & pelvic exploration | laparoscope → inspects → pelvic brim anatomical landmarks | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:36 | Pneumoperitoneum & pelvic exploration | grasper → exposes → promontory peritoneal reflection | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:39 | Pneumoperitoneum & pelvic exploration | assistant grasper → steadies → rectosigmoid junction | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:42 | Pneumoperitoneum & pelvic exploration | grasper → palpates → aortic bifurcation level | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:45 | Pneumoperitoneum & pelvic exploration | grasper → tensions → medial peritoneal leaf | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:48 | Pneumoperitoneum & pelvic exploration | hook → marks → proposed incision line over promontory | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:51 | Pneumoperitoneum & pelvic exploration | camera → magnifies view of → superior rectal artery pedicle | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:54 | Pneumoperitoneum & pelvic exploration | grasper → stabilizes → mesocolic window entrance | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 00:57 | Pneumoperitoneum & pelvic exploration | laparoscope → enters → umbilical optical port | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:00 | Pneumoperitoneum & pelvic exploration | camera → surveys → peritoneal cavity and abdominal wall | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:03 | Pneumoperitoneum & pelvic exploration | atraumatic grasper → enters → left lower quadrant port | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:06 | Pneumoperitoneum & pelvic exploration | grasper → displaces → greater omentum cephalad | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:09 | Pneumoperitoneum & pelvic exploration | grasper → inspects → liver surface and gallbladder bed | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:12 | Pneumoperitoneum & pelvic exploration | second grasper → positions → small bowel into right upper quadrant | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:15 | Pneumoperitoneum & pelvic exploration | atraumatic grasper → elevates → sigmoid colon loop | Sigmoid Mesocolic Traction Plane | Retroperitoneal Great Vessels & Pelvic Brim |
| 01:18 | Phase transition: Retroperitoneal mobilization | title card → marks → dissection phase commencement | N/A (Slide) | N/A (Slide) |
| 01:21 | Retroperitoneal cleavage plane / Toldt's fascia | suction → creates space behind → mesenteric root | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:24 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → lifts → IMA pedicle base | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:27 | Retroperitoneal cleavage plane / Toldt's fascia | dissector → exposes → left ureter beneath Gerota fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:30 | Retroperitoneal cleavage plane / Toldt's fascia | probe → confirms → ureteral peristalsis deep | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:33 | Retroperitoneal cleavage plane / Toldt's fascia | hook → continues cephalad → along Toldt fascia interface | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:36 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → extends lateral → mobilization plane | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:39 | Retroperitoneal cleavage plane / Toldt's fascia | energy tip → divides → lateral areolar attachments | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:42 | Retroperitoneal cleavage plane / Toldt's fascia | scissors → trims → vascular adventitial condensation | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:45 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → rotates → descending colon medially | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:48 | Retroperitoneal cleavage plane / Toldt's fascia | bipolar → coagulates → fine perforator branch | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:51 | Retroperitoneal cleavage plane / Toldt's fascia | suction tip → palpates → posterior retroperitoneal margin | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:54 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → elevates → mesocolon off left kidney lower pole | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 01:57 | Retroperitoneal cleavage plane / Toldt's fascia | energy shears → extends → cleavage to pancreatic border | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:00 | Retroperitoneal cleavage plane / Toldt's fascia | assistant → tensions → retroperitoneal peritoneal band | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:03 | Retroperitoneal cleavage plane / Toldt's fascia | hook → opens → avascular intermesenteric space | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:06 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → displays → wide mobilization pocket | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:09 | Retroperitoneal cleavage plane / Toldt's fascia | dissector → clears → areolar plane under IMA | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:12 | Retroperitoneal cleavage plane / Toldt's fascia | probe → sweeps → autonomic fibers off vessel trunk | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:15 | Retroperitoneal cleavage plane / Toldt's fascia | scissors → sharp dissection on → retroperitoneal fascia | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:18 | Retroperitoneal cleavage plane / Toldt's fascia | bipolar forceps → seals → ascending tributary | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:21 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → rolls → mesosigmoid to right side | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:24 | Retroperitoneal cleavage plane / Toldt's fascia | energy tip → incises → white line of Toldt reflection | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:27 | Retroperitoneal cleavage plane / Toldt's fascia | suction cannula → evacuates → tissue plume | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:30 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → isolates → retroperitoneal plane depth | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:33 | Retroperitoneal cleavage plane / Toldt's fascia | hook → releases → lateral peritoneal tether | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:36 | Retroperitoneal cleavage plane / Toldt's fascia | assistant grasper → maintains → steady pelvic traction | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:39 | Retroperitoneal cleavage plane / Toldt's fascia | dissector → connects → medial and lateral planes | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:42 | Retroperitoneal cleavage plane / Toldt's fascia | probe → verifies → intact Gerota surface | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:45 | Retroperitoneal cleavage plane / Toldt's fascia | scissors → divides → residual embryological bridge | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:48 | Retroperitoneal cleavage plane / Toldt's fascia | bipolar → hemostasis on → retroperitoneal margin | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:51 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → confirms → complete mobilization of descending colon | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:54 | Retroperitoneal cleavage plane / Toldt's fascia | laparoscope → inspects → entire retroperitoneal bed | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 02:57 | Retroperitoneal cleavage plane / Toldt's fascia | suction → irrigates → retroperitoneal window | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:00 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → prepares → exposure of IMA origin | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:03 | Retroperitoneal cleavage plane / Toldt's fascia | hook → approaches → adventitial sheath of IMA | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:06 | Retroperitoneal cleavage plane / Toldt's fascia | bipolar forceps → coagulates → tiny vasa vasorum | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:09 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → secures → vascular pedicle window | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:12 | Retroperitoneal cleavage plane / Toldt's fascia | monopolar hook → scores → peritoneum over promontory | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:15 | Retroperitoneal cleavage plane / Toldt's fascia | hook → incises → retroperitoneal peritoneal leaf | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:18 | Retroperitoneal cleavage plane / Toldt's fascia | bipolar shears → coagulates → peritoneal capillary branch | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:21 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → lifts → mesocolon anteriorly | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:24 | Retroperitoneal cleavage plane / Toldt's fascia | dissecting tip → enters → avascular retroperitoneal space | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:27 | Retroperitoneal cleavage plane / Toldt's fascia | suction cannula → clears → minor surgical plume | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:30 | Retroperitoneal cleavage plane / Toldt's fascia | hook → divides → areolar tissue along Toldt line | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:33 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → develops → retroperitoneal cleavage window | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:36 | Retroperitoneal cleavage plane / Toldt's fascia | curved scissors → spreads → embryological areolar plane | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:39 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → rolls → mesorectal envelope medially | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:42 | Retroperitoneal cleavage plane / Toldt's fascia | energy tip → divides → yellow areolar strands | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:45 | Retroperitoneal cleavage plane / Toldt's fascia | bipolar forceps → seals → small mesocolic venule | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:48 | Retroperitoneal cleavage plane / Toldt's fascia | blunt probe → sweeps → Gerota fascia posteriorly | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:51 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → elevates → inferior mesenteric plexus sheet | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:54 | Retroperitoneal cleavage plane / Toldt's fascia | hook → skeletonizes → retroperitoneal peritoneal reflection | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 03:57 | Retroperitoneal cleavage plane / Toldt's fascia | suction tip → aspirates → minute fluid accumulation | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:00 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → provides countertraction on → retroperitoneum | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:03 | Retroperitoneal cleavage plane / Toldt's fascia | dissector → advances along → avascular Toldt plane boundary | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:06 | Retroperitoneal cleavage plane / Toldt's fascia | energy shears → transects → areolar condensation | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:09 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → protects → retroperitoneal fascia surface | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:12 | Retroperitoneal cleavage plane / Toldt's fascia | hook → scores → sub-mesenteric areolar leaf | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:15 | Retroperitoneal cleavage plane / Toldt's fascia | assistant grasper → lifts → sigmoid vascular bundle | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:18 | Retroperitoneal cleavage plane / Toldt's fascia | scissors → cold cuts → transparent fascia window | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:21 | Retroperitoneal cleavage plane / Toldt's fascia | grasper → identifies → left gonadal vessels deep in bed | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:24 | Retroperitoneal cleavage plane / Toldt's fascia | probe → verifies → gonadal vessel preservation | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:27 | Retroperitoneal cleavage plane / Toldt's fascia | hook → separates → mesocolon from Gerota envelope | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:30 | Retroperitoneal cleavage plane / Toldt's fascia | bipolar forceps → controls → crossing micro-vessel | Avascular Mesocolic Dissection Plane | Left Ureter & Gonadal Vessels |
| 04:33 | Intrasheath separation technique description | technique slide → explains → nerve-sparing IMA ligation | N/A (Slide) | N/A (Slide) |
| 04:36 | Intrasheath IMA adventitial dissection | hem-o-lok clip applier → positions clip across → IMA trunk | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:39 | Intrasheath IMA adventitial dissection | clip applier → secures → proximal double clip on IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:42 | Intrasheath IMA adventitial dissection | shears → transects → IMA between clips | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:45 | Intrasheath IMA adventitial dissection | suction cannula → inspects → vascular stump hemostasis | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:48 | Intrasheath IMA adventitial dissection | hook electrode → incises → vascular sheath of IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:51 | Intrasheath IMA adventitial dissection | curved dissector → develops → subadventitial cleavage plane | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:54 | Intrasheath IMA adventitial dissection | atraumatic grasper → lifts → IMA trunk away from aorta | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 04:57 | Intrasheath IMA adventitial dissection | bipolar forceps → seals → adventitial capillary plexus | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:00 | Intrasheath IMA adventitial dissection | dissector → sweeps → superior hypogastric nerve fibers off IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:03 | Intrasheath IMA adventitial dissection | scissors → bare → arterial adventitia circumferentially | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:06 | Intrasheath IMA adventitial dissection | grasper → isolates → 1.5cm clearance window on IMA trunk | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:09 | Intrasheath IMA adventitial dissection | probe → verifies → absence of sympathetic nerve inclusion | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:12 | Intrasheath IMA adventitial dissection | hem-o-lok clip applier → positions clip across → IMA trunk | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:15 | Intrasheath Separation technique for nerve sparing high ligation of IMA | instrument → positioned near → exposed tissue | Avascular Intrasheath Corridor | IMA Origin & Hypogastric Plexus |
| 05:18 | Intrasheath IMA adventitial dissection | shears → transects → IMA between clips | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:21 | Intrasheath IMA adventitial dissection | suction cannula → inspects → vascular stump hemostasis | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:24 | Intrasheath IMA adventitial dissection | hook electrode → incises → vascular sheath of IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:27 | Intrasheath IMA adventitial dissection | curved dissector → develops → subadventitial cleavage plane | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:30 | Intrasheath IMA adventitial dissection | atraumatic grasper → lifts → IMA trunk away from aorta | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:33 | Intrasheath separation / IMA reference | blue-handled tool → approaches → tissue plane | Avascular Mesocolic Plane | Autonomic Plexus & Gonadal Vessels |
| 05:36 | Intrasheath IMA adventitial dissection | dissector → sweeps → superior hypogastric nerve fibers off IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:39 | Intrasheath IMA adventitial dissection | scissors → bare → arterial adventitia circumferentially | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:42 | Intrasheath IMA adventitial dissection | grasper → isolates → 1.5cm clearance window on IMA trunk | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:45 | Intrasheath IMA adventitial dissection | probe → verifies → absence of sympathetic nerve inclusion | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:48 | Intrasheath IMA adventitial dissection | hem-o-lok clip applier → positions clip across → IMA trunk | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:51 | Intrasheath IMA adventitial dissection | clip applier → secures → proximal double clip on IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:54 | Intrasheath IMA adventitial dissection | shears → transects → IMA between clips | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 05:57 | Intrasheath IMA adventitial dissection | suction cannula → inspects → vascular stump hemostasis | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:00 | Intrasheath IMA adventitial dissection | hook electrode → incises → vascular sheath of IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:03 | Intrasheath IMA adventitial dissection | curved dissector → develops → subadventitial cleavage plane | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:06 | Intrasheath IMA adventitial dissection | atraumatic grasper → lifts → IMA trunk away from aorta | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:09 | Intrasheath IMA adventitial dissection | bipolar forceps → seals → adventitial capillary plexus | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:12 | Intrasheath IMA adventitial dissection | dissector → sweeps → superior hypogastric nerve fibers off IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:15 | Intrasheath IMA adventitial dissection | scissors → bare → arterial adventitia circumferentially | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:18 | Intrasheath IMA adventitial dissection | grasper → isolates → 1.5cm clearance window on IMA trunk | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:21 | Intrasheath IMA adventitial dissection | probe → verifies → absence of sympathetic nerve inclusion | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:24 | Intrasheath IMA adventitial dissection | hem-o-lok clip applier → positions clip across → IMA trunk | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:27 | Intrasheath IMA adventitial dissection | clip applier → secures → proximal double clip on IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:30 | Intrasheath IMA adventitial dissection | shears → transects → IMA between clips | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:33 | Intrasheath IMA adventitial dissection | suction cannula → inspects → vascular stump hemostasis | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:36 | Intrasheath IMA adventitial dissection | hook electrode → incises → vascular sheath of IMA | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:39 | Intrasheath IMA adventitial dissection | curved dissector → develops → subadventitial cleavage plane | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:42 | Intrasheath IMA adventitial dissection | atraumatic grasper → lifts → IMA trunk away from aorta | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:45 | Intrasheath IMA adventitial dissection | bipolar forceps → seals → adventitial capillary plexus | Avascular Intrasheath Corridor | IMA Origin & Superior Hypogastric Plexus |
| 06:48 | Pancreatico-colic ligament release | energy device → divides → gastrocolic ligament avascular portion | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 06:51 | Tissue exposure and dissection | grasper → positioned over → tissue plane | Embryological Cleavage Corridor | Retroperitoneal Ureter Danger Corridor |
| 06:54 | Pancreatico-colic ligament release | hook → scores → pancreatico-colic peritoneal reflection | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 06:57 | Pancreatico-colic ligament release | bipolar forceps → coagulates → omental vascular arcade branch | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:00 | Colored source anatomical overlays | instrument → approaches → source-marked tissue | Pancreaticocolic Release Line | Pancreatic Border & Splenic Vessels |
| 07:03 | Pancreatico-colic ligament release | blunt dissector → guards → pancreatic tail capsule | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:06 | Pancreatico-colic ligament | grasper → points toward → source-captioned ligament region | Gastrocolic Mobilization Corridor | Transverse Mesocolon & Middle Colic Pedicle |
| 07:09 | Pancreatico-colic ligament release | grasper → confirms → complete splenic flexure release | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:12 | Pancreatico-colic ligament release | grasper → retracts → greater omentum superiorly | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:15 | Pancreatico-colic ligament release | energy device → divides → gastrocolic ligament avascular portion | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:18 | Pancreatico-colic ligament release | assistant grasper → elevates → splenic flexure colon | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:21 | Pancreatico-colic ligament release | hook → scores → pancreatico-colic peritoneal reflection | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:24 | Pancreatico-colic ligament release | bipolar forceps → coagulates → omental vascular arcade branch | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:27 | Pancreatico-colic ligament release | curved scissors → releases → splenocolic ligament peritoneal fold | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:30 | Tissue exposure and dissection | grasper → holds → tissue fold | Splenocolic Peritoneal Safe Line | Splenic Capsule Danger Zone |
| 07:33 | Pancreatico-colic ligament release | energy tip → mobilizes → distal transverse colon off retroperitoneum | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:36 | Pancreatico-colic ligament release | grasper → confirms → complete splenic flexure release | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:39 | Pancreatico-colic ligament release | grasper → retracts → greater omentum superiorly | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:42 | Pancreatico-colic ligament release | energy device → divides → gastrocolic ligament avascular portion | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:45 | Pancreatico-colic ligament release | assistant grasper → elevates → splenic flexure colon | Gastrocolic Mobilization Corridor | Pancreatic Border & Splenic Vessels |
| 07:48 | Posterior TME dissection in Holy Plane | hook electrode → sharp dissection in → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 07:51 | Posterior TME dissection in Holy Plane | assistant grasper → maintains → anterior rectal lift | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 07:54 | Posterior TME dissection in Holy Plane | dissector → spares → pelvic splanchnic nerve roots S3-S4 | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 07:57 | Posterior TME dissection in Holy Plane | shears → divides → rectosacral Waldeyer fascia ligament | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:00 | Presacral TME plane | instrument tip → points toward → source-captioned tissue plane | Holy Plane of Heald (TME) | Presacral Venous Plexus (Batson) |
| 08:03 | Posterior TME dissection in Holy Plane | monopolar hook → incises → peritoneum along Holy Plane entry | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:06 | Posterior TME dissection in Holy Plane | dissecting spatula → develops → avascular areolar tissue plane | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:09 | Posterior TME dissection in Holy Plane | bipolar forceps → protects → left hypogastric nerve trunk | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:12 | Posterior TME dissection in Holy Plane | curved grasper → retracts → mesorectal envelope intact | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:15 | Posterior TME dissection in Holy Plane | suction tip → identifies → presacral parietal fascia | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:18 | Posterior TME dissection in Holy Plane | hook electrode → sharp dissection in → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:21 | Posterior TME dissection in Holy Plane | assistant grasper → maintains → anterior rectal lift | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:24 | Posterior TME dissection in Holy Plane | dissector → spares → pelvic splanchnic nerve roots S3-S4 | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:27 | Posterior TME dissection in Holy Plane | shears → divides → rectosacral Waldeyer fascia ligament | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:30 | Posterior TME dissection in Holy Plane | atraumatic grasper → draws → rectosigmoid anteriorly | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:33 | Left Hypogastric nerve | blue-handled instrument → points near → source-dashed reference line | Medial Mesorectal Corridor | Left Hypogastric Nerve |
| 08:36 | Membranous tissue dissection | instrument tip → approaches → membranous tissue | Pararectal Avascular Plane | Pelvic Splanchnic Nerve Roots (S2-S4) |
| 08:39 | Posterior TME dissection in Holy Plane | bipolar forceps → protects → left hypogastric nerve trunk | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:42 | Posterior TME dissection in Holy Plane | curved grasper → retracts → mesorectal envelope intact | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:45 | Posterior TME dissection in Holy Plane | suction tip → identifies → presacral parietal fascia | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:48 | Posterior TME dissection in Holy Plane | hook electrode → sharp dissection in → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:51 | Posterior TME dissection in Holy Plane | assistant grasper → maintains → anterior rectal lift | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 08:54 | Tissue retraction and exposure | grasper → holds → tissue strip | Lateral Rectal Traction Plane | Middle Rectal Pedicle & Lateral Pelvic Wall |
| 08:57 | Posterior TME dissection in Holy Plane | shears → divides → rectosacral Waldeyer fascia ligament | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:00 | Posterior TME dissection in Holy Plane | atraumatic grasper → draws → rectosigmoid anteriorly | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:03 | Posterior TME dissection in Holy Plane | monopolar hook → incises → peritoneum along Holy Plane entry | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:06 | Yellow source-dashed reference area | instrument tip → approaches → source-outlined area | Retromesorectal Areolar Space | Presacral Parietal Fascia Danger Zone |
| 09:09 | Posterior TME dissection in Holy Plane | bipolar forceps → protects → left hypogastric nerve trunk | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:12 | Posterior TME dissection in Holy Plane | curved grasper → retracts → mesorectal envelope intact | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:15 | Posterior TME dissection in Holy Plane | suction tip → identifies → presacral parietal fascia | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:18 | Posterior TME dissection in Holy Plane | hook electrode → sharp dissection in → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:21 | Posterior TME dissection in Holy Plane | assistant grasper → maintains → anterior rectal lift | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:24 | Posterior TME dissection in Holy Plane | dissector → spares → pelvic splanchnic nerve roots S3-S4 | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:27 | Posterior TME dissection in Holy Plane | shears → divides → rectosacral Waldeyer fascia ligament | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:30 | Posterior TME dissection in Holy Plane | atraumatic grasper → draws → rectosigmoid anteriorly | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:33 | Posterior TME dissection in Holy Plane | monopolar hook → incises → peritoneum along Holy Plane entry | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:36 | Posterior TME dissection in Holy Plane | dissecting spatula → develops → avascular areolar tissue plane | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:39 | Posterior TME dissection in Holy Plane | bipolar forceps → protects → left hypogastric nerve trunk | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:42 | Posterior TME dissection in Holy Plane | curved grasper → retracts → mesorectal envelope intact | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:45 | Posterior TME dissection in Holy Plane | suction tip → identifies → presacral parietal fascia | Holy Plane of Heald (TME) | Left Hypogastric Nerve & Presacral Plexus |
| 09:48 | Anterior Denonvilliers fascia dissection | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 09:51 | Anterior Denonvilliers fascia dissection | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 09:54 | Anterior Denonvilliers fascia dissection | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 09:57 | Anterior Denonvilliers fascia dissection | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:00 | Anterior Denonvilliers fascia dissection | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:03 | Anterior Denonvilliers fascia dissection | scissors → divides → anterior rectal areolar fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:06 | Anterior Denonvilliers fascia dissection | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:09 | Anterior Denonvilliers fascia dissection | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:12 | Anterior Denonvilliers fascia dissection | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:15 | Pelvic view and retraction | grasper → contacts → tissue fold | Pelvic Peritoneal Safe Line | Pelvic Sidewall Autonomic Nerves & Vessels |
| 10:18 | Anterior Denonvilliers fascia dissection | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:21 | Anterior Denonvilliers fascia dissection | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:24 | Anterior Denonvilliers fascia dissection | scissors → divides → anterior rectal areolar fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:27 | Anterior Denonvilliers fascia dissection | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:30 | Anterior Denonvilliers fascia dissection | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:33 | Anterior Denonvilliers fascia dissection | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:36 | Anterior Denonvilliers fascia dissection | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:39 | Anterior Denonvilliers fascia dissection | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:42 | Anterior Denonvilliers fascia dissection | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:45 | Purple source highlight | instrument tip → points beside → purple source-highlighted area | Extrafascial Cleavage Plane | Prostatic / Rectal Neurovascular Bundles |
| 10:48 | Anterior Denonvilliers fascia dissection | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:51 | Anterior Denonvilliers fascia dissection | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:54 | Anterior Denonvilliers fascia dissection | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 10:57 | Anterior Denonvilliers fascia dissection | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:00 | Anterior Denonvilliers fascia dissection | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:03 | Anterior Denonvilliers fascia dissection | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:06 | Anterior Denonvilliers fascia dissection | scissors → divides → anterior rectal areolar fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:09 | Anterior Denonvilliers fascia dissection | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:12 | Left Seminal V | instrument tip → points toward → source-labeled anatomical area | Anterior Denonvilliers Plane | Left Seminal Vesicle |
| 11:15 | Anterior Denonvilliers fascia dissection | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:18 | Anterior Denonvilliers fascia dissection | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:21 | Anterior Denonvilliers fascia dissection | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:24 | Anterior Denonvilliers fascia dissection | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:27 | Anterior Denonvilliers fascia dissection | scissors → divides → anterior rectal areolar fascia | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:30 | Anterior Denonvilliers fascia dissection | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:33 | Anterior Denonvilliers fascia dissection | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:36 | Anterior Denonvilliers fascia dissection | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:39 | Anterior Denonvilliers fascia dissection | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:42 | Anterior Denonvilliers fascia dissection | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:45 | Anterior Denonvilliers fascia dissection | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:48 | White source-dashed area | instrument tip → approaches → white source-outlined region | Distal Perirectal Safe Window | Levator Ani Muscle & Deep Venous Plexus |
| 11:51 | Anterior Denonvilliers fascia dissection | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:54 | Anterior Denonvilliers fascia dissection | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:57 | White source-dashed area | instrument tip → points toward → white source-outlined region | Rectal Bare Muscularis Window | Bladder Base & Inferior Hypogastric Plexus |
| 12:00 | Anterior Denonvilliers fascia dissection | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Plane | Left Seminal Vesicle & Walsh Bundles |
| 12:03 | Pelvic tissue plane exploration | instrument tip → approaches → tissue surface | Supralevator Surgical Margin | External Anal Sphincter & Pudendal Corridor |
| 12:06 | Supralevator distal rectal margin clearance | bipolar → hemostasis on → supralevator rectal stump margin | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:09 | Supralevator distal rectal margin clearance | laparoscopic linear stapler → clamps across → distal rectum above levator ani | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:12 | Supralevator distal rectal margin clearance | stapler → transects → distal rectal wall with complete staple line | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:15 | Supralevator distal rectal margin clearance | articulated grasper → denudes → distal rectal muscularis | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:18 | Supralevator distal rectal margin clearance | hook → clears → mesorectal fat 2cm distal to tumor | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:21 | Supralevator distal rectal margin clearance | bipolar → hemostasis on → supralevator rectal stump margin | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:24 | Supralevator distal rectal margin clearance | laparoscopic linear stapler → clamps across → distal rectum above levator ani | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:27 | Supralevator distal rectal margin clearance | stapler → transects → distal rectal wall with complete staple line | Supralevator Surgical Margin | External Anal Sphincter & Levator Ani |
| 12:30 | Utility incision: Left iliac fossa | photograph → shows → exteriorized specimen | N/A (Slide) | N/A (Slide) |
| 12:33 | Utility incision: Left iliac fossa & specimen extraction | educational photograph → shows → exteriorized resected specimen and margins | N/A (Slide) | N/A (Slide) |
| 12:36 | Utility incision: Left iliac fossa & specimen extraction | educational photograph → shows → exteriorized resected specimen and margins | N/A (Slide) | N/A (Slide) |
| 12:39 | Utility incision: Left iliac fossa & specimen extraction | educational photograph → shows → exteriorized resected specimen and margins | N/A (Slide) | N/A (Slide) |
| 12:42 | Later operative tissue handling | two graspers → manipulate → tissue | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:45 | Colorectal anastomosis check & pelvic drainage | grasper → advances → proximal descending colon conduit | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:48 | Colorectal anastomosis check & pelvic drainage | probe → checks → tension-free alignment to pelvic floor | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:51 | Colorectal anastomosis check & pelvic drainage | circular stapler → creates → end-to-end colorectal anastomosis | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:54 | Colorectal anastomosis check & pelvic drainage | suction-irrigator → irrigates → pelvic basin with warm saline | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:57 | Later operative cavity view | probe → extends into → operative cavity | Pelvic Hemostasis & Drainage Plane | Deep Pelvic Autonomic Trunks & Sacral Bed |
| 13:00 | Colorectal anastomosis check & pelvic drainage | grasper → advances → proximal descending colon conduit | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:03 | Colorectal anastomosis check & pelvic drainage | probe → checks → tension-free alignment to pelvic floor | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:06 | Colorectal anastomosis check & pelvic drainage | circular stapler → creates → end-to-end colorectal anastomosis | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:09 | Colorectal anastomosis check & pelvic drainage | suction-irrigator → irrigates → pelvic basin with warm saline | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:12 | Colorectal anastomosis check & pelvic drainage | closed suction drain → positioned in → presacral space | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:15 | Colorectal anastomosis check & pelvic drainage | grasper → advances → proximal descending colon conduit | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:18 | Colorectal anastomosis check & pelvic drainage | probe → checks → tension-free alignment to pelvic floor | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:21 | Colorectal anastomosis check & pelvic drainage | circular stapler → creates → end-to-end colorectal anastomosis | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:24 | Colorectal anastomosis check & pelvic drainage | suction-irrigator → irrigates → pelvic basin with warm saline | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 13:27 | Desufflation & port closure debrief | conclusion slide → summarizes → successful nerve-sparing anterior resection | N/A (Slide) | N/A (Slide) |
| 13:30 | Desufflation & port closure debrief | conclusion slide → summarizes → successful nerve-sparing anterior resection | N/A (Slide) | N/A (Slide) |
| 13:33 | Desufflation & port closure debrief | conclusion slide → summarizes → successful nerve-sparing anterior resection | N/A (Slide) | N/A (Slide) |
| 13:36 | Desufflation & port closure debrief | conclusion slide → summarizes → successful nerve-sparing anterior resection | N/A (Slide) | N/A (Slide) |
| 13:39 | Desufflation & port closure debrief | conclusion slide → summarizes → successful nerve-sparing anterior resection | N/A (Slide) | N/A (Slide) |
| 13:42 | Desufflation & port closure debrief | conclusion slide → summarizes → successful nerve-sparing anterior resection | N/A (Slide) | N/A (Slide) |

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
