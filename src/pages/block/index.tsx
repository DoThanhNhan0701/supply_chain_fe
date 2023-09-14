import { Button, DatePicker } from "antd";

export default function Block() {
  return (
    <div>
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </div>
  );
}
