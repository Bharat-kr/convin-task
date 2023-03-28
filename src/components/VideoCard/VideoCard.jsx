import { Card, Checkbox } from "antd";
import styles from "./VideoCard.module.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import useOutsideClickHandler from "../../utils/useOutsideClickHandler";

const { Meta } = Card;

const VideoCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOutsideClickHandler(
    ref,
    () => {
      setOpen(false);
    },
    false
  );
  return (
    <div className={styles.card}>
      <Card
        hoverable={true}
        actions={[
          <Checkbox />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <Meta
          title={item.title}
          description={item.link}
          onClick={() => setOpen(true)}
        />
      </Card>
      {open && (
        <iframe
          ref={ref}
          width={630}
          height={450}
          style={{
            position: "fixed",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            border: "none",
          }}
          title={item.title}
          src={item.link}
        />
      )}
    </div>
  );
};

export default VideoCard;
