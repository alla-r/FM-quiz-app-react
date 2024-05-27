import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.background}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
