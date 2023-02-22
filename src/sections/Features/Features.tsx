import { Section, Title, Subtitle, ImageContainer, Image, PlayButton, FeaturesContainer } from './Features.styled';
import Thumbnail from '../../images/video-thumbnail.png';
import { FeatureDescription } from '../../components/FeatureDescription';
import { features } from '../../utils/Features';
import { Divider } from '../../components/Divider';

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
        <FeaturesContainer>
            { 
                features.map(({ id, icon, title, description, color }) => 
                <FeatureDescription 
                    key={id} 
                    icon={icon}  
                    title={title} 
                    description={description} 
                    color={color} 
                />)
            }
        </FeaturesContainer>
        <Divider />
    </Section>
  )
}
