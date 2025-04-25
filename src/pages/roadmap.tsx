import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

const roadmap = [
    {
        version: 'Version 1',
        badge: 'In Progress',
        items: [
            'Data ingestion through API + JS SDK',
            'Workflow/Automation',
            'Segments',
            'Person',
            'Team and Workspace',
            'Email messaging channel',
            'Postgres Data Sync',
            'Personal Data Analyst',
        ],
        demoUrl: 'https://www.youtube.com/embed/dsJoBBP4L-E?si=zJC0_TeIZBfmajYq', // <<< demo video
    },
    {
        version: 'Version 2',
        items: ['ZeroFlow™', 'Custom object types', 'Person groups'],
    },
    {
        version: 'Version 3',
        items: ['Complete CDP', 'WhatsApp, SMS & RCS', 'More SDKs'],
    },
    {
        version: 'Version 4',
        items: [
            'Inbound messaging & automatic responses',
            'Custom Dashboad',
            'Bring-your-own agent',
        ],
    },
];

export default function Roadmap() {
    return (
        <Layout title="Product Roadmap">
            <header className="section">
                <h1 className="megaHeading" style={{marginTop: '6rem'}}>
                    Influentia Product Roadmap
                </h1>
                <p className="hero__subtitle">
                    What we’re building — and what’s coming next.
                </p>
            </header>

            <section className="section">
                <div className="roadmap">
                    {roadmap.map((block, i) => (
                        <div key={block.version} className="timelineRow">
                            {/* bullet */}
                            <div
                                className={clsx(
                                    'timelineMarker',
                                    {'timelineMarker--current': i === 0} // first marker = black
                                )}
                                aria-hidden="true"
                            />
                            {/* card */}
                            <div
                                className={clsx(
                                    'card',
                                    'timelineCard',
                                    {'timelineCard--current': i === 0}
                                )}
                            >
                                <div style={{display: 'flex', alignItems: 'baseline', gap: '.5rem'}}>
                                    <h3 style={{margin: 0}}>{block.version}</h3>
                                    {block.badge &&
                                        <span className="badge" dangerouslySetInnerHTML={{__html: block.badge}}/>}
                                </div>

                                <ul style={{margin: '1rem 0 0', paddingLeft: '1.25rem'}}>
                                    {block.items.map(t => <li key={t}>{t}</li>)}
                                </ul>

                                {/* ─── optional demo video ─── */}
                                {block.demoUrl && (
                                    <div className="videoWrapper">
                                        <iframe
                                            src={block.demoUrl}
                                            title={`${block.version} demo`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}