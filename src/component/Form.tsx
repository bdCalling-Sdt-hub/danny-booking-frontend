/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps } from "antd";
import { Button, DatePicker, Form, Input, TimePicker } from "antd";
import { toast } from "sonner";
const SubmitForm = () => {
  const onFinish: FormProps<any>["onFinish"] = (values) => {
    console.log("Success:", values);
    toast.success("Success: Your booking request has been submitted.");
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
        label="Name"
      >
        <Input size="large" type="text" placeholder="enter your name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Email is required" }]}
        label="Email"
      >
        <Input size="large" type="text" placeholder="enter your email" />
      </Form.Item>
      <Form.Item label="Contact Number(optional)" name="number">
        <Input
          size="large"
          type="number"
          placeholder="enter your contact number"
        />
      </Form.Item>
      {/* <Form.Item label="Select Branch" name="branch">
        <Select size="large" placeholder="select branch" />
      </Form.Item> */}
      <Form.Item
        label="Select Date"
        name="date"
        rules={[{ required: true, message: "Date is required" }]}
      >
        <DatePicker className="w-full" size="large" placeholder="select date" />
      </Form.Item>
      <Form.Item label="Select Time" name="time">
        <TimePicker
          className="w-full"
          size="large"
          placeholder="select your time"
        />
      </Form.Item>
      <Form.Item label="Number of Persons" name="person">
        <Input size="large" placeholder="number of persons" />
      </Form.Item>
      <Button
        className="w-full bg-[#F59533] border-0 font-bold text-md"
        htmlType="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default SubmitForm;
