import React from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";

export interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number | null; // null for persistent
}

interface ToastContextValue {
  push: (toast: Omit<ToastItem, "id">) => string;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const push = React.useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2, 9);
    const item: ToastItem = { id, ...toast };
    setToasts((s) => [item, ...s]);

    if (toast.duration !== null) {
      const ms = toast.duration ?? 4000;
      setTimeout(() => {
        setToasts((s) => s.filter((t) => t.id !== id));
      }, ms);
    }

    return id;
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ push, dismiss }}>
      {children}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {toasts.map((t) => (
          <Toast key={t.id} item={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const variantStyles: Record<ToastVariant, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-900",
  success: "bg-green-50 border-green-200 text-green-900",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
  error: "bg-red-50 border-red-200 text-red-900",
};

const Toast: React.FC<{ item: ToastItem; onDismiss: () => void }> = ({ item, onDismiss }) => {
  return (
    <div className={`border rounded-lg p-3 shadow ${variantStyles[item.variant ?? "info"]} max-w-sm`}>
      <div className="flex items-start gap-3">
        <div className="flex-1">
          {item.title && <div className="font-semibold">{item.title}</div>}
          {item.description && <div className="text-sm text-gray-700">{item.description}</div>}
        </div>
        <button onClick={onDismiss} className="text-current opacity-70 hover:opacity-100">✕</button>
      </div>
    </div>
  );
};

export default Toast;
