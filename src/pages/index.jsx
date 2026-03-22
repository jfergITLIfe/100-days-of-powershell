import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const phases = [
  { num: 1, days: '001–020', title: 'Foundations', desc: 'Cmdlets, variables, pipeline, your first scripts.', color: '#1D9E75', bg: '#e1f5ee', textColor: '#085041' },
  { num: 2, days: '021–040', title: 'Scripting Core', desc: 'Logic, loops, functions, error handling.', color: '#378ADD', bg: '#e6f1fb', textColor: '#0c447c' },
  { num: 3, days: '041–060', title: 'Files, Systems & Data', desc: 'File ops, registry, event logs, CSV/JSON.', color: '#7F77DD', bg: '#eeedfe', textColor: '#3c3489' },
  { num: 4, days: '061–080', title: 'Automation & Real-World Tools', desc: 'AD, Azure, APIs, modules, remoting.', color: '#BA7517', bg: '#faeeda', textColor: '#633806' },
  { num: 5, days: '081–100', title: 'Security Pipeline', desc: 'Threat hunting, IR triage, Sentinel integration.', color: '#E24B4A', bg: '#fcebeb', textColor: '#791f1f' },
];

export default function Home() {
  return (
    <Layout title="100 Days of PowerShell" description="A beginner-to-security-ready PowerShell challenge by JfergITLife">
      <main>
        {/* Hero */}
        <section style={{ padding: '5rem 1.5rem 4rem', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', fontSize: '11px', fontWeight: 600,
            padding: '3px 12px', borderRadius: '20px', marginBottom: '1.25rem',
            background: '#e6f1fb', color: '#0c447c', letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>
            JfergITLife · Free & Open Source
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            100 Days of PowerShell
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-content-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            A beginner-to-security-ready challenge. 5–10 minutes a day. One concept, working code, and a real challenge — every single day for 100 days.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/docs/intro" style={{
              padding: '12px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '15px',
              background: 'var(--ifm-color-primary)', color: '#fff', textDecoration: 'none',
            }}>
              Start the Challenge
            </Link>
            <a href="https://github.com/jfergitlife/100-days-of-powershell" target="_blank" rel="noopener noreferrer"
              style={{
                padding: '12px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '15px',
                border: '1px solid var(--ifm-color-emphasis-300)', textDecoration: 'none',
                color: 'var(--ifm-color-content)',
              }}>
              Fork on GitHub
            </a>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{
          borderTop: '0.5px solid var(--ifm-color-emphasis-200)',
          borderBottom: '0.5px solid var(--ifm-color-emphasis-200)',
          padding: '1.5rem',
        }}>
          <div style={{
            maxWidth: '720px', margin: '0 auto',
            display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem',
          }}>
            {[['100', 'Days'], ['5', 'Phases'], ['5', 'Capstone Projects'], ['0', 'Cost']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ifm-color-primary)' }}>{num}</div>
                <div style={{ fontSize: '13px', color: 'var(--ifm-color-content-secondary)' }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Phases */}
        <section style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>The five phases</h2>
          <p style={{ textAlign: 'center', color: 'var(--ifm-color-content-secondary)', marginBottom: '2.5rem' }}>
            Each phase ends with a capstone project — a real script you build, submit, and keep.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {phases.map(p => (
              <div key={p.num} style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                padding: '1.25rem', borderRadius: '12px',
                border: '0.5px solid var(--ifm-color-emphasis-200)',
                background: 'var(--ifm-background-surface-color)',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px', flexShrink: 0,
                  background: p.bg, color: p.textColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '18px',
                }}>
                  {p.num}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: '15px' }}>{p.title}</span>
                    <span style={{ fontSize: '12px', color: 'var(--ifm-color-content-secondary)', fontFamily: 'monospace' }}>
                      Days {p.days}
                    </span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--ifm-color-content-secondary)' }}>
                    {p.desc}
                  </p>
                </div>
                {p.num === 1 ? (
  <Link to="/docs/phase-1/day-001"
    style={{ fontSize: '13px', color: 'var(--ifm-color-primary)', whiteSpace: 'nowrap', flexShrink: 0 }}>
    Start →
  </Link>
) : (
  <span style={{ fontSize: '13px', color: 'var(--ifm-color-content-secondary)', whiteSpace: 'nowrap', flexShrink: 0 }}>
    Coming soon
  </span>
)}
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{
          padding: '4rem 1.5rem',
          borderTop: '0.5px solid var(--ifm-color-emphasis-200)',
          background: 'var(--ifm-background-surface-color)',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>How it works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                ['01', 'Fork the repo', 'Your fork is your personal challenge record on GitHub.'],
                ['02', 'Work one day at a time', '5–10 minutes. One concept. One piece of working code.'],
                ['03', 'Do the challenge', 'Post your Gist or screenshot in Discussions. Daily proof.'],
                ['04', 'Submit your capstone', 'Five real projects. Fill out the template. Push your code.'],
                ['05', 'Get on the wall', 'Submit a PR to showcases.json. Your name lives here permanently.'],
              ].map(([num, title, desc]) => (
                <div key={num} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ifm-color-primary)', fontWeight: 700 }}>{num}</span>
                  <span style={{ fontWeight: 600, fontSize: '15px' }}>{title}</span>
                  <span style={{ fontSize: '13px', color: 'var(--ifm-color-content-secondary)', lineHeight: 1.6 }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to start?</h2>
          <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Fork the repo. Open Day 001. Run your first command.
          </p>
          <Link to="/docs/intro" style={{
            padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '16px',
            background: 'var(--ifm-color-primary)', color: '#fff', textDecoration: 'none',
          }}>
            Let's go →
          </Link>
        </section>
      </main>
    </Layout>
  );
}
