import { Nav } from "react-bootstrap";
import styles from '@/styles/components/Nav.module.css'
import Image from "next/image";

import sicoobIcon from "../../../public/icon.png"

function NavTotem() {
  return (
    <div className={styles.main}>
      <Nav className={styles.nav} variant="pills" defaultActiveKey="/home">
        <Image 
        src={sicoobIcon} 
        width={100}
        height={100}
        alt="Sicoob Icon"
        style={{}}
        />
        <h1>SICOOB</h1>

          
      </Nav>
    </div>

  );
}

export default NavTotem;