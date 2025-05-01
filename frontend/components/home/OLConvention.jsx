import { Card } from "@/components/global/OlConCard";
import Container from "../global/Container";
import Tag from "../global/Tag";

const OLConvention = async () => {

  return (
    <>
      <Container parentClass="bg-white" className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Tag blue>OLConvention</Tag>
          <p className="font-semibold">
            Seminar offline dengan professional di bidang IT
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <Card  />
          <Card />
        </div>
      </Container>
    </>
  );
};

export default OLConvention;
