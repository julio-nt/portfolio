import { styled } from '@mui/material';

const MainContainer = styled('div')(({ theme }) => ({
  paddingLeft: '6rem',
  paddingRight: '6rem',
  paddingTop: '4rem',
  // height: '100vh',
}));

const Title = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
}));

export { MainContainer, Title };
