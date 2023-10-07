import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ClothesDocsData } from '../data/province';
import { DocsTable } from 'src/components/table/Table';

export const ProvincePanel = () => {
  const { palette, spacing } = useTheme();
  const [apiType, setApiType] = useState('graphql');
  const {
    ClothesRestQuery,
    ClothesRestQueryResult,
    ClothesGraphQLQuery,
    ClothesRestGraphQLResult,
    ClothesQueryParameters,
  } = ClothesDocsData;

  const copyToClipboard = async () => {
    const value = apiType === 'rest' ? ClothesRestQuery : ClothesGraphQLQuery;
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };
  return (
    <Stack pl={20}>
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
          <Box sx={{ display: 'flex' }}>
            <Typography
              variant="body2"
              color="white"
              onClick={() => setApiType('graphql')}
              sx={{
                textDecoration: apiType === 'graphql' ? 'underline' : 'none',
                cursor: 'pointer',
              }}
            >
              GraphQL
            </Typography>
            <Typography color="white" variant="body2" px={2}>
              /
            </Typography>
            <Typography
              variant="body2"
              color="white"
              onClick={() => setApiType('rest')}
              sx={{
                textDecoration: apiType === 'rest' ? 'underline' : 'none',
                cursor: 'pointer',
              }}
            >
              REST
            </Typography>
          </Box>
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
            borderRadius: spacing(2),
          }}
        >
          {apiType === 'rest' ? ClothesRestQuery : ClothesGraphQLQuery}
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
          {apiType === 'rest'
            ? ClothesRestQueryResult
            : ClothesRestGraphQLResult}
        </SyntaxHighlighter>
      </Stack>
      <Stack pt={12}>
        <Typography variant="h3" color="#002762" pb={12}>
          Documentation
        </Typography>

        <DocsTable data={ClothesQueryParameters} />
      </Stack>
    </Stack>
  );
};
