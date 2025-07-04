// Global type declarations for Spline viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          'events-target'?: string;
          ref?: React.Ref<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }

  interface Window {
    customElements: CustomElementRegistry;
  }
}

// Module declarations for Spline tools
declare module '@splinetool/viewer' {
  export interface SplineViewer extends HTMLElement {
    url: string;
    addEventListener(type: string, listener: EventListener): void;
    removeEventListener(type: string, listener: EventListener): void;
  }
}

declare module '@splinetool/react-spline' {
  import { ComponentType } from 'react';

  interface SplineProps {
    scene: string;
    className?: string;
    style?: React.CSSProperties;
    onLoad?: () => void;
    onError?: (error: Error) => void;
  }

  const Spline: ComponentType<SplineProps>;
  export default Spline;
}

declare module '@splinetool/react-spline/next' {
  import { ComponentType } from 'react';

  interface SplineProps {
    scene: string;
    className?: string;
    style?: React.CSSProperties;
    onLoad?: () => void;
    onError?: (error: Error) => void;
  }

  const Spline: ComponentType<SplineProps>;
  export default Spline;
}

export {};

