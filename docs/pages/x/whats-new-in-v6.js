import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docsx/data/whats-new-in-v6.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}