import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "сonstants/routes";

import Button from "components/Button/Button";

import {
  PageWrapper,
  PageTitle,
  Main,
  Client,
  Logo,
  BlockTitle,
  BlockText,
  ButtonControl,
} from "./styles";

function Clients() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const fireLogix = {
    name: "FireLogix",
    title: "Simpson",
    description: "We are BERlogic GmbH is proud to receive a Preferred Partner certification from Farelogix. This recognition is proof of expertise in travel technology area. Delivering a high quality perfiormance of our API connectors, and prompt partner support is what outstands BERlogic on the in the travel technology market.",
    // logoUrl: "./images/FareLogix_logo.png",
    logoUrl: "https://www.berlogic.de/pr/images/tild3066-3034-4463-a465-623065366637__badge.png",
    pageUrl: "./FireLogix/FireLogix.tsx",
  };

  const hitchHiker = {
    name: "HitchHiker",
    title: "HitchHiker",
    description: "HitchHiker GmbH is proud to announce the launch of a new strategic partnership with fulfillment provider to offer a high-quality access for HitchHiker partner-agencies.",
    // logoUrl: "./images/HH_logo.png",
    logoUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdpqAYN1xSTccQ0SRx7p7pel7VRxFWMAx8UQaTK2pQhTh2v5cn",
    pageUrl: "./HitchHiker/HitchHiker.tsx",
  };

  const lufthansa = {
    name: "Lufthansa",
    title: "Lufthansa",
    description: "We are proud to announce the launch a new strategic partnership with Lufthansa via Direct Connect technology. This partnership results of exclusive technical integrator for Lufthansa Group Inventory.",
    logoUrl:
      "https://banner2.cleanpng.com/20180806/vey/f2978465d3c3fc7949e6b3ae420f5bd1.webp",
    pageUrl: "./Lufthansa/Luftnsa.tsx",
  };

  const goToFireLogixPage = () => {
    navigate(fireLogix.pageUrl);
  };

  const goToHitchHikerPage = () => {
    navigate(hitchHiker.pageUrl);
  };
  const goToLufhansaPage = () => {
    navigate(lufthansa.pageUrl);
  };

  return (
    <PageWrapper>
      <PageTitle>Clients</PageTitle>
      <Main>
        <Client onClick={goToFireLogixPage}>
          <Logo src={fireLogix.logoUrl} alt={fireLogix.name + " Logo"} />
          <BlockTitle>{fireLogix.title}</BlockTitle>
          <BlockText>{fireLogix.description}</BlockText>
        </Client>
        <Client onClick={goToHitchHikerPage}>
          <Logo src={hitchHiker.logoUrl} alt={hitchHiker.name + " Logo"} />
          <BlockTitle>{hitchHiker.title}</BlockTitle>
          <BlockText>{hitchHiker.description}</BlockText>
        </Client>
        <Client onClick={goToLufhansaPage}>
          <Logo src={lufthansa.logoUrl} alt={lufthansa.name + " Logo"} />
          <BlockTitle>{lufthansa.title}</BlockTitle>
          <BlockText>{lufthansa.description}</BlockText>
        </Client>
      </Main>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Clients;
