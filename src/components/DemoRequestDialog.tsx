import React, {useState, useEffect} from 'react';

/*  A very small modal dialog – no extra libraries.  */
export default function DemoRequestDialog({open, onClose}) {
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [busy, setBusy] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    /*  Close on ESC  */
    useEffect(() => {
        const esc = evt => evt.key === 'Escape' && onClose();
        window.addEventListener('keydown', esc);
        return () => window.removeEventListener('keydown', esc);
    }, [onClose]);

    if (!open) return null;           // keep DOM clean when closed

    const reset = () => {
        setEmail('');
        setWebsite('');
        setBusy(false);
        setSuccess(false);
        setError('');
    };

    const submit = async e => {
        e.preventDefault();
        setBusy(true);
        setError('');
        try {
            const res = await fetch('https://formspree.io/f/myzkbldw', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, website: `https://${website}`}),
            });
            if (res.ok) {
                setSuccess(true);
            } else {
                setError('Failed to submit – please try again.');
            }
        } catch {
            setError('Network error – please try again.');
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalBox" onClick={e => e.stopPropagation()}>
                {/* ── CLOSE X ── */}
                <button onClick={onClose} className="modalClose">×</button>

                {success ? (
                    <>
                        <h3 className="modalTitle">Form submitted!</h3>
                        <p>Thanks for your interest. We’ll be in touch shortly.</p>
                        <button className="btn-primary" style={{marginTop: '1.5rem'}} onClick={() => {
                            onClose();
                            reset();
                        }}>
                            Close
                        </button>
                    </>
                ) : (
                    <>
                        <h3 className="modalTitle">Request a demo</h3>

                        <form onSubmit={submit} className="modalForm">
                            <label>
                                Email
                                <input
                                    type="email" required placeholder="you@example.com"
                                    value={email} onChange={e => setEmail(e.target.value)}
                                />
                            </label>

                            <label>
                                Website (domain only)
                                <div style={{display: 'flex'}}>
                                    <span className="modalPre">https://</span>
                                    <input
                                        type="text" required placeholder="yourcompany.com"
                                        value={website} onChange={e => setWebsite(e.target.value)}
                                        style={{paddingLeft: 0, flex: 1, borderRadius: '0px 6px 6px 0px'}}
                                    />
                                </div>
                            </label>

                            {error && <p className="modalError">{error}</p>}

                            <button className="btn-primary" type="submit" disabled={busy}>
                                {busy ? 'Submitting…' : 'Submit'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}