import { useState } from "react"
import DraggableImage from "./DraggableImage"
import ImageSelector from "./ImageGallery"
import { Button, Card, Col, Row, Upload } from "antd"
import Flex from "components/shared-components/Flex"
const Planner = () => {
  const [images, setImages] = useState([])
  console.log(images)
  const handleSave = () => {
    const file = new Blob([JSON.stringify(images)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(file)
    const link = document.createElement("a")
    link.href = url
    link.download = "Planner.json"
    link.click()
  }
const handleLoad = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    const images = JSON.parse(e.target.result)
    setImages(images)
  }
  reader.readAsText(file)
  return false // Prevent the upload
}
  const handleDrag = (_, data) => {
    const { x, y } = data
    setImages(
      images.map((image) =>
        image.id === Number(data.node.id) ? { ...image, x, y } : image
      )
    )
  }
  const handleAdd = (src) => {
    setImages([...images, { src: src, id: Date.now(), x: 0, y: 0 }])
  }
  return (
    <Row gutter={16}>
      <Col span={10}>
        <Flex flexDirection="column">
          <ImageSelector addImage={handleAdd} />
          <Card>
            <Flex justifyContent="around">
              <Button type="primary" onClick={handleSave}>
                Сохранить
              </Button>
              <Upload beforeUpload={handleLoad} showUploadList={false}>
                <Button>Загрузить</Button>
              </Upload>
              <Button type="dashed" danger onClick={() => setImages([])}>
                Удалить все
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Col>
      <Col span={14}>
        <div
          style={{
            borderRadius: "0.625rem",
            height: "800px",
            overflow: "auto",
            background: "black",
          }}
        >
          {images.map((i) => (
            <DraggableImage
              src={i.src}
              key={i.id}
              x={i.x}
              y={i.y}
              id={i.id}
              onDrag={handleDrag}
            />
          ))}
        </div>
      </Col>
    </Row>
  )
}

export default Planner
