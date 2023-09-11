import { useTheme } from '@mui/material/styles';
import { Header } from '@components';

const Index = () => {
  const theme = useTheme();
  return (
    <div>
      <span> Hello there, </span>
      <Header />
      Welcome mongol-api-web 👋
      <div>main color is: {theme.palette.primary[100]}</div>
    </div>
  );
};

export default Index;
