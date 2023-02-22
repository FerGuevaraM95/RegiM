import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../slices/theme.slice';
import type { RootState } from '../../app/store'

import { StyledNavbar, RightContainer } from './Navbar.styled';
import { RegiMLogo } from '../Icons/RegiMLogo';
import {  Button } from '../Button';


export const Navbar = () => {
  
  const theme = useSelector((state: RootState) => state.theme.color)
  const dispatch = useDispatch()

  console.log({theme})

    return (
    <StyledNavbar>
        <RegiMLogo />
        <RightContainer>
          <input defaultChecked={theme === 'dark'} className="switch" type="checkbox" onClick={() => dispatch(toggleTheme())} />
          <Button >
              Get Early Access
          </Button>
        </RightContainer>
    </StyledNavbar>
  )
}
