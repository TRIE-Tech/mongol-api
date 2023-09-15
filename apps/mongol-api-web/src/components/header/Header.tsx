import { LogoIcon } from '@icons';
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

export interface HeaderProps {
  colorMode?: 'dark' | 'light';
}

const LogoAndTitle = ({ colorMode }: HeaderProps) => {
  const { spacing } = useTheme();

  return (
    <Link sx={{ cursor: 'pointer', textDecoration: 'none' }} href="/">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LogoIcon color={colorMode === 'dark' ? 'white' : 'black'} />
        <Box sx={{ marginLeft: spacing(5) }}>
          <Typography
            variant="subtitle1"
            color={colorMode === 'dark' ? 'common.white' : 'common.black'}
          >
            mongol-api
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

const HeaderLinks = ({ colorMode }: HeaderProps) => (
  <Stack direction={'row'} spacing={24}>
    <Link sx={{ cursor: 'pointer', textDecoration: 'none' }} href="/">
      <Typography
        variant="subtitle1"
        color={colorMode === 'dark' ? 'common.white' : 'common.black'}
      >
        Home
      </Typography>
    </Link>
    <Link sx={{ cursor: 'pointer', textDecoration: 'none' }} href="/docs">
      <Typography
        variant="subtitle1"
        color={colorMode === 'dark' ? 'common.white' : 'common.black'}
      >
        Docs
      </Typography>
    </Link>
    <Link
      sx={{ cursor: 'pointer', textDecoration: 'none' }}
      target="_blank"
      href="https://github.com/DuurenbayarUlz/mongol-api"
    >
      <Typography
        variant="subtitle1"
        color={colorMode === 'dark' ? 'common.white' : 'common.black'}
      >
        GitHub
      </Typography>
    </Link>
  </Stack>
);

export const Header = ({ colorMode }: HeaderProps) => {
  const { palette } = useTheme();

  return (
    <Box bgcolor={colorMode === 'dark' ? palette.primary[500] : 'common.white'}>
      <Container disableGutters sx={{ maxWidth: '1048px' }} maxWidth={false}>
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="77px"
        >
          <LogoAndTitle colorMode={colorMode} />
          <HeaderLinks colorMode={colorMode} />
        </Stack>
      </Container>
    </Box>
  );
};
