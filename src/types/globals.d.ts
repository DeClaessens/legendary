/* eslint-disable import/export */
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.md' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import { HTMLAttributes } from 'react';

  const value: any;
  // const value: React.ComponentType<HTMLAttributes<SVGElement>>;
  export default value;
}

declare global {}

// export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
