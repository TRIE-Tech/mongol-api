import {
  Box,
  Tab as MuiTab,
  Tabs as MuiTabs,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { TABS_DATA } from './shared';

export const StyledTab = styled(MuiTab)(({ theme }) => ({
  color: theme.palette.secondary[500],
  backgroundColor: theme.palette.common.white,
  padding: `${theme.spacing(4)} ${theme.spacing(12)}`,
  width: '310px',
  borderRadius: '5px',
  alignItems: 'flex-start',
  textTransform: 'none',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '28.63px',
  '&.Mui-selected': {
    color: theme.palette.secondary[100],
    backgroundColor: theme.palette.primary[500],
  },
}));

type TabsType = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const DocsTabs = (props: TabsType) => {
  const { value, setValue } = props;
  const { palette } = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <MuiTabs
      orientation="vertical"
      value={value}
      TabIndicatorProps={{
        style: { display: 'none' },
      }}
      onChange={handleChange}
      sx={{
        borderRight: 1,
        borderColor: palette.secondary[300],
        paddingRight: '16px',
        paddingTop: '8px',
      }}
    >
      {TABS_DATA.slice(0, 1).map(({ label, value }, index) => {
        return <StyledTab key={index} label={label} value={value} />;
      })}

      <Box display="flex" justifyContent="center" px={6}>
        <Typography variant="h1" fontSize="36px">
          Requests
        </Typography>
      </Box>
      {TABS_DATA.slice(1).map(({ label, value }, index) => {
        return <StyledTab key={index} label={label} value={value} />;
      })}
    </MuiTabs>
  );
};
