import Image from "next/image";
import Layout from "./components/Layout";
import Play from "./components/Play";

export default function Home() {
  return (
    <Layout>
      <div className="overflow-y-scroll h-screen">
        <Play />
      </div>
    </Layout>
  );
}
