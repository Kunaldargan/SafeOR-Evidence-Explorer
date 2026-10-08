# SafeOR Evidence Explorer — real frame analysis + explicit clinical abstention

A locally runnable, dependency-free **browser UI** bundled with 20 surgical source frames, actual OpenCV-derived color-component masks and quality measurements, 20 manually reviewed frame-specific action triplets, caption-informed phase hypotheses, 8 source-markup review polygons, timestamps, boundary proposals and a full pipeline audit.

## Run the analyzed reference case

From this folder:

```bash
python -m http.server 8000
```

Open **http://localhost:8000**. Use the frame slider, overlay toggles, action-triplet table, anatomy review checkpoints, pipeline audit, and **Export analysis**. In Frame analysis, choose **Draw GO concept** or **Draw NO-GO concept** and click the source image to add a deliberately hypothetical, nonclinical markup; these manual concepts are exported separately from computed detections. The clinical GO/NO-GO counters remain zero. The actual recorded computed mask PNGs are in `assets/analysis/` and the entire analysis output is `data/analysis.json`.

## Analyze other local data

```bash
python -m pip install opencv-python-headless numpy
python analyze.py --input ./my_frames --output .
# Or a local video:
python analyze.py --input ./my_surgery_video.mp4 --interval 3 --max-frames 200 --output .
```

Reference-case-specific source text, phase hypotheses and visually reviewed triplets **do not transfer** to new data. A newly uploaded case will have real pixel masks and QC, while unvalidated surgical inference **abstains**.

## What is actually analyzed?

| Architecture stage | Implementation | Status |
|---|---|---|
| Intake/frame extraction | Parse timestamped stills; optional real OpenCV video decoding | Executed |
| QC | Image size, sharpness proxy, pixel brightness, saturation | Executed |
| Scene boundaries | Visual histogram change and temporal-gap heuristic | Executed, proposals only |
| Clips | Temporal gap and slide heuristic | Executed, not surgical phase boundaries |
| Object detection | HSV + connected-component candidate boxes for blue/cyan instrument material | **Real pixel algorithm**, not a trained OD model |
| Segmentation | Per-pixel blue chromatic components, plus visually gated purple and yellow editorial-color masks on the reference case | **Real pixel masks**, not anatomy or SAM |
| Phase recognition | Reference-label-informed human-reviewed hypotheses | Provisional, not trained/validated classification |
| VLM notes | 20 unique visually reviewed factual descriptions | Provisional, no Gemini call |
| Action triplets | One human-interpreted visible instrument/action/target per source image | Provisional, not recognized from motion |
| Temporal fusion | Image timestamp joins | Executed |
| Risk GO/NO-GO | **No clinical risk inference** | Abstained |
| Hidden anatomy | **No hidden nerve/vessel localization** | Abstained |

## Limits / required next engineering step

The available input is **20 timestamped still images**, not a continuous surgical video. Existing purple/yellow regions, captions, and dotted lines have been drawn into the source images. They do not establish true organ boundaries. Action triplets are interpretive descriptions of isolated images rather than video-classifier predictions. No surgical-model weights, SAM weights, trained phase model, expert-segmented anatomy dataset or registered pre-operative scan was provided.

To provide clinical-type GO/NO-GO zones, obtain licensed and privacy-cleared full videos; surgeon-labeled landmarks and risk/exclusion boundaries; validated frame-level detection, temporal tracking and 3-D context; clinically defined risk criteria; prospective evaluation and regulatory/safety review. Do not use this demo as intraoperative decision support.

### Provenance

- Pixel masks + measurements: `real_computed_opencv`
- Caption/phase/triplets: `frame_visual_review_not_model`
- Review area polygons: `approximate_visual_indexing`
- Clinical clearance: `NOT_PROVIDED`

All data and source images stay local. No cloud calls or external CDNs.
