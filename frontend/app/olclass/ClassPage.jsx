import Tag from "@/components/global/Tag";
import UserName from "@/components/class/UserName";
import Classes from "@/components/class/Classes";
import WhatsappToast from "@/components/class/WhatsappToast";

const Class = async () => {
  return (
    <>
        <div
          className={`flex flex-col-reverse gap-4 md:flex-row md:justify-between first-letter `}
        >
          <h1 className="pb-10 text-3xl font-semibold text-custom-blue-dark sm:text-4xl">
            Halo,
            <br />
            <UserName />
          </h1>
          <WhatsappToast />
        </div>

        <Tag blue className="text-custom-blue-dark">
          OLClass
        </Tag>
        <Classes classes={classes} />
    </>
  );
};

export default Class;
