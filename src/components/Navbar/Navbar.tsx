import { StyledNavbar } from './Navbar.styled';
import { RegiMLogo } from '../Icons/RegiMLogo';
import {  Button } from '../Button';

export const Navbar = () => {
  return (
    <StyledNavbar>
        <RegiMLogo />
        <Button>
            Get Early Access
        </Button>
    </StyledNavbar>
  )
}
