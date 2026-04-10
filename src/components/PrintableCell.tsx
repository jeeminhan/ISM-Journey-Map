"use client";

import { stages } from "@/data/stages";
import { backgrounds } from "@/data/backgrounds";
import { JourneyCell } from "@/data/types";

interface Props {
  cell: JourneyCell;
}

export default function PrintableCell({ cell }: Props) {
  const stageInfo = stages.find((s) => s.id === cell.stage);
  const bgInfo = backgrounds.find((b) => b.id === cell.background);

  if (!stageInfo || !bgInfo) return null;

  return (
    <div data-print-only className="print-cell">
      <style jsx>{`
        @media print {
          .print-cell {
            color: #111;
            font-family: Georgia, 'Times New Roman', serif;
            padding: 0;
            max-width: 100%;
          }
          .print-cell h1 {
            font-size: 22pt;
            margin: 0 0 2pt;
            font-weight: 700;
          }
          .print-cell h2 {
            font-size: 11pt;
            margin: 0 0 6pt;
            font-weight: 600;
            color: #555;
            text-transform: uppercase;
            letter-spacing: 1.5px;
          }
          .print-cell .subtitle {
            font-size: 13pt;
            color: #666;
            margin-bottom: 10pt;
            font-style: italic;
          }
          .print-cell .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10pt;
            margin-bottom: 12pt;
          }
          .print-cell .grid3 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10pt;
            margin-bottom: 12pt;
          }
          .print-cell .card {
            border: 1px solid #ddd;
            border-radius: 6pt;
            padding: 8pt;
          }
          .print-cell .card-title {
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #888;
            margin-bottom: 4pt;
          }
          .print-cell .card li {
            font-size: 9pt;
            line-height: 1.4;
            margin-bottom: 3pt;
            color: #333;
          }
          .print-cell .quote {
            border-left: 3pt solid #555;
            padding-left: 10pt;
            font-style: italic;
            font-size: 10pt;
            color: #444;
            margin: 8pt 0;
          }
          .print-cell .quote-attr {
            font-style: normal;
            font-size: 8pt;
            color: #888;
            margin-top: 2pt;
          }
          .print-cell .posture {
            font-size: 12pt;
            font-weight: 700;
            color: #333;
            margin-bottom: 8pt;
          }
          .print-cell .divider {
            border: none;
            border-top: 1px solid #ddd;
            margin: 10pt 0;
          }
          .print-cell .footer-note {
            font-size: 7pt;
            color: #aaa;
            text-align: center;
            margin-top: 12pt;
          }
        }
      `}</style>

      <h1>{stageInfo.label}</h1>
      <div className="subtitle">{stageInfo.subtitle} &mdash; {bgInfo.label}</div>

      <h2>Empathy Map</h2>
      <div className="grid2">
        <div className="card">
          <div className="card-title">Seeing</div>
          <ul>{cell.empathyMap.seeing.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div className="card">
          <div className="card-title">Hearing</div>
          <ul>{cell.empathyMap.hearing.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div className="card">
          <div className="card-title">Thinking & Feeling</div>
          <ul>{cell.empathyMap.thinkingFeeling.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div className="card">
          <div className="card-title">Saying & Doing</div>
          <ul>{cell.empathyMap.sayingDoing.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>

      {cell.quotes.length > 0 ? (
        <>
          <h2>Voices from the Journey</h2>
          {cell.quotes.map((q, i) => (
            <div key={i} className="quote">
              &ldquo;{q.text}&rdquo;
              <div className="quote-attr">&mdash; {q.attribution}</div>
            </div>
          ))}
        </>
      ) : null}

      <hr className="divider" />

      <h2>Ministry Guidance</h2>
      <div className="posture">Posture: {cell.ministry.posture}</div>

      <div className="grid3">
        <div className="card">
          <div className="card-title">Approaches</div>
          <ul>{cell.ministry.approaches.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>
        <div className="card">
          <div className="card-title">Bridges</div>
          <ul>{cell.bridges.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
        <div className="card">
          <div className="card-title">Watch Out For</div>
          <ul>{cell.ministry.pitfalls.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "10pt" }}>
        <div className="card-title">Barriers</div>
        <ul>{cell.barriers.map((b, i) => <li key={i}>{b}</li>)}</ul>
      </div>

      <div className="footer-note">
        ISM Journey Map &bull; {stageInfo.label} &times; {bgInfo.label} &bull; ism-journey-map.vercel.app
      </div>
    </div>
  );
}
