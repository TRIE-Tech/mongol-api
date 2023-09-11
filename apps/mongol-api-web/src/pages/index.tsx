import { useTheme } from '@mui/material/styles';

const Index = () => {
  const theme = useTheme();
  return (
    <div>
      <span> Hello there, </span>
      Welcome mongol-api-web 👋
      <div>main color is: {theme.palette.primary[100]}</div>
    </div>
  );
};

export default Index;
