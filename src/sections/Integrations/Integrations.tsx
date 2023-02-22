import { useSelector } from 'react-redux';

import type { RootState } from '../../app/store';

import { Section, Title, Subtitle, Logos } from './Integrations.styled';
import { LogoContainer } from '../../components/LogoContainer';


const logos = ['Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5', 'Logo6', 'Logo7'];

export const Integrations = () => {

  const color = useSelector((state: RootState) => state.theme.color);

  return (
    <Section color={color}>
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
