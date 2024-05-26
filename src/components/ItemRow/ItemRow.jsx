import React from "react";
import Icon from "../Icon";

import styles from "./itemRow.module.css";

function ItemRow({ iconConfig, additionalIconConfig, onRowClick, content, status }) {
  return (
    <li className={`${styles.item} ${status}-border`} onClick={onRowClick}>
      <Icon {...iconConfig} />

      <h3 className="heading-S">{content}</h3>
      {additionalIconConfig && <Icon {...additionalIconConfig} />}
    </li>
  );
}

export default ItemRow;
