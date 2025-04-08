import styled from "@emotion/styled";
import { eventColors } from "./Calendar.constanta";
import { EventType } from "./Calendar.types";

const EventDot = styled.div<{ type: EventType }>((props) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: eventColors[props.type],
}));

export default EventDot;
