/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Modal } from "antd";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaUserFriends } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../component/UI/Loading";
import {
  useCanCelBookingMutation,
  useGetSingleReservationQuery,
} from "../redux/features/booking/bookingApi";

const Cancel = () => {
  const { id } = useParams();
  const { data: Bdata } = useGetSingleReservationQuery(id);
  const [cancel, { isLoading }] = useCanCelBookingMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const showCancelModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    try {
      const res = await cancel(id).unwrap();
      console.log(res);
      navigate(`/successfully-cancelled/${id}`);
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="flex flex-col">
          <Card className="flex-grow bg-[#10B981] text-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold mb-4">Reservation Details</div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-3xl" />
                <div>
                  <div className="text-2xl font-semibold">
                    Booking ID: {Bdata?.data?.bookingId}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-3xl" />
                <div className="text-xl font-semibold">
                  Date: {Bdata?.data?.date}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaClock className="text-3xl" />
                <div className="text-xl font-semibold">
                  Arrival Time: {Bdata?.data?.arrivalTime}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaUserFriends className="text-3xl" />
                <div className="text-xl font-semibold">
                  Guests: {Bdata?.data?.seats}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col">
          <Card className="flex-grow bg-[#10B981] text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Cancel Reservation</h2>
            <p className="text-lg text-gray-100 mb-6">
              Are you sure you want to cancel your reservation? This action
              cannot be undone.
            </p>
            <Button
              type="primary"
              className="bg-yellow-500 border-none text-black font-semibold text-lg h-[40px] rounded"
              onClick={showCancelModal}
            >
              Cancel Reservation
            </Button>
          </Card>
        </div>
      </div>
      <Modal
        title="Confirm Cancellation"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={isLoading ? <Loading /> : "Confirm"}
        cancelText="Cancel"
      >
        <p>Are you sure you want to cancel this reservation?</p>
      </Modal>
    </div>
  );
};

export default Cancel;
