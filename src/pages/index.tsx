import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DemoRequestDialog from '../components/DemoRequestDialog';

// See refine.dev as a perfect implementation of docusaurus
export default function Home() {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <Layout title="Influentia – AI-Powered Customer Success">
            {/* =========================================================
         HERO
      ========================================================== */}
            <header className="section">
                <h1 className="megaHeading">
                    Your AI tools generate content,<br/>not engagement.
                </h1>

                <p className="hero__subtitle" style={{maxWidth: '840px'}}>
                    Current AI tools can write subject lines and replies but can't build
                    customer journeys that adapts in real-time to individual behavior. They are still following a static
                    playbook, just with better grammar.
                </p>

                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                    <Link
                        className="button button--primary"
                        to="/system-design"
                    >
                        Learn More
                    </Link>
                    <button
                        type="button"
                        className="button button--secondary"
                        onClick={() => setDialogOpen(true)}
                    >
                        Request Demo
                    </button>
                </div>
            </header>

            {/* =========================================================
         HOW IT WORKS
      ========================================================== */}
            {/*<section id="how-it-works" className="section">*/}
            {/*    <p className="small-caps">How the AI Works</p>*/}
            {/*    <h2 className="section-h2">*/}
            {/*        Meet Your Autonomous <span className="highlight">Customer Success Engine</span>*/}
            {/*    </h2>*/}

            {/*    /!*<div className="grid-2" style={{maxWidth: '880px', margin: '0 auto'}}>*!/*/}
            {/*    /!*    {[*!/*/}
            {/*    /!*        {*!/*/}
            {/*    /!*            title: 'Learns',*!/*/}
            {/*    /!*            text: 'Ingests real-time behavior, profile data, and business goals.',*!/*/}
            {/*    /!*            icon: '📚',*!/*/}
            {/*    /!*        },*!/*/}
            {/*    /!*        {*!/*/}
            {/*    /!*            title: 'Understands',*!/*/}
            {/*    /!*            text: 'Builds a deep, dynamic understanding of each user’s context.',*!/*/}
            {/*    /!*            icon: '🧠',*!/*/}
            {/*    /!*        },*!/*/}
            {/*    /!*        {*!/*/}
            {/*    /!*            title: 'Acts',*!/*/}
            {/*    /!*            text: 'Executes the next best action across relevant channels.',*!/*/}
            {/*    /!*            icon: '⚡️',*!/*/}
            {/*    /!*        },*!/*/}
            {/*    /!*        {*!/*/}
            {/*    /!*            title: 'Optimizes',*!/*/}
            {/*    /!*            text: 'Measures outcomes and refines its playbook for maximum impact.',*!/*/}
            {/*    /!*            icon: '🔁',*!/*/}
            {/*    /!*        },*!/*/}
            {/*    /!*    ].map(({title, text, icon}) => (*!/*/}
            {/*    /!*        <div key={title} className="card">*!/*/}
            {/*    /!*            <div className="card-icon">{icon}</div>*!/*/}
            {/*    /!*            <div className="card-title">{title}</div>*!/*/}
            {/*    /!*            <p>{text}</p>*!/*/}
            {/*    /!*        </div>*!/*/}
            {/*    /!*    ))}*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</section>*/}

            {/* =========================================================
         THE PROBLEM
      ========================================================== */}
            <section className="section" style={{background: '#f9f9f9'}}>
                <p className="small-caps">The Problem</p>
                <h2 className="section-h2">
                    AI Has Made Content <span className="highlight">Scalable</span>, But Engagement <span
                    className="highlight">Remain Elusive</span>
                </h2>

                <div style={{maxWidth: '720px', margin: '0 auto', textAlign: 'left'}}>
                    <ul>
                        <li><b>AI Creates Messages, Not Journeys:</b> Current tools can generate perfect emails but
                            can't build adaptive engagement that evolve with each customer interaction.
                        </li>

                        <li><b>Static Intelligence:</b> Your AI follows pre-defined playbooks with better language, but
                            can't make autonomous decisions based on real-time user behavior.
                        </li>

                        <li><b>The Personalization Paradox:</b> You collect more user data than ever but deliver
                            increasingly generic experiences as you scale.
                        </li>

                        <li><b>The Human Bottleneck:</b> Your best customer success happens with human involvement, but
                            humans don't scale, forcing you to choose which customers deserve engagement.
                        </li>
                    </ul>
                    <p style={{marginTop: '1.5rem'}}>
                        The gap isn't in content creation, it's in building individual engagement that adapt without
                        constant human intervention.
                    </p>
                </div>
            </section>

            {/* =========================================================
         THE SOLUTION
      ========================================================== */}
            <section className="section" style={{paddingBottom: "2rem"}}>
                <p className="small-caps">Introducing Influentia</p>
                <h2 className="section-h2">
                    Your Smartest Customer Success Manager,
                    &nbsp;
                    <span className="highlight">Scaled 1:1 For Every User</span>
                </h2>

                <p style={{maxWidth: '820px', margin: '0 auto'}}>
                    Influentia is the AI co-pilot your Customer Success team needs. It’s like deploying a
                    data-driven CSM dedicated to <i>every single user</i>. By unifying and understanding
                    customer data, Influentia autonomously identifies critical moments and takes
                    personalized, timely action, freeing your team to focus on high-impact relationships.
                </p>

                <img src="/img/overview.svg" width="100%" style={{maxWidth: '1480px'}}/>
            </section>


            {/* =========================================================
         KEY CAPABILITIES
      ========================================================== */}
            <section className="section">
                <p className="small-caps">Key Capabilities</p>
                <h2 className="section-h2">How Influentia Powers <span className="highlight">Scalable Success</span>
                </h2>

                <div className="grid-2">
                    {[
                        {
                            title: 'Unified Customer View',
                            text: 'Real-time behavioral data + profiles + DB sync. All in one place.',
                            icon: '🖥️',
                        },
                        {
                            title: 'AI-Driven Segmentation & Insights',
                            text: 'Automatic cohorts by lifecycle, risk, adoption, and more.',
                            icon: '🔍',
                        },
                        {
                            title: 'Intelligent Automated Journeys',
                            text: 'Context-aware sequences powered by Temporal for reliability.',
                            icon: '🧭',
                        },
                        {
                            title: 'Personalized Multi-Channel Actions',
                            text: 'Email, tasks, soon in-app messages, at exactly the right moment.',
                            icon: '✉️',
                        },
                        {
                            title: 'Continuous Optimization',
                            text: 'Learns from every interaction and fine-tunes for better results.',
                            icon: '📈',
                        },
                    ].map(({title, text, icon}) => (
                        <div key={title} className="card">
                            <div className="card-icon">{icon}</div>
                            <div className="card-title">{title}</div>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================================
         BENEFITS / OUTCOMES
      ========================================================== */}
            <section className="section" style={{background: '#f9f9f9'}}>
                <p className="small-caps">Benefits</p>
                <h2 className="section-h2">Stop Reacting. Start Driving <span
                    className="highlight">Predictable Growth</span>.</h2>

                <ul style={{textAlign: 'left', maxWidth: '720px', margin: '0 auto', lineHeight: '1.75'}}>
                    <li><b>Slash Churn:</b> Re-engage at-risk users before they leave.</li>
                    <li><b>Boost Engagement & Adoption:</b> Guide users to value faster.</li>
                    <li><b>Increase Team Efficiency:</b> Automate thousands of personalized touchpoints.</li>
                    <li><b>Accelerate Expansion Revenue:</b> Spot and nurture upgrade-ready users.</li>
                    <li><b>Scale Without Limits:</b> Deliver 1:1 engagement to 100 or 10 M users.</li>
                    <li><b>Maximize Lifetime Value:</b> Build loyal customers who stay and grow.</li>
                </ul>
            </section>

            {/* =========================================================
         EASE OF IMPLEMENTATION
      ========================================================== */}
            <section className="section">
                <p className="small-caps">How To Get Started</p>
                <h2 className="section-h2">Activate Your Smart CSM in 3 Simple Steps</h2>

                <div className="grid-3" style={{maxWidth: '880px', margin: '0 auto'}}>
                    {[
                        {
                            title: 'Connect Your Data',
                            text: 'Quickly integrate via SDK, API, or direct database sync. Get your user data flowing in minutes.',
                            icon: '🔌',
                        },
                        {
                            title: 'Define Your Goals',
                            text: 'Tell Influentia what you want to achieve (e.g., "Reduce first-month churn," "Increase adoption of Feature Y").',
                            icon: '🎯',
                        },
                        {
                            title: 'Influentia Engages',
                            text: 'Our AI takes over – understanding users, running personalized journeys, and optimizing for your goals 24/7.',
                            icon: '🤖',
                        },
                    ].map(({title, text, icon}) => (
                        <div key={title} className="card">
                            <div className="card-icon">{icon}</div>
                            <div className="card-title">{title}</div>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================================
         SOCIAL PROOF  (placeholder ,  remove if not used)
      ========================================================== */}
            {/*<section className="section dark-ui-mockup" style={{maxWidth: '720px', margin: '0 auto'}}>*/}
            {/*    <p className="small-caps" style={{color: 'var(--ifm-color-accent-yellow)'}}>Social Proof</p>*/}
            {/*    <h2 style={{marginTop: 0}}>Trusted by Growing SaaS Teams</h2>*/}
            {/*    <p>Add logos or testimonial slider here.</p>*/}
            {/*</section>*/}

            {/* =========================================================
         FINAL CTA
      ========================================================== */}
            <section id="request-demo" className="section">
                <h2 className="section-h2">Ready to Give Every User Their Own Smart CSM?</h2>
                <p className="hero__subtitle">
                    See firsthand how Influentia unifies your data and automates personalized engagement
                    to drive retention and growth.
                </p>
                <button className="button button--secondary" type="button"
                        onClick={() => setDialogOpen(true)}>
                    Request Your Personalized Demo
                </button>
            </section>
            <DemoRequestDialog open={dialogOpen} onClose={() => setDialogOpen(false)}/>
        </Layout>
    );
}