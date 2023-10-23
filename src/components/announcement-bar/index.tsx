import React from 'react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { IconArrow as BaseIconArrow } from '../icons/arrow';

const IconArrow = styled(BaseIconArrow)({
  marginLeft: '.4rem',
  verticalAlign: 'middle',
  width: '1.5rem',
});

function SectionAnnouncementBar() {
  return (
    <div
      css={{
        backgroundColor: 'var(--color-1)',
        display: 'block',
        padding: '1rem 2rem',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.4rem',
        textAlign: 'center',
      }}>
      Open your senses and enjoy this moment surrounded by flowers.
    </div>
  );
}

export default SectionAnnouncementBar;
