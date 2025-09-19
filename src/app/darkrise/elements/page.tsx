import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";

const Elements = () => {
  return (
    <>
      <SeoMeta
        title="Elements"
        meta_title="UI Elements - DarkRise"
        description="A collection of UI elements for DarkRise"
        image=""
      />
      
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>UI Elements</h1>
                <p>A collection of UI elements used throughout DarkRise.</p>
                
                <h2>Buttons</h2>
                <div className="mb-6">
                  <button className="btn btn-primary mr-4 mb-4">Primary Button</button>
                  <button className="btn btn-secondary mr-4 mb-4">Secondary Button</button>
                  <button className="btn btn-outline-primary mr-4 mb-4">Outline Button</button>
                </div>
                
                <h2>Cards</h2>
                <div className="row mb-6">
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <button className="btn btn-primary">Go somewhere</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Another Card</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <button className="btn btn-secondary">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2>Typography</h2>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <p>This is a paragraph with some <strong>bold text</strong> and <em>italic text</em>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Elements;
