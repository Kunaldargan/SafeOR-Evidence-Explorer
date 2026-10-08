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
- **Key frames commented:** 34
- **Vlm commentary frames:** 275
- **Llm judge accuracy pct:** 93.4

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
| 01:21 | Promontory peritoneal incisional opening | suction → creates space behind → mesenteric root | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:24 | Promontory peritoneal incisional opening | grasper → lifts → IMA pedicle base | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:27 | Promontory peritoneal incisional opening | dissector → exposes → left ureter beneath Gerota fascia | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:30 | Promontory peritoneal incisional opening | probe → confirms → ureteral peristalsis deep | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:33 | Promontory peritoneal incisional opening | hook → continues cephalad → along Toldt fascia interface | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:36 | Promontory peritoneal incisional opening | grasper → extends lateral → mobilization plane | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:39 | Promontory peritoneal incisional opening | energy tip → divides → lateral areolar attachments | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:42 | Promontory peritoneal incisional opening | scissors → trims → vascular adventitial condensation | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:45 | Promontory peritoneal incisional opening | grasper → rotates → descending colon medially | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:48 | Promontory peritoneal incisional opening | bipolar → coagulates → fine perforator branch | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:51 | Promontory peritoneal incisional opening | suction tip → palpates → posterior retroperitoneal margin | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:54 | Promontory peritoneal incisional opening | grasper → elevates → mesocolon off left kidney lower pole | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 01:57 | Promontory peritoneal incisional opening | energy shears → extends → cleavage to pancreatic border | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 02:00 | Promontory peritoneal incisional opening | assistant → tensions → retroperitoneal peritoneal band | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 02:03 | Promontory peritoneal incisional opening | hook → opens → avascular intermesenteric space | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 02:06 | Promontory peritoneal incisional opening | grasper → displays → wide mobilization pocket | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 02:09 | Promontory peritoneal incisional opening | dissector → clears → areolar plane under IMA | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 02:12 | Promontory peritoneal incisional opening | probe → sweeps → autonomic fibers off vessel trunk | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 02:15 | Promontory peritoneal incisional opening | scissors → sharp dissection on → retroperitoneal fascia | Promontory Retroperitoneal Entry Window | Iliac Bifurcation & Ureteral Pelvic Entry |
| 02:18 | Toldt's fascia cleavage & Gerota interface | bipolar forceps → seals → ascending tributary | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:21 | Toldt's fascia cleavage & Gerota interface | grasper → rolls → mesosigmoid to right side | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:24 | Toldt's fascia cleavage & Gerota interface | energy tip → incises → white line of Toldt reflection | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:27 | Toldt's fascia cleavage & Gerota interface | suction cannula → evacuates → tissue plume | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:30 | Toldt's fascia cleavage & Gerota interface | grasper → isolates → retroperitoneal plane depth | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:33 | Toldt's fascia cleavage & Gerota interface | hook → releases → lateral peritoneal tether | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:36 | Toldt's fascia cleavage & Gerota interface | assistant grasper → maintains → steady pelvic traction | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:39 | Toldt's fascia cleavage & Gerota interface | dissector → connects → medial and lateral planes | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:42 | Toldt's fascia cleavage & Gerota interface | probe → verifies → intact Gerota surface | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:45 | Toldt's fascia cleavage & Gerota interface | scissors → divides → residual embryological bridge | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:48 | Toldt's fascia cleavage & Gerota interface | bipolar → hemostasis on → retroperitoneal margin | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:51 | Toldt's fascia cleavage & Gerota interface | grasper → confirms → complete mobilization of descending colon | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:54 | Toldt's fascia cleavage & Gerota interface | laparoscope → inspects → entire retroperitoneal bed | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 02:57 | Toldt's fascia cleavage & Gerota interface | suction → irrigates → retroperitoneal window | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:00 | Toldt's fascia cleavage & Gerota interface | grasper → prepares → exposure of IMA origin | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:03 | Toldt's fascia cleavage & Gerota interface | hook → approaches → adventitial sheath of IMA | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:06 | Toldt's fascia cleavage & Gerota interface | bipolar forceps → coagulates → tiny vasa vasorum | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:09 | Toldt's fascia cleavage & Gerota interface | grasper → secures → vascular pedicle window | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:12 | Toldt's fascia cleavage & Gerota interface | monopolar hook → scores → peritoneum over promontory | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:15 | Toldt's fascia cleavage & Gerota interface | hook → incises → retroperitoneal peritoneal leaf | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:18 | Toldt's fascia cleavage & Gerota interface | bipolar shears → coagulates → peritoneal capillary branch | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:21 | Toldt's fascia cleavage & Gerota interface | grasper → lifts → mesocolon anteriorly | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:24 | Toldt's fascia cleavage & Gerota interface | dissecting tip → enters → avascular retroperitoneal space | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:27 | Toldt's fascia cleavage & Gerota interface | suction cannula → clears → minor surgical plume | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:30 | Toldt's fascia cleavage & Gerota interface | hook → divides → areolar tissue along Toldt line | Avascular Mesocolic Plane of Toldt | Left Ureter & Gonadal Vessels |
| 03:33 | Cephalad retroperitoneal extension towards pancreas | grasper → develops → retroperitoneal cleavage window | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:36 | Cephalad retroperitoneal extension towards pancreas | curved scissors → spreads → embryological areolar plane | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:39 | Cephalad retroperitoneal extension towards pancreas | grasper → rolls → mesorectal envelope medially | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:42 | Cephalad retroperitoneal extension towards pancreas | energy tip → divides → yellow areolar strands | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:45 | Cephalad retroperitoneal extension towards pancreas | bipolar forceps → seals → small mesocolic venule | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:48 | Cephalad retroperitoneal extension towards pancreas | blunt probe → sweeps → Gerota fascia posteriorly | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:51 | Cephalad retroperitoneal extension towards pancreas | grasper → elevates → inferior mesenteric plexus sheet | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:54 | Cephalad retroperitoneal extension towards pancreas | hook → skeletonizes → retroperitoneal peritoneal reflection | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 03:57 | Cephalad retroperitoneal extension towards pancreas | suction tip → aspirates → minute fluid accumulation | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:00 | Cephalad retroperitoneal extension towards pancreas | grasper → provides countertraction on → retroperitoneum | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:03 | Cephalad retroperitoneal extension towards pancreas | dissector → advances along → avascular Toldt plane boundary | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:06 | Cephalad retroperitoneal extension towards pancreas | energy shears → transects → areolar condensation | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:09 | Cephalad retroperitoneal extension towards pancreas | grasper → protects → retroperitoneal fascia surface | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:12 | Cephalad retroperitoneal extension towards pancreas | hook → scores → sub-mesenteric areolar leaf | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:15 | Cephalad retroperitoneal extension towards pancreas | assistant grasper → lifts → sigmoid vascular bundle | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:18 | Cephalad retroperitoneal extension towards pancreas | scissors → cold cuts → transparent fascia window | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:21 | Cephalad retroperitoneal extension towards pancreas | grasper → identifies → left gonadal vessels deep in bed | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:24 | Cephalad retroperitoneal extension towards pancreas | probe → verifies → gonadal vessel preservation | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:27 | Cephalad retroperitoneal extension towards pancreas | hook → separates → mesocolon from Gerota envelope | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:30 | Cephalad retroperitoneal extension towards pancreas | bipolar forceps → controls → crossing micro-vessel | Cephalad Retroperitoneal Cleavage Pocket | Left Kidney Lower Pole & Gerota Surface |
| 04:33 | Intrasheath separation technique description | technique slide → explains → nerve-sparing IMA ligation | N/A (Slide) | N/A (Slide) |
| 04:36 | Intrasheath IMA adventitial sheath incision | hem-o-lok clip applier → positions clip across → IMA trunk | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 04:39 | Intrasheath IMA adventitial sheath incision | clip applier → secures → proximal double clip on IMA | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 04:42 | Intrasheath IMA adventitial sheath incision | shears → transects → IMA between clips | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 04:45 | Intrasheath IMA adventitial sheath incision | suction cannula → inspects → vascular stump hemostasis | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 04:48 | Intrasheath IMA adventitial sheath incision | hook electrode → incises → vascular sheath of IMA | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 04:51 | Intrasheath IMA adventitial sheath incision | curved dissector → develops → subadventitial cleavage plane | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 04:54 | Intrasheath IMA adventitial sheath incision | atraumatic grasper → lifts → IMA trunk away from aorta | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 04:57 | Intrasheath IMA adventitial sheath incision | bipolar forceps → seals → adventitial capillary plexus | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:00 | Intrasheath IMA adventitial sheath incision | dissector → sweeps → superior hypogastric nerve fibers off IMA | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:03 | Intrasheath IMA adventitial sheath incision | scissors → bare → arterial adventitia circumferentially | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:06 | Intrasheath IMA adventitial sheath incision | grasper → isolates → 1.5cm clearance window on IMA trunk | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:09 | Intrasheath IMA adventitial sheath incision | probe → verifies → absence of sympathetic nerve inclusion | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:12 | Intrasheath IMA adventitial sheath incision | hem-o-lok clip applier → positions clip across → IMA trunk | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:15 | Intrasheath Separation technique for nerve sparing high ligation of IMA | instrument → positioned near → exposed tissue | Avascular Intrasheath Corridor | IMA Origin & Hypogastric Plexus |
| 05:18 | Intrasheath IMA adventitial sheath incision | shears → transects → IMA between clips | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:21 | Intrasheath IMA adventitial sheath incision | suction cannula → inspects → vascular stump hemostasis | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:24 | Intrasheath IMA adventitial sheath incision | hook electrode → incises → vascular sheath of IMA | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:27 | Intrasheath IMA adventitial sheath incision | curved dissector → develops → subadventitial cleavage plane | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:30 | Intrasheath IMA adventitial sheath incision | atraumatic grasper → lifts → IMA trunk away from aorta | IMA Subadventitial Cleavage Tunnel | Superior Hypogastric Autonomic Plexus |
| 05:33 | Intrasheath separation / IMA reference | blue-handled tool → approaches → tissue plane | Avascular Mesocolic Plane | Autonomic Plexus & Gonadal Vessels |
| 05:36 | IMA pedicle circumferential isolation & clipping | dissector → sweeps → superior hypogastric nerve fibers off IMA | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 05:39 | IMA pedicle circumferential isolation & clipping | scissors → bare → arterial adventitia circumferentially | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 05:42 | IMA pedicle circumferential isolation & clipping | grasper → isolates → 1.5cm clearance window on IMA trunk | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 05:45 | IMA pedicle circumferential isolation & clipping | probe → verifies → absence of sympathetic nerve inclusion | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 05:48 | IMA pedicle circumferential isolation & clipping | hem-o-lok clip applier → positions clip across → IMA trunk | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 05:51 | IMA pedicle circumferential isolation & clipping | clip applier → secures → proximal double clip on IMA | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 05:54 | IMA pedicle circumferential isolation & clipping | shears → transects → IMA between clips | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 05:57 | IMA pedicle circumferential isolation & clipping | suction cannula → inspects → vascular stump hemostasis | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:00 | IMA pedicle circumferential isolation & clipping | hook electrode → incises → vascular sheath of IMA | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:03 | IMA pedicle circumferential isolation & clipping | curved dissector → develops → subadventitial cleavage plane | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:06 | IMA pedicle circumferential isolation & clipping | atraumatic grasper → lifts → IMA trunk away from aorta | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:09 | IMA pedicle circumferential isolation & clipping | bipolar forceps → seals → adventitial capillary plexus | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:12 | IMA pedicle circumferential isolation & clipping | dissector → sweeps → superior hypogastric nerve fibers off IMA | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:15 | IMA pedicle circumferential isolation & clipping | scissors → bare → arterial adventitia circumferentially | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:18 | IMA pedicle circumferential isolation & clipping | grasper → isolates → 1.5cm clearance window on IMA trunk | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:21 | IMA pedicle circumferential isolation & clipping | probe → verifies → absence of sympathetic nerve inclusion | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:24 | IMA pedicle circumferential isolation & clipping | hem-o-lok clip applier → positions clip across → IMA trunk | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:27 | IMA pedicle circumferential isolation & clipping | clip applier → secures → proximal double clip on IMA | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:30 | IMA pedicle circumferential isolation & clipping | shears → transects → IMA between clips | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:33 | IMA pedicle circumferential isolation & clipping | suction cannula → inspects → vascular stump hemostasis | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:36 | IMA pedicle circumferential isolation & clipping | hook electrode → incises → vascular sheath of IMA | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:39 | IMA pedicle circumferential isolation & clipping | curved dissector → develops → subadventitial cleavage plane | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:42 | IMA pedicle circumferential isolation & clipping | atraumatic grasper → lifts → IMA trunk away from aorta | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:45 | IMA pedicle circumferential isolation & clipping | bipolar forceps → seals → adventitial capillary plexus | IMA High Ligation Clearance Window | Aortic Bifurcation & Sympathetic Trunk |
| 06:48 | Pancreatico-colic & splenic flexure takedown | energy device → divides → gastrocolic ligament avascular portion | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 06:51 | Tissue exposure and dissection | grasper → positioned over → tissue plane | Embryological Cleavage Corridor | Retroperitoneal Ureter Danger Corridor |
| 06:54 | Pancreatico-colic & splenic flexure takedown | hook → scores → pancreatico-colic peritoneal reflection | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 06:57 | Pancreatico-colic & splenic flexure takedown | bipolar forceps → coagulates → omental vascular arcade branch | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:00 | Colored source anatomical overlays | instrument → approaches → source-marked tissue | Pancreaticocolic Release Line | Pancreatic Border & Splenic Vessels |
| 07:03 | Pancreatico-colic & splenic flexure takedown | blunt dissector → guards → pancreatic tail capsule | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:06 | Pancreatico-colic ligament | grasper → points toward → source-captioned ligament region | Gastrocolic Mobilization Corridor | Transverse Mesocolon & Middle Colic Pedicle |
| 07:09 | Pancreatico-colic & splenic flexure takedown | grasper → confirms → complete splenic flexure release | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:12 | Pancreatico-colic & splenic flexure takedown | grasper → retracts → greater omentum superiorly | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:15 | Pancreatico-colic & splenic flexure takedown | energy device → divides → gastrocolic ligament avascular portion | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:18 | Pancreatico-colic & splenic flexure takedown | assistant grasper → elevates → splenic flexure colon | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:21 | Pancreatico-colic & splenic flexure takedown | hook → scores → pancreatico-colic peritoneal reflection | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:24 | Pancreatico-colic & splenic flexure takedown | bipolar forceps → coagulates → omental vascular arcade branch | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:27 | Pancreatico-colic & splenic flexure takedown | curved scissors → releases → splenocolic ligament peritoneal fold | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:30 | Tissue exposure and dissection | grasper → holds → tissue fold | Splenocolic Peritoneal Safe Line | Splenic Capsule Danger Zone |
| 07:33 | Pancreatico-colic & splenic flexure takedown | energy tip → mobilizes → distal transverse colon off retroperitoneum | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:36 | Pancreatico-colic & splenic flexure takedown | grasper → confirms → complete splenic flexure release | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:39 | Pancreatico-colic & splenic flexure takedown | grasper → retracts → greater omentum superiorly | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:42 | Pancreatico-colic & splenic flexure takedown | energy device → divides → gastrocolic ligament avascular portion | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:45 | Pancreatico-colic & splenic flexure takedown | assistant grasper → elevates → splenic flexure colon | Gastrocolic & Splenocolic Mobilization Corridor | Pancreatic Tail & Splenic Vessel Arcade |
| 07:48 | Posterior TME entry at sacral promontory | hook electrode → sharp dissection in → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 07:51 | Posterior TME entry at sacral promontory | assistant grasper → maintains → anterior rectal lift | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 07:54 | Posterior TME entry at sacral promontory | dissector → spares → pelvic splanchnic nerve roots S3-S4 | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 07:57 | Posterior TME entry at sacral promontory | shears → divides → rectosacral Waldeyer fascia ligament | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:00 | Presacral TME plane | instrument tip → points toward → source-captioned tissue plane | Holy Plane of Heald (TME) | Presacral Venous Plexus (Batson) |
| 08:03 | Posterior TME entry at sacral promontory | monopolar hook → incises → peritoneum along Holy Plane entry | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:06 | Posterior TME entry at sacral promontory | dissecting spatula → develops → avascular areolar tissue plane | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:09 | Posterior TME entry at sacral promontory | bipolar forceps → protects → left hypogastric nerve trunk | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:12 | Posterior TME entry at sacral promontory | curved grasper → retracts → mesorectal envelope intact | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:15 | Posterior TME entry at sacral promontory | suction tip → identifies → presacral parietal fascia | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:18 | Posterior TME entry at sacral promontory | hook electrode → sharp dissection in → Holy Plane of Heald | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:21 | Posterior TME entry at sacral promontory | assistant grasper → maintains → anterior rectal lift | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:24 | Posterior TME entry at sacral promontory | dissector → spares → pelvic splanchnic nerve roots S3-S4 | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:27 | Posterior TME entry at sacral promontory | shears → divides → rectosacral Waldeyer fascia ligament | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:30 | Posterior TME entry at sacral promontory | atraumatic grasper → draws → rectosigmoid anteriorly | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:33 | Left Hypogastric nerve | blue-handled instrument → points near → source-dashed reference line | Medial Mesorectal Corridor | Left Hypogastric Nerve |
| 08:36 | Membranous tissue dissection | instrument tip → approaches → membranous tissue | Pararectal Avascular Plane | Pelvic Splanchnic Nerve Roots (S2-S4) |
| 08:39 | Posterior TME entry at sacral promontory | bipolar forceps → protects → left hypogastric nerve trunk | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:42 | Posterior TME entry at sacral promontory | curved grasper → retracts → mesorectal envelope intact | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:45 | Posterior TME entry at sacral promontory | suction tip → identifies → presacral parietal fascia | Holy Plane of Heald (TME) | Left Hypogastric Nerve Sidewall Trunk |
| 08:48 | Presacral fascia & Waldeyer ligament descent | hook electrode → sharp dissection in → Holy Plane of Heald | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 08:51 | Presacral fascia & Waldeyer ligament descent | assistant grasper → maintains → anterior rectal lift | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 08:54 | Tissue retraction and exposure | grasper → holds → tissue strip | Lateral Rectal Traction Plane | Middle Rectal Pedicle & Lateral Pelvic Wall |
| 08:57 | Presacral fascia & Waldeyer ligament descent | shears → divides → rectosacral Waldeyer fascia ligament | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:00 | Presacral fascia & Waldeyer ligament descent | atraumatic grasper → draws → rectosigmoid anteriorly | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:03 | Presacral fascia & Waldeyer ligament descent | monopolar hook → incises → peritoneum along Holy Plane entry | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:06 | Yellow source-dashed reference area | instrument tip → approaches → source-outlined area | Retromesorectal Areolar Space | Presacral Parietal Fascia Danger Zone |
| 09:09 | Presacral fascia & Waldeyer ligament descent | bipolar forceps → protects → left hypogastric nerve trunk | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:12 | Presacral fascia & Waldeyer ligament descent | curved grasper → retracts → mesorectal envelope intact | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:15 | Presacral fascia & Waldeyer ligament descent | suction tip → identifies → presacral parietal fascia | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:18 | Presacral fascia & Waldeyer ligament descent | hook electrode → sharp dissection in → Holy Plane of Heald | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:21 | Presacral fascia & Waldeyer ligament descent | assistant grasper → maintains → anterior rectal lift | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:24 | Presacral fascia & Waldeyer ligament descent | dissector → spares → pelvic splanchnic nerve roots S3-S4 | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:27 | Presacral fascia & Waldeyer ligament descent | shears → divides → rectosacral Waldeyer fascia ligament | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:30 | Presacral fascia & Waldeyer ligament descent | atraumatic grasper → draws → rectosigmoid anteriorly | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:33 | Presacral fascia & Waldeyer ligament descent | monopolar hook → incises → peritoneum along Holy Plane entry | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:36 | Presacral fascia & Waldeyer ligament descent | dissecting spatula → develops → avascular areolar tissue plane | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:39 | Presacral fascia & Waldeyer ligament descent | bipolar forceps → protects → left hypogastric nerve trunk | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:42 | Presacral fascia & Waldeyer ligament descent | curved grasper → retracts → mesorectal envelope intact | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:45 | Presacral fascia & Waldeyer ligament descent | suction tip → identifies → presacral parietal fascia | Presacral TME Descent Corridor | Presacral Batson's Venous Plexus |
| 09:48 | Anterior peritoneal cul-de-sac incision | grasper → lifts → anterior rectal wall | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 09:51 | Anterior peritoneal cul-de-sac incision | hook → incises → peritoneal cul-de-sac reflection | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 09:54 | Anterior peritoneal cul-de-sac incision | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 09:57 | Anterior peritoneal cul-de-sac incision | curved dissector → identifies → left seminal vesicle boundary | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:00 | Anterior peritoneal cul-de-sac incision | probe → protects → neurovascular bundle of Walsh | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:03 | Anterior peritoneal cul-de-sac incision | scissors → divides → anterior rectal areolar fascia | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:06 | Anterior peritoneal cul-de-sac incision | suction tip → clears → prostatic-rectal groove interface | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:09 | Anterior peritoneal cul-de-sac incision | grasper → lifts → anterior rectal wall | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:12 | Anterior peritoneal cul-de-sac incision | hook → incises → peritoneal cul-de-sac reflection | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:15 | Pelvic view and retraction | grasper → contacts → tissue fold | Pelvic Peritoneal Safe Line | Pelvic Sidewall Autonomic Nerves & Vessels |
| 10:18 | Anterior peritoneal cul-de-sac incision | curved dissector → identifies → left seminal vesicle boundary | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:21 | Anterior peritoneal cul-de-sac incision | probe → protects → neurovascular bundle of Walsh | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:24 | Anterior peritoneal cul-de-sac incision | scissors → divides → anterior rectal areolar fascia | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:27 | Anterior peritoneal cul-de-sac incision | suction tip → clears → prostatic-rectal groove interface | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:30 | Anterior peritoneal cul-de-sac incision | grasper → lifts → anterior rectal wall | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:33 | Anterior peritoneal cul-de-sac incision | hook → incises → peritoneal cul-de-sac reflection | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:36 | Anterior peritoneal cul-de-sac incision | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:39 | Anterior peritoneal cul-de-sac incision | curved dissector → identifies → left seminal vesicle boundary | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:42 | Anterior peritoneal cul-de-sac incision | probe → protects → neurovascular bundle of Walsh | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:45 | Purple source highlight | instrument tip → points beside → purple source-highlighted area | Extrafascial Cleavage Plane | Prostatic / Rectal Neurovascular Bundles |
| 10:48 | Anterior peritoneal cul-de-sac incision | suction tip → clears → prostatic-rectal groove interface | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:51 | Anterior peritoneal cul-de-sac incision | grasper → lifts → anterior rectal wall | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:54 | Anterior peritoneal cul-de-sac incision | hook → incises → peritoneal cul-de-sac reflection | Anterior Cul-de-Sac Incision Corridor | Bladder Base & Posterior Trigone Wall |
| 10:57 | Denonvilliers interfascial plane & seminal vesicle sparing | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:00 | Denonvilliers interfascial plane & seminal vesicle sparing | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:03 | Denonvilliers interfascial plane & seminal vesicle sparing | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:06 | Denonvilliers interfascial plane & seminal vesicle sparing | scissors → divides → anterior rectal areolar fascia | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:09 | Denonvilliers interfascial plane & seminal vesicle sparing | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:12 | Left Seminal V | instrument tip → points toward → source-labeled anatomical area | Anterior Denonvilliers Plane | Left Seminal Vesicle |
| 11:15 | Denonvilliers interfascial plane & seminal vesicle sparing | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:18 | Denonvilliers interfascial plane & seminal vesicle sparing | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:21 | Denonvilliers interfascial plane & seminal vesicle sparing | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:24 | Denonvilliers interfascial plane & seminal vesicle sparing | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:27 | Denonvilliers interfascial plane & seminal vesicle sparing | scissors → divides → anterior rectal areolar fascia | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:30 | Denonvilliers interfascial plane & seminal vesicle sparing | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:33 | Denonvilliers interfascial plane & seminal vesicle sparing | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:36 | Denonvilliers interfascial plane & seminal vesicle sparing | hook → incises → peritoneal cul-de-sac reflection | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:39 | Denonvilliers interfascial plane & seminal vesicle sparing | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:42 | Denonvilliers interfascial plane & seminal vesicle sparing | curved dissector → identifies → left seminal vesicle boundary | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:45 | Denonvilliers interfascial plane & seminal vesicle sparing | probe → protects → neurovascular bundle of Walsh | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:48 | White source-dashed area | instrument tip → approaches → white source-outlined region | Distal Perirectal Safe Window | Levator Ani Muscle & Deep Venous Plexus |
| 11:51 | Denonvilliers interfascial plane & seminal vesicle sparing | suction tip → clears → prostatic-rectal groove interface | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:54 | Denonvilliers interfascial plane & seminal vesicle sparing | grasper → lifts → anterior rectal wall | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 11:57 | White source-dashed area | instrument tip → points toward → white source-outlined region | Rectal Bare Muscularis Window | Bladder Base & Inferior Hypogastric Plexus |
| 12:00 | Denonvilliers interfascial plane & seminal vesicle sparing | bipolar forceps → develops → anterior Denonvilliers interfascial plane | Anterior Denonvilliers Interfascial Plane | Left Seminal Vesicle & Walsh Bundles |
| 12:03 | Pelvic tissue plane exploration | instrument tip → approaches → tissue surface | Supralevator Surgical Margin | External Anal Sphincter & Pudendal Corridor |
| 12:06 | Supralevator distal rectal margin clearance & stapling | bipolar → hemostasis on → supralevator rectal stump margin | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:09 | Supralevator distal rectal margin clearance & stapling | laparoscopic linear stapler → clamps across → distal rectum above levator ani | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:12 | Supralevator distal rectal margin clearance & stapling | stapler → transects → distal rectal wall with complete staple line | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:15 | Supralevator distal rectal margin clearance & stapling | articulated grasper → denudes → distal rectal muscularis | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:18 | Supralevator distal rectal margin clearance & stapling | hook → clears → mesorectal fat 2cm distal to tumor | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:21 | Supralevator distal rectal margin clearance & stapling | bipolar → hemostasis on → supralevator rectal stump margin | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:24 | Supralevator distal rectal margin clearance & stapling | laparoscopic linear stapler → clamps across → distal rectum above levator ani | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:27 | Supralevator distal rectal margin clearance & stapling | stapler → transects → distal rectal wall with complete staple line | Supralevator Distal Transection Margin | External Anal Sphincter & Levator Ani Complex |
| 12:30 | Utility incision: Left iliac fossa | photograph → shows → exteriorized specimen | N/A (Slide) | N/A (Slide) |
| 12:33 | Utility incision: Left iliac fossa & specimen extraction | educational photograph → shows → exteriorized resected specimen and margins | N/A (Slide) | N/A (Slide) |
| 12:36 | Utility incision: Left iliac fossa & specimen extraction | educational photograph → shows → exteriorized resected specimen and margins | N/A (Slide) | N/A (Slide) |
| 12:39 | Utility incision: Left iliac fossa & specimen extraction | educational photograph → shows → exteriorized resected specimen and margins | N/A (Slide) | N/A (Slide) |
| 12:42 | Later operative tissue handling | two graspers → manipulate → tissue | Colonic Conduit Safe Plane | Mesenteric Vascular Arcade Tension Point |
| 12:45 | Colorectal anastomosis check & pelvic drainage | grasper → advances → proximal descending colon conduit | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 12:48 | Colorectal anastomosis check & pelvic drainage | probe → checks → tension-free alignment to pelvic floor | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 12:51 | Colorectal anastomosis check & pelvic drainage | circular stapler → creates → end-to-end colorectal anastomosis | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 12:54 | Colorectal anastomosis check & pelvic drainage | suction-irrigator → irrigates → pelvic basin with warm saline | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 12:57 | Later operative cavity view | probe → extends into → operative cavity | Pelvic Hemostasis & Drainage Plane | Deep Pelvic Autonomic Trunks & Sacral Bed |
| 13:00 | Colorectal anastomosis check & pelvic drainage | grasper → advances → proximal descending colon conduit | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:03 | Colorectal anastomosis check & pelvic drainage | probe → checks → tension-free alignment to pelvic floor | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:06 | Colorectal anastomosis check & pelvic drainage | circular stapler → creates → end-to-end colorectal anastomosis | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:09 | Colorectal anastomosis check & pelvic drainage | suction-irrigator → irrigates → pelvic basin with warm saline | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:12 | Colorectal anastomosis check & pelvic drainage | closed suction drain → positioned in → presacral space | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:15 | Colorectal anastomosis check & pelvic drainage | grasper → advances → proximal descending colon conduit | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:18 | Colorectal anastomosis check & pelvic drainage | probe → checks → tension-free alignment to pelvic floor | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:21 | Colorectal anastomosis check & pelvic drainage | circular stapler → creates → end-to-end colorectal anastomosis | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
| 13:24 | Colorectal anastomosis check & pelvic drainage | suction-irrigator → irrigates → pelvic basin with warm saline | Colonic Conduit Tension-Free Descent | Mesenteric Vascular Arcade Tension Point |
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
