'use client'

import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import Calendar from "../CalendarSearch";
import GlobalSelectBox from "./GlobalSelectBox";
import { useRouter } from "next/navigation";
import { DateRange } from "react-date-range";

const GlobalFilter = ({ className = "" }) => {
  const router = useRouter()
  // submit handler
  const submitHandler = () => {
    router.push("/listing-grid-v1");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="キーワード"
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>利用日時</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-calendar"></span>
              </label>
            </div>
            <div className="dd_content3 dropdown-menu">
              <div className="pricing_acontent">
              <Calendar 
              />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="場所"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>価格</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                詳細検索 <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">タグ</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              検索
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
