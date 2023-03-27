import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import VideoCard from "../../components/VideoCard/VideoCard";
import styles from "./Home.module.scss";
import { Divider, Space, Tag } from "antd";

const { CheckableTag } = Tag;

const tagsData = ["Movies", "Books", "Music", "Sports"];

const Home = () => {
  const data = [
    {
      title: "Card title",
      link: "https://youtube.link/",
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      bucket: "entertainment",
    },
    {
      title: "Card title",
      link: "https://youtube.link/",
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      bucket: "entertainment",
    },
    {
      title: "Card title",
      link: "https://youtube.link/",
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      bucket: "",
    },
    {
      title: "Card title",
      link: "https://youtube.link/",
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      bucket: "",
    },
    {
      title: "Card title",
      link: "https://youtube.link/",
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "Card title",
      link: "https://youtube.link/",
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
  ];
  const [selectedTags, setSelectedTags] = useState(["Books"]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.buckets}>
        <Space size={[0, 8]} wrap>
          {tagsData.map((tag) => (
            <CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </Space>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          {data.map((item, idx) => {
            return <VideoCard item={item} key={item.title + idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
