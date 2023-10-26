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
  backgroundColor?: string;
}

const LogoAndTitle = () => {
  const { spacing } = useTheme();

  return (
    <Link sx={{ cursor: 'pointer', textDecoration: 'none' }} href="/">
      <Box sx={{ display: 'flex', alignItems: 'center' }} data-cy="Header-Logo">
        <LogoIcon />
        <Box sx={{ marginLeft: spacing(5) }}>
          <Typography variant="body2">mongol-api</Typography>
        </Box>
      </Box>
    </Link>
  );
};

const HeaderLinks = () => {
  const { palette } = useTheme();

  return (
    <Stack direction={'row'} spacing={24} zIndex="1">
      <Link sx={{ cursor: 'pointer', textDecoration: 'none' }} href="/">
        <Typography
          variant="subtitle2"
          color={palette.blue[200]}
          data-cy="Header-Home-Button"
        >
          Home
        </Typography>
      </Link>
      <Link sx={{ cursor: 'pointer', textDecoration: 'none' }} href="/docs">
        <Typography
          variant="subtitle2"
          color={palette.blue[200]}
          data-cy="Header-Docs-Button"
        >
          Docs
        </Typography>
      </Link>
      <Link
        sx={{ cursor: 'pointer', textDecoration: 'none' }}
        target="_blank"
        data-cy="Header-Github-Button"
        href="https://github.com/TRIE-Tech/mongol-api"
      >
        <Typography variant="subtitle2" color={palette.blue[200]}>
          GitHub
        </Typography>
      </Link>
    </Stack>
  );
};

export const Header = ({ backgroundColor }: HeaderProps) => {
  return (
    <Box bgcolor={backgroundColor}>
      <Container disableGutters sx={{ maxWidth: '1200px' }} maxWidth={false}>
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="60px"
        >
          <LogoAndTitle />
          <HeaderLinks />
        </Stack>
      </Container>
    </Box>
  );
};
