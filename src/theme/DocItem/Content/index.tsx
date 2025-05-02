import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import CommentsSection from "@site/src/components/common/CommentsSection";
import {useDoc, useDocsData} from '@docusaurus/plugin-content-docs/client'


type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
    const {metadata} = useDoc()
    console.log(useDoc())
    const pluginId = 'system-design';
    const customDocsData = useDocsData(pluginId);
    const isSystemDesign = customDocsData && metadata?.permalink?.startsWith(customDocsData.path);
    return (
        <>
            <Content {...props} />
            {isSystemDesign && (<CommentsSection category="System Design Comments" categoryId="DIC_kwDOOeouo84Cprt2"/>)}
        </>
    );
}
