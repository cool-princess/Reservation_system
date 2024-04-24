'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderMenuContent = ({ float = "" }) => {

  const pathname = usePathname();
  
  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">ログイン/新規登録</span>
        </a>
      </li>
      {/* End .dropitem */}
      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <span className="flaticon-plus"></span>
          <span className="dn-lg">サービス登録</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
