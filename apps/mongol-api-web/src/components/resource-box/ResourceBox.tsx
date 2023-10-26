import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type ResourcesBoxType = {
  title: string;
  href: string;
  codeSnippet: string;
};

export const ResourcesBox = (props: ResourcesBoxType) => {
  const { spacing, palette } = useTheme();
  const [isflipped, setIsFlipped] = useState(false);
  const { title, href, codeSnippet } = props;

  return (
    <Box sx={{ cursor: 'pointer' }}>
      <ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
        <Stack
          alignItems="center"
          justifyContent="center"
          onClick={() => setIsFlipped(!isflipped)}
        >
          <Stack
            bgcolor={palette.blue[100]}
            borderRadius={spacing(2)}
            height="445px"
            width="418px"
            position="relative"
            overflow="hidden"
          >
            <Image src={href} alt="" fill style={{ objectFit: 'cover' }} />
          </Stack>
          <Box pt={spacing(8)}>
            <Typography variant="subtitle1">{title}</Typography>
          </Box>
        </Stack>

        <Stack alignItems="center" onClick={() => setIsFlipped(!isflipped)}>
          <Stack
            bgcolor={palette.blue[200]}
            borderRadius={spacing(2)}
            height="445px"
            width="418px"
            position="relative"
            overflow="hidden"
            padding={spacing(8)}
          >
            <Typography color="white">{title}</Typography>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              customStyle={{
                marginTop: '20px',
                padding: '0px',
                backgroundColor: palette.blue[200],
                height: '100%',
              }}
            >
              {codeSnippet}
            </SyntaxHighlighter>
          </Stack>
          <Box pt={spacing(8)}>
            <Typography variant="subtitle1">Rest API</Typography>
          </Box>
        </Stack>
      </ReactCardFlip>
    </Box>
  );
};
