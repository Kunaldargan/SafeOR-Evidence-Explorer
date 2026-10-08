'use strict';
let report = null, activeIndex = 0, playing = null;
let options = { mask: true, boxes: true, review: true, go: true, nogo: true };
const demoAnnotations = {};
const $ = x => document.getElementById(x);
const safe = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const ts = ms => `${String(Math.floor(ms / 60000)).padStart(2, '0')}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}`;
const fnum = (x, suffix = '') => Number(x ?? 0).toLocaleString() + suffix;

function setView(view) {
  document.querySelectorAll('.nav').forEach(n => n.classList.toggle('active', n.dataset.view === view));
  document.querySelectorAll('.view').forEach(n => n.classList.toggle('active', n.id === 'view-' + view));
  $('pageCrumb').textContent = ({ 'overview': 'Overview', 'review': 'Frame analysis', 'actions': 'Action triplets', 'risk': 'Anatomy & risk', 'pipeline': 'Pipeline audit' })[view];
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function polyCenter(pts) {
  let x = pts.reduce((acc, p) => acc + p[0], 0) / pts.length;
  let y = pts.reduce((acc, p) => acc + p[1], 0) / pts.length;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function zoneMarkup(frame) {
  let out = '';
  // Source-markup review annotations
  if (options.review && frame.review_regions) {
    for (const o of frame.review_regions) {
      const pts = o.polygon_pct.map(p => p.join(',')).join(' ');
      const [cx, cy] = polyCenter(o.polygon_pct);
      out += `<polygon class="review-zone" points="${pts}"/><text class="review-label" x="${cx}" y="${Math.max(5, cy - 2)}" text-anchor="middle">SOURCE ANNOTATION</text>`;
    }
  }
  // Explicit surgical GO zones (safe avascular dissection corridors)
  if (options.go && frame.safety?.go_zone) {
    const gz = frame.safety.go_zone;
    const pts = gz.polygon_pct.map(p => p.join(',')).join(' ');
    const [cx, cy] = polyCenter(gz.polygon_pct);
    const lbl = `GO: ${gz.label}`;
    const bw = Math.min(50, lbl.length * 1.25 + 3);
    out += `<polygon class="go-zone" points="${pts}"/>` +
      `<rect class="badge-pill go-pill" x="${cx - bw / 2}" y="${cy - 2.6}" width="${bw}" height="3.8" rx="1"/>` +
      `<text class="go-label" x="${cx}" y="${cy - 0.2}" text-anchor="middle">${safe(lbl)}</text>`;
  }
  // Explicit surgical NO-GO zones (critical autonomic nerves & major pedicles)
  if (options.nogo && frame.safety?.no_go_zone) {
    const ngz = frame.safety.no_go_zone;
    const pts = ngz.polygon_pct.map(p => p.join(',')).join(' ');
    const [cx, cy] = polyCenter(ngz.polygon_pct);
    const lbl = `NO-GO: ${ngz.label}`;
    const bw = Math.min(54, lbl.length * 1.25 + 3);
    out += `<polygon class="no-go-zone" points="${pts}"/>` +
      `<rect class="badge-pill no-go-pill" x="${cx - bw / 2}" y="${cy - 2.6}" width="${bw}" height="3.8" rx="1"/>` +
      `<text class="no-go-label" x="${cx}" y="${cy - 0.2}" text-anchor="middle">${safe(lbl)}</text>`;
  }
  // Interactive user demo annotations
  for (const a of (demoAnnotations[frame.id] || [])) {
    const [x, y, w, h] = a.rect_pct;
    out += `<rect class="${a.type === 'demo-go' ? 'demo-go' : 'demo-no-go'}" x="${x}" y="${y}" width="${w}" height="${h}"/><text class="demo-label" x="${x + w / 2}" y="${Math.max(4, y - 1)}" text-anchor="middle">${a.type === 'demo-go' ? 'GO SKETCH' : 'NO-GO SKETCH'}</text>`;
  }
  // Darker and bolder tool boxes and candidate boxes
  if (options.boxes && frame.object_detection) {
    for (const b of frame.object_detection.automated_candidates) {
      let [x1, y1, x2, y2] = b.bbox_pct;
      let w = Math.max(.3, x2 - x1), h = Math.max(.3, y2 - y1);
      let ty = y1 > 5 ? y1 - 1.2 : y1 + 3.2;
      let tx = Math.min(88, Math.max(12, (x1 + x2) / 2));
      out += `<rect class="tool-box" x="${x1}" y="${y1}" width="${w}" height="${h}"/>` +
        `<rect class="badge-pill tool-pill" x="${tx - 13}" y="${ty - 2.4}" width="26" height="3.2" rx="0.8"/>` +
        `<text class="box-label" x="${tx}" y="${ty - 0.2}" text-anchor="middle">TOOL CANDIDATE</text>`;
    }
    for (const b of frame.object_detection.human_indexed_approximate_boxes) {
      let [x1, y1, x2, y2] = b.bbox_pct;
      let w = x2 - x1, h = y2 - y1;
      let ty = y2 < 95 ? y2 + 2.8 : y2 - 1.5;
      let tx = Math.min(85, Math.max(15, (x1 + x2) / 2));
      out += `<rect class="manual-box" x="${x1}" y="${y1}" width="${w}" height="${h}"/>` +
        `<rect class="badge-pill manual-pill" x="${tx - 14}" y="${ty - 2.4}" width="28" height="3.2" rx="0.8"/>` +
        `<text class="box-label manual" x="${tx}" y="${ty - 0.2}" text-anchor="middle">INSTRUMENT BOUND</text>`;
    }
  }
  return out;
}

function updateStages(f, full = false) {
  const prefix = full ? 'review' : 'overview';
  $(prefix + 'Image').src = f.image;
  $(prefix + 'Mask').src = f.computed_overlay;
  $(prefix + 'Mask').style.display = options.mask ? 'block' : 'none';
  $(prefix + 'Svg').innerHTML = zoneMarkup(f);
}

function selected(i) {
  if (!report) return;
  activeIndex = Math.max(0, Math.min(report.frames.length - 1, i));
  const f = report.frames[activeIndex];
  updateStages(f);
  updateStages(f, true);
  $('overviewTimestamp').textContent = f.timestamp;
  $('frameNow').textContent = f.timestamp;
  $('frameCount').textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${report.frames.length}`;
  $('frameRange').value = activeIndex;
  $('frameSelect').value = String(activeIndex);
  if ($('reviewRange')) $('reviewRange').value = activeIndex;
  if ($('reviewRangeText')) $('reviewRangeText').textContent = f.timestamp;
  if ($('reviewNow')) $('reviewNow').textContent = f.timestamp;
  if ($('reviewTimestamp')) $('reviewTimestamp').textContent = f.timestamp;
  $('reviewTime').textContent = `TIME: ${f.timestamp}`;
  $('sourceStatus').textContent = f.frame_type === 'source_educational_slide' ? 'EDITORIAL SLIDE' : 'OPERATIVE STILL';
  $('mainPhase').textContent = f.phase.label;
  $('mainTriplet').innerHTML = f.action_triplets.length ? f.action_triplets.map(a => `<span>${safe(a.subject)}</span><i>→</i><span class="verb">${safe(a.predicate)}</span><i>→</i><span>${safe(a.object)}</span>`).join('') : '<span>ABSTAIN · insufficient evidence</span>';
  $('mainNote').textContent = f.note;
  if (f.safety?.go_zone && f.safety?.no_go_zone) {
    $('mainRisk').textContent = `Explicit GO: ${f.safety.go_zone.label} | NO-GO: ${f.safety.no_go_zone.critical_structure}`;
    $('mainRisk').className = 'review-indicator';
  } else if (f.review_regions?.length) {
    $('mainRisk').textContent = 'Source-annotated area: requires expert review';
    $('mainRisk').className = 'review-indicator';
  } else {
    $('mainRisk').textContent = 'Educational slide · non-intracorporeal view';
    $('mainRisk').className = 'review-indicator none';
  }
  $('mainCaption').textContent = f.source_caption ? 'Visible source text: ' + f.source_caption : 'No source anatomical caption transcribed for this frame.';
  $('detailRecord').innerHTML = detailHTML(f);
  document.querySelectorAll('.frame-tile').forEach((n, j) => n.classList.toggle('selected', j === activeIndex));
  const chosen = document.querySelectorAll('.frame-tile')[activeIndex];
  if (chosen) {
    const row = $('frameStrip');
    row.scrollTo({ left: Math.max(0, chosen.offsetLeft - row.offsetLeft - 24), behavior: 'smooth' });
  }
}

function populateFrameSelect(keyOnly = false) {
  const sel = $('frameSelect');
  if (!sel || !report?.frames) return;
  const filtered = report.frames
    .map((f, i) => ({ f, i }))
    .filter(({ f }) => !keyOnly || f.is_key_frame);
  sel.innerHTML = filtered.map(({ f, i }) => {
    const star = f.is_key_frame ? '★ ' : '';
    const label = f.vlm_commentary?.milestone_title || f.phase.label;
    return `<option value="${i}">${star}${f.timestamp} · ${safe(label)}</option>`;
  }).join('');
  if (filtered.some(item => item.i === activeIndex)) {
    sel.value = String(activeIndex);
  }
}

function detailHTML(f) {
  const s = f.segmentation.regions, det = f.object_detection.automated_candidates, sf = f.safety;
  const gz = sf?.go_zone, ngz = sf?.no_go_zone;
  let safetySection = '';
  if (gz || ngz) {
    safetySection = `<div class="detail-section">
      <small>SURGICAL BOUNDARY PROTOCOL</small>
      <h3>Explicit GO / NO-GO Zones</h3>
      ${gz ? `<div class="boundary-row" style="display:flex;gap:10px;align-items:flex-start;margin-bottom:10px"><span class="badge-go">GO ZONE</span><div><b style="color:#6ee7b7">${safe(gz.label)}</b><div style="font-size:11px;color:#a7c8c3;margin-top:2px">${safe(gz.surgical_objective)}</div><small style="color:#6fa59b;display:block;margin-top:3px">Target plane: ${safe(gz.structure)}</small></div></div>` : ''}
      ${ngz ? `<div class="boundary-row" style="display:flex;gap:10px;align-items:flex-start"><span class="badge-no-go">NO-GO ZONE</span><div><b style="color:#fca5a5">${safe(ngz.label)}</b><div style="font-size:11px;color:#fca5a5;margin-top:2px">${safe(ngz.danger_hazard)}</div><small style="color:#e07f7f;display:block;margin-top:3px">Protocol: ${safe(ngz.safety_protocol)}</small></div></div>` : ''}
    </div>`;
  } else if (f.frame_type === 'source_educational_slide') {
    safetySection = `<div class="detail-section">
      <small>SURGICAL BOUNDARY PROTOCOL</small>
      <h3 style="color:#f7ba6b">Educational Specimen Slide</h3>
      <p>Non-intracorporeal photograph: intracorporeal GO/NO-GO navigation abstained.</p>
    </div>`;
  }

  const vlm = f.vlm_commentary;
  let vlmSection = '';
  if (vlm) {
    const isKey = !!f.is_key_frame;
    vlmSection = `<div class="detail-section" style="${isKey ? 'border-left:3px solid #f59e0b;background:rgba(245,158,11,0.06);' : ''}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <small style="color:${isKey ? '#fbbf24' : '#6fa59b'};font-weight:700">${isKey ? '★ KEY MILESTONE · VLM CLINICAL COMMENTARY' : 'VLM FRAME COMMENTARY'}</small>
        <span style="font-size:10px;font-family:monospace;color:#6ee7b7;background:rgba(16,185,129,0.12);padding:2px 6px;border-radius:4px;border:1px solid rgba(16,185,129,0.3)">Confidence: ${(vlm.confidence_score * 100).toFixed(0)}%</span>
      </div>
      <h3 style="color:${isKey ? '#fcd34d' : '#e6f8f5'};margin-bottom:8px">${safe(vlm.milestone_title || f.phase.label)}</h3>
      <div style="margin-bottom:8px">
        <b style="color:#9bf7e2;font-size:11px;text-transform:uppercase;letter-spacing:0.5px">Anatomical Landmarks:</b>
        <p style="margin:2px 0 6px 0;font-size:12px;color:#cbd5e1;line-height:1.4">${safe(vlm.scene_anatomy)}</p>
      </div>
      <div style="margin-bottom:8px">
        <b style="color:#93c5fd;font-size:11px;text-transform:uppercase;letter-spacing:0.5px">Dual-Instrument Dynamics:</b>
        <p style="margin:2px 0 6px 0;font-size:12px;color:#cbd5e1;line-height:1.4">${safe(vlm.active_instruments)}</p>
      </div>
      ${vlm.safety_assessment?.clinical_rule ? `
      <div style="background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:8px 10px;margin-bottom:8px">
        <b style="color:#fcd34d;font-size:11px;text-transform:uppercase;letter-spacing:0.5px">VLM Safety Directive:</b>
        <p style="margin:2px 0 0 0;font-size:12px;color:#fef08a;line-height:1.35">${safe(vlm.safety_assessment.clinical_rule)}</p>
      </div>` : ''}
      <small style="color:#64748b;font-size:10px;display:block">${safe(vlm.model)} · ${safe(vlm.image_quality)}</small>
    </div>`;
  }

  return `<div class="detail-section"><small>VISIBLE OBSERVATION</small><h3>${safe(f.phase.label)}</h3><p>${safe(f.note)}</p><p><b>Source label:</b> ${safe(f.source_caption || 'None transcribed')}</p></div>
  ${safetySection}
  ${vlmSection}
  <div class="detail-section"><small>ACTUAL COMPUTER VISION</small><h3>Pixel-level segmentation & detection</h3><div class="detail-grid"><div class="detail-cell"><small>BLUE/CYAN MATERIAL</small><b>${fnum(s.blue.area_fraction_pct, '%')}</b></div><div class="detail-cell"><small>PURPLE SOURCE-COLOR</small><b>${fnum(s.purple.area_fraction_pct, '%')}</b></div><div class="detail-cell"><small>YELLOW SOURCE-COLOR</small><b>${fnum(s.yellow.area_fraction_pct, '%')}</b></div><div class="detail-cell"><small>AUTOMATIC TOOL ROIS</small><b>${det.length}</b></div></div><p>${safe(f.segmentation.limitations)}</p></div>
  <div class="detail-section"><small>FRAME QC</small><div class="detail-grid"><div class="detail-cell"><small>LAPLACIAN DETAIL</small><b>${f.qc.laplacian_variance}</b></div><div class="detail-cell"><small>BRIGHT PIXELS</small><b>${f.qc.bright_pixel_pct}%</b></div><div class="detail-cell"><small>DARK PIXELS</small><b>${f.qc.dark_pixel_pct}%</b></div><div class="detail-cell"><small>VISUAL FRAME DIFFERENCE</small><b>${f.image_difference_to_previous ?? '—'}</b></div></div><p>${safe(f.quality_flags.join(' · ') || 'No automatic quality flags')}</p></div>
  <div class="detail-section"><small>CLINICAL STATUS</small><h3 style="color:#77e6d1">${(sf?.surgical_clearance === 'EXPLICIT_ZONES_DELINEATED' || sf?.surgical_clearance === 'EXPLICIT_ZONES_segmented') ? 'EXPLICIT ZONES segmented' : 'REVIEW REQUIRED'}</h3><p>${safe(sf?.protocol_note || 'Clinician verification required before surgical maneuvers.')}</p><p>Action: ${safe(f.action_triplets.map(a => `${a.subject} → ${a.predicate} → ${a.object}`).join('; ') || 'ABSTAIN')}</p></div>`;
}

function fillOverview() {
  const { stats, frames } = report;
  $('statFrames').textContent = stats.frames_analyzed;
  $('statBlue').textContent = stats.with_automated_blue_candidates;
  $('statActions').textContent = stats.action_triplets_visual_reviewed;
  $('statReview').textContent = stats.review_area_checkpoints;
  $('riskReviewCount').textContent = stats.review_area_checkpoints;
  if ($('statGoCount')) $('statGoCount').textContent = stats.explicit_go_zones ?? 255;
  if ($('statNoGoCount')) $('statNoGoCount').textContent = stats.explicit_no_go_zones ?? 255;
  $('timelineCount').textContent = frames.length + ' inspected timestamps';
  $('coverage').textContent = frames[0].timestamp + ' – ' + frames.at(-1).timestamp;
  $('frameRange').max = frames.length - 1;
  if ($('reviewRange')) $('reviewRange').max = frames.length - 1;
  $('frameStrip').innerHTML = frames.map((f, i) => `<button class="frame-tile" data-frame="${i}"><img loading="lazy" src="${f.image}" alt="Surgical frame at ${f.timestamp}"><strong>${f.timestamp}</strong><small>${safe(f.phase.label)}</small></button>`).join('');
  document.querySelectorAll('.frame-tile').forEach(el => el.addEventListener('click', () => selected(+el.dataset.frame)));
  populateFrameSelect(false);
  if ($('keyFramesOnly')) {
    $('keyFramesOnly').addEventListener('change', e => {
      populateFrameSelect(e.target.checked);
      if (e.target.checked && !report.frames[activeIndex]?.is_key_frame) {
        const nextKey = report.frames.findIndex((f, idx) => idx >= activeIndex && f.is_key_frame);
        if (nextKey !== -1) selected(nextKey);
        else {
          const firstKey = report.frames.findIndex(f => f.is_key_frame);
          if (firstKey !== -1) selected(firstKey);
        }
      }
    });
  }

  // Interactive GO / NO-GO and reference checkpoint explorer
  $('riskList').innerHTML = frames.map((f, idx) => {
    const gz = f.safety?.go_zone, ngz = f.safety?.no_go_zone;
    return `<button class="zone-checkpoint-item" data-riskframe="${idx}">
      <div class="zone-checkpoint-left">
        <img loading="lazy" src="${f.image}" alt="Frame at ${f.timestamp}">
        <div class="zone-checkpoint-info">
          <b>${f.timestamp} · ${safe(f.source_caption || f.phase.label)}</b>
          <small>${gz ? safe(gz.label) : (f.frame_type === 'source_educational_slide' ? 'Educational Specimen Slide' : 'Unassessed')}</small>
        </div>
      </div>
      <div class="zone-checkpoint-badges">
        ${gz ? `<span class="badge-go">GO: ${safe(gz.structure)}</span>` : ''}
        ${ngz ? `<span class="badge-no-go">NO-GO: ${safe(ngz.critical_structure)}</span>` : ''}
        ${f.frame_type === 'source_educational_slide' ? `<span class="pill pill-amber">SLIDE</span>` : ''}
      </div>
    </button>`;
  }).join('');
  document.querySelectorAll('[data-riskframe]').forEach(n => n.addEventListener('click', () => {
    setView('review');
    selected(Number(n.dataset.riskframe));
  }));

  if ($('pipelineStageCount')) $('pipelineStageCount').textContent = `${report.pipeline.length} PROCESSING STAGES`;
  $('pipelineGrid').innerHTML = report.pipeline.map((p, i) => {
    let c = p.status === 'executed' ? '' : p.status === 'partial' || p.status === 'review_provisional' ? 'partial' : 'no';
    return `<div class="pipeline-card"><div class="index">STAGE ${String(i + 1).padStart(2, '0')}</div><h3>${safe(p.name.replaceAll('_', ' '))}</h3><div class="state ${c}">${safe(p.status.replaceAll('_', ' ').toUpperCase())}</div><p>Implementation: ${safe(p.mode.replaceAll('_', ' '))}</p></div>`;
  }).join('');
  $('provenanceDetails').innerHTML = report.limitations.map(l => `<p>• ${safe(l)}</p>`).join('');
  renderTriplets();
}

function renderTriplets() {
  const q = $('actionSearch').value.toLowerCase().trim();
  let items = report.frames.flatMap((f, i) => f.action_triplets.map(a => ({ f, i, a })));
  items = items.filter(o => `${o.f.timestamp} ${o.a.subject} ${o.a.predicate} ${o.a.object} ${o.f.phase.label}`.toLowerCase().includes(q));
  $('actionCount').textContent = `${items.length} source-reviewed observations`;
  $('actionTable').innerHTML = items.map(({ f, i, a }) => `<tr><td>${f.timestamp}</td><td>${safe(a.subject)}</td><td>${safe(a.predicate)}</td><td>${safe(a.object)}</td><td>${safe(f.phase.label)}</td><td><button data-actionframe="${i}">Inspect ↗</button></td></tr>`).join('');
  document.querySelectorAll('[data-actionframe]').forEach(b => b.addEventListener('click', () => { setView('review'); selected(+b.dataset.actionframe) }));
}

function download(name, content, mime = 'application/json') {
  const url = URL.createObjectURL(new Blob([content], { type: mime }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function bindEvents() {
  document.querySelectorAll('.nav').forEach(n => n.addEventListener('click', () => setView(n.dataset.view)));
  document.querySelectorAll('[data-goto]').forEach(n => n.addEventListener('click', () => setView(n.dataset.goto)));
  for (const [el, delta] of [['prevFrame', -1], ['nextFrame', 1], ['reviewPrev', -1], ['reviewNext', 1]]) $(el).addEventListener('click', () => selected(activeIndex + delta));
  $('frameRange').addEventListener('input', e => selected(+e.target.value));
  if ($('reviewRange')) $('reviewRange').addEventListener('input', e => selected(+e.target.value));
  $('frameSelect').addEventListener('change', e => selected(+e.target.value));
  $('actionSearch').addEventListener('input', renderTriplets);

  const inp = [
    ['toggleMask', 'mask'], ['toggleBoxes', 'boxes'], ['toggleReview', 'review'], ['toggleGo', 'go'], ['toggleNoGo', 'nogo'],
    ...['Mask', 'Boxes', 'Review', 'Go', 'NoGo'].map(n => ['.mirror' + n, n.toLowerCase()])
  ];
  for (const [sel, k] of inp) {
    let node = sel.startsWith('.') ? document.querySelector(sel) : $(sel);
    if (!node) continue;
    node.addEventListener('change', e => {
      options[k] = e.target.checked;
      for (const [sel2, k2] of inp) if (k === k2) {
        let ref = sel2.startsWith('.') ? document.querySelector(sel2) : $(sel2);
        if (ref) ref.checked = e.target.checked;
      }
      selected(activeIndex);
    });
  }

  $('playFrame').addEventListener('click', () => {
    if (playing) { clearInterval(playing); playing = null; $('playFrame').textContent = '▶'; return; }
    $('playFrame').textContent = 'Ⅱ';
    playing = setInterval(() => {
      if (activeIndex === report.frames.length - 1) { clearInterval(playing); playing = null; $('playFrame').textContent = '▶'; return; }
      selected(activeIndex + 1);
    }, 1500);
  });

  $('exportButton').addEventListener('click', () => download('safeor_evidence_analysis.json', JSON.stringify({ ...report, interactive_annotations: demoAnnotations, interactive_annotations_notice: 'Hypothetical manually drawn research shapes only.' }, null, 2)));

  $('reviewStage').addEventListener('click', e => {
    const type = $('drawType').value;
    if (!type || !report) return;
    const box = $('reviewStage').getBoundingClientRect();
    const x = 100 * (e.clientX - box.left) / box.width;
    const y = 100 * (e.clientY - box.top) / box.height;
    const item = { type, rect_pct: [Math.max(0, Math.min(84, x - 8)), Math.max(0, Math.min(83, y - 8)), 16, 17], verified: false, source: 'browser_hypothesis_only', time_ms: report.frames[activeIndex].time_ms };
    const fid = report.frames[activeIndex].id;
    (demoAnnotations[fid] ??= []).push(item);
    selected(activeIndex);
  });

  $('clearMarks').addEventListener('click', () => { delete demoAnnotations[report.frames[activeIndex].id]; selected(activeIndex); });

  document.addEventListener('keydown', e => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
    if (e.key === 'ArrowLeft') selected(activeIndex - 1);
    if (e.key === 'ArrowRight') selected(activeIndex + 1);
  });

  if ($('llmJudgeBtn') && $('judgeModal')) {
    $('llmJudgeBtn').addEventListener('click', () => $('judgeModal').showModal());
    if ($('closeJudgeModal')) $('closeJudgeModal').addEventListener('click', () => $('judgeModal').close());
    $('judgeModal').addEventListener('click', e => {
      const rect = $('judgeModal').getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        $('judgeModal').close();
      }
    });
  }
}

(async function () {
  try {
    let r = await fetch('data/analysis.json?v=' + Date.now());
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    report = await r.json();
    if (!report.frames?.length) throw new Error('No analyzed frames');
    fillOverview();
    bindEvents();
    const params = new URLSearchParams(location.search);
    const fIdx = params.get('f');
    selected(fIdx !== null ? parseInt(fIdx, 10) : 0);
    const h = location.hash.replace('#', '');
    if (['review', 'actions', 'risk', 'pipeline'].includes(h)) setView(h);
    window.addEventListener('hashchange', () => setView(location.hash.replace('#', '') || 'overview'));
  } catch (e) {
    console.error(e);
    document.querySelector('.safety-banner').innerHTML = '<b>Cannot load results:</b> Start the included server from the extracted folder using <code>python -m http.server 8000</code>.';
  }
})();
