import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Refund() {
    return (
        <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-purple-100">
            <Navbar />
            <main style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px', textAlign: 'center', color: '#9333ea', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>REFUND POLICY</h1>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '40px', textAlign: 'center', color: '#1e293b' }}>Apex School of Business</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {/* Refund Policy */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>REFUND POLICY</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>We are committed to delivering high-quality, execution-focused learning.</p>
                            <p>If you feel the program is not the right fit for you, you can request a refund within the refund window.</p>
                        </div>
                    </section>

                    {/* 7-Day Refund Window */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>7-DAY REFUND WINDOW</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>All enrollments come with a 7-day refund policy from the date of purchase.</p>
                            <p>You may request a refund within 7 days by contacting our support team via email or WhatsApp.</p>
                            <p>No detailed justification is required.</p>
                            <p>After 7 days from the date of enrollment, no refund requests will be accepted.</p>
                        </div>
                    </section>

                    {/* Placement Assistance Policy */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>PLACEMENT ASSISTANCE POLICY</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>Placement assistance begins after the core learning period.</p>
                            <p>If you choose to opt into placement support and actively begin placement activities, refund requests will not be applicable beyond that stage.</p>
                        </div>
                    </section>

                    {/* GST and Transaction Charges */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>GST AND TRANSACTION CHARGES</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>GST and payment gateway charges, if applicable, are non-refundable.</p>
                            <p>Refunds will be processed only on the base course fee.</p>
                        </div>
                    </section>

                    {/* Corporate Enrollments */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>CORPORATE ENROLLMENTS</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>Corporate training programs come with a 14-day refund window from the date of onboarding.
                                If you are not satisfied with the results, you may request a refund within this period by contacting our support team.
                            </p>
                        </div>
                    </section>

                    {/* Refund Processing Timeline */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>REFUND PROCESSING TIMELINE</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>Approved refunds will be processed within 48 hours.</p>
                            <p>The amount will be credited to the original payment method within 5 to 7 business days, depending on your bank or payment provider.</p>
                            <p>You can raise your refund request via our WhatsApp Support channel.</p>
                        </div>
                    </section>

                    {/* Support CTA */}
                    <section style={{ marginTop: '24px', padding: '32px', backgroundColor: '#f3f4f6', borderRadius: '12px' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>Need Support?</h2>
                        <p style={{ color: '#4b5563', marginBottom: '20px' }}>In case you need any support, please WhatsApp us.</p>
                        <a
                            href="https://wa.me/917410148196"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '10px 24px',
                                backgroundColor: '#22c55e',
                                color: 'white',
                                fontWeight: 600,
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                            }}
                        >
                            WhatsApp Us
                        </a>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
