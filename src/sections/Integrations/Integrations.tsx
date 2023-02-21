import { Section, Title, Subtitle, Logos } from './Integrations.styled';
import { LogoContainer } from '../../components/LogoContainer';


const logos = ['Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5', 'Logo6', 'Logo7'];

export const Integrations = () => {

  return (
    <Section>
        <div>
            <Title>
                Integrate with your favorite tools
            </Title>
            <Subtitle>Connect RegiM with your most favorite sales and marketing tools</Subtitle>
        </div>
        <Logos>
            {
               logos.map(logo => (
                <LogoContainer key={logo} name={logo} />
               )) 
            }
        </Logos>
    </Section>
  )
}
