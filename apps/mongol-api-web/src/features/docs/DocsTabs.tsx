import {
  Box,
  Tab as MuiTab,
  Tabs as MuiTabs,
  Typography,
  styled,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { TABS_DATA } from './shared';
import { upperFirst } from 'lodash';

export const StyledTab = styled(MuiTab)(({ theme }) => ({
  color: '#000000',
  padding: `${theme.spacing(4)} ${theme.spacing(12)}`,
  width: '272px',
  borderRadius: '5px',
  alignItems: 'flex-start',
  textTransform: 'none',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  '&.Mui-selected': {
    color: '#3446C8',
    backgroundColor: '#EFF5FF',
    fontWeight: 700,
  },
  '&:hover': {
    backgroundColor: '#EFF5FF',
  },
}));

type TabsType = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const DocsTabs = (props: TabsType) => {
  const { value, setValue } = props;

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
        borderColor: '#D4D4D4',
        paddingX: '24px',
      }}
    >
      <Box px={12} py={4}>
        <Typography fontSize="12px" fontWeight="700" color="#D4D4D4">
          Home
        </Typography>
      </Box>
      {TABS_DATA.slice(0, 1).map(({ label, value }, index) => {
        return (
          <StyledTab
            key={index}
            label={label}
            value={value}
            data-cy={`Docs-Tabs-${upperFirst(value)}`}
          />
        );
      })}

      <Box px={12} py={4}>
        <Typography fontSize="12px" fontWeight="700" color="#D4D4D4">
          API Reference
        </Typography>
      </Box>
      {TABS_DATA.slice(1).map(({ label, value }, index) => {
        return (
          <StyledTab
            key={index}
            label={label}
            value={value}
            data-cy={`Docs-Tabs-${upperFirst(value)}`}
          />
        );
      })}
    </MuiTabs>
  );
};
