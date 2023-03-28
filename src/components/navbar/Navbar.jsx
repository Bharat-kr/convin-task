import { Button, Divider, Input, Modal, Select, Space } from "antd";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { createCard } from "../../redux/cards/cardActions";
import { useDispatch, useSelector } from "react-redux";

const { Text } = Typography;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let loading = useSelector((state) => state.card.loading);
  const tagsList = useSelector((state) => state.card.buckets);
  const dispatch = useDispatch();
  let index = 0;
  const [data, setData] = useState({
    title: "",
    link: "",
    bucket: "",
  });
  const [items, setItems] = useState(tagsList);

  // just adding new item
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  // just adding new item
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    dispatch(createCard(data, items));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Button type="text">Cards</Button>
      </Link>
      <Link to="/history">
        <Button type="text">History</Button>
      </Link>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={showModal}
      >
        Add Card
      </Button>
      <Modal
        title="Add a card"
        open={open}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
      >
        <Text strong>Name</Text>
        <Input
          placeholder="Jhon Doe"
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <Text strong>Link</Text>
        <Input
          placeholder="http://example.com"
          value={data.link}
          onChange={(e) => {
            setData({ ...data, link: e.target.value });
          }}
        />
        <Text strong>Type</Text>
        <br />
        <Select
          style={{
            width: 470,
          }}
          placeholder="Select Type"
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider
                style={{
                  margin: "8px 0",
                }}
              />
              <Space
                style={{
                  padding: "0 8px 4px",
                }}
              >
                <Input
                  placeholder="Please enter bucket"
                  ref={inputRef}
                  value={name}
                  onChange={onNameChange}
                />
                <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                  Add item
                </Button>
              </Space>
            </>
          )}
          options={items.slice(1).map((item) => ({
            label: item,
            value: item,
          }))}
          onSelect={(e) => setData({ ...data, bucket: e })}
        />
      </Modal>
    </nav>
  );
};

export default Navbar;
