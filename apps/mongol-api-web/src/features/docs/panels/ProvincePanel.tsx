import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const ClothesRestQuery = `fetch('https://mongol-api.vercel.app/api/clothes')
.then(res => res.json())
.then(json => console.log(json))`;

export const ProvincePanel = () => {
  const { palette, spacing } = useTheme();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };
  return (
    <Stack pl={20}>
      <Stack
        bgcolor={palette.blue[200]}
        borderRadius={spacing(2)}
        position="relative"
        overflow="hidden"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`1px solid ${palette.common.white}`}
          p={5}
        >
          <Typography color="white" variant="body2">
            GraphQL / REST
          </Typography>
          <IconButton
            onClick={copyToClipboard}
            sx={{
              color: palette.common.white,
              padding: '0px',
              margin: '0px',
            }}
          >
            <FileCopyIcon />
          </IconButton>
        </Stack>

        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            padding: '20px',
            backgroundColor: palette.blue[200],
            height: '100%',
          }}
        >
          {ClothesRestQuery}
        </SyntaxHighlighter>
      </Stack>
      <Stack pt={6} borderRadius={spacing(2)} sx={{ overflow: 'hidden' }}>
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            padding: '20px',
            backgroundColor: palette.blue[200],
            height: '100%',
          }}
        >
          {ClothesRestQuery}
        </SyntaxHighlighter>
      </Stack>
      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Documentation
        </Typography>
      </Stack>
    </Stack>
  );
};
