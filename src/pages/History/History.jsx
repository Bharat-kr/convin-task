import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Avatar, List } from "antd";
import { useEffect, useState } from "react";
import styles from "./History.module.scss";

const History = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
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
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default History;
