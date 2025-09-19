import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";

const StyleTest = () => {
  return (
    <>
      <SeoMeta
        title="Style Test - DarkRise"
        meta_title="Style Test - DarkRise"
        description="Test page to verify DarkRise styles are working"
        image=""
      />
      
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content text-center">
                <h1 className="h1">Style Test</h1>
                <p className="lead">Testing DarkRise styles and components</p>
              </div>
            </div>
          </div>
          
          {/* Test Bootstrap Grid */}
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Grid Test 1</h5>
                  <p className="card-text">This tests Bootstrap grid classes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Grid Test 2</h5>
                  <p className="card-text">Bootstrap grid should work properly.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Grid Test 3</h5>
                  <p className="card-text">All columns should be equal width.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Test Buttons */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3>Button Tests</h3>
              <div className="mt-3">
                <button className="btn btn-primary me-3 mb-3">Primary Button</button>
                <button className="btn btn-secondary me-3 mb-3">Secondary Button</button>
                <button className="btn btn-outline-primary me-3 mb-3">Outline Button</button>
                <button className="btn btn-sm btn-primary me-3 mb-3">Small Button</button>
                <button className="btn btn-lg btn-secondary mb-3">Large Button</button>
              </div>
            </div>
          </div>
          
          {/* Test Typography */}
          <div className="row mt-5">
            <div className="col-12">
              <h3>Typography Test</h3>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
              <p>Regular paragraph text with <strong>bold</strong> and <em>italic</em> styling.</p>
              <p className="lead">Lead paragraph with larger text.</p>
              <p className="text-muted">Muted text color.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StyleTest;
