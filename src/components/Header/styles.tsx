import { styled } from '@mui/material';

const HeaderContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  top: 0,
}));

const HeaderTitle = styled('h1')(({ theme }) => ({
  background: 'linear-gradient(to right, #aaff8c, #6b95ff)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  width: 'min-content',
  margin: 'auto',
  position: 'absolute',
  whiteSpace: 'nowrap',
  marginLeft: '35%',
}));

export { HeaderContainer, HeaderTitle };
