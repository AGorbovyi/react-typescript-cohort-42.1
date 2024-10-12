import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "сonstants/routes";
import { FareLogix_logo, HH_logo, LH_logo } from "assets";

import Button from "components/Button/Button";

import {
  PageWrapper,
  PageTitle,
  Main,
  Client,
  Logo,
  BlockTitle,
  BlockText,
} from "./styles";

function Clients() {

  const fireLogix = {
    name: "FireLogix",
    title: "FireLogix",
    description:
      "We are BERlogic GmbH is proud to receive a Preferred Partner certification from Farelogix. This recognition is proof of expertise in travel technology area. Delivering a high quality perfiormance of our API connectors, and prompt partner support is what outstands BERlogic on the in the travel technology market.",
    logoUrl: FareLogix_logo,
    pageUrl: APP_ROUTES.FARELOGIX,
  };

  const hitchHiker = {
    name: "HitchHiker",
    title: "HitchHiker",
    description:
      "HitchHiker GmbH is proud to announce the launch of a new strategic partnership with fulfillment provider to offer a high-quality access for HitchHiker partner-agencies.",
    logoUrl: HH_logo,
    pageUrl: APP_ROUTES.HITCHHIKER,
  };

  const lufthansa = {
    name: "Lufthansa",
    title: "Lufthansa",
    description:
      "We are proud to announce the launch a new strategic partnership with Lufthansa via Direct Connect technology. This partnership results of exclusive technical integrator for Lufthansa Group Inventory.",
    logoUrl: LH_logo,
    pageUrl: APP_ROUTES.LUFTHANSA,
  };

  const navigate = useNavigate();

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
    </PageWrapper>
  );
}

export default Clients;
