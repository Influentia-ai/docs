import React, { JSX } from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

interface Props {
    category: string
    categoryId: string
}

const CommentsSection = ({ category, categoryId }: Props): JSX.Element => {
    const { colorMode: theme } = useColorMode()

    return (
        <div role="region" aria-label="Comments section">
            <h2 className="anchor" style={{ margin: '40px 0 20px' }} id="comments">
                Do you have any feedback?
                <a
                    href="#comments"
                    className="hash-link"
                    aria-label="Direct link to the comments section"
                    title="Direct link to the comments section"
                />
            </h2>

            <Giscus
                id="comments"
                repo="Influentia-ai/docs"
                repoId="R_kgDOOeouow"
                category={category}
                categoryId={categoryId}
                mapping="title"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="top"
                theme={theme === 'dark' ? 'transparent_dark' : 'light'}
                lang="en"
                loading="lazy"
            />
        </div>
    )
}

export default CommentsSection