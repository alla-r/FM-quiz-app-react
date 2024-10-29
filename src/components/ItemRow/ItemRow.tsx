import Icon from "../Icon";
import { IconConfig } from "../../types";

import styles from "./itemRow.module.css";

type ItemRowProps = {
  iconConfig: IconConfig;
  additionalIconConfig?: IconConfig;
  onRowClick: () => void;
  content: string;
  status?: string;
};

function ItemRow({
  iconConfig,
  additionalIconConfig,
  onRowClick,
  content,
  status,
}: ItemRowProps) {
  const statusActiveBorder = ["success", "error"];

  const borderClass = `${status && statusActiveBorder.find((el) => el === status) ? status + "-" : ""}border`;

  return (
    <li className={`${styles.item} ${borderClass}`} onClick={onRowClick}>
      <Icon {...iconConfig} />

      <h3 className="heading-S">{content}</h3>
      {additionalIconConfig && <Icon {...additionalIconConfig} />}
    </li>
  );
}

export default ItemRow;
