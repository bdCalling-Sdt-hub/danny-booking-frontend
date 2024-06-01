/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps } from "antd";
import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";

import dayjs from "dayjs";
import { useMakeReservationMutation } from "../redux/features/booking/bookingApi";
import Loading from "./UI/Loading";
const SubmitForm = ({ branch }: { branch: string }) => {
  console.log(branch);
  const [postReservation, { isLoading }] = useMakeReservationMutation();
  const onFinish: FormProps<any>["onFinish"] = async (values) => {
    console.log(values);
    const data = {
      ...values,
      date: dayjs(values?.date, "YYYY-MM-DD").format("YYYY-MM-DD"),
      arrivalTime: dayjs(values?.arrivalTime, "HH:mm").format("HH:mm"),
      branch,
    };

    try {
      const res = await postReservation(data).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Row gutter={[16, 9]}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
            label="Name"
          >
            <Input size="large" type="text" placeholder="Enter your name" />
          </Form.Item>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
            label="Email"
          >
            <Input size="large" type="text" placeholder="Enter your email" />
          </Form.Item>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Form.Item label="Contact Number (optional)" name="number">
            <Input
              size="large"
              type="number"
              placeholder="Enter your contact number"
            />
          </Form.Item>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Form.Item
            label="Select Date"
            name="date"
            rules={[{ required: true, message: "Date is required" }]}
          >
            <DatePicker
              name="date"
              className="w-full"
              size="large"
              placeholder="Select date"
            />
          </Form.Item>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Form.Item label="Select Time" name="arrivalTime">
            <TimePicker
              minuteStep={15}
              format="HH:mm"
              className="w-full"
              size="large"
              placeholder="Select your time"
            />
          </Form.Item>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Form.Item label="Number of Persons" name="seats">
            <Input size="large" placeholder="Number of persons" type="Number" />
          </Form.Item>
        </Col>
      </Row>

      <Button
        className="w-full bg-[#F59533] text-white text-lg border-0 h-[40px] font-bold text-md"
        htmlType="submit"
      >
        {isLoading ? <Loading /> : "SUBMIT"}
      </Button>
    </Form>
  );
};

export default SubmitForm;
