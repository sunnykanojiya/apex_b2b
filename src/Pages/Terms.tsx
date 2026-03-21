import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Terms() {
    return (
        <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-purple-100">
            <Navbar />
            <main style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '40px', textAlign: 'center', color: '#9333ea', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>TERMS OF USE</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {/* Overview */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>OVERVIEW</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>This website is operated by Apex. Throughout the site, the terms <strong>we</strong>, <strong>us</strong> and <strong>our</strong> refer to Apex.</p>
                            <p>Apex offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
                            <p>By visiting our site and/or enrolling in our program, you engage in our <strong>Service</strong> and agree to be bound by the following Terms of Use.</p>
                            <p>If you do not agree to these terms, you may not access the website or enroll in the program.</p>
                        </div>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 1 - ELIGIBILITY</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>By agreeing to these Terms, you confirm that:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>You are at least 18 years of age</li>
                                <li>You are legally capable of entering into a binding agreement</li>
                                <li>The information you provide is accurate and complete</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 2 - PROGRAM ACCESS</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>Upon successful payment, you are granted limited, non-transferable access to the enrolled program.</p>
                            <p>You may not:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Share login credentials</li>
                                <li>Record live sessions</li>
                                <li>Reproduce or redistribute course materials</li>
                                <li>Resell any part of the content</li>
                                <li>Allow third-party access</li>
                            </ul>
                            <p style={{ fontWeight: 500, color: '#0f172a' }}>Violation may result in termination of access without refund.</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 3 - INTELLECTUAL PROPERTY</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>All materials including:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Videos</li>
                                <li>Frameworks</li>
                                <li>Templates</li>
                                <li>Assignments</li>
                                <li>Automation workflows</li>
                                <li>Documents</li>
                                <li>Brand assets</li>
                            </ul>
                            <p>are the intellectual property of Apex.</p>
                            <p>You may use the materials for personal learning purposes only.</p>
                            <p style={{ fontWeight: 500, color: '#0f172a' }}>Commercial use, redistribution or unauthorized reproduction is strictly prohibited.</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 4 - LIVE SESSIONS & COMMUNITY CONDUCT</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>Participants must maintain respectful and professional behavior.</p>
                            <p>We reserve the right to remove any participant who:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Engages in abusive behavior</li>
                                <li>Disrupts sessions</li>
                                <li>Harasses others</li>
                                <li>Shares unauthorized materials</li>
                            </ul>
                            <p style={{ fontWeight: 500, color: '#0f172a' }}>Access may be revoked without refund in such cases.</p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 5 - PLACEMENT ASSISTANCE DISCLAIMER</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>Placement assistance includes:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Resume review</li>
                                <li>Portfolio guidance</li>
                                <li>Mock interviews</li>
                                <li>Application strategy support</li>
                            </ul>
                            <p>We do not guarantee employment, salary levels or job offers.</p>
                            <p>Hiring decisions are solely at the discretion of employers.</p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 6 - PAYMENTS & PRICING</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>All payments must be completed before program access is granted.</p>
                            <p>Prices may change without prior notice.</p>
                            <p>GST and applicable transaction charges are non-refundable.</p>
                            <p>Refunds, if applicable, are governed strictly by our Refund Policy, including the defined refund window and eligibility conditions.</p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 7 - MODIFICATIONS TO PROGRAM</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>We reserve the right to:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Update curriculum</li>
                                <li>Modify tools used</li>
                                <li>Change schedules</li>
                                <li>Improve content</li>
                            </ul>
                            <p>These updates are made to enhance learning quality.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 8 - THIRD-PARTY TOOLS AND SERVICES</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>The program may include access to or integration with third-party tools, software platforms and external services to support learning and practical implementation.</p>
                            <p>These tools are provided for educational and execution purposes only.</p>
                            <p>We do not control or operate these third-party platforms and are not responsible for:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Service interruptions or downtime</li>
                                <li>Changes in platform policies or pricing</li>
                                <li>Data loss or technical errors</li>
                                <li>Performance, accuracy or availability of external services</li>
                            </ul>
                            <p>Any use of third-party tools is subject to the respective provider&apos;s terms and conditions.</p>
                            <p>Participants are responsible for reviewing and complying with the policies of such third-party platforms before using them.</p>
                            <p>We are not liable for any loss, damage or disputes arising from interactions, transactions or usage of any external tools or services.</p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 9 - ACCURACY OF INFORMATION</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>We strive to provide accurate and updated information.</p>
                            <p>However, we do not guarantee that all information on the website is error-free, complete or current.</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 10 - PROHIBITED USES</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>You may not use this website or program:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>For unlawful purposes</li>
                                <li>To violate intellectual property rights</li>
                                <li>To distribute malicious code</li>
                                <li>To collect data unlawfully</li>
                                <li>To engage in fraudulent activity</li>
                            </ul>
                            <p style={{ fontWeight: 500, color: '#0f172a' }}>Violation may result in immediate termination.</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 11 - LIMITATION OF LIABILITY</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>Apex shall not be liable for:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Career outcomes</li>
                                <li>Business results</li>
                                <li>Loss of income</li>
                                <li>Technical disruptions</li>
                                <li>Employer hiring decisions</li>
                            </ul>
                            <p>Your participation and results depend on your effort and application.</p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 12 - TERMINATION</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>We reserve the right to terminate access if these Terms are violated.</p>
                            <p>Termination does not entitle the user to a refund.</p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 13 - GOVERNING LAW</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
                            <p>Any disputes shall be subject to the jurisdiction of courts in Bangalore, Karnataka.</p>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 14 - CHANGES TO TERMS</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>We reserve the right to update these Terms at any time.</p>
                            <p>Continued use of the website or program constitutes acceptance of updated terms.</p>
                        </div>
                    </section>

                    {/* Section 15 */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a', textTransform: 'uppercase' }}>SECTION 15 - CONTACT INFORMATION</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                            <p>For support or queries:</p>
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:support@salesacademy.com" style={{ color: '#9333ea', textDecoration: 'none' }}>
                                    support@salesacademy.com
                                </a>
                                <br />
                                <strong>Phone:</strong> +91 8049765241
                                <br />
                                <strong>Address:</strong> Rainmakers Workspace, J.P Nagar, 3rd Phase, Bangalore, Karnataka, India 560078
                            </p>
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
