import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { List, Typography } from "antd";
import styles from "./History.module.scss";
import { useSelector } from "react-redux";

const { Text } = Typography;

const History = () => {
  const history = useSelector((state) => state.card.history);

  return (
    <div className={styles.history}>
      <Navbar />
      <div className={styles.container}>
        <div
          className={styles.list}
          style={{
            overflow: "auto",
            padding: "0 32px",
            border: "1px solid rgba(140, 140, 140, 0.35)",
          }}
        >
          <List
            dataSource={history}
            style={{
              cursor: "pointer",
            }}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<Text>{item.title}</Text>}
                  description={item.link}
                />
                <div>{item.createdAt.toLocaleString()}</div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default History;
