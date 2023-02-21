import { Section, Title, Subtitle, ImageContainer, Image, PlayButton } from './Features.styled';
import Thumbnail from '../../images/video-thumbnail.png';

export const Features = () => {
  return (
    <Section>
        <Title>
            All-in-one Event Platform
        </Title>
        <Subtitle>Deliver an exceptional event experience</Subtitle>
        <ImageContainer>
            <Image src={Thumbnail} alt="" />
            <PlayButton >
                See it in action (2 min)
            </PlayButton>
        </ImageContainer>
    </Section>
  )
}
