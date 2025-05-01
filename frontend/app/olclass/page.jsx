
import LoadingUI from "@/app/olclass/LoadingUI";
import ContainerLarge from "@/components/global/ContainerLarge";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { Suspense } from "react";

export default function ClassSlug() {
  return (
    <>
      <Navbar variant={`white`} />
      <ContainerLarge diamonds={false} parentClass="bg-white">
        <Suspense fallback={<LoadingUI />}>
        </Suspense>
      </ContainerLarge>
      <Footer />
    </>
  );
}
