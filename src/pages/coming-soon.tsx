import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DemoRequestDialog from '../components/DemoRequestDialog';

export default function ComingSoonPage() {


    const containerStyle = {
        padding: '3rem 1rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        fontWeight: '800',
    };

    const bannerStyle = {
        display: 'inline-block',
        background: '#f0f0f0',
        borderRadius: '8px',
        padding: '0.8rem 1.5rem',
        margin: '2rem 0',
        fontWeight: '600',
        border: `1px solid #e0e0e0`,
    };

    const sectionStyle = {
        margin: '3rem 0',
        textAlign: 'left',
    };

    const listStyle = {
        paddingLeft: '2rem',
        lineHeight: '1.8',
        textAlign: 'left',
        maxWidth: '600px',
        margin: '0 auto',
    };

    const buttonStyle = {
        display: 'inline-block',
        padding: '0.8rem 2rem',
        margin: '2rem 0',
        background: '#3b82f6',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'all 0.2s ease',
    };

    const constructionIconStyle = {
        fontSize: '4rem',
        marginBottom: '1rem',
    };

    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div style={containerStyle}>
            <Link style={constructionIconStyle} to="/">🚧</Link>

            <h1 style={headingStyle}>Coming Soon: Building the Future of Customer Success</h1>


            <div style={sectionStyle}>
                <h2>We're hard at work on this section</h2>
                <p>
                    Our team is currently building out this documentation with the same care and attention
                    we put into our product. This page will contain detailed architecture insights, implementation
                    guidance, and real-world examples to help you understand this critical component of autonomous
                    customer success.
                </p>
            </div>

            <div style={{...sectionStyle, marginTop: '3rem'}}>
                <h3>What you'll find here when it's ready:</h3>
                <ul style={listStyle}>
                    <li><strong>Architecture Diagrams</strong> - Visual explanations of how this component works</li>
                    <li><strong>Key Concepts</strong> - Foundational ideas and principles behind the design</li>
                    <li><strong>Implementation Considerations</strong> - Practical guidance for building or integrating
                    </li>
                    <li><strong>Examples & Use Cases</strong> - Real-world applications for SaaS startups</li>
                    <li><strong>Integration Points</strong> - How this component connects with the broader system</li>
                </ul>
            </div>

            <div style={{...sectionStyle, marginTop: '4rem'}}>
                <h2>Want to get notified when this content is ready?</h2>
                <button
                    type="button"
                    className="button button--primary"
                    onClick={() => setDialogOpen(true)}
                >
                    Join Waitlist
                </button>

            </div>

            <hr style={{margin: '3rem 0', opacity: 0.2}}/>

            <div>
                <h3>Have specific questions about this component?</h3>
                <p>
                    We love talking about autonomous customer success. Reach out to our team at{' '}
                    <a href="mailto:james@influentia.ai" style={{color: '#6366f1'}}>
                        james@influentia.ai
                    </a>
                </p>
            </div>

            <DemoRequestDialog open={dialogOpen} onClose={() => setDialogOpen(false)}/>
        </div>
    );
}