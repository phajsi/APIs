
export {};

declare global {
    interface Window {
      onSpotifyIframeApiReady: any;
    }

    interface HTMLIFrameElement {
        type?: string;
    }
  }