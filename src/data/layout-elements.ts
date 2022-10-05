import { Element } from "../classes/Element";

const layoutElements = [
  new Element("1x1", require("../assets/img/room-layouts/1x1.png")),
  new Element("4x4", require("../assets/img/room-layouts/4x4.png")),
  new Element("L-1", require("../assets/img/room-layouts/L-1.png")),
  new Element("L-2", require("../assets/img/room-layouts/L-2.png")),
  new Element("L-3", require("../assets/img/room-layouts/L-3.png")),
  new Element("L-4", require("../assets/img/room-layouts/L-4.png")),
  new Element(
    "small-horizontal-1x1",
    require("../assets/img/room-layouts/small-horizontal-1x1.png")
  ),
  new Element(
    "small-horizontal-1x2",
    require("../assets/img/room-layouts/small-horizontal-1x2.png")
  ),
  new Element(
    "small-vertical-1x1",
    require("../assets/img/room-layouts/small-vertical-1x1.png")
  ),
  new Element(
    "small-vertical-2x1",
    require("../assets/img/room-layouts/small-vertical-2x1.png")
  ),
  new Element(
    "vertical-1x2",
    require("../assets/img/room-layouts/vertical-1x2.png")
  ),
  new Element(
    "vertical-2x1",
    require("../assets/img/room-layouts/vertical-2x1.png")
  ),
];

export default layoutElements;
