import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Box, IconButton, useTheme } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeSnippet = ({ value }: { value: string }) => {
  const theme = useTheme();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <IconButton
        onClick={copyToClipboard}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: theme.palette.common.white,
        }}
      >
        <FileCopyIcon />
      </IconButton>

      <SyntaxHighlighter
        language="jsx"
        style={vscDarkPlus}
        showLineNumbers={true}
        customStyle={{
          padding: '20px',
          borderRadius: '20px',
          backgroundColor: theme.palette.primary[500],
          height: '100%',
        }}
      >
        {value}
      </SyntaxHighlighter>
    </Box>
  );
};
