import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Support() {
    return (
        <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-purple-100">
            <Navbar />
            <main style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px', textAlign: 'center', color: '#9333ea', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>SUPPORT</h1>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '40px', textAlign: 'center', color: '#0f172a' }}>Need Help?</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
                    {/* WhatsApp Card */}
                    <div style={{ padding: '32px 24px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '48px', height: '48px', backgroundColor: '#f0fdf4', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L22 2l-2.1 6.1Z"/></svg>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>Faster Assistance</h3>
                        <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>Chat with us on WhatsApp for quick responses.</p>
                        <a
                            href="https://wa.me/917410148196"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                padding: '10px 20px',
                                backgroundColor: '#16a34a',
                                color: 'white',
                                fontWeight: 600,
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                marginTop: 'auto',
                            }}
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Email Card */}
                    <div style={{ padding: '32px 24px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '48px', height: '48px', backgroundColor: '#faf5ff', color: '#9333ea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>Formal Queries</h3>
                        <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>Email us for official communication.</p>
                        <a
                            href="mailto:business@theapexschoolofbusiness.com"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                padding: '10px 20px',
                                backgroundColor: '#9333ea',
                                color: 'white',
                                fontWeight: 600,
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                marginTop: 'auto',
                            }}
                        >
                            Email Support
                        </a>
                    </div>
                </div>

                <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
                    For formal queries, write to: <strong>business@theapexschoolofbusiness.com</strong>
                </p>
            </main>
            <Footer />
        </div>
    );
}
