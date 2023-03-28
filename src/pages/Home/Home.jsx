import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import VideoCard from "../../components/VideoCard/VideoCard";
import styles from "./Home.module.scss";
import { FloatButton, Space, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteMultiple } from "../../redux/cards/cardActions";

const { CheckableTag } = Tag;

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCards, setSelectedCards] = useState([]);
  let cardsList = useSelector((state) => state.card.cards);
  const tagsList = useSelector((state) => state.card.buckets);
  const [selectedTags, setSelectedTags] = useState([tagsList[0]]);
  const handleChange = (tag, checked) => {
    if (checked) {
      const nextSelectedTags = checked
        ? [tag]
        : selectedTags.filter((t) => t !== tag);
      setSelectedTags(nextSelectedTags);
    }
  };

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.buckets}>
        <Space size={[0, 8]} wrap>
          {tagsList.map((tag) => (
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
          {cardsList
            .filter((item) => {
              if (selectedTags[0] === "All") {
                return true;
              } else {
                return item.bucket === selectedTags[0];
              }
            })
            .map((item, idx) => {
              return (
                <VideoCard
                  item={item}
                  key={item.title + idx}
                  setSelectedCards={setSelectedCards}
                />
              );
            })}
        </div>
      </div>
      {selectedCards.length > 0 && (
        <FloatButton
          icon={<DeleteOutlined />}
          onClick={() => {
            dispatch(deleteMultiple(selectedCards));
          }}
        />
      )}
    </div>
  );
};

export default Home;
