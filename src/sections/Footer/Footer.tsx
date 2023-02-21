import { Button } from '../../components/Button';
import { LogoMark } from '../../components/Icons/LogoMark';
import { Container, Title, Text, ButtonContainer, LogoContainer, LogoDivider, BottomText } from './Footer.styled';

export const Footer = () => {
  return (
    <Container>
        <Title>
            Create your event with RegiM
        </Title>
        <Text>
            Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.
        </Text>
        <ButtonContainer>
            <Button>
                Get Early Access
            </Button>
        </ButtonContainer>
        <LogoContainer>
            <LogoDivider />
            <LogoMark />
            <LogoDivider />
        </LogoContainer>
        <BottomText>
           © RegiM 2022. Made with love by <span>Landify</span> 
        </BottomText>
        <BottomText>
            For further details, drop a mail to <span>hello@landify.design</span> 
        </BottomText>
    </Container>
  )
}
