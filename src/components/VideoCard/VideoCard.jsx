import {
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Modal,
  Select,
  Space,
  Typography,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./VideoCard.module.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createHistory,
  deleteCard,
  updateCard,
} from "../../redux/cards/cardActions";

const { Text } = Typography;
const { Meta } = Card;

const VideoCard = ({ item, setSelectedCards }) => {
  let loading = useSelector((state) => state.card.loading);
  const dispatch = useDispatch();
  const tagsList = useSelector((state) => state.card.buckets);
  const [items, setItems] = useState(tagsList);
  const [open, setOpen] = useState(false);
  const [openIframe, setOpenIframe] = useState(false);
  const [data, setData] = useState(item);
  const ref = useRef();

  // just adding new item
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name]);
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
    dispatch(updateCard(data.id, data));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className={styles.card}>
      <Card
        hoverable={true}
        actions={[
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedCards((prev) => [...prev, item.id]);
              } else {
                setSelectedCards((prev) => {
                  let arr = [];
                  prev.forEach((element) => {
                    if (element !== item.id) arr.push(element);
                  });
                  return arr;
                });
              }
            }}
          />,
          <EditOutlined key="edit" onClick={showModal} />,
          <DeleteOutlined
            key="delete"
            onClick={() => {
              dispatch(deleteCard(item.id));
            }}
          />,
        ]}
      >
        <Meta
          title={item.title}
          description={item.link}
          onClick={() => {
            setOpenIframe(true);
            dispatch(createHistory(item));
          }}
        />
      </Card>
      {openIframe && (
        <div
          ref={ref}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
            top: "50%",
            left: "50%",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            setOpenIframe(false);
          }}
        >
          <iframe
            width={720}
            height={450}
            style={{
              border: "none",
              borderRadius: "10px",
            }}
            title={item.title}
            src={item.link}
          />
        </div>
      )}
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
          value={data.bucket}
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
    </div>
  );
};

export default VideoCard;
