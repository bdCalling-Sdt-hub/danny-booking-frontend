/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps } from "antd";
import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";

import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { toast } from "sonner";
import { useMakeReservationMutation } from "../redux/features/booking/bookingApi";
import { useGetBranchQuery } from "../redux/features/branch/branchApi";
import { setBranch } from "../redux/features/branch/branchSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getDisabledHours } from "../utils/timeDisable";
import Loading from "./UI/Loading";
const SubmitForm = ({ branch }: { branch: string }) => {
  const { data: BData } = useGetBranchQuery(branch);
  console.log(BData);
  const dispatch = useAppDispatch();
  const branchTime = useAppSelector((state) => state.branch.branch);

  const handleDateChange = (date: any) => {
    dispatch(
      setBranch({
        day: dayjs(date).format("dddd"),
        branch: BData?.data?.length > 0 ? BData?.data[0]?.schedule : {},
      })
    );
  };
  // Function to define disabled time
  const disabledTime: any = () => ({
    disabledHours: () =>
      getDisabledHours(branchTime?.openTime ?? 0, branchTime?.closeTime ?? 22),
    // disabledMinutes: (selectedHour: number) => getDisabledMinutes(selectedHour),
  });

  const [form] = useForm();
  const [postReservation, { isLoading }] = useMakeReservationMutation();
  const onFinish: FormProps<any>["onFinish"] = async (values) => {
    const data = {
      ...values,
      date: dayjs(values?.date, "YYYY-MM-DD").format("YYYY-MM-DD"),
      arrivalTime: dayjs(values?.arrivalTime, "HH:mm").format("HH:mm"),
      branch,
    };

    try {
      await postReservation(data).unwrap();
      toast.success("Your reservation has been successfully made", {
        description: "Please check your email for a confirmation message.",
      });
      form.resetFields();
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <Form onFinish={onFinish} layout="vertical" form={form}>
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
              onChange={(e) => handleDateChange(e)}
              disabledDate={(current) => {
                return (
                  dayjs().add(-1, "days") >= current ||
                  dayjs().add(2, "month") <= current
                );
              }}
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
              disabledTime={disabledTime}
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
