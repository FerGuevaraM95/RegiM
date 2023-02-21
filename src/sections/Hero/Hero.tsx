import { Section, Title, SubTitle, ImageContainer, Image } from './Hero.styled';
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import Mockups from '../../images/mockups.png';


export const Hero = () => {
  return (
    <Section>
        <Title>
            Event Registration Reimagined
        </Title>
        <SubTitle>Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?</SubTitle>
        <Button>
            Get Early Access
        </Button>
        <ImageContainer>
            <Image src={Mockups} alt="Mockups" />
        </ImageContainer>
        <Divider />
    </Section>
  )
}
