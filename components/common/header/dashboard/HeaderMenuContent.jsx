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
      <li className="last">
        <Link
          href="/"
          className={pathname === "/" ? "ui-active" : undefined}
        >
          Home
        </Link>
      </li>

      <li className="last">
        <Link
          href="/listing-grid-v1"
          className={pathname === "/listing-grid-v1" ? "ui-active" : undefined}
        >
          サービス
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/agent-v1"
          className={pathname === "/agent-v1" ? "ui-active" : undefined}
        >
          会員一覧
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/blog"
          className={pathname === "/blog" ? "ui-active" : undefined}
        >
          ブログ
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          お問い合わせ
        </Link>
      </li>
      {/* End .dropitem */}

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
