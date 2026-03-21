import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import showcasesData from '../../showcases.json';

const capstoneLabels = {
  1: 'System Info Reporter',
  2: 'Log Parser Script',
  3: 'System Audit Script',
  4: 'AD User Onboarding Tool',
  5: 'Threat Hunting Toolkit',
};

const capstoneColors = {
  1: { bg: '#e1f5ee', color: '#085041', label: 'Phase 1' },
  2: { bg: '#e6f1fb', color: '#0c447c', label: 'Phase 2' },
  3: { bg: '#eeedfe', color: '#3c3489', label: 'Phase 3' },
  4: { bg: '#faeeda', color: '#633806', label: 'Phase 4' },
  5: { bg: '#fcebeb', color: '#791f1f', label: 'Phase 5' },
};

function ShowcaseCard({ entry }) {
  const phase = capstoneColors[entry.capstone];
  return (
    <div style={{
      border: '0.5px solid var(--ifm-color-emphasis-300)',
      borderRadius: '12px',
      padding: '1.25rem',
      background: 'var(--ifm-background-surface-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          background: phase.bg, color: phase.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 600, fontSize: '14px', flexShrink: 0,
        }}>
          {entry.name.split(' ').map(n => n[0]).join('').slice(0,2)}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '15px' }}>{entry.name}</div>
          <a href={entry.github} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '12px', color: 'var(--ifm-color-primary)' }}>
            {entry.github.replace('https://github.com/', '@')}
          </a>
        </div>
      </div>

      <span style={{
        display: 'inline-block', fontSize: '11px', fontWeight: 600,
        padding: '2px 10px', borderRadius: '20px',
        background: phase.bg, color: phase.color,
        alignSelf: 'flex-start',
      }}>
        {phase.label} — {capstoneLabels[entry.capstone]}
      </span>

      <p style={{ fontSize: '14px', margin: 0, color: 'var(--ifm-color-content-secondary)', lineHeight: 1.6 }}>
        {entry.description}
      </p>

      <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
        <a href={entry.fork} target="_blank" rel="noopener noreferrer"
          style={{
            fontSize: '12px', padding: '4px 12px', borderRadius: '6px',
            border: '0.5px solid var(--ifm-color-emphasis-300)',
            color: 'var(--ifm-color-content)', textDecoration: 'none',
          }}>
          View Fork
        </a>
        <span style={{ fontSize: '12px', color: 'var(--ifm-color-content-secondary)', alignSelf: 'center' }}>
          {entry.completed}
        </span>
      </div>
    </div>
  );
}

export default function Showcase() {
  const [filter, setFilter] = useState(0);
  const filtered = filter === 0
    ? showcasesData
    : showcasesData.filter(e => e.capstone === filter);

  return (
    <Layout title="Showcase" description="Students who completed the 100 Days of PowerShell challenge">
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Student Showcase</h1>
        <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: '2rem' }}>
          These are real people who did the work. Each card links to their fork — actual scripts, actual proof.
          Want to be here? Complete a capstone and submit a PR to <code>showcases.json</code>.
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {[0, 1, 2, 3, 4, 5].map(n => (
            <button key={n} onClick={() => setFilter(n)} style={{
              padding: '5px 14px', borderRadius: '20px', cursor: 'pointer',
              border: '0.5px solid var(--ifm-color-emphasis-300)',
              background: filter === n ? 'var(--ifm-color-primary)' : 'transparent',
              color: filter === n ? '#fff' : 'var(--ifm-color-content)',
              fontSize: '13px',
            }}>
              {n === 0 ? 'All' : `Phase ${n}`}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--ifm-color-content-secondary)' }}>
            <p>No submissions yet for this phase. Be the first.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
          }}>
            {filtered.map((entry, i) => <ShowcaseCard key={i} entry={entry} />)}
          </div>
        )}

        <div style={{
          marginTop: '3rem', padding: '1.5rem',
          border: '1px solid var(--ifm-color-primary)',
          borderRadius: '12px', background: 'var(--ifm-background-surface-color)',
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Get on the wall</h3>
          <p style={{ fontSize: '14px', color: 'var(--ifm-color-content-secondary)', marginBottom: '1rem' }}>
            Complete any capstone (Days 20, 40, 60, 80, or 100), then submit a small PR adding your entry to <code>showcases.json</code>.
            See the <a href="https://github.com/jfergitlife/100-days-of-powershell/blob/main/CAPSTONE_SUBMISSION_TEMPLATE.md">submission template</a> for the exact format.
          </p>
          <a href="https://github.com/jfergitlife/100-days-of-powershell/blob/main/CAPSTONE_SUBMISSION_TEMPLATE.md"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '8px 20px', borderRadius: '8px',
              background: 'var(--ifm-color-primary)', color: '#fff',
              textDecoration: 'none', fontSize: '14px', fontWeight: 500,
            }}>
            Submit your capstone
          </a>
        </div>
      </main>
    </Layout>
  );
}
