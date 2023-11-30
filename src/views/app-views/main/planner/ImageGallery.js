import { Card, Image } from "antd"
import Flex from "components/shared-components/Flex"
import React, { useState } from "react"

const furniture = [
  {
    src: "./img/planner/1.png",
    description: "Стол на 4 места",
  },
  {
    src: "./img/planner/2.png",
    description: "Стол на 2 места",
  },
  {
    src: "./img/planner/3.png",
    description: "Круглый стол на 4 места",
  },
  {
    src: "./img/planner/4.png",
    description: "Стол на 4 места с диванами",
  },
]
const other = [
  {
    src: "./img/planner/verticalSeparator.png",
    description: "Вертикальный разделитель",
  },
  {
    src: "./img/planner/horizontalSeparator.png",
    description: "Горизонтальный разделитель",
  },
]
const tabList = [
  {
    key: "furniture",
    tab: "Столы",
  },
  {
    key: "other",
    tab: "Прочее",
  },
]
const data = {
  furniture,
  other,
}
const ImageSelector = ({ addImage }) => {
  const [activeTabKey, setActiveTabKey] = useState("furniture")
  return (
    <Card
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={(key) => setActiveTabKey(key)}
      tabProps={{
        size: "large",
      }}
    >
      <div style={{ display: "flex", overflowX: "auto", gap: "16px" }}>
        {data[activeTabKey].map((img) => (
          <Card
            key={img.src}
            onClick={() => addImage(img.src)}
            style={{
              flex: "0 0 auto",
              minWidth: "150px",
              marginBottom: "0px",
            }}
            cover={
              <Flex alignItems="center" justifyContent="center">
                <Image preview={false} src={img.src} alt="" style={{padding:"10px"}} />
              </Flex>
            }
          >
            {img.description}
          </Card>
        ))}
      </div>
    </Card>
  )
}

export default ImageSelector
