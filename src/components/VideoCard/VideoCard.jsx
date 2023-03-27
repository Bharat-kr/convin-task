import { Card, Checkbox } from "antd";
import styles from "./VideoCard.module.scss";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const VideoCard = ({ item }) => {
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
        <Meta title={item.title} description={item.link} />
      </Card>
    </div>
  );
};

export default VideoCard;
