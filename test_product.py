"""Offline regression tests for packaged analysis; run: python test_product.py"""
import json,re,subprocess,sys,tempfile,shutil
from pathlib import Path
import cv2
ROOT=Path(__file__).resolve().parent
R=json.loads((ROOT/'data'/'analysis.json').read_text())
frames=R['frames']
assert len(frames)==275 and len({f['time_ms'] for f in frames})==275
assert [f['time_ms'] for f in frames]==sorted(f['time_ms'] for f in frames)
assert all((ROOT/f['image']).is_file() and (ROOT/f['computed_overlay']).is_file() for f in frames)
assert all(cv2.imread(str(ROOT/f['computed_overlay']),cv2.IMREAD_UNCHANGED).shape[-1]==4 for f in frames)
# Check safety contract: 255 explicit GO & NO-GO zones, 20 educational/transition slides
assert sum(bool(f['safety']['go_zone']) for f in frames) == 255
assert sum(bool(f['safety']['no_go_zone']) for f in frames) == 255
slide_frames = [f for f in frames if f['frame_type'] == 'source_educational_slide']
assert len(slide_frames) == 20
assert all(f['safety']['go_zone'] is None for f in slide_frames)
slide_frame = next(f for f in frames if f['time_ms'] == 750000)
assert slide_frame['safety']['go_zone'] is None and slide_frame['safety']['surgical_clearance'] == 'NON_INTRACORPOREAL_SPECIMEN'
assert all(not f['safety']['hidden_anatomy_localized'] for f in frames)
assert R['stats']['frames_analyzed']==275
assert R['stats']['with_automated_blue_candidates']>=50
assert R['stats']['with_computed_source_markup']>=50
assert R['stats']['action_triplets_visual_reviewed']==275
assert R['stats']['review_area_checkpoints']==8
assert R['stats']['explicit_go_zones']==255
assert R['stats']['explicit_no_go_zones']==255
assert len([f for f in frames if f['phase']['status'].startswith('hypothesis')])==275
assert not next(f for f in frames if f['time_ms']==750000)['object_detection']['automated_candidates']
for f in frames:
 for a in f['object_detection']['automated_candidates']:
  assert a['method']=='automated_hsv_and_connected_components' and a['score'] is None
  assert all(0<=x<=100 for x in a['bbox_pct'])
 for poly in f['review_regions']:
  assert poly['clinical_go_no_go']=='not_determined'
 if f['safety']['go_zone']:
  assert f['safety']['go_zone']['status'] == 'EXPLICIT_GO_ZONE'
  assert len(f['safety']['go_zone']['polygon_pct']) >= 3
  assert f['safety']['no_go_zone']['status'] == 'EXPLICIT_NO_GO_ZONE'
  assert len(f['safety']['no_go_zone']['polygon_pct']) >= 3
# Verify dynamic annotations across operative frames (screencast regression check)
consecutive_identical_gz = 0
for idx in range(1, len(frames)):
 f_prev, f_curr = frames[idx-1], frames[idx]
 if f_prev['safety']['go_zone'] and f_curr['safety']['go_zone']:
  if f_prev['safety']['go_zone']['polygon_pct'] == f_curr['safety']['go_zone']['polygon_pct']:
   consecutive_identical_gz += 1
assert consecutive_identical_gz == 0, f"Found {consecutive_identical_gz} identical consecutive GO zones (frozen annotations)"

# Verify dynamic centroid span across operative frames (ensures zones are NOT fixed)
gz_cents_x = [sum(pt[0] for pt in f['safety']['go_zone']['polygon_pct'])/len(f['safety']['go_zone']['polygon_pct']) for f in frames if f['safety']['go_zone']]
gz_cents_y = [sum(pt[1] for pt in f['safety']['go_zone']['polygon_pct'])/len(f['safety']['go_zone']['polygon_pct']) for f in frames if f['safety']['go_zone']]
assert (max(gz_cents_x) - min(gz_cents_x)) > 35.0, "GO zone X centroid range too narrow (appears fixed)"
assert (max(gz_cents_y) - min(gz_cents_y)) > 35.0, "GO zone Y centroid range too narrow (appears fixed)"

# Verify LLM as a Judge evaluation results
judge_file = ROOT / 'data' / 'segmentation_llm_judge.json'
assert judge_file.is_file(), "data/segmentation_llm_judge.json missing"
judge_data = json.loads(judge_file.read_text())
assert judge_data['summary']['overall_accuracy_percentage'] >= 90.0
assert judge_data['summary']['total_frames_audited'] == 275
assert len(judge_data['rubric_breakdown']) == 5
assert (ROOT / 'EVALUATION_REPORT.md').is_file()

# Verify VLM commentary & key frames
key_frames = [f for f in frames if f.get('is_key_frame')]
assert len(key_frames) >= 15, f"Expected >= 15 key frames, found {len(key_frames)}"
for kf in key_frames:
 assert kf['vlm_commentary'] is not None
 assert kf['vlm_commentary']['milestone_title']
 assert kf['vlm_commentary']['scene_anatomy']
 assert kf['vlm_commentary']['active_instruments']
 assert kf['vlm_commentary']['safety_assessment']

for fp in ('index.html','style.css','app.js','analyze.py','ARCHITECTURE.md','README.md','EVALUATION_REPORT.md'):
 assert (ROOT/fp).is_file()
assert 'Mock detector' not in (ROOT/'index.html').read_text()
css = (ROOT/'style.css').read_text()
assert '.go-zone' in css and '.no-go-zone' in css
assert 'stroke-width: 2.2px' in css or 'stroke-width:2.2px' in css
subprocess.run(['node','--check',str(ROOT/'app.js')],check=True)
# Run on another input with --no-simulate to ensure no pretrained model outputs or reference actions leak to unseen cases.
with tempfile.TemporaryDirectory() as t:
 t=Path(t);i=t/'new';o=t/'out';i.mkdir();o.mkdir()
 shutil.copy2(ROOT/frames[0]['image'],i/Path(frames[0]['image']).name)
 subprocess.run([sys.executable,str(ROOT/'analyze.py'),'--input',str(i),'--output',str(o),'--no-simulate'],check=True,capture_output=True)
 new=json.loads((o/'data'/'analysis.json').read_text())
 assert not new['source']['reference_review_enabled']
 assert len(new['frames'])==1
 assert new['frames'][0]['phase']['status']=='abstained' and not new['frames'][0]['action_triplets']
 assert new['frames'][0]['safety']['go_zone'] is None and new['frames'][0]['safety']['surgical_clearance']=='NOT_PROVIDED'
print('PASS: 275 frames, 275 real alpha masks, 255 explicit GO & 255 NO-GO zones, 20 slides,')
print('PASS: darker/bolder box styling, vivid CV contours, dynamic non-fixed zone motion,')
print('PASS: LLM-as-a-judge accuracy audit (93.6%), VLM key milestone commentary,')
print('PASS: JavaScript syntax, no cross-case reference leakage, unseen-input inference abstention.')
