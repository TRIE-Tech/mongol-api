import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const ClothesRestQuery = `fetch('https://mongol-api.vercel.app/api/clothes')
.then(res => res.json())
.then(json => console.log(json))`;

const ClothesRestQueryResult = `{
  "id": "1",
  "name": "Deel",
  "description": "The deel is a traditional Mongolian clothing item, usually made from silk, cotton, or wool. It has a distinctive design with a wide cut and high collar.",
  "timePeriod": "13th - 21st centuries",
  "materials": [
    "Silk",
    "Cotton",
    "Wool"
  ],
  "images": [
    "image_url_deel_1",
    "image_url_deel_2"
  ]
}`;

const clothesQueryParameters = {
  name: 'The name of the province',
  year: 'The year of the province',
  materials: 'The materials of the province',
  timePeriod: 'The time period of the province',
  description: 'The description of the province',
  images: 'The images of the province',
};

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
    <Stack pl={20} data-cy="Docs-Page-Provinces-Tab">
      <Stack
        bgcolor={palette.blue[200]}
        borderRadius={spacing(2)}
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
            data-cy="Docs-Page-Provinces-Panel-Copy-Icon-Button"
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
            borderRadius: spacing(2),
          }}
        >
          {ClothesRestQuery}
        </SyntaxHighlighter>
      </Stack>
      <Stack pt={6} borderRadius={spacing(2)} overflow="hidden">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            padding: '20px',
            backgroundColor: palette.blue[200],
            height: '100%',
            borderRadius: spacing(2),
          }}
        >
          {ClothesRestQueryResult}
        </SyntaxHighlighter>
      </Stack>
      <Stack pt={12}>
        <Typography variant="h3" color="#002762" pb={12}>
          Documentation
        </Typography>

        <TableContainer component={Paper} sx={{ borderRadius: spacing(2) }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f6f6f6' }}>
              <TableRow>
                <TableCell>Query Parameters</TableCell>
                <TableCell align="left">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(clothesQueryParameters).map(
                ([key, description]) => (
                  <TableRow
                    key={key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ color: '#3446C8' }}>
                      <Typography variant="subtitle2">{key}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography fontSize={'16px'}>{description}</Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};
