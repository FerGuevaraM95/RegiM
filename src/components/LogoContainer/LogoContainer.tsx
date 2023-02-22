import { Container } from './LogoContainer.styled';

import { Logo1 } from '../../components/Icons/Logo1';
import { Logo2 } from '../../components/Icons/Logo2';
import { Logo3 } from '../../components/Icons/Logo3';
import { Logo4 } from '../../components/Icons/Logo4';
import { Logo5 } from '../../components/Icons/Logo5';
import { Logo6 } from '../../components/Icons/Logo6';
import { Logo7 } from '../../components/Icons/Logo7';

export type LogoContainerProps ={
    name:string;
}

export const LogoContainer = ({name}: LogoContainerProps) => {

    const logosComponent = {
        'Logo1': <Logo1 />,
        'Logo2': <Logo2 />,
        'Logo3': <Logo3 />,
        'Logo4': <Logo4 />,
        'Logo5': <Logo5 />,
        'Logo6': <Logo6 />,
        'Logo7': <Logo7 />,
    }

  return (
    <Container>
      {/* @ts-ignore */}
      {logosComponent[name]}
      </Container>
  )
}
