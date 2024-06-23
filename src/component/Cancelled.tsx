import { CheckCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";

const Cancelled = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-4">
      <Card className="bg-[#10B981] text-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <CheckCircleOutlined className="text-6xl mb-4" />
        <h2 className="text-3xl font-bold mb-4">Reservation Cancelled</h2>
        <p className="text-lg text-gray-100">
          Your reservation has been successfully cancelled. If you have any
          questions, please contact our support team.
        </p>
      </Card>
    </div>
  );
};

export default Cancelled;
