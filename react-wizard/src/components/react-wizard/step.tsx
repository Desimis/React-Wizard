import React, { FunctionComponent, useEffect, useState } from 'react';

export const Step = ({
    children,
    transitions,
  }: any) => (
    <div className={transitions}>
        { children }
    </div>
  );