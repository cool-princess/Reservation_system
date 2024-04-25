import SidebarListings from "../common/seller-view/SidebarListings";
import TopFilterBar from "../common/seller-view/TopFilterBar";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import Team from "./Team";
import Pagination from "../common/blog/Pagination";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";

const index = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <PopupSignInUp />
      <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <BreadCrumb2 />
            </div>
            <div className="col-lg-6 position-relative">
              <div className="listing_list_style tal-991">
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-xl-4">
              <SidebarListings />
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <TopFilterBar />
              </div>
              <div className="row">
                <Team />
              </div>
              <div className="row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
