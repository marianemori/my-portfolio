
import { WorkCardProps } from "../components/WorkCard";
import IncontreLogo from "../assets/incontre-logo.png";
import CardMaisLogo from "../assets/card-logo.png";
import TecfinLogo from "../assets/tecfin-logo.png";
import IncontreEntregadorLogo from "../assets/incontre-entregador-logo.jpg";
import TimLogo from "../assets/tim-logo.jpeg";

export const workList: WorkCardProps[] = [
  {
    imageSrc: CardMaisLogo.src,
    title: "CardMais",
    description:
      "App em Flutter. Carteira digital, recargas e pagamento de contas. Grupo Card",
    link: "https://play.google.com/store/apps/details?id=br.com.grupocard.contacard&hl=pt&gl=US",
    alt: "App Card Mais",
  },
  {
    imageSrc: CardMaisLogo.src,
    title: "CardMais POS",
    description:
      "App em Flutter. Usado na maquininha de cartão POS. Grupo Card",
    link: "",
    alt: "App Card Mais POS",
  },
  {
    imageSrc: TecfinLogo.src,
    title: "TecFin",
    description: "App em Flutter. Empréstimos, prorrogação de boletos. Grupo Card",
    link: "https://play.google.com/store/apps/details?id=br.com.grupocard.tecfin&hl=pt_BR&gl=US",
    alt: "App Tecfin",
  },
  {
    imageSrc: TimLogo.src,
    title: "Tim + Vendas",
    description: "App em Flutter. Venda de chips pré-pagos e recargas da TIM. Rede Tendência",
    link: "https://apps.apple.com/br/app/tim-vendas/id1582238726",
    alt: "App Tim",
  },
  {
    imageSrc: IncontreLogo.src,
    title: "Incontre",
    description: "App em React Native. Delivery, carteira digital, e recargas. Rede Tendência",
    link: "https://play.google.com/store/apps/details?id=com.incontre&hl=pt_BR&gl=US",
    alt: "App Incontre",
  },
  {
    imageSrc: IncontreEntregadorLogo.src,
    title: "Incontre Entregador",
    description: "App em React Native. Para o motorista do delivery. Rede Tendência",
    link: "https://appadvice.com/app/incontre-entregador/1571319198",
    alt: "App Incontre Entregador",
  },
];
