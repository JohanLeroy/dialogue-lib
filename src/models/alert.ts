export interface Alert {
  type: 'success' | 'error' | 'question';
  title: string;
  text: string;
  confirmText: string;
  cancelText?: string;
  resolve: (confirmed: boolean) => void;
  timeout?: number;
  backdropOpacity?: number;
}
