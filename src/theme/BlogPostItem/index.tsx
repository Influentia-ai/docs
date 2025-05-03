import React, {type ReactNode} from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type {WrapperProps} from '@docusaurus/types';

import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import CommentsSection from "@site/src/components/common/CommentsSection";
type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
    const { isBlogPostPage } = useBlogPost()

    return (
    <>
      <BlogPostItem {...props} />
        {isBlogPostPage && (
            <CommentsSection category="Blog Comments" categoryId="DIC_kwDOOeouo84Cprt9" />
        )}
    </>
  );
}
