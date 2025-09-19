import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";

const PrivacyPolicy = () => {
  return (
    <>
      <SeoMeta
        title="Privacy Policy"
        meta_title="Privacy Policy - DarkRise"
        description="Privacy Policy for DarkRise"
        image=""
      />
      
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>Privacy Policy</h1>
                <p>This is the privacy policy page for DarkRise.</p>
                
                <h2>Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
                
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services.</p>
                
                <h2>Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>
                
                <h2>Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information.</p>
                
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
