import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import bg from "../assets/bg.jpg";
import SubmitForm from "../component/Form";
import OpeningCard from "../component/OpeningCard";
import { useGetBranchQuery } from "../redux/features/branch/branchApi";
const Main = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetBranchQuery(id);
  return (
    <div>
      <section
        className="bg-cover bg-center min-h-screen lg:py-0 py-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto px-2 lg:px-0">
          <Row justify="center" gutter={[16, 16]}>
            <Col lg={8} md={12} sm={24} xs={24}>
              <div className="bg-[#0B835C] p-4 w-full rounded text-center text-white">
                <h5 className="text-xl font-bold">
                  Submit Your Booking Information
                </h5>
                <SubmitForm branch={id!} />
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <OpeningCard
                branchData={data?.data}
                isLoading={isLoading}
                isFetching={isFetching}
              />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Main;
