import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="purple"
      pos={"fixed"}
      top={"4"}
      right={"4"}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={"overlay"}
      {...props}
    />
  ); 
};

export default ColorModeSwitcher;