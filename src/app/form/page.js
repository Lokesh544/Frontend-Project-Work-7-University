import PortfolioForm from "@/Veiws/Form/Form";
import dynamic from "next/dynamic";

const PortfolioFormNoSSR = dynamic(() => PortfolioForm, { ssr: false });

export default function Page() {
  return <PortfolioFormNoSSR />;
}
