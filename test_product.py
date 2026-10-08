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

 for fp in ('index.html','style.css','app.js','analyze.py','ARCHITECTURE.md','README.md'):
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
print('PASS: darker/bolder box styling, vivid CV contours, educational-slide filtering,')
print('PASS: JavaScript syntax, no cross-case reference leakage, unseen-input inference abstention.')
