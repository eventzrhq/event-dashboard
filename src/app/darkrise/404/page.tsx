import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <SeoMeta
        title="404 - Page Not Found"
        meta_title="404 - Page Not Found - DarkRise"
        description="The page you are looking for could not be found"
        image=""
      />
      
      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="content">
                <h1 className="display-1 mb-4">404</h1>
                <h2 className="h1 mb-4">Page Not Found</h2>
                <p className="lead mb-5">
                  The page you are looking for might have been removed, had its name changed, 
                  or is temporarily unavailable.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                  <Link href="/darkrise" className="btn btn-primary">
                    Go to Homepage
                  </Link>
                  <Link href="/darkrise/contact" className="btn btn-outline-primary">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
