// eslint-disable-next-line frontpro-eslint-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { CSSProperties } from 'react';

export const StyleDecorator = (style: CSSProperties) => (StoryComponent: Story) => (
    <div style={style}>
        <StoryComponent />
    </div>
);
