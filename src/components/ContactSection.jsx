import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [focused, setFocused] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Big Heading Link */}
        <a href="mailto:hello@vornix.com" className="group">
            <h2 className="text-[10vw] font-bold leading-none tracking-tighter hover:text-zinc-300 transition-colors flex items-center gap-4">
                Let's Talk
                <ArrowUpRight className="w-[8vw] h-[8vw] group-hover:rotate-45 transition-transform duration-500 text-zinc-600 group-hover:text-white" />
            </h2>
        </a>



        {/* Contact Form */}
        <div style={styles.formSection}>
          <div style={styles.formWrapper}>
            <div style={styles.formGrid}>
              {/* Name Field */}
              <div style={styles.inputGroup}>
                <label 
                  style={{
                    ...styles.label,
                    color: focused === 'name' || formData.name ? '#fff' : '#666'
                  }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  required
                  style={{
                    ...styles.input,
                    borderColor: focused === 'name' ? '#fff' : '#333'
                  }}
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div style={styles.inputGroup}>
                <label 
                  style={{
                    ...styles.label,
                    color: focused === 'email' || formData.email ? '#fff' : '#666'
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  required
                  style={{
                    ...styles.input,
                    borderColor: focused === 'email' ? '#fff' : '#333'
                  }}
                  placeholder="john@company.com"
                />
              </div>

              {/* Company Field */}
              <div style={styles.inputGroup}>
                <label 
                  style={{
                    ...styles.label,
                    color: focused === 'company' || formData.company ? '#fff' : '#666'
                  }}
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused('')}
                  style={{
                    ...styles.input,
                    borderColor: focused === 'company' ? '#fff' : '#333'
                  }}
                  placeholder="Your Company"
                />
              </div>

              {/* Message Field */}
              <div style={{...styles.inputGroup, gridColumn: '1 / -1'}}>
                <label 
                  style={{
                    ...styles.label,
                    color: focused === 'message' || formData.message ? '#fff' : '#666'
                  }}
                >
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  required
                  rows="6"
                  style={{
                    ...styles.textarea,
                    borderColor: focused === 'message' ? '#fff' : '#333'
                  }}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{
                ...styles.submitButton,
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send style={styles.sendIcon} />
                </>
              )}
            </button>
          </div>

          {/* Contact Info Sidebar */}
          <div style={styles.contactInfo}>
            <div style={styles.infoCard}>
              <h4 style={styles.infoTitle}>Email</h4>
              <a href="mailto:hello@vornix.com" style={styles.infoLink}>
                hello@vornix.com
              </a>
            </div>

            <div style={styles.infoCard}>
              <h4 style={styles.infoTitle}>Phone</h4>
              <a href="tel:+14155551234" style={styles.infoLink}>
                +1 (415) 555-1234
              </a>
            </div>

            <div style={styles.infoCard}>
              <h4 style={styles.infoTitle}>Office</h4>
              <p style={styles.infoText}>
                123 Market Street<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
};

const styles = {
  section: {
    background: '#000',
    color: '#fff',
    paddingTop: '128px',
    paddingBottom: '48px',
    paddingLeft: '24px',
    paddingRight: '24px',
    borderTop: '1px solid #27272a'
  },
  container: {
    maxWidth: '1536px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '60vh'
  },
  headingLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-block',
    transition: 'color 0.3s ease'
  },
  heading: {
    fontSize: 'clamp(60px, 10vw, 160px)',
    fontWeight: '700',
    lineHeight: '0.9',
    letterSpacing: '-0.04em',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(16px, 4vw, 64px)',
    margin: 0,
    transition: 'color 0.3s ease'
  },
  arrow: {
    width: 'clamp(40px, 8vw, 120px)',
    height: 'clamp(40px, 8vw, 120px)',
    color: '#52525b',
    transition: 'all 0.5s ease'
  },
  formSection: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '80px',
    marginTop: '96px',
    marginBottom: '96px'
  },
  formWrapper: {
    width: '100%'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    marginBottom: '32px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease'
  },
  input: {
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid',
    borderRadius: '0',
    padding: '16px 0',
    fontSize: '18px',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit'
  },
  textarea: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '2px solid',
    borderRadius: '12px',
    padding: '20px',
    fontSize: '16px',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '150px'
  },
  submitButton: {
    background: '#fff',
    color: '#000',
    border: 'none',
    padding: '20px 48px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.3s ease',
    letterSpacing: '0.5px'
  },
  sendIcon: {
    width: '20px',
    height: '20px'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  infoCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '28px',
    transition: 'all 0.3s ease'
  },
  infoTitle: {
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#666',
    marginBottom: '12px'
  },
  infoLink: {
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    display: 'block'
  },
  infoText: {
    fontSize: '16px',
    color: '#999',
    lineHeight: '1.7',
    margin: 0
  },

  locationText: {
    fontSize: '18px',
    color: '#fff',
    lineHeight: '1.6',
    margin: 0
  },
  copyright: {
    textAlign: 'right'
  },
  copyrightText: {
    color: '#52525b',
    fontSize: '14px',
    margin: 0
  }
};

export default ContactSection;