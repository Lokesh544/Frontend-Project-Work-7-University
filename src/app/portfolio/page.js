import Portfolio from "@/Veiws/Portfolio/Portfolio";
import dynamic from "next/dynamic";

const PortfolioNoSSR = dynamic(() => Portfolio, { ssr: false });

export default function Page() {
  return <PortfolioNoSSR />;
}
