import Draggable from "react-draggable"

const DraggableImage = ({ src, x, y, id, onDrag }) => (
  <Draggable defaultPosition={{x,y}} onDrag={onDrag}>
    <img draggable={false} src={src} alt="" id={id} />
  </Draggable>
)

export default DraggableImage
