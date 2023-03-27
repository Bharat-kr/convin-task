import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
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
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Text strong>Name</Text>
        <Input placeholder="Jhon Doe" />
        <Text strong>Link</Text>
        <Input placeholder="http://example.com" />
        <Text strong>Type</Text>
        <br />
        <Select
          showSearch
          size="middle"
          className={styles.dropdown}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
            {
              value: "2",
              label: "Closed",
            },
            {
              value: "3",
              label: "Communicated",
            },
            {
              value: "4",
              label: "Identified",
            },
            {
              value: "5",
              label: "Resolved",
            },
            {
              value: "6",
              label: "Cancelled",
            },
          ]}
        />
      </Modal>
    </nav>
  );
};

export default Navbar;
