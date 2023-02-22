import { Container, Title, Description, IconContainer } from "./FeatureDescription.styled";
import { MetricsIcon } from "../Icons/MetricsIcon";
import { RegistrationIcon } from "../Icons/RegistrationIcon";
import { BrandedIcon } from "../Icons/BrandedIcon";
import { AppIcon } from "../Icons/AppIcon";
import { EngagementIcon } from "../Icons/EngagementIcon";
import { CalendarIcon } from "../Icons/CalendarIcon";

export type FeatureDescriptionProps = {
    icon: string;
    title: string;
    description: string;
    color: 'light' | 'dark';
}

export const FeatureDescription = ({ icon, title, description, color }: FeatureDescriptionProps) => {

    const icons = {
        'MetricsIcon': <MetricsIcon />,
        'RegistrationIcon': <RegistrationIcon />,
        'BrandedIcon': <BrandedIcon />,
        'AppIcon': <AppIcon />,
        'EngagementIcon': <EngagementIcon />,
        'CalendarIcon': <CalendarIcon />
    }

  return (
    <Container>
        <IconContainer color={color}>
            {/* @ts-ignore */}
            {icons[icon]}
        </IconContainer>
        <div>
            <Title>{title} </Title>
            <Description>{description}</Description>
        </div>
    </Container>
  )
}
